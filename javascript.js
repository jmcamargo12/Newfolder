/*var answer1 = document.getElementById("ans1");
var answer2 = document.getElementById("ans2");
var answer3 = document.getElementById("asn3");
var answer4 = document.getElementById("ans4");

document.getElementById("button").addEventListener("click", function() {
  alert("active");
});
*/

var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    //counter ended, do something here
    return;
  }

  document.getElementById("timer").innerHTML = "Time: [00:" + count + "] "; // watch for spelling
}
//Do code for showing the number of seconds here
