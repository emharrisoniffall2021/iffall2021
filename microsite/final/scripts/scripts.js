$(document).ready(function() {

                $(".hamburger").click(function(){
                    $("#main-nav").toggleClass("open");
                    console.log("Toggled the class!");
                });


});


// function myFunction() {
//     var x = document.getElementById("links");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }