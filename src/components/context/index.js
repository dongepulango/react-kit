import React, { useState, createContext } from 'react';

//create context
export const GlobalContext = createContext();

const Context = (props) => {

  //use state
  const [state, setState] = useState({
    mobileNav: false,
    headerScrolled: false,
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context;