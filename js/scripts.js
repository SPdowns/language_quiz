//users face
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();

    if (favColor === 'blue') {
    $("#csharp").show();
    $("#ruby").hide();
    } else if (favColor === 'red') {
      $("#csharp").hide();
      $("#ruby").show();
    }

  });
});