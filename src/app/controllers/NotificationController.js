import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    /**
     * Check is provider_id is a provider
     */

    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider)
      return res.status(401).json({ error: 'Only can load Notifications' });

    const notifications = await Notification.find({ user: req.userId })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    console.log('chamou', req.params.id);
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log('Something wrong when updating data!');
        }

        console.log(doc);
      }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
