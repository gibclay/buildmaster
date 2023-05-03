import route from "../interfaces/route";
import { Store, Build, Home, Help, LoginPage, CheckoutPage, LandingPage, ProductViewPage } from "../pages";

/**
 * Array containing all the routes for the website.
 */

export const routes: route[] = [
  {
  title: "LandingPage",
  path: "/land",
  component: LandingPage,
  onNav: false,
  hasNavBar: false
  },
  {
    title: "Home",
    path: "/",
    component: Home,
    onNav: true,
    icon: 'home',
    hasNavBar: true
  },
  {
    title: "Build",
    path: "/build",
    component: Build,
    onNav: true,
    icon: 'wrench',
    hasNavBar: true
  },
  {
    title: "Store",
    path: "/store",
    component: Store,
    onNav: true,
    icon: 'shopping bag',
    hasNavBar: true
  },
  {
    title: "Customer Service",
    path: "/help",
    component: Help,
    onNav: true,
    icon: 'help',
    hasNavBar: true
  },
  {
    title: "Log in",
    path: "/login",
    component: LoginPage,
    onNav: false,
    icon: 'door',
    hasNavBar: true
  },
  {
    title: "Checkout",
    path: "/checkout",
    component: CheckoutPage,
    onNav: false,
    icon: "shopping cart",
    hasNavBar: true
  },
  {
    title: "Product View",
    path: "/product-view",
    component: ProductViewPage,
    onNav: false,
    hasNavBar: true
  }
];
