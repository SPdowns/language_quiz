//users face
$(document).ready(function() {
  let selection;

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();


    if (favColor === 'blue') {
      hideResult(selection)
      $("#csharp").removeClass("hidden");
      selection = "#csharp"
    } else if (favColor === 'red') {
      hideResult(selection)
      $("#ruby").removeClass("hidden");
      selection = "#ruby"
    }

  });
});

let hideResult = function(selection){
  if (selection === undefined){
      return
  }
  $(`${selection}`).addClass("hidden")
}