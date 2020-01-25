import mongoose from 'mongoose';

const NotificationsSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    user: { type: Number, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Notification', NotificationsSchema);