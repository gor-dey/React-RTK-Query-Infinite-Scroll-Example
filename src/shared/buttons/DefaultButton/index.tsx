import { Link } from "react-router-dom";
import { Button } from "./style";

export const DefaultButton = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => (
  <Link to={link}>
    <Button>{text}</Button>
  </Link>
);
