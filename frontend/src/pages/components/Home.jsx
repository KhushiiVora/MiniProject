import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cleared as studentClear } from "../../state/studentSlice";
import { cleared as instituteClear } from "../../state/instituteSlice";
import { cleared as templateClear } from "../../state/templateSlice";

import { Link } from "react-router-dom";
import {
  Container,
  Section,
  ShortInfo,
  CTA,
  Button,
  HowItWorks,
  FAQs,
  Contact,
  Footer,
} from "../../styles/jsx/home.styles";
import { Application } from "@splinetool/runtime";

// import anything from "../../../public/room_girl_reading_copy"
export default function Home() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    

    /* LOGOUT STATE */
    if (location?.state?.instituteName) {
      dispatch(instituteClear());
      dispatch(templateClear());
    } else if (!location?.state?.instituteName) {
      dispatch(studentClear());
    }
  }, []);

  return (
    <Container>
      <Section>
        <ShortInfo>
          <h1>Welcome to our Blockchain Certification Platform</h1>
          <p>
            Empower your education with secure and verifiable blockchain-based
            certifications.
          </p>
        </ShortInfo>
        <div >
          <img src="/certificate.svg"/>
        </div>
      </Section>
      <Section>
        <h2>Ready to get certified?</h2>
        <CTA>
          <Button to="/signup">Sign Up</Button>
          <Button to="/login">Log In</Button>
        </CTA>
      </Section>
      <Section>
        <HowItWorks>
          <h2>How Does It Work?</h2>
          <p>
            Learn more about our platform's workflow and features in our{" "}
            <Link to="/documentation">documentation</Link>.
          </p>
        </HowItWorks>
      </Section>
      <Section>
        <FAQs>
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <h3>How do I generate a certificate?</h3>
            <button
              onClick={() => {
                <p>
                  To generate a certificate, simply log in to your institute
                  account, fill out the necessary details, and click on the
                  "Generate Certificate" button.
                </p>;
              }}
            >
              +
            </button>
          </div>
          <div className="faq">
            <h3>Can I transfer my certificate to another wallet?</h3>
            <p>
              Yes, you can transfer your certificate to another wallet by
              clicking on the "Transfer" button in your student dashboard and
              entering the recipient's wallet address.
            </p>
          </div>
        </FAQs>
      </Section>
      <Section>
        <Contact>
          <h2>Get in Touch</h2>
          <p>Have a question or need assistance? Contact us!</p>
          <Button to="/contact">Contact Us</Button>
        </Contact>
      </Section>
      <Footer>
        <div>
          <p>
            &copy; 2024 Blockchain Certification Platform. All rights reserved.
          </p>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}
