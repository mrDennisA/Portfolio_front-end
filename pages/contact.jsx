import { useTheme } from "styled-components";

import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  const theme = useTheme();

  return (
    <>
      <Head title="Contact" />
      <Margin width={theme.midWidth}>
        <Banner position="center">Contact</Banner>
      </Margin>
      <Margin width={theme.smallWidth}>
        <ContactForm />
      </Margin>
      <ContactInfo />
    </>
  );
}
