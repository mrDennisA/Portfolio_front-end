import axios from "axios";

// API
import { HOME_URL, PROJECTS_URL } from "../constants/api";

// Components
import Head from "../Layout/Head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index(props) {
  // console.log( props);

  return (
    <>
      <Head title={props.home.head} />
      <Hero data={props.home} />
      <Projects data={props.projects} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data: home } = await axios.get(HOME_URL + "?populate=content");
    const { data: projects } = await axios.get(PROJECTS_URL + "?populate=cover&populate=content");

    return { props: { home: home.data.attributes, projects: projects.data.reverse() } };
  } catch (error) {
    console.log(error);
  }
}
