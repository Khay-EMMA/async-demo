const promise = new Promise((res, rej) => {
  setTimeout(() => {
    let errorMessage = "There was an error";
    rej(new Error(errorMessage));
  }, 4000);
});
promise
  .then(result => console.log("Result", result))
  .catch(error => console.log("Error", error));
