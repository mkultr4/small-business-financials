import { atom } from 'recoil';
import { User } from '../api/types';
import { user } from '../data/user';

export const currentUserAtom = atom<User>({
    key: 'User',
    default: user
});
