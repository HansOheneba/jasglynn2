import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/schema/init-db';

export async function GET() {
  try {
    const result = await initializeDatabase();
    
    if (result.success) {
      return NextResponse.json({ message: 'Database initialized successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: result.error || 'Unknown error' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in test-db route:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
