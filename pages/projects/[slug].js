import axios from "axios";

// API
import { PROJECTS_URL } from "../../constants/api";

// Comnponents
import Head from "../../Layout/Head";

export default function Game(props) {
  // console.log(props);
  return (
    <>
      <Head title={props.data.title} />
      <div>{props.data.title}</div>
    </>
  );
}

// fetch path
export async function getStaticPaths() {
  try {
    const response = await axios.get(PROJECTS_URL);
    const paths = response.data.map((item) => ({
      params: { slug: item.slug.toString() },
    }));
    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// fetch data
export async function getStaticProps({ params }) {
  const url = PROJECTS_URL + "/" + params.slug;
  let data = null;
  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { data },
  };
}
