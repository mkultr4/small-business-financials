import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

// Types
import { Route } from '../../routes';

// Hooks
import { useSidebar } from './hooks/useSidebar';

// Props
interface SidebarLinksProps {
    routes: Route[];
}
// verifies if routeName is the one active (in browser input)
const activeRoute = (routeName: string) => {
    return window.location.pathname.includes(routeName);
};

export default function SidebarLinks({ routes }: SidebarLinksProps): JSX.Element {
    //   Chakra color mode
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue(
        "secondaryGray.600",
        "secondaryGray.600"
    );
    const activeIcon = useColorModeValue("brand.500", "white");
    const textColor = useColorModeValue("secondaryGray.500", "white");
    const brandColor = useColorModeValue("brand.500", "brand.400");
    // Context
    const { onClose } = useSidebar();
    // Close sidebar if on small device
    const handleOnClickLink = () => {
        onClose();
    };
    // This function creates the links
    const createLinks = (routes: Route[]) => {
        return routes.map((route, index) => {
            return (
                <NavLink key={index} to={route.path} onClick={handleOnClickLink}>
                    {route.icon ? (
                        <Box>
                            <HStack
                                spacing={
                                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                                }
                                py='5px'
                                ps='10px'>
                                <Flex w='100%' alignItems='center' justifyContent='center'>
                                    <Box
                                        color={
                                            activeRoute(route.path.toLowerCase())
                                                ? activeIcon
                                                : textColor
                                        }
                                        me='18px'>
                                        {route.icon}
                                    </Box>
                                    <Text
                                        me='auto'
                                        color={
                                            activeRoute(route.path.toLowerCase())
                                                ? activeColor
                                                : textColor
                                        }
                                        fontWeight={
                                            activeRoute(route.path.toLowerCase())
                                                ? "bold"
                                                : "normal"
                                        }>
                                        {route.name}
                                    </Text>
                                </Flex>
                                <Box
                                    h='36px'
                                    w='4px'
                                    bg={
                                        activeRoute(route.path.toLowerCase())
                                            ? brandColor
                                            : "transparent"
                                    }
                                    borderRadius='5px'
                                />
                            </HStack>
                        </Box>
                    ) : (
                        <Box>
                            <HStack
                                spacing={
                                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                                }
                                py='5px'
                                ps='10px'>
                                <Text
                                    me='auto'
                                    color={
                                        activeRoute(route.path.toLowerCase())
                                            ? activeColor
                                            : inactiveColor
                                    }
                                    fontWeight={
                                        activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                                    }>
                                    {route.name}
                                </Text>
                                <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                            </HStack>
                        </Box>
                    )}
                </NavLink>
            );
        });
    };

    return (<>
        {createLinks(routes)}
    </>
    );
}


