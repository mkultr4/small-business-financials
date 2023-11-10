import { selector } from 'recoil';
import { Statistic } from '../api/types';
import { getStatistics } from '../api/api';


export const statisticsSelector = selector<Statistic[]>({
    key: 'Statistics',
    get: async ({ get }) => {
        const statistics = await getStatistics();
        return statistics;
    }
});
