import { useState } from "react";
import { useEffect } from "react";
import Link from "../link/Link";
// import "../link/linkStyles.js";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import { HeaderLogo, HeaderStyles, HeaderWrapper, Logo } from "./styles";
import { NavWrapper, Navigation } from "../link/linkStyles.js";
const Header = (props) => {
  const [state, setState] = useState(null);
  const NavigationData = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Posts", url: "/posts" },
    { label: "Login", url: "/login"},
  ];
  const asyncFunc = async () => {
    const response = await axios.get(
      "https://chat-back.herokuapp.com/user/test"
    );
    setState(response.data);
  };
  console.log(state);
  useEffect(() => {
    asyncFunc();
  }, []);

  return (
    <>
      <HeaderWrapper>
        <HeaderStyles>
          <HeaderLogo>
            <Logo to={""} href="*">
              <h1>Logo</h1>
            </Logo>
          </HeaderLogo>
          <NavWrapper>
            <Navigation>
              {NavigationData.map((navigationItem) => (
                <Link
                  // label={navigationItem.label}
                  // url={navigationItem.url}
                  key={navigationItem.url}
                  {...navigationItem}
                />
              ))}
            </Navigation>
          </NavWrapper>
        </HeaderStyles>
      </HeaderWrapper>
    </>
  );
};

export default Header;
