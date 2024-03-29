import { useTheme } from "styled-components";

// Components
import Head from "../Layout/Head";
import { Margin } from "../Layout/Wrapper";
import Banner from "../components/Banner";
import ProjectList from "../components/Project/List";

// API
import { PROJECTS_URL } from "../constants/api";

export default function Home({ projects }) {
  const theme = useTheme();

  // console.log(projects);

  return (
    <>
      <Head title="Projects" description="Front-end portfolio." />
      <Margin width={theme.midWidth}>
        <Banner>Projects</Banner>
        <ProjectList data={projects} />
      </Margin>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data: projects } = await (await fetch(PROJECTS_URL)).json();

    return {
      props: { projects: projects.reverse() },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }
}
