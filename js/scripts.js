$(document).ready(function() {
  $("form").submit(function(event) {
    var yourSentence = $("input#yoursentence").val();
    var sentenceArray = yourSentence.split([" "]);
    var longWords = [];

    for (var index = 0; index < sentenceArray.length; index += 1) {
      if (sentenceArray[index].length >= 3) {
        longWords.push(sentenceArray[index]);
      };
    };


    var longWords = longWords.reverse();
    var longWordsSentence = longWords.join(" ");

    $(".sentence-input").hide();
    $("#output").text(longWordsSentence);
    $(".sentence-output").show();



    event.preventDefault();
  });
});
