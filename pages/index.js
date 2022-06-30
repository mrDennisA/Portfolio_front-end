import { useTheme } from "styled-components";

import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head title="Projects" />
      <Margin width={theme.midWidth}>
        <Banner>Projects</Banner>
      </Margin>
    </>
  );
}
