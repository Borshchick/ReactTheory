import { useLocation } from "react-router-dom";
import { LinkStyles, Link as Links } from "./linkStyles";

const Link = (props) => {
  const location = useLocation();
  return (
    <Links>
      <LinkStyles
        to={props.url}
        href={props.url}
        isActive={location.pathname === props.url}
      >
        {props.label}
      </LinkStyles>
    </Links>
  );
};

export default Link;
