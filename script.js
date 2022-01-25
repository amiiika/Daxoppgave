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
