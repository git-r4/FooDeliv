import { Link } from 'react-router-dom';
//images
import gifImg from '../../assets/images/not-found-404.gif';
//styles
import style from './ui/styles/PageNotFound.module.scss';

const PageNotFound = () => {
    return(
        <div className={style.notFound}>
            <div className={style.notFound_img}>
                <img src={gifImg} alt={'404'}/>
            </div>
            <div className={style.notFound_info}>
                <h1>Page Not Found</h1>
                <Link to={'/'}>Back to Home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;