import axios from "axios";

// API
import { PROJECTS_URL } from "../../constants/api";

// Comnponents
import Head from "../../Layout/Head";
import Hero from "../../components/Hero";
import Wrapper from "../../Layout/Wrapper";
import InView from "../../Layout/InView";
import ImageGallery from "../../components/ImageGallery";

export default function Project(props) {
  return (
    <>
      <Head title={props.project.head} />
      <Hero data={props.project} />
      <Wrapper>
        <InView delay={100}>
          <ImageGallery data={props.project} />
        </InView>
      </Wrapper>
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
    const { data: projects } = await axios.get(PROJECTS_URL + "?populate=image&populate=content&populate=links");
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
