function receivesAFunction(callback) {
  callback();
};

function returnsANamedFunction() {
  const fn = () => console.log("a named function");
  return fn;
};

function returnsAnAnonymousFunction() {
  return () => console.log("an anonymous function")
}