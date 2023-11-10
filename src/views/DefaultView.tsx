import React, { Suspense } from "react";

// chakra imports
import { Box, SimpleGrid } from '@chakra-ui/react';

// custom components
import TotalSpent from '../components/dashboard/TotalSpent';
import WeeklyRevenue from '../components/dashboard/WeeklyRevenue';
import CheckTable from '../components/dashboard/CheckTable';
import DailyTraffic from '../components/dashboard/DailyTraffic';
import PieCard from '../components/dashboard/PieCard';
import Tasks from '../components/dashboard/Tasks';
import MiniCalendar from '../components/calendar/MiniCalendar';
import ListStatistics from '../components/dashboard/ListStatistics';
import ListStatisticsSkeleton from '../components/skeletons/ListStatisticsSkeleton';
import ChartSkeleton from '../components/skeletons/ChartSkeleton';

/**
 * DefaultView Component
 * 
 * This component serves as the main dashboard view, displaying various statistics, charts, and tables.
 * 
 * Design Rationale:
 * - The component is organized into sections using SimpleGrid to create a responsive layout.
 * - Statistics are displayed using MiniStatistics components, with dynamic styling based on the type of statistic.
 * - Icons from BoxIcons are used to represent different statistics for a visually appealing and intuitive interface.
 * 
 * 
 * Challenges Encountered:
 * 1. Dynamic Styling: Adjusting styles dynamically based on statistic types posed a challenge, but it was overcome
 *    by using conditional checks for color and background gradients.
 * 2. Reusability: Ensuring that components like MiniStatistics are reusable and easily understandable required careful
 *    consideration of prop names and structure.
 * 3. Responsiveness: Achieving a responsive layout with SimpleGrid required fine-tuning column configurations for different
 *    screen sizes.
 * 
 * @returns {JSX.Element} The rendered DefaultView component.
 */
export default function DefaultView(): JSX.Element {
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
                gap='20px'
                mb='20px'>
                <Suspense fallback={<ListStatisticsSkeleton />}>
                    <ListStatistics />
                </Suspense>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
                <Suspense fallback={<ChartSkeleton />}>
                    <TotalSpent />
                </Suspense>
                <Suspense fallback={<ChartSkeleton />}>
                    <WeeklyRevenue />
                </Suspense>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
                <CheckTable />
                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
                    <DailyTraffic />
                    <PieCard />
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
                <CheckTable />
                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
                    <Tasks />
                    <MiniCalendar selectRange={false} />
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
}