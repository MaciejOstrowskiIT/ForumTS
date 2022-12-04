import React from "react";

const LoginComponent: React.FC = () => {
  const loginInputs: { id: string; text: string; class: string }[] = [
    { id: "login", text: "Login: ", class: "login" },
    { id: "password", text: "Password: ", class: "login" },
  ];
  return (
    <>
      <form className="login">
        {loginInputs.map((login) => (
          <section>
            <label htmlFor={login.id}>{login.text}</label>
            <input id={login.id} className={login.class}></input>
          </section>
        ))}
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginComponent;
