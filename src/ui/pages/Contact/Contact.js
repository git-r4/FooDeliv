//blocks
import ContactInfo from "./ui/blocks/ContactInfo";
import ContactForm from "./ui/blocks/ContactForm";

//styles
import style from './ui/styles/Contact.module.scss';

const Contact = () => {
    return(
      <div className={style.contact}>
          <div className={style.contact_header}>
              <h1>Contact Us</h1>
          </div>
          <div className={`container ${style.contact_box}`}>
              <ContactForm style={style} />
              <ContactInfo style={style} />
          </div>
      </div>
    );
};

export default Contact;