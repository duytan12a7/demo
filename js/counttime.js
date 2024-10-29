const yourDate = new Date("2022-05-19T21:16:02");
//const yourDate = new Date("2022-12-25T22:22:22");
// const yourDate = new Date("2022-12-31T22:22:22");
// const yourDate = new Date("2023-01-14T21:15:00");
// const yourDate = new Date("2023-02-01T21:15:00");
// const yourDate = new Date("2023-03-15T02:45:00");
music = ['ido', 'noinaycoanh', 'nguoiamphu', '911'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");
      var rootMinus = document.querySelector("minus");

      //document.querySelector("anni").textContent = `Ngày gặp gần nhất
//${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" NGÀY";

      function olock() {
            var today = new Date(),
			day = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
			totalMinus = ((day*24)*60) +(hrs*60) + min;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
			rootMinus.textContent = `${totalMinus} PHÚT`;
			console.warn(totalMinus);
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
