import { selector } from 'recoil';
import { Series } from '../api/types';
import { getTotalSpent, getWeeklyRevenue } from '../api/api';


export const totalSpentSelector = selector<Series[]>({
    key: 'TotalSpent',
    get: async ({ get }) => {
        const series = await getTotalSpent();
        return series;
    }
});

export const weeklyRevenueSelector = selector<Series[]>({
    key: 'WeeklyRevenue',
    get: async ({ get }) => {
        const series = await getWeeklyRevenue();
        return series;
    }
});
