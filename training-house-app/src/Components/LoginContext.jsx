import React, { createContext, useEffect, useRef, useState } from "react";

export const Context = createContext();

export const LoginContext = (props) => {
  const [loginDropDown, setLoginDropDown] = useState(false);

  return (
    <Context.Provider value={[loginDropDown, setLoginDropDown]}>
      {props.children}
    </Context.Provider>
  );
};
