let depth = 0;
function test() {
  for (let i = 1; i <= depth; i++) {
    console.log("In the for loop");
  }

  console.log("Will not in the loop");
}

test();
