import {Schema, model} from 'mongoose';
import {INotifications} from '../types/INotification';
import Joi from 'joi';

const notificationsSchema = new Schema<INotifications>({
  userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  notifications: [
    {
      viewed: {type: Boolean, default: false},
      message: {type: String, required: true},
      addedAt: {type: Date, default: Date.now},
    },
  ],
});

const validateNotifications = (notificationsData: any) => {
    return Joi.object({
        userId: Joi.string().required(),
        notifications: Joi.array().items(
        Joi.object({
            viewed: Joi.boolean().default(false),
            message: Joi.string().required(),
            addedAt: Joi.date().default(Date.now),
        }),
        ),
    }).validate(notificationsData);
}

const Notifications = model<INotifications>('Notifications', notificationsSchema);

export {validateNotifications, Notifications};