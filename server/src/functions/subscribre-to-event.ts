import { subscriptions } from "../drizzle/schema/subscriptions";
import { db } from "../drizzle/client";

interface SubscribreToEventParams {
  name: string;
  email: string;
}

export async function subscribreToEvent(params: SubscribreToEventParams) {
  const result = await db
    .insert(subscriptions)
    .values({
      name: params.name,
      email: params.email,
    })
    .returning();

  return {
    subscriberId: result[0].id,
  };
}
