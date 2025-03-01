import { redis } from "../redis/client";

interface SubscribrerInviteClicksParams {
  subscriberId: string;
}

export async function getSubcriberInviteClicks({
  subscriberId,
}: SubscribrerInviteClicksParams) {
  const count = await redis.hget("referral:access-count", subscriberId);

  return {
    clicks: count ? Number.parseInt(count) : 0,
  };
}
