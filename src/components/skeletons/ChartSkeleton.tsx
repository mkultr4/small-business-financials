import React from 'react';
import { Flex, Skeleton, Box, } from '@chakra-ui/react';
import Card from '../cards/Card';

export default function ChartSkeleton() {

    return (
        <Card py='15px'>
            <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
                <Box minH='280px' minW='100%' mt='auto'>
                    <Skeleton height='280px' />
                </Box>
            </Flex>
        </Card >
    );
}

