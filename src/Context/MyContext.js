import { createContext, useState } from 'react';
export const MyContext = createContext("");

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(!!localStorage.getItem("access_token"));
  const [chathistory, setHistory] = useState(true)
  const [onboarding, setOnboarding] = useState([])
  const [url, setUrl] = useState()
  const [role, setRole] = useState()
  const [verified, setVerified] = useState(-1)

  console.log(url)
  console.log("onboarding",onboarding)
  
  return (
    <MyContext.Provider value={{login, setLogin, chathistory, setHistory, onboarding, setOnboarding, url, setUrl, role, setRole, verified, setVerified}}>
      {children}
    </MyContext.Provider>
  );
};

const withUser = (Child) => (props) => (
  <MyContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </MyContext.Consumer>
);

export { UserProvider, withUser };