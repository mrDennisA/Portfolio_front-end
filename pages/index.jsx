import axios from "axios";

// API
import { PROJECTS_URL } from "../constants/api";

// Components
import Head from "../Layout/Head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index(props) {
  // console.log(props);
  return (
    <>
      <Head title="Home" />
      <Hero />
      <Projects data={props.data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(PROJECTS_URL);
    const data = response.data.data;
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
