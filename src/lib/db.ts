// src/lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { seedDatabase } from './dummy'; // <-- IMPORT LANGSUNG DI SINI

const DB_FILENAME = "kaluna.db";
// Gunakan /tmp di Vercel karena filesystem root bersifat Read-Only
const isVercel = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
const dbPath = isVercel ? path.join("/tmp", DB_FILENAME) : path.join(process.cwd(), DB_FILENAME);


declare global {
  var __db: Database.Database | undefined;
}

const initDb = () => {
  console.log("Inisialisasi koneksi database di:", dbPath);
  const dbInstance = new Database(dbPath, {
    verbose: console.log,
  });

  dbInstance.pragma('journal_mode = WAL');

  dbInstance.exec(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT,
      content_json TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS works (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client TEXT,          
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      desc TEXT,            
      category TEXT,        
      images TEXT NOT NULL,
      content_json TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS team_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      position TEXT NOT NULL,
      image_url TEXT,
      linkedin_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_name TEXT NOT NULL,
      role TEXT,
      company_name TEXT,
      content TEXT NOT NULL,
      avatar_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_name TEXT NOT NULL,
      company_name TEXT,
      sender_email TEXT NOT NULL,
      phone_number TEXT,
      service_interest TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'unread',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // JALANKAN SEEDING SECARA SYNCHRONOUS DI SINI
  // Proses akan terkunci sampai semua data masuk, sehingga tidak akan ada Error 500 lagi.
  seedDatabase(dbInstance);

  return dbInstance;
};

// 3. INISIALISASI INSTANSI GLOBAL
const db = globalThis.__db ?? initDb();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__db = db;
}

export default db;