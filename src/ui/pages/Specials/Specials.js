
//styles
import style from './ui/styles/Specials.module.scss';

const Specials = () => {
    return(
        <div className={style.specials}>
            <div className={style.specials_header}>
                <h1>Special Menu</h1>
            </div>
            <div className={style.specials_box}>
                <div>
                    <h1>Unfortunately, we do not have a special menu for you.</h1>
                </div>
            </div>
        </div>
    );
};

export default Specials;