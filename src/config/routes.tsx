import route from "../interfaces/route";
import { Store, Build, Home, Help } from "../pages";

/**
 * Array containing all the routes for the website.
 */

export const routes: route[] = [
  {
    title: "Home",
    path: "/",
    component: Home,
    onNav: true,
    icon: 'home',
  },
  {
    title: "Build",
    path: "/build",
    component: Build,
    onNav: true,
    icon: 'wrench'
  },
  {
    title: "Store",
    path: "/store",
    component: Store,
    onNav: true,
    icon: 'shopping cart',
  },
  {
    title: "Customer Service",
    path: "/help",
    component: Help,
    onNav: false,
    icon: 'help',
  }
];
