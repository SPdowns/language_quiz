$(document).ready(function() {
  let selection;

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();
    let favMovie = $("input:radio[name=movie]:checked").val();
    let favBrand = $("input:radio[name=brand]:checked").val();
    let favMusic = $("input:radio[name=music]:checked").val();

    if (favColor === 'yellow' && favMovie === 'hackers' && favBrand === 'nike' && favMusic === 'dark-ambient' || favColor === 'yellow') {
      hideResult(selection)
      $("#cobol").removeClass("hidden");
      $("#output").fadeIn();
      $("#output").fadeTo();
      selection = "#cobol"
    } else if (favColor === 'blue' && favMovie === 'sneakers' && favBrand === 'hanes' && favMusic === 'folktronica' || favColor === 'blue') {
      hideResult(selection)
      $("#csharp").removeClass("hidden");
      $("#output").fadeIn();
      $("#output").fadeTo();
      selection = "#csharp"
    } else if (favColor === 'other' && favMovie === 'daryl' && favBrand === 'apple' && favMusic === 'new-jack-mumble-swingcore' || favColor === 'other') {
      hideResult(selection)
      $("#basic").removeClass("hidden");
      $("#output").fadeIn();
      $("#output").fadeTo();
      selection = "#basic"
    } else if (favColor === 'red' && favMovie === 'the-net' || favColor === 'red') {
      hideResult(selection)
      $("#ruby").removeClass("hidden");
      $("#output").fadeIn();
      $("#output").fadeTo();
      selection = "#ruby"
    }
    // $("#btn").click(function() {
    //   $("#output").fadeIn();
    // });
  });
});



let hideResult = function(selection){
  if (selection === undefined){
      return
  }
  $(`${selection}`).addClass("hidden")
}
