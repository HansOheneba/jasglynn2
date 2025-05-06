import pool from '../db';
import fs from 'fs';
import path from 'path';

interface InitializationResult {
  success: boolean;
  error?: string;
}

export async function initializeDatabase(): Promise<InitializationResult> {
  try {
    const schemaFilePath = path.join(process.cwd(), 'src', 'lib', 'schema', 'booking.sql');
    const schema = fs.readFileSync(schemaFilePath, 'utf8');
    
    // Split SQL statements by semicolon
    const queries = schema
      .split(';')
      .filter(query => query.trim() !== '')
      .map(query => query + ';');
    
    const connection = await pool.getConnection();
    
    for (const query of queries) {
      await connection.query(query);
    }
    
    connection.release();
    
    console.log('Database tables initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing database tables:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error initializing database'
    };
  }
}