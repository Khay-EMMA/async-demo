console.log("before");

console.log("After");

const getUser = (id, callBack) => {
  setTimeout(() => {
    console.log("Reading user from the database");
    callBack({ id: id, gitHubUserName: "mosh" });
  }, 3000);
};

getUser(1, user => {
  console.log("user", user);
});
