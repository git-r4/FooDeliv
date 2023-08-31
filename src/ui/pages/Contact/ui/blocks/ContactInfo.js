//icons
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const ContactInfo = ({style}) => {
    return(
        <ul className={style.contact_box_info}>
            <li>
                <h2>Call us</h2>
                <div>
                    <BiSolidPhoneCall />
                    <h3>+994 (01) 234 56 78</h3>
                </div>
            </li>
            <li>
                <h2>Email</h2>
                <div>
                    <MdEmail />
                    <h3>info@rillgrill.az</h3>
                </div>
            </li>
            <li>
                <h2>Address</h2>
                <div>
                    <MdLocationOn />
                    <h3>Heyder Aliyev Avenue, 72 - Azerbaijan, Baku</h3>
                </div>
            </li>
        </ul>
    );
};
export default ContactInfo;