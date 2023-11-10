export interface User {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface Notification {
    title: string;
}
export type StatisticName = 'Earnings' | 'Clients' | 'Sales' | 'Balance' | 'Tasks' | 'Projects';
export interface Statistic {
    name: StatisticName;
    value: number;
    growth?: number;
}


export interface Series {
    name: string;
    data: number[];
}