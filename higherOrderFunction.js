const hellow = () => {
  return "hello";
};

const message = (helloMessage, name) => {
  // as you can see I am passing function into function as argument

  return () => {
    console.log(helloMessage() + " " + name);
  };
};

message(hellow, "uisproject")();
// since I am returning function i need to call () to execute it
