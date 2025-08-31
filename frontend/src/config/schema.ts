import {
  date,
  integer,
  pgTable,
  serial,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

export const bookignStatusEnum = pgEnum("booking_status", [
  "pending",
  "approved",
  "rejected",
]);

export const Users = pgTable("users", {
  id: varchar("Id", { length: 50 }).primaryKey(),
  name: varchar("Name", { length: 50 }).notNull(),
  email: varchar("Email", { length: 50 }).notNull(),
  password: varchar("Password", { length: 150 }).notNull(),
});

export const Bookings = pgTable("bookings", {
  id: serial("Id").primaryKey(),
  name: varchar("Name", { length: 50 }).notNull(),
  user: varchar()
    .notNull()
    .references(() => Users.id),
  bookingDate: date("Date").notNull(),
  startDate: date("StartDate").notNull(),
  price: integer("Price").notNull(),
  people: integer("People").notNull(),
  days: integer("Days").notNull(),
  placeList: varchar("PlaceList", { length: 500 }),
  status: bookignStatusEnum("Status").default("pending"),
  paymentStatus: varchar("PaymentStatus", { length: 50 }).notNull(),
});

export const Queries = pgTable("queries", {
  id: serial("Id").primaryKey(),
  name: varchar("Name", { length: 50 }).notNull(),
  email: varchar("Email", { length: 50 }).notNull(),
  message: varchar("Message", { length: 50 }).notNull(),
});
