import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
} from "react-icons/md";
import DefaultView from './views/DefaultView';

export interface Route {
  name: string;
  path: string;
  icon: JSX.Element; // Assuming the icon is a ReactNode
  component: React.ReactNode; // Adjust the type based on your component
  secondary?: boolean;
}

const routes: Route[] = [
  {
    name: "Main Dashboard",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: <DefaultView />,
  },
  {
    name: "NFT Marketplace",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: <DefaultView />,
    secondary: true,
  },
  {
    name: "Data Tables",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: <DefaultView />,
  },
  {
    name: "Profile",

    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: <DefaultView />,
  }
];

export default routes;