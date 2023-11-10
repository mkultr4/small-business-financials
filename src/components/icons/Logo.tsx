import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Logo() {


    return (
        <Flex direction='column' px='26px' my="24px">
            <Flex direction='column'>
                <Text fontSize="4xl" fontWeight="bold" lineHeight={1} letterSpacing={10}>SMART</Text>
            </Flex>
            <Flex direction='column'>
                <Text fontSize='xl' >Financial Business</Text>

            </Flex>
        </Flex>
    );
}
