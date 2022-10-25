class test_class {
  constructor() {}

  tryAndCatch() {
    try {
      this.tryFunc("asd");
      this.tryFunc(1);
    } catch (error) {
      if (error.name == "TimeOutError") {
        console.error(error);
      }
    }
  }

  tryFunc(a) {
    if (a != "asd") {
      throw { name: "TimeOutError", message: "Time out!" };
    }

    console.log("It works!");
  }
}

// test run
test1 = new test_class();
test1.tryAndCatch();
