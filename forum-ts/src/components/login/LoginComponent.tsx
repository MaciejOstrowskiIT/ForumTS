import React, { useState } from "react";
// import doLogin from "../../functions/doLogin";
// import setLoginParams from "../../functions/setLoginParams";

const LoginComponent: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const loginInputs: {
    id: string;
    text: string;
    class: string;
    type: string;
  }[] = [
    { id: "login", text: "Login: ", class: "login", type: "" },
    { id: "password", text: "Password: ", class: "login", type: "" },
  ];

  const doLogin = () => {
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);
  };

  return (
    <>
      <form className="login" onSubmit={doLogin}>
        {loginInputs.map((login) => (
          <section>
            <label htmlFor={login.id}>{login.text}</label>
            <input
              id={login.id}
              className={login.class}
              onChange={(e) => {
                switch (login.id) {
                  case "password":
                    setPassword(e.target.value);
                    break;
                  case "login":
                    setUsername(e.target.value);
                    break;
                  default:
                    break;
                }
              }}
            ></input>
          </section>
        ))}
        <input type="submit" value="Login" />
      </form>
      <input type="button" value="" onClick={doLogin} />
    </>
  );
};

export default LoginComponent;
