function vid1() {
   var video = document.getElementById("mediavid"); video.src = ("medias/Morshu.mp4");
}
function vid2() {
   var video = document.getElementById("mediavid"); video.src = ("medias/sigma.mp3");
}
function vid3() {
   var video = document.getElementById("mediavid"); video.src = ("medias/bdp.mp4");
}
function vid4() {
   var video = document.getElementById("mediavid"); video.src = ("medias/memeforest.wav");
}
function vid5() {
   window.location.replace("https://lookeeloo-vid.web.app/");
}
function vid6() {
   window.location.replace("https://zeanfender11.wixsite.com/yousul");
}
function custom_video(event) {
   var reader = new FileReader();
   reader.onload = function() {
      var video = document.getElementById("mediavid"); video.src = reader.result;
   }
   reader.readAsDataURL(event.target.files[0]);
 }
function loadlink() {
   link = prompt("Enter Video Link");
   document.getElementById("mediavid").src = link;
}