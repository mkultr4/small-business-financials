import React from "react";

// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from '../cards/Card';

// Assets
import { MdBarChart } from "react-icons/md";
import BarChart from '../charts/BarChart';
import { barChartOptionsConsumption } from '../../data/charts';

// Recoil
import { weeklyRevenueSelector } from '../../recoil/charts.recoil';
import { useRecoilValue } from 'recoil';

export default function WeeklyRevenue(): JSX.Element {
    // State
    const weeklyRevenue = useRecoilValue(weeklyRevenueSelector);
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const iconColor = useColorModeValue("brand.500", "white");
    const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const bgHover = useColorModeValue(
        { bg: "secondaryGray.400" },
        { bg: "whiteAlpha.50" }
    );
    const bgFocus = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.100" }
    );
    return (
        <Card alignContent='center' flexDirection='column' w='100%' >
            <Flex align='center' w='100%' px='15px' py='10px'>
                <Text
                    me='auto'
                    color={textColor}
                    fontSize='xl'
                    fontWeight='700'
                    lineHeight='100%'>
                    Weekly Revenue
                </Text>
                <Button
                    alignContent='center'
                    justifyContent='center'
                    bg={bgButton}
                    _hover={bgHover}
                    _focus={bgFocus}
                    _active={bgFocus}
                    w='37px'
                    h='37px'
                    lineHeight='100%'
                    borderRadius='10px'
                >
                    <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
                </Button>
            </Flex>

            <Box h='240px' mt='auto'>
                <BarChart
                    chartData={weeklyRevenue}
                    chartOptions={barChartOptionsConsumption}
                />
            </Box>
        </Card>
    );
}
