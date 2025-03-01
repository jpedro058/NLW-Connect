import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubcriberInvitesCount } from "../functions/get-subscriber-invites-count";

export const getSubcriberInviteCountRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invite count",
        tags: ["ranking"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { clicks } = await getSubcriberInvitesCount({
        subscriberId,
      });

      return { count: clicks };
    }
  );
};
