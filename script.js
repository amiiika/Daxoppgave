var names = [];

//push and write out names
function pushName() {
  let input = $("#name").val();
  names.push(input);

  $("#welcome").text(
    "Welcome, we wish you all the best " + names[names.length - 1] + "!"
  );

  $("#thanks").text("Thanks For Cheking Out My Website " + names.join(", "));
}

//make numbers
const luckyNumber = () => {
  let randomNum = Math.floor(Math.random() * 9999);
  $("#number").text(randomNum);
};


//call functions
luckyNumber();
