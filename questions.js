var questions = [
  {
    titles: "What is the IBM 7094 best known for? ",
    choices: [
      "Calculating data from the first moon rock in less than 7,094 kessel runs.",
      "Operating at 0.7094bs||Poops a minute.",
      "Launching the largest Peace assault on the Alderon System.",
      "First computer to ever sing Daisy Bell."
    ],
    answer: "alerts"
  },
  {
    titles: "The Millenium Falcon is _______. ",
    choices: [
      "A ship alligned to the Rebel Alliance.",
      "Secret project developed at SpaceX by Allen Musketeer.",
      "Is a book series for children adults that like readable audiobooks ",
      "Arby's new dinner special"
    ],
    answer: "alerts"
  },
  {
    titles: "What is the best way to capture an elephant? ",
    choices: [
      "Tag teaming the elephant with Steve Irwin's son.",
      "Applying a for loop in javascript.",
      "Using your smartphone camara.",
      "Asking Dumbo."
    ],
    answer: "alerts"
  },
  {
    titles: "THX 1138 is _______. ",
    choices: [
      "The most popular theater surround sound system.",
      "The first handheld calculator made by EPSON on Nov, 11 1938.",
      "Drakes upcoming record album.",
      "George Lucas 1971 cult classic."
    ],
    answer: "alerts"
  },
  {
    titles: "A petaflop is equivalant to _______. ",
    choices: [
      "The moment a PETA supporter buys a leather jacket.",
      "An ability to do one quadrillion floating point operations in one second.",
      "A computational term that describes failling to code right.",
      "An application that measures your pets mood based on the sounds the make."
    ],
    answer: "alerts"
  }
];

var questionTag = document.getElementById("questions");
questionTag.innerText = questions[0].titles;

var answer1 = document.getElementById("ans1");
answer1.innerText = questions[0].choices[0];

var answer2 = document.getElementById("ans2");
answer2.innerText = questions[0].choices[1];

var answer3 = document.getElementById("ans3");
answer3.innerText = questions[0].choices[2];

var answer4 = document.getElementById("ans4");
answer4.innerText = questions[0].choices[3];

//var correctAnswer = choices[3];

var wrongAnswer = document
  .getElementById("ans1")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "";
  });
var wrongAnswer = document
  .getElementById("ans2")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "";
  });
var wrongAnswer = document
  .getElementById("ans3")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "";
  });
var rightAnswer = document
  .getElementById("ans4")
  .addEventListener("click", function() {
    document.getElementById("post").innerHTML = "Correct - NEXT QUESTION";

    var next1 = document.getElementById("post");
    next1.innerHTML = "Correct - NEXT QUESTION";
    document.body.appendChild(next1).addEventListener("click", function() {
      var questionTag = document.getElementById("questions");
      questionTag.innerText = questions[1].titles;

      var answer11 = document.getElementById("ans1");
      answer11.innerText = questions[1].choices[0];

      var answer12 = document.getElementById("ans2");
      answer12.innerText = questions[1].choices[1];

      var answer13 = document.getElementById("ans3");
      answer13.innerText = questions[1].choices[2];

      var answer14 = document.getElementById("ans4");
      answer14.innerText = questions[1].choices[3];

      document.getElementById("post").innerHTML = "";
      document.getElementById("correct").innerHTML = "";
    });

    wrongAnswer = document
      .getElementById("ans2")
      .addEventListener("click", function() {
        document.getElementById("post").innerHTML = "";
      });
    wrongAnswer = document
      .getElementById("ans3")
      .addEventListener("click", function() {
        document.getElementById("post").innerHTML = "";
      });
    wrongAnswer = document
      .getElementById("ans4")
      .addEventListener("click", function() {
        document.getElementById("post").innerHTML = "";
      });

    rightAnswer = document
      .getElementById("ans1")
      .addEventListener("click", function() {
        document.getElementById("post").innerHTML = "Correct - NEXT QUESTION";

        document.body.appendChild(next1).addEventListener("click", function() {
          var questionTag = document.getElementById("questions");
          questionTag.innerText = questions[2].titles;

          var answer11 = document.getElementById("ans1");
          answer11.innerText = questions[2].choices[0];

          var answer12 = document.getElementById("ans2");
          answer12.innerText = questions[2].choices[1];

          var answer13 = document.getElementById("ans3");
          answer13.innerText = questions[2].choices[2];

          var answer14 = document.getElementById("ans4");
          answer14.innerText = questions[2].choices[3];

          document.getElementById("post").innerHTML = "";
          document.getElementById("correct").innerHTML = "";
        });

        wrongAnswer = document
          .getElementById("ans1")
          .addEventListener("click", function() {
            document.getElementById("post").innerHTML = "";
          });
        wrongAnswer = document
          .getElementById("ans2")
          .addEventListener("click", function() {
            document.getElementById("post").innerHTML = "";
          });
        wrongAnswer = document
          .getElementById("ans4")
          .addEventListener("click", function() {
            document.getElementById("post").innerHTML = "";
            btn.innerHTML = "none";
          });
        rightAnswer = document
          .getElementById("ans3")
          .addEventListener("click", function() {
            document.getElementById("post").innerHTML =
              "Correct - NEXT QUESTION";
            document.body
              .appendChild(next1)
              .addEventListener("click", function() {
                var questionTag = document.getElementById("questions");
                questionTag.innerText = questions[3].titles;

                var answer11 = document.getElementById("ans1");
                answer11.innerText = questions[3].choices[0];

                var answer12 = document.getElementById("ans2");
                answer12.innerText = questions[3].choices[1];

                var answer13 = document.getElementById("ans3");
                answer13.innerText = questions[3].choices[2];

                var answer14 = document.getElementById("ans4");
                answer14.innerText = questions[3].choices[3];

                document.getElementById("post").innerHTML = "";
                document.getElementById("correct").innerHTML = "";
              });
            wrongAnswer = document
              .getElementById("ans1")
              .addEventListener("click", function() {
                document.getElementById("post").innerHTML = "";
              });
            wrongAnswer = document
              .getElementById("ans2")
              .addEventListener("click", function() {
                document.getElementById("post").innerHTML = "";
              });
            wrongAnswer = document
              .getElementById("ans3")
              .addEventListener("click", function() {
                document.getElementById("post").innerHTML = "";
              });
            rightAnswer = document
              .getElementById("ans4")
              .addEventListener("click", function() {
                document.getElementById("post").innerHTML =
                  "Correct - NEXT QUESTION";
                document.body
                  .appendChild(next1)
                  .addEventListener("click", function() {
                    var questionTag = document.getElementById("questions");
                    questionTag.innerText = questions[4].titles;

                    var answer11 = document.getElementById("ans1");
                    answer11.innerText = questions[4].choices[0];

                    var answer12 = document.getElementById("ans2");
                    answer12.innerText = questions[4].choices[1];

                    var answer13 = document.getElementById("ans3");
                    answer13.innerText = questions[4].choices[2];

                    var answer14 = document.getElementById("ans4");
                    answer14.innerText = questions[4].choices[3];

                    document.getElementById("post").innerHTML = "";
                    document.getElementById("correct").innerHTML = "";
                  });
                wrongAnswer = document
                  .getElementById("ans1")
                  .addEventListener("click", function() {
                    document.getElementById("post").innerHTML = "";
                  });
                wrongAnswer = document
                  .getElementById("ans3")
                  .addEventListener("click", function() {
                    document.getElementById("post").innerHTML = "";
                  });
                wrongAnswer = document
                  .getElementById("ans4")
                  .addEventListener("click", function() {
                    document.getElementById("post").innerHTML = "";
                  });
                rightAnswer = document
                  .getElementById("ans2")
                  .addEventListener("click", function() {
                    document.getElementById("post").innerHTML =
                      "Correct - You've Completed the test!";
                    document.body
                      .appendChild(next1)
                      .addEventListener("click", function() {
                        var questionTag = document.getElementById("questions");
                        questionTag.innerText = questions[3].titles;

                        var answer11 = document.getElementById("ans1");
                        answer11.innerText = questions[3].choices[0];

                        var answer12 = document.getElementById("ans2");
                        answer12.innerText = questions[3].choices[1];

                        var answer13 = document.getElementById("ans3");
                        answer13.innerText = questions[3].choices[2];

                        var answer14 = document.getElementById("ans4");
                        answer14.innerText = questions[3].choices[3];

                        document.getElementById("post").innerHTML = "";
                        document.getElementById("correct").innerHTML = "";
                      });
                  });
              });
          });
      });
  });
