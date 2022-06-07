import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Heading from "../../Heading";
import ValidationMessage from "../../message/ValidationMessage";
import SubmitMessage from "../../message/SubmitMessage";

// Styles
import * as S from "../form.styled";
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
        setRespons({ message: "Contact Request Submitted Successfully", validation: "success" });
      } catch (error) {
        console.log("error", error);
        setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
      } finally {
        setSubmitting(false);
        reset();
      }
    }, 1000);
  }

  return (
    <S.Section>
      <SubmitMessage onClick={() => setRespons(null)} respons={respons} />
      <Heading element="h2">Contact</Heading>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <S.Label>
            Name:
            <S.Input {...register("name")} />
            {errors.name && <ValidationMessage>{errors.name.message}</ValidationMessage>}
          </S.Label>
          <S.Label>
            Email:
            <S.Input {...register("email")} />
            {errors.email && <ValidationMessage>{errors.email.message}</ValidationMessage>}
          </S.Label>
          <S.Label>
            Subject:
            <S.Input {...register("subject")} />
            {errors.subject && <ValidationMessage>{errors.subject.message}</ValidationMessage>}
          </S.Label>
          <S.Label>
            Message:
            <S.Textarea {...register("message")} />
            {errors.message && <ValidationMessage>{errors.message.message}</ValidationMessage>}
          </S.Label>
          <S.Button className={submitting ? "active" : ""}>{submitting ? "Sending..." : "Send"}</S.Button>
        </fieldset>
      </S.Form>
    </S.Section>
  );
}
