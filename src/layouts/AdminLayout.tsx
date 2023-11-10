// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from '../components/footer/Footer';

// Context
import { SidebarContext } from '../components/sidebar/contexts/SidebarContext';

// Custom Components
import Navbar from '../components/navbar/NavBar';
import routes from '../routes';
import Sidebar from '../components/sidebar/Sidebar';

// Hooks
import useRouteName from './hooks/useRouteName';


interface AdminLayoutProps {
    children: JSX.Element[] | JSX.Element;
}

/**
 * AdminLayout Component
 * 
 * The AdminLayout component serves as the layout for the admin dashboard, including
 * the sidebar, navbar, and main content area. It uses Chakra UI components for styling.
 * 
 * Context:
 * - Uses SidebarContext to manage the state of the sidebar (open/closed).
 * 
 * Custom Components:
 * - Navbar: Displays the navigation bar at the top of the layout.
 * - Sidebar: Provides the sidebar with navigation links based on the defined routes.
 * - Footer: Displays the footer at the bottom of the layout.
 * 
 * Hooks:
 * - useRouteName: Custom hook to get the current route's name for displaying in the navbar.
 * 
 * @param {object} children - The JSX element(s) representing the content to be rendered within the layout.
 * @returns {JSX.Element} The rendered AdminLayout component.
 */
export default function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
    const [brandName] = useRouteName('Default Brand Text');
    const disclosure = useDisclosure();
    return (
        <Box>
            <Box>
                <SidebarContext.Provider
                    value={{
                        ...disclosure
                    }}>
                    <Sidebar routes={routes} />
                    <Box
                        float='right'
                        minHeight='100vh'
                        height='100%'
                        overflow='auto'
                        position='relative'
                        maxHeight='100%'
                        w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                        maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                        transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
                        transitionDuration='.2s, .2s, .35s'
                        transitionProperty='top, bottom, width'
                        transitionTimingFunction='linear, linear, ease'>
                        <Portal>
                            <Box>
                                <Navbar
                                    brandText={brandName}
                                />
                            </Box>
                        </Portal>

                        <Box mx='auto' p={{ base: '20px', md: '30px' }} pe='20px' minH='100vh' pt='50px'>
                            {children}
                        </Box>
                        <Box>
                            <Footer />
                        </Box>
                    </Box>
                </SidebarContext.Provider>
            </Box>
        </Box>
    );
}
