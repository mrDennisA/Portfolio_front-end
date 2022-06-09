import axios from "axios";

// API
import { INFO_URL } from "../../constants/api";

// Components
import Head from "../../Layout/Head";
import Wrapper from "../../Layout/Wrapper";
import About from "../../components/About";
import ContactForm from "../../components/form/ContactForm";

export default function Info(props) {
  // console.log(props);
  return (
    <>
      <Head title={props.info.head} />
      <Wrapper>
        <About data={props.info} />
        {/* <ContactForm /> */}
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data: info } = await axios.get(INFO_URL + "?populate=content&populate=cover&populate=links");
    return { props: { info: info.data.attributes } };
  } catch (error) {
    console.log(error);
  }
}
