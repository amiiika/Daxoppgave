const nameListKey = "key";

let names = JSON.parse(localStorage.getItem(nameListKey));
if (names == null) {
  names = [];
}

//push and write out names
function pushName() {
  let input = $("#name").val();
  names.push(input);
  localStorage.setItem(nameListKey, JSON.stringify(names));

  $("#welcome").text(
    "Welcome, we wish you all the best " + names[names.length - 1] + "!"
  );

  $("#thanks").text("Thanks For Cheking Out My Website " + names.join(", "));
}

//make numbers every min
let randomNum = Math.floor(Math.random() * 9999);

const luckyNumber = () => {
  $("#number").text(randomNum);
};

//call functions
luckyNumber();
