var cerebral = "whomst'd've'ly'yaint'nt'ed'ies's'y'es".toUpperCase();
var cerebralArray = cerebral.split("'");
cerebralArray.push("Start Over");
var i = 0;
$(document).ready(function() {
	$("#whomst").text(cerebralArray[i]);
});
$("#whomst").click(function() {
	if(i < cerebralArray.length - 1) {
		if(i !== 0) {
			$("#meme").append("'");
		}
		$("#meme").append(cerebralArray[i]);
		i++;
	} else {
		$("#meme").html("");
		i = 0;
	}
	$("#whomst").text(cerebralArray[i]);
});
