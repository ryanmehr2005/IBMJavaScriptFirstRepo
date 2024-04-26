let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest()
{
    // Set the test text
    document.getElementById("inputText").value = testText;

    //Reset results and timer
    document.getElementById("output").innerHTML="";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest()
{
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText.split(/\s+/).filter(function (word)
    {
        return word !== "";
    }).length

    var wpm = 0;

    if (timeElapsed !== 0 && !isNaN(typedWords))
    {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    var totalLength = userTypedText.length;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results: </h2>" + "<p>Total Length: " + totalLength + "</p>"+ "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;

}