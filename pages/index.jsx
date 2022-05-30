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
  let data = [];
  try {
    const response = await axios.get(PROJECTS_URL);
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return { props: { data } };
}
