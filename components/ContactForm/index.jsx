import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import DelayView from "../DelayView";

// Hooks
import useObserver from "../../hooks/useObserver";

import * as S from "./styled";

export default function ContactForm() {
  const ref = useRef();
  const inView = useObserver(ref);

  const [submitting, setSubmitting] = useState(false);
  const [respons, setRespons] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  async function onSubmit(data) {
    // setSubmitting(true);
    // setRespons(null);

    await fetch("/api/contactForm", {
      method: "post",
      body: JSON.stringify(data),
    });

    console.log(data);

    // Timer is set as an dalyed exemple of post respons
    // setTimeout(() => {
    //   try {
    //     console.log("data", data);
    //     setRespons({ message: "Contact Request Submitted Successfully", validation: "success" });
    //   } catch (error) {
    //     console.log("error", error);
    //     setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
    //   } finally {
    //     setSubmitting(false);
    //     reset();
    //   }
    // }, 1000);
  }

  return (
    <S.Section ref={ref}>
      <DelayView active={inView} delay={100}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.FieldSet disabled={submitting}>
            <S.Label>
              Full Name:
              <S.Input
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Minimum of 3 characters" },
                })}
              />
              {errors.fullName && <S.Message>{errors.fullName?.message}</S.Message>}
            </S.Label>
            <S.Label>
              Email:
              <S.Input
                {...register("email", {
                  required: "Please enter your Email",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Must be in a valid Email",
                  },
                })}
              />
              {errors.email && <S.Message>{errors.email?.message}</S.Message>}
            </S.Label>
            <S.Label>
              Message:
              <S.TextArea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Minimum of 10 characters" },
                })}
              />
              {errors.message && <S.Message>{errors.message?.message}</S.Message>}
            </S.Label>
            <S.Button type="submit">Send</S.Button>
          </S.FieldSet>
        </form>
      </DelayView>
    </S.Section>
  );
}
