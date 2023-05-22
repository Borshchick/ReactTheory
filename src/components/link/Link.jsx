// import {useState} from "react"
import { Link as Links} from './linkStyles'
import {
    NavLink,
    useLocation,
  } from "react-router-dom";

  

const Link = (props) => {
    const location = useLocation();
    return(
        <Links>
            <NavLink to={props.url} className={location.pathname === props.url ? "link_active" : "NavA"} href={props.url}>{props.label}</NavLink>
        </Links>
    )
}

export default Link