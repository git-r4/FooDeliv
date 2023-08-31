//components
import Headers from "./ui/blocks/Header";

//style
import style from './ui/styles/Home.module.scss';
import MainSection from "./ui/blocks/MainSection";

const Home = (props) => {
    return(
        <>
            <Headers style={style}/>
            <MainSection style={style}/>
        </>
    );
};

export default Home;