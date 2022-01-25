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
$("#number").text(Math.round(Math.random() * 1000));

setTimeout(() => {
  setInterval(() => {
    $("#number").text(Math.round(Math.random() * 1000));
  }, 60 * 1000);
}, 60 - new Date().getSeconds() * 1000);

