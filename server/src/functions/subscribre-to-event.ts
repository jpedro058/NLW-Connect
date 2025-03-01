import { subscriptions } from "../drizzle/schema/subscriptions";
import { db } from "../drizzle/client";
import { eq } from "drizzle-orm";
import { redis } from "../redis/client";

interface SubscribreToEventParams {
  name: string;
  email: string;
  referrerId?: string | null;
}

export async function subscribreToEvent({
  name,
  email,
  referrerId,
}: SubscribreToEventParams) {
  const existingSubscriber = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email));

  if (existingSubscriber.length > 0) {
    return {
      subscriberId: existingSubscriber[0].id,
    };
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name: name,
      email: email,
    })
    .returning();

  if (referrerId) {
    await redis.zincrby("referral:ranking", 1, referrerId);
  }

  const subscriber = result[0];

  return {
    subscriberId: subscriber.id,
  };
}
