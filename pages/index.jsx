import axios from "axios";

// API
import supabase from "../utils/supabase";

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

const url = "projects";
export async function getStaticProps() {
  try {
    const { data: data } = await supabase.from(url).select("*");
    return { props: { data } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
