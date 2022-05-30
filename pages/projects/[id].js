import axios from "axios";

// API
import { PROJECTS_URL } from "../../constants/api";

// Comnponents
import Head from "../../Layout/Head";

export default function Project(props) {
  // console.log(props);
  return (
    <>
      <Head title={props.data.attributes.title} />
      <div>{props.data.attributes.title}</div>
    </>
  );
}

// fetch path
export async function getStaticPaths() {
  try {
    const response = await axios.get(PROJECTS_URL);
    const paths = response.data.data.map((item) => ({
      params: { id: item.id.toString() },
    }));
    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// fetch data
export async function getStaticProps({ params }) {
  const url = PROJECTS_URL + "/" + params.id;
  try {
    const response = await axios.get(url);
    const data = response.data.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
