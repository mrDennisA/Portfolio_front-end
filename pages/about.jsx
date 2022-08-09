// Components
import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";

// API
import { ABOUT_PAGE_URL, SKILL_TYPE_URL, EXPERIENCES_URL, EDUCATIONS_URL } from "../constants/api";

// Styles
import { useTheme } from "styled-components";
import AboutList from "../components/AboutList";

export default function About({ about, skillTypes, experiences, educations }) {
  const theme = useTheme();
  // console.log(experiences);

  return (
    <>
      <Head title="About" />
      <Margin width={theme.midWidth}>
        <Banner>About</Banner>
        <AboutMe data={about} />
        <AboutList data={skillTypes} title={"Expertise"} type={"list"} />
        <AboutList data={experiences} title={"Experience"} type={"table"} />
        <AboutList data={educations} title={"Education"} type={"table"} />
      </Margin>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data: about } = await (await fetch(ABOUT_PAGE_URL)).json();
    const { data: skillTypes } = await (await fetch(SKILL_TYPE_URL)).json();
    const { data: experiences } = await (await fetch(EXPERIENCES_URL)).json();
    const { data: educations } = await (await fetch(EDUCATIONS_URL)).json();

    return {
      props: {
        about: about.attributes,
        skillTypes: skillTypes,
        experiences: experiences.reverse(),
        educations: educations.reverse(),
      },
    };
  } catch (error) {
    console.log(error);
  }
}
