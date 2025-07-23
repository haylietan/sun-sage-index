// src/app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/components/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Test database connection
    const count = await prisma.sunscreen.count();
    
    return NextResponse.json({ 
      success: true, 
      count,
      message: `Database connected! Found ${count} sunscreens.`
    });
  } catch (error) {
    console.error('Database connection error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}