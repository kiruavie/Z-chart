import { Document, model, Schema, Types } from "mongoose";

export interface IConversation extends Document {
  participants: Types.ObjectId[]; // references aux utilisateurs
  lastMessageAt?: Date;
}

const conversationSchema = new Schema<IConversation>(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    lastMessageAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

export const Conversation = model<IConversation>(
  "Conversation",
  conversationSchema
);
