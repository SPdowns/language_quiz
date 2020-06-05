//users face
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    let favColor = $("input:radio[name=color]:checked").val();
  });
});