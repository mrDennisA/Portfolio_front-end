// Components
import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";

// Query
import { ABOUT_PAGE, SKILL_TYPES, EXPERIENCES, EDUCATIONS } from "../constants/querys";
import fetchQuery from "../constants/fetchQuery";

// Styles
import { useTheme } from "styled-components";
import AboutList from "../components/AboutList";

export default function About({ about, skillTypes, experiences, educations }) {
  // console.log(skillTypes, experiences, educations);

  const theme = useTheme();

  return (
    <>
      <Head title="About" />
      <Margin width={theme.midWidth}>
        <Banner>About</Banner>
        {/* <AboutMe data={about} /> */}
        {/* <AboutList data={skillTypes} title={"Expertise"} type={"list"} /> */}
        {/* <AboutList data={experiences} title={"Experience"} type={"table"} /> */}
        {/* <AboutList data={educations} title={"Education"} type={"table"} /> */}
      </Margin>
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     const {
//       data: { about },
//     } = await fetchQuery(ABOUT_PAGE);

//     const {
//       data: { skillTypes },
//     } = await fetchQuery(SKILL_TYPES);

//     const {
//       data: { experiences },
//     } = await fetchQuery(EXPERIENCES);

//     const {
//       data: { educations },
//     } = await fetchQuery(EDUCATIONS);

//     return {
//       props: {
//         about: about.data.attributes,
//         skillTypes: skillTypes.data,
//         experiences: experiences.data.reverse(),
//         educations: educations.data.reverse(),
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
