import React, { Suspense } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import routes from './routes';
import theme from './theme/theme';
import { RecoilRoot } from 'recoil';

/**
 * App Component
 * 
 * The App component is the entry point of the Small Business Financials. It sets up the application's
 * structure, including ChakraProvider for styling, React Router for navigation, and RecoilRoot for
 * state management. It uses the AdminLayout to create the overall layout structure.
 * 
 * Key Features:
 * - Use Horizon UI for template (https://www.horizon-ui.com/)
 * - Uses ChakraProvider to apply the Chakra UI theme to the entire application.
 * - Utilizes React Router for declarative navigation.
 * - Implements RecoilRoot for managing global state using Recoil.
 * - Displays a loading fallback during suspense for a better user experience.
 * - Uses the AdminLayout to create a consistent layout structure for the admin dashboard.
 * - Renders routes dynamically based on the defined routes array.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <AdminLayout>
              <Routes>
                {routes.map((route, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={route.path}
                      element={route.component}
                    />
                  );
                })}
                <Route path="*" element={<Navigate to="/default" replace />} />
              </Routes>
            </AdminLayout>
          </BrowserRouter>
        </ChakraProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
