import React, { useRef } from 'react';
// chakra imports 
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import Scrollbars from 'react-custom-scrollbars-2';

// custom components
import { renderThumb, renderTrack, renderView } from '../scrollbar/Scrollbar';
import SidebarContent from './SidebarContent';

// Assets
import { IoMenuOutline } from "react-icons/io5";
import routes from '../../routes';
import { useSidebar } from './hooks/useSidebar';



export function SidebarResponsive() {
    let sidebarBackgroundColor = useColorModeValue("white", "navy.800");
    let menuColor = useColorModeValue("gray.400", "white");
    const { isOpen, onOpen, onClose } = useSidebar();
    const btnRef = useRef(null);
    return (
        <Flex display={{ sm: "flex", xl: "none" }} alignItems='center'>
            <Flex ref={btnRef} w='max-content' h='max-content' onClick={onOpen}>
                <Icon
                    as={IoMenuOutline}
                    color={menuColor}
                    my='auto'
                    w='20px'
                    h='20px'
                    me='10px'
                    _hover={{ cursor: "pointer" }}
                />
            </Flex>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={"left"}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent w='285px' maxW='285px' bg={sidebarBackgroundColor}>
                    <DrawerCloseButton
                        zIndex='3'
                        _focus={{ boxShadow: "none" }}
                        _hover={{ boxShadow: "none" }}
                    />
                    <DrawerBody maxW='285px' px='0rem' pb='0'>
                        <Scrollbars
                            autoHide
                            renderTrackVertical={renderTrack}
                            renderThumbVertical={renderThumb}
                            renderView={renderView}>
                            <SidebarContent routes={routes} />
                        </Scrollbars>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}