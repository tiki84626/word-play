$(document).ready(function() {
  $("form").submit(function(event) {
    var yourSentence = $("input#yoursentence").val();
    var sentenceArray = yourSentence.split([" "]);
    var longWords = [];

    sentenceArray.forEach(function(word) {
      if (word.length >= 3) {
        longWords.push(word);
      }
    });

    var longWords = longWords.reverse();
    var longWordsSentence = longWords.join(" ");

    $(".sentence-input").hide();
    $("#output").text(longWordsSentence);
    $(".sentence-output").show();



    event.preventDefault();
  });
});
