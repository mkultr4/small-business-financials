import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";
export const SidebarContext = createContext<ReturnType<typeof useDisclosure> | null>(
    null
);