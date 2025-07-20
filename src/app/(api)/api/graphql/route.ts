import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { PrismaClient } from '@/generated/prisma';

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
    sunscreens(keyword: String): [Sunscreen!]!
  }
`;

const resolvers = {
  Query: {
    sunscreens: async (_parent: any, args: { keyword?: string }) => {
      if (args.keyword) {
        return prisma.sunscreen.findMany({
          where: {
            OR: [
              { name: { contains: args.keyword, mode: 'insensitive' } },
              { brand: { contains: args.keyword, mode: 'insensitive' } },
              { tag: { hasSome: [args.keyword.toLowerCase()] } },
            ],
          },
        });
      }
      return prisma.sunscreen.findMany();
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
