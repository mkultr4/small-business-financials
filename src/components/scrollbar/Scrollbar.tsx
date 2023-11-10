import React from "react";
import { Box } from "@chakra-ui/react";

interface ScrollBarProps {
    style: React.CSSProperties;
}


const renderTrack = ({ style }: ScrollBarProps): JSX.Element => {
    const trackStyle = {

        maxWidth: "100%",
        width: 6,
        transition: "opacity 200ms ease 0s",
        opacity: 0,
        background: "transparent",
        bottom: 2,
        top: 2,
        borderRadius: 3,
        right: 0,
    };
    return <div style={{ ...style, ...trackStyle }} />;
};
const renderThumb = ({ style }: ScrollBarProps): JSX.Element => {
    const thumbStyle = {
        borderRadius: 15,
        background: "rgba(222, 222, 222, .1)",
    };
    return <div style={{ ...style, ...thumbStyle }} />;
};
const renderView = ({ style }: ScrollBarProps): JSX.Element => {
    const viewStyle = {
        marginBottom: -22,
    };
    return (
        <Box
            me={{ base: "0px !important", lg: "-16px !important" }}
            style={{ ...style, ...viewStyle }}
        />
    );
};

export { renderView, renderThumb, renderTrack };