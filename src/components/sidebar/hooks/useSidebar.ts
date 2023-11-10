import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { useDisclosure } from "@chakra-ui/react";

export function useSidebar() {
    const sidebar = useContext(SidebarContext);
    if (!sidebar) {
        throw new Error("Cannot use `sidebar context` outside SidebarProvider");
    }
    return { ...(sidebar as ReturnType<typeof useDisclosure>) };
}