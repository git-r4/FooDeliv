import Home from "../../Home/Home";
import Menu from "../../Menu/Menu";
import Specials from "../../Specials/Specials";
import Contact from "../../Contact/Contact";

export const NavbarData = [
    {
        id: 'n1',
        name: 'Home',
        path: '/',
        Component: Home
    },
    {
        id: 'n2',
        name: 'Menu',
        path: '/menu',
        Component: Menu
    },
    {
        id: 'n3',
        name: 'Specials',
        path: '/specials',
        Component: Specials
    },
    {
        id: 'n4',
        name: 'Contact',
        path: '/contact',
        Component: Contact
    }
];