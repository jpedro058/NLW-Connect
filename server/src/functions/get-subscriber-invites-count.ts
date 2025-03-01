import { redis } from "../redis/client";

interface SubscribrerInvitesCountParams {
  subscriberId: string;
}

export async function getSubcriberInvitesCount({
  subscriberId,
}: SubscribrerInvitesCountParams) {
  const count = await redis.zscore("referral:ranking", subscriberId);

  return {
    clicks: count ? Number.parseInt(count) : 0,
  };
}
