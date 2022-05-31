import axios from "axios";

// API
import supabase from "../../utils/supabase";

// Comnponents
import Head from "../../Layout/Head";

export default function Project(props) {
  // console.log(data);
  const { title } = props.data;
  return (
    <>
      <Head title={title} />
      <div>{title}</div>
    </>
  );
}

const url = "projects";

// fetch path
export async function getStaticPaths() {
  try {
    const { data: data } = await supabase.from(url).select("id");
    const paths = data.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// fetch data
export async function getStaticProps({ params: { id } }) {
  try {
    const { data: data } = await supabase.from(url).select("*").eq("id", id).single();
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
}
