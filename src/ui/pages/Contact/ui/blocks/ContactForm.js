
const ContactForm = ({style}) => {
  return(
      <div className={style.contact_box_form}>
          <h1>Have Questions?</h1>
          <p>For all enquires, please contact us and one of our delightful team will be be happy to help.</p>
        <form>
            <input type="text" placeholder={'Full Name'} name="full-name"/>
            <input type="email" placeholder={'Email Address'} name="email"/>
            <textarea placeholder={'Message'}></textarea>
            <button>Send Message</button>
        </form>
      </div>
  );
};

export default ContactForm;