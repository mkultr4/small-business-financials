import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import routes from '../../routes';
export default function useRouteName(initialValue: string) {
    const [routeName, setRouteName] = useState(initialValue);
    const location = useLocation();
    const fetchRoute = useCallback(() => {
        let activeRoute = 'Default Brand Text';
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === location.pathname) {
                activeRoute = routes[i].name;
                break;
            }
        }
        setRouteName(activeRoute);
        return activeRoute;
    }, [location]);
    useEffect(() => {
        fetchRoute();
    }, [location, fetchRoute]);
    return [routeName];
}