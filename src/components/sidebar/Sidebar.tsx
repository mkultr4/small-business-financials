import React from "react";

// chakra imports
import {
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import SidebarContent from './SidebarContent';
import { renderThumb, renderTrack, renderView } from '../scrollbar/Scrollbar';
import { Scrollbars } from "react-custom-scrollbars-2";
// Types
import { Route } from '../../routes';


interface SidebarProps {
    routes: Route[];
}
export default function Sidebar({ routes }: SidebarProps): JSX.Element {


    let variantChange = "0.2s linear";
    let shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    // Chakra Color Mode
    let sidebarBg = useColorModeValue("white", "navy.800");
    let sidebarMargins = "0px";

    // SIDEBAR
    return (
        <Box display={{ base: 'none', sm: "none", xl: "block" }} w="100%" position='fixed' minH='100%'>
            <Box
                bg={sidebarBg}
                transition={variantChange}
                w='300px'
                h='100vh'
                m={sidebarMargins}
                minH='100%'
                overflowX='hidden'
                boxShadow={shadow}>
                <Scrollbars
                    autoHide
                    renderTrackVertical={renderTrack}
                    renderThumbVertical={renderThumb}
                    renderView={renderView}>
                    <SidebarContent routes={routes} />
                </Scrollbars>
            </Box>
        </Box>
    );
}
