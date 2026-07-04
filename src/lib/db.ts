// src/lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';

// Database akan disimpan di root folder proyek dengan nama kaluna.db
const dbPath = path.join(process.cwd(), 'kaluna.db');

// Inisialisasi koneksi
const db = new Database(dbPath);

// Optimasi performa SQLite (Write-Ahead Logging)
db.pragma('journal_mode = WAL');

// Eksekusi skema tabel (Hanya dibuat jika belum ada)
db.exec(`
  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS works (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client TEXT,          -- Tambahkan ini
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    desc TEXT,            -- Tambahkan ini (ganti category menjadi desc jika perlu)
    category TEXT,        -- Tetap biarkan jika masih dipakai di tempat lain
    image_url TEXT NOT NULL,
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
    sender_email TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS team_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    position TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;