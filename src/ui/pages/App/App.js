import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { navsRoute } from "../../../common(logic)/routes/Routes";
import PageNotFound from "../PageNotFound(Error)/PageNotFound";
import Footer from "../Footer/Footer";
import MobileVersion from "./ui/blocks/MobileVersion";
//script
import { WindowResize } from "./common(logic)/script";
//style
import style from './App.module.scss';

const App = () => {
    const { mobileSize } = WindowResize();
    return mobileSize
        ? (<MobileVersion/>)
        : <BrowserRouter>
            <div>
                <div className={style.navbarBox}>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        {navsRoute}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <div className={style.footerBox}>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
};
export default App;