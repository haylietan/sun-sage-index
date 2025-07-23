// src/app/(api)/api/graphql/route.ts

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
// import { PrismaClient } from '@/generated/prisma'; // adjust path if needed
import { PrismaClient } from '@/components/generated/prisma';



const prisma = new PrismaClient();

// Define GraphQL type definitions
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

// Define resolvers
const resolvers = {
  Query: {
    sunscreens: async () => {
      return prisma.sunscreen.findMany();
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create handler with context
const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma }),
});

// Export GET and POST handlers
export async function POST(request: NextRequest, context: any) {
  return handler(request, context);
}

export async function GET(request: NextRequest, context: any) {
  return handler(request, context);
}
