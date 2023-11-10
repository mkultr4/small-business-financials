import { lineChartDataTotalSpent } from '../data/charts';
import { statistics } from '../data/statistics';

import { Series, Statistic, } from './types';

const simulateAsyncOperation = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async operation completed');
        }, 2000); // Simulate a 2-second delay
    });
};

export const getStatistics = async (): Promise<Statistic[]> => {
    await simulateAsyncOperation();
    return statistics;
};

export const getTotalSpent = async (): Promise<Series[]> => {
    await simulateAsyncOperation();
    return lineChartDataTotalSpent;
};
export const getWeeklyRevenue = async (): Promise<Series[]> => {
    await simulateAsyncOperation();
    return lineChartDataTotalSpent;
};