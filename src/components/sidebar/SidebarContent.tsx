import React from "react";
// chakra imports
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
//   Custom components
import SidebarLinks from './SidebarLinks';
import { Route } from '../../routes';
import Logo from '../icons/Logo';




interface SidebarContentProps {
    routes: Route[];
}

export default function SidebarContent({ routes }: SidebarContentProps) {
    // SIDEBAR
    return (
        <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
            <Logo />
            <Stack direction='column' mb='auto' mt='8px'>
                <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
                    <SidebarLinks routes={routes} />
                </Box>
            </Stack>
            <Box
                mt='60px'
                mb='40px'
                borderRadius='30px'>
            </Box>
        </Flex>
    );
}

