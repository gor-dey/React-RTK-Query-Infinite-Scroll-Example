import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 100px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: darkcyan;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff6b6b;
  }
`;
