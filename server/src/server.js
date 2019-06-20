import express from "express";
import {ApolloServer} from "apollo-server-express";
import morgan from "morgan";
import merge from "lodash.merge";
// Graphql
import typeDefs from "./schema/";
import categories from "./resolvers/categories";
import templates from "./resolvers/templates";
import presentations from "./resolvers/presentations";
import user from "./resolvers/user";

const server = new ApolloServer({
  typeDefs,
  resolvers: merge(categories, templates, presentations, user),
  engine: {
    apiKey: "service:piratefresh-9141:cjxsYMUckOlvppJ06gVg9A"
  }
});

const app = express();
/* Logger */
app.use(morgan("dev"));

server.applyMiddleware({app}); // app is from an existing express app

app.listen({port: 4000}, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
