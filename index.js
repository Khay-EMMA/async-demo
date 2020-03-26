console.log("before");

console.log("After");

const getUser = (id, callBack) => {
  setTimeout(() => {
    console.log("Reading user from the database");
    callBack({ id: id, gitHubUserName: "Njoku" });
  }, 2000);
};

getUser(1, user => {
  getRepos(user.gitHubUserName, repo => {
    console.log("repo", repo);
  });
});

const getRepos = (username, callBack) => {
  setTimeout(
    () => {
      callBack(["repo1", "repo2", "repo3"]);
    },

    2000
  );
};
