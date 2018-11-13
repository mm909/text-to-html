jQuery(document).ready(function() {
  $("#output").html("Type some HTML code above!");
  $("#input").on('keyup', processNewText);
});

function processNewText() {
  let temp = $("#input").val();
  $("#output").html(temp);
}