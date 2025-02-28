import { subscriptions } from "../drizzle/schema/subscriptions";
import { db } from "../drizzle/client";
import { redis } from "../redis/client";

interface accessInviteLinkParams {
  subscriberId: string;
}

export async function accessInviteLink(params: accessInviteLinkParams) {
  await redis.hincrby("referral:access-count", params.subscriberId, 1);
}
