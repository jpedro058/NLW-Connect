import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { env } from "./env";
import { subscribeToEventRoute } from "./routes/subscribe-to-event-route";
import { accessInviteLinkRoute } from "./routes/access-invite-link";
import { getSubcriberInviteClicksRoute } from "./routes/get-subscriber-invite-clicks-route";
import { getSubcriberInviteCountRoute } from "./routes/get-subscriber-invites-count-route";
import { getSubcriberRankingPositionRoute } from "./routes/get-subscriber-ranking-position-route";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW Connect",
      version: "0.1.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubcriberInviteClicksRoute);
app.register(getSubcriberInviteCountRoute);
app.register(getSubcriberRankingPositionRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log("Server is running on port 3333");
});
