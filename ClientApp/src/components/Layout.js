import React, { useState } from "react";
import { Container } from "reactstrap";
import loginContext from "../LoginContext";
import { NavMenu } from "./NavMenu";

export const Layout = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { Provider } = loginContext;

  return (
    <div>
      <Provider value={{isLoggedIn, setIsLoggedIn}}>
        <NavMenu />
        <Container>{props.children}</Container>
      </Provider>
    </div>
  );
};
