const setLoginParams = (login: string, password: string) => {
  localStorage.setItem("login", login);
  localStorage.setItem("password", password);
};

export default setLoginParams;
