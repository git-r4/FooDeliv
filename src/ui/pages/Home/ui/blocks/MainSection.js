//images
import discountImg from '../../../../assets/images/dish_one.png';
import brandLogo from '../../../../assets/images/navbar-brand.png';
import dishes from '../../../../assets/images/dishes.png';

const MainSection = ({style}) => {
    return(
        <main className={style.main}>
            <section className={style.main_section_discount}>
                <div className={`container ${style.main_section_discount_box}`}>
                    <div className={style.main_section_discount_box_dish}>
                        <img src={discountImg} alt={'discount-image'} />
                    </div>
                    <ul>
                        <li>
                            <p>Get a 25% discount on your next dinner.</p>
                            <button>Click here</button>
                        </li>
                        <li>
                            <img src={brandLogo} alt={'navbar-brand-logo'}/>
                            <h2>The Meat Experience</h2>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={style.main_section_music}>
                <ul>
                    <li>
                        <h1>Live Music</h1>
                        <div>
                            <p>Jazz Night</p>
                            <p>Every Friday</p>
                        </div>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </li>
                </ul>
                <div className={style.main_section_music_dish}>
                    <img src={dishes} alt={'dishes-image'} />
                </div>
            </section>
        </main>
    );
};

export default MainSection;