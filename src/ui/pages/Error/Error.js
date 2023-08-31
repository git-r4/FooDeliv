import { BiSolidError } from 'react-icons/bi';

import style from './ui/styles/Error.module.scss';

const Error = () => {
    return(
        <div className={style.error}>
            <BiSolidError />
            <h3>OOPS.. Something went wrong!</h3>
        </div>
    );
};
export default Error;