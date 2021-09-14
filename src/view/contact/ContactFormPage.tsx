import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "src/view/contact/ContactForm";
import actions from "src/modules/contact/form/contactFormActions";
import selectors from "src/modules/contact/form/contactFormSelectors";
import ContactWrapeer from "../shared/styles/ContactWrapeer";
import { FaDiscord, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactFormPage() {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const saveLoading = useSelector(selectors.selectSaveLoading);
  useEffect(() => {
    setDispatched(true);
  }, [dispatch]);
  const doSubmit = (data) => {
    dispatch(actions.doCreate(data));
  };
  return (
    <ContactWrapeer>
      <section id='contact' className='contact'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Contact</h2>
            <p>
              Whether it's an idea or a question, contact us to find out how we
              can help you! And if you are in Tunis, we'll discuss it over
              coffee! .
            </p>
          </div>

          {/* <div>
      <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
    </div> */}

          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='info'>
                <FaMapMarkerAlt size={30} />
                <div className='address'>
                  <h4>Location:</h4>
                  <p>Tunis , Kasserine </p>
                </div>

                <div className='email'>
                  <MdEmail size={30} />
                  <h4>Email:</h4>
                  <p>mootassame@gmail.com</p>
                </div>

                <div className='phone'>
                  <FaPhoneAlt size={30} />
                  <h4>Call:</h4>
                  <p>+216 55-324-424</p>
                </div>
              </div>
            </div>

            <div className='col-lg-8 mt-5 mt-lg-0'>
              {dispatched && (
                <ContactForm saveLoading={saveLoading} onSubmit={doSubmit} />
              )}
            </div>
          </div>
        </div>
      </section>
    </ContactWrapeer>
  );
}

export default ContactFormPage;
