// September 2nd
const birthday = new Date("September 2, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        document.getElementById("countdown").style.display = "none";

        message.innerHTML = "🎉 HAPPY BIRTHDAY!! 🎂";

        clearInterval(timer);

        return;
    }

    days.innerHTML = Math.floor(distance/(1000*60*60*24));

    hours.innerHTML = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    minutes.innerHTML = Math.floor((distance%(1000*60*60))/(1000*60));

    seconds.innerHTML = Math.floor((distance%(1000*60))/1000);

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);
