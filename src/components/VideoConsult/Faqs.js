import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What is online doctor consultation?",
      content: `Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.`,
    },
    {
      title: "How do I start online consultation with doctors on Practo?",
      content: `Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps: <br>
        • Choose your health concern<br>
        • Connect with a doctor within 2 minutes<br>
        • Ask your queries to the doctor via audio or video call<br>
        • Get a valid online doctor prescription and a 3-day free online doctor consultation`,
    },
    {
      title: "Are your online doctors qualified?",
      content: `We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary documents, registrations, and certifications for every doctor. `,
    },
    {
      title: "Is online doctor consultation safe and secured on Practo?",
      content: (
        <p>
          The privacy of our patients is critical to us, and thus, we are
          compliant with industry standards like ISO 27001. Rest assured that
          your online consultation with a doctor is completely safe and secured
          with 256-bit encryption.
        </p>
      ),
    },
    {
      title: "What happens if I don’t get a response from a doctor?",
      content: `In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.`,
    },
    {
      title: "Can I do a free online doctor consultation on Practo?",
      content: (
        <p>
          Avail a free online consultation with top doctors in India during the
          India Health Hour. Click here for more details. We have the free
          questions service available on our health app only. Ask a question and
          get free online medical advice within 24 to 48 hours.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
};

const config = {
  animate: true,
  arrowIcon: <i class="bi bi-caret-right-fill"></i>,
  tabFocus: true,
};

const Faqs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className=" row">
        <h3 className="mb-4">FAQs</h3>
      </div>
      <div className="cols-12">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default Faqs;
