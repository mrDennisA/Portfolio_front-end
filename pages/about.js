import { useTheme } from "styled-components";
import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";

export default function About() {
  const theme = useTheme();

  return (
    <>
      <Head title="About" />
      <Margin width={theme.midWidth}>
        <Banner>About</Banner>
      </Margin>
    </>
  );
}
