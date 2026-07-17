import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const participations = sqliteTable("participations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  sector: text("sector").notNull(),
  role: text("role").notNull(),
  availability: text("availability").notNull().default(""),
  consent: integer("consent", { mode: "boolean" }).notNull(),
  status: text("status").notNull().default("nuevo"),
  source: text("source").notNull().default("web"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

