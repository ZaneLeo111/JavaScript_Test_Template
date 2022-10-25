class test_class {
  constructor() {
    this.searchStartTime = 0;

    this.timeLimit = 0.0000001;
  }

  tryAndCatch() {
    this.searchStartTime = performance.now();

    console.log("this.searchStartTime", this.searchStartTime);
    try {
      console.log("It tried");
      this.testIfTimeout();
    } catch (error) {
      if (error.name == "TimeOutError") {
        console.error(error);
      }
    }
  }

  // tryFunc(a) {
  //   if (a != "asd") {
  //     throw { name: "TimeOutError", message: "Time out!" };
  //   }

  //   console.log("It works!");
  // }

  testIfTimeout() {
    console.log('asdads');
    let timeElapsed = performance.now() - this.searchStartTime;

    console.log(" ------------------------------------------------");
    console.log("test_ ~ testIfTimeout ~ timeElapsed", timeElapsed);
    console.log(" ------------------------------------------------");


    

    if (timeElapsed > this.timeLimit) {
      throw { name: "TimeOutError", message: "Time out!" };
    }
  }
}

 
// test run
test1 = new test_class();
test1.tryAndCatch();


