//users face
$(document).ready(function() {
  let selection;

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();
    let favMovie = $("input:radio[name=movie]:checked").val();
    let favBrand = $("input:radio[name=brand]:checked").val();

    if (favColor === 'yellow' && favMovie === 'hackers' && favBrand === 'nike') {
      hideResult(selection)
      $("#cobol").removeClass("hidden");
      selection = "#cobol"
    } else if (favColor === 'blue' && favMovie === 'sneakers') {
      hideResult(selection)
      $("#csharp").removeClass("hidden");
      selection = "#csharp"
    } else if (favColor === 'red') {
      hideResult(selection)
      $("#ruby").removeClass("hidden");
      selection = "#ruby"
    }
console.log(favMovie)
  });
});

let hideResult = function(selection){
  if (selection === undefined){
      return
  }
  $(`${selection}`).addClass("hidden")
}