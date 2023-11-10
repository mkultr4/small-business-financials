import React from 'react';
import { Flex, SkeletonCircle, Skeleton, Stat } from '@chakra-ui/react';
import Card from '../cards/Card';

export default function StatisticSkeleton() {

    return (
        <Card py='15px'>
            <Flex
                my='auto'
                h='100%'
                align={{ base: "center", xl: "start" }}
                justify={{ base: "center", xl: "center" }}>

                <SkeletonCircle size='56px' />
                <Stat my='auto' ms={"18px"}>
                    <Skeleton height="12px" />
                    <Skeleton height="20px" my="10px" />
                    <Skeleton height="12px" />
                </Stat>
                <Flex ms='auto' w='max-content'>

                </Flex>
            </Flex>
        </Card>
    );
}

