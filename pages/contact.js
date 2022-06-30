import { useTheme } from "styled-components";

import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";

export default function Contact() {
  const theme = useTheme();

  return (
    <>
      <Head title="Contact" />
      <Margin width={theme.midWidth}>
        <Banner>Contact</Banner>
      </Margin>
    </>
  );
}
