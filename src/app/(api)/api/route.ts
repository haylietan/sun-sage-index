import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

const typeDefs = gql`
  type Sunscreen {
    id: String!
    name: String!
    brand: String!
    spf: Int!
    description: String
    imageUrl: String
    tag: [String!]!
    skinType: [String!]!
    finish: String!
    isReefSafe: Boolean!
    isWaterResistant: Boolean!
    rating: Float
  }

  type Query {
    sunscreens: [Sunscreen!]!
  }
`;

const resolvers = {
  Query: {
    sunscreens: async () => {
      return prisma.sunscreen.findMany();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
