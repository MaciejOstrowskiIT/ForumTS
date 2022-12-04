const users: { id: number; username: string; password: string }[] = [
  { id: 0, username: "user", password: "password" },
  { id: 1, username: "123", password: "password" },
  { id: 2, username: "123456", password: "password" },
  { id: 3, username: "654321", password: "password" },
  { id: 4, username: "111111", password: "password" },
];
const doLogin = () => {
  const login: string = localStorage.getItem("login") || "";
  const password: string = localStorage.getItem("password") || "";

  const findUser = users.find((user) => user.username === login);
  const findPassword = users.find((userPassword) => userPassword.password);
  console.log(login, password, findUser, findPassword);
};

export default doLogin;
