$(document).ready(function(){
    var launchYear = "2023",
        launchMonth = "07",
        launchDate = "01",
        launchHour = "00",
        launchMinute = "00",
        launchSecond = "00"
        launchDate = new Date(launchMonth + ' ' + launchDate + "," + launchYear + " " + launchHour + ":" + launchMinute + ":" + launchSecond), // default time is 00:00:00 for midnight
        countdownDate = launchDate.getTime(),
        updateTimer = function(){
          var now = new Date,
            timeLeft = countdownDate - now.getTime(),
            daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
          $("#clock-days").find(".clock-digits").text(daysLeft);
          $("#clock-hours").find(".clock-digits").text(hoursLeft);
          $("#clock-minutes").find(".clock-digits").text(minutesLeft);
          $("#clock-seconds").find(".clock-digits").text(secondsLeft);
        };

        updateTimer();
        setInterval(updateTimer, 1000);
});