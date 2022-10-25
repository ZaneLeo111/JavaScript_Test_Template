class test_class {
  constructor() {}

  tryAndCatch() {
    try {
      this.tryFunc("asd");
      this.tryFunc(1);
    } catch (e) {
      console.error(e.name);
      console.log(e.message);
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
