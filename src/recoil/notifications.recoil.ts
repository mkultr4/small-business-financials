import { atom } from 'recoil';
import { Notification } from '../api/types';
import { NOTIFICATIONS } from '../data/notifications';


export const notificationsAtom = atom<Notification[]>({
    key: 'Notifications',
    default: NOTIFICATIONS
});
