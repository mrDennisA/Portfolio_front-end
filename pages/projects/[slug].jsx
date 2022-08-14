import { useTheme } from "styled-components";

import Head from "../../Layout/Head";
import { Margin } from "../../Layout/Wrapper";
import Banner from "../../components/Banner";
import Detail from "../../components/Project/Detail";

// API
import { PROJECTS_URL } from "../../constants/api";

export default function Project({ project }) {
  const theme = useTheme();

  // console.log(project);

  return (
    <>
      <Head title={project.title} />
      <Margin width={theme.midWidth}>
        <Banner>{project.title}</Banner>
        <Detail data={project} />
      </Margin>
    </>
  );
}

// fetch path
export async function getStaticPaths() {
  try {
    const { data: projects } = await (await fetch(PROJECTS_URL)).json();
    const paths = projects.map((item) => {
      return {
        params: {
          slug: item.attributes.slug,
        },
      };
    });

    return { paths, fallback: false, revalidate: 10 };
  } catch (error) {
    console.log(error);
  }
}

// fetch data
export async function getStaticProps({ params }) {
  try {
    const { data: projects } = await (await fetch(PROJECTS_URL)).json();
    const project = projects.find((item) => {
      return item.attributes.slug === params.slug;
    });

    return {
      props: { project: project.attributes },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }
}
