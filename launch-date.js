$(document).ready(function(){
    var launchYear = "2023",
        launchMonth = "07",
        launchDate = "01",
        launchHour = "00",
        launchMinute = "00",
        launchSecond = "00"
        launchDate = new Date(launchMonth + ' ' + launchDate + "," + launchYear + " " + launchHour + ":" + launchMinute + ":" + launchSecond), // default time is 00:00:00 for midnight
        countdownDate = launchDate.getTime(),
        timeLeft = undefined,
        daysLeft = undefined,
        hoursLeft = undefined,
        minutesLeft = undefined,
        secondsLeft = undefined,
        updateTimer = function(){
          var newTimeLeft = countdownDate - new Date,
          newDaysLeft = Math.floor(newTimeLeft / (1000 * 60 * 60 * 24)),
          newHoursLeft = Math.floor((newTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          newMinutesLeft = Math.floor((newTimeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          newSecondsLeft = Math.floor((newTimeLeft % (1000 * 60)) / 1000);
      
          if(daysLeft != newDaysLeft) {
            $("#clock-days").find(".clock-digits").text(newDaysLeft);
            daysLeft = newDaysLeft;
          }

          if(hoursLeft != newHoursLeft) {
            $("#clock-hours").find(".clock-digits").text(newHoursLeft);
            hoursLeft = newHoursLeft;
          }

          if(minutesLeft != newMinutesLeft) {
              $("#clock-minutes").find(".clock-digits").text(newMinutesLeft);
              minutesLeft = newMinutesLeft
          }

          if(secondsLeft != newSecondsLeft) {
            $("#clock-seconds").find(".clock-digits").text(newSecondsLeft);
            secondsLeft = newSecondsLeft;

          }
        };

        updateTimer();
        setInterval(updateTimer, 1000);
});

