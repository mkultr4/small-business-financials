import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface SeparatorProps extends FlexProps {
    orientation?: "horizontal" | "vertical";
}
const HSeparator = (props: SeparatorProps): JSX.Element => {

    return <Flex h='1px' w='100%' bg='rgba(135, 140, 189, 0.3)' {...props} ></Flex>;
};

const VSeparator = (props: SeparatorProps): JSX.Element => {
    return <Flex w='1px' bg='rgba(135, 140, 189, 0.3)' {...props} ></Flex>;
};

export { HSeparator, VSeparator };
