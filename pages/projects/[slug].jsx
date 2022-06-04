import axios from "axios";

// API
import { PROJECTS_URL } from "../../constants/api";

// Comnponents
import Head from "../../Layout/Head";
import Hero from "../../components/Hero";

// Styles
import { Container } from "./slug.styled";

export default function Project(props) {
  // console.log(props);
  const headTitle = props.project.head;
  return (
    <>
      <Head title={headTitle} />
      <Hero data={props.project} />
      <Container></Container>
    </>
  );
}

// fetch path
export async function getStaticPaths() {
  try {
    const response = await axios.get(PROJECTS_URL);
    const data = response.data.data;
    const paths = data.map((item) => ({
      params: {
        slug: item.attributes.slug,
      },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// fetch data
export async function getStaticProps({ params }) {
  try {
    const { data: projects } = await axios.get(PROJECTS_URL + "?populate=image&populate=content");
    const project = projects.data.find((item) => {
      return item.attributes.slug === params.slug;
    });

    return {
      props: { project: project.attributes },
    };
  } catch (error) {
    console.log(error);
  }
}
