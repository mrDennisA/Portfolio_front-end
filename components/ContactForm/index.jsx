import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import DelayView from "../DelayView";
import PopupMesssage from "../PopupMessage";

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

  async function onSubmit(data) {
    setSubmitting(true);
    setRespons(null);

    try {
      // await fetch("/api/contactForm", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      // console.log("data", data);
      setRespons({ message: "Contact Request Submitted Successfully", validation: "success" });
    } catch (error) {
      console.log("error", error);
      setRespons({ message: "Something Went Wrong, Please Try Again Later", validation: "error" });
    } finally {
      setSubmitting(false);
      reset();
    }
  }

  return (
    <S.Section ref={ref}>
      <PopupMesssage onClick={() => setRespons(null)} respons={respons} />
      <DelayView active={inView} delay={100}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.FieldSet disabled={submitting}>
            <S.Label>
              <span>Full Name</span>
              <S.Input
                {...register("fullName", {
                  required: "Please enter your Full name",
                  minLength: { value: 3, message: "Minimum of 3 characters" },
                })}
              />
              {errors.fullName && <S.Message>{errors.fullName?.message}</S.Message>}
            </S.Label>
            <S.Label>
              <span>Email</span>
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
              <span>Message</span>
              <S.TextArea
                {...register("message", {
                  required: "Please enter your Message",
                  minLength: { value: 10, message: "Minimum of 10 characters" },
                })}
              />
              {errors.message && <S.Message>{errors.message?.message}</S.Message>}
            </S.Label>
            <S.Button type="submit" className={submitting ? "active" : ""}>
              {submitting ? "Sending..." : "Send"}
            </S.Button>
          </S.FieldSet>
        </form>
      </DelayView>
    </S.Section>
  );
}
