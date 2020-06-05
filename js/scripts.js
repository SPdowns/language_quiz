//users face
$(document).ready(function() {
  let selection;

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();
    let favMovie = $("input:radio[name=movie]:checked").val();
    let favBrand = $("input:radio[name=brand]:checked").val();
    let favMusic = $("input:radio[name=music]:checked").val();

    if (favColor === 'yellow' && favMovie === 'hackers' && favBrand === 'nike' && favMusic === 'dark-ambient') {
      hideResult(selection)
      $("#cobol").removeClass("hidden");
      selection = "#cobol"
    } else if (favColor === 'blue' && favMovie === 'sneakers' && favBrand === 'hanes' && favMusic === 'folktronica') {
      hideResult(selection)
      $("#csharp").removeClass("hidden");
      selection = "#csharp"
    } else if (favColor === 'red' || favColor === 'red' && ) {
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