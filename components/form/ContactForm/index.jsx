import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Heading from "../../Heading";
import ValidationMessage from "../../message/ValidationMessage";
import SubmitMessage from "../../message/SubmitMessage";

// Styles
import styles from "../form.module.css";

// Error text
const schema = yup.object().shape({
  name: yup.string().required("Please enter your Name").min(3, "Minimum of 3 characters"),
  email: yup.string().required("Please enter your Email").email("Must be in a valid email"),
  subject: yup.string().required("Please enter your Subject").min(3, "Minimum of 3 characters"),
  message: yup.string().required("Please type your Message").min(10, "Minimum of 10 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [respons, setRespons] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    setSubmitting(true);
    setRespons(null);

    // Timer is set as an dalyed exemple of post respons
    setTimeout(() => {
      try {
        console.log("data", data);
        setRespons({ message: "Contact Request Submitted Successfully", validation: true });
      } catch (error) {
        console.log("error", error);
        setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: false });
      } finally {
        setSubmitting(false);
        // reset();
      }
    }, 1000);
  }

  return (
    <section className={styles.section}>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} />
      <Heading element="h2">Contact</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <label>
            Name:
            <input {...register("name")} />
            {errors.name && <ValidationMessage>{errors.name.message}</ValidationMessage>}
          </label>
          <label>
            Email:
            <input {...register("email")} />
            {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
          </label>
          <label>
            Subject:
            <input {...register("subject")} />
            {errors.subject && <ValidationMessage>{errors.subject.message}</ValidationMessage>}
          </label>
          <label>
            Message:
            <textarea {...register("message")} />
            {errors.message && <ValidationMessage>{errors.message.message}</ValidationMessage>}
          </label>
          <button className={submitting ? styles.active : ""}>{submitting ? "Sending..." : "Send"}</button>
        </fieldset>
      </form>
    </section>
  );
}
