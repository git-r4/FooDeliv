import { NavbarData } from "../../ui/pages/Navbar/common(logic)/NavbarData";
import { Route } from "react-router-dom";

export const navsRoute = NavbarData.map(({path, Component}) => (
    <Route path={path} element={<Component />} />
));