import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { subscribreToEvent } from "../functions/subscribre-to-event";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribe to an event",
        tags: ["subscriptions"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;

      const { subscriberId } = await subscribreToEvent({
        name,
        email,
        referrerId: referrer,
      });

      return reply.code(201).send({
        subscriberId,
      });
    }
  );
};
