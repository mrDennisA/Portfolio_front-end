const Margin = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

const Padding = styled.div`
  padding: 0 1rem;
`;

export default function Wrapper({ children }) {
  return (
    <Margin>
      <Padding>{children}</Padding>
    </Margin>
  );
}
