import { Container } from "./index.styled";

export default function FooterNav() {
  return (
    <Container>
      <span>{"© " + new Date().getFullYear() + " All Rights Reserved"}</span>
    </Container>
  );
}
