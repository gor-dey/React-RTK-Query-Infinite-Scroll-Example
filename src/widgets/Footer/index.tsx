import styled from "styled-components";

const Div = styled.p`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  margin: 0;
  padding-bottom: 10px;
`;

export const Footer = () => {
  return (
    <Div>
      <p>by G.</p>
    </Div>
  );
};
