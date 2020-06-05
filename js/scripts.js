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
      $("#csharp").hide();
      $("#ruby").show();
    }

  });
});

let hideResult = function(sel){
  if (sel === undefined){
      return
  }
  $(`"${sel}"`).addClass("hidden")
}