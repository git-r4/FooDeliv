import 'animate.css';
import beefImg from '../../../../assets/images/beef.png';
import chickenImg from '../../../../assets/images/chicken.png';

const Headers = ({style}) => {
    return(
        <header className={style.header}>
            <div className={`animate__animated animate__slideInLeft ${style.header_leftImg}`}>
                <img src={beefImg} alt={'beef-meat-image'} />
            </div>
            <div className={style.header_info}>
                <div className={style.header_info_box}>
                    <h1>Opening Party</h1>
                    <span>12/7/2007 - 7 P.M.</span>
                </div>
                <div className={style.header_info_party}>
                    <span>food - music - friends - fun</span>
                </div>
            </div>
            <div className={`animate__animated animate__slideInRight ${style.header_rightImg}`}>
                <img src={chickenImg} alt={'chicken-meat-image'} />
            </div>
        </header>
    )
}
export default Headers;