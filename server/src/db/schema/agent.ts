import { pgTable, varchar, text, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./auth-schema";

export const agents = pgTable("agent", {
  id: serial().primaryKey(),
  agent_type: varchar().notNull(),
  agent_name: varchar().notNull(),
  agent_description: text().notNull(),
  userId: text("userId"),
});

export const userRelations = relations(user, ({ many }) => ({
	agents: many(agents),
}));


export const agentsRelations = relations(agents, ({ one }) => ({
	user: one(user, {
		fields: [agents.userId],
		references: [user.id],
	}),
}));

