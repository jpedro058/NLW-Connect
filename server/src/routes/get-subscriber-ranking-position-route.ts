import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubcriberInvitesCount } from "../functions/get-subscriber-invites-count";
import { getSubscriberRankingPosition } from "../functions/get-subscriber-ranking-position";

export const getSubcriberRankingPositionRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Get subscriber ranking position",
        tags: ["ranking"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            position: z.number().nullable(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { position } = await getSubscriberRankingPosition({
        subscriberId,
      });

      return { position };
    }
  );
};
