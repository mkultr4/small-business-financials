import React from "react";
import { Flex } from "@chakra-ui/react";
interface IconBoxProps {
    icon: JSX.Element;
    w?: string;
    h?: string;
    bg?: string;
}
export default function IconBox({ icon, w, h, bg }: IconBoxProps) {


    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            w={w ? w : undefined}
            h={h ? h : undefined}
            bg={bg ? bg : undefined}
        >
            {icon}
        </Flex>
    );
}
