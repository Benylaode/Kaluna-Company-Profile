import Database from "better-sqlite3";

declare global {
  // eslint-disable-next-line no-var
  var __db: Database | undefined;
}

export {};