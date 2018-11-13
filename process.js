jQuery(document).ready(function() {
  $("#output").html(" <h1> Type some HTML code above! </h1>");
  $("#input").on('keyup', processNewText);
});

function processNewText() {
  let temp = $("#input").val();
  $("#output").html(temp);
}