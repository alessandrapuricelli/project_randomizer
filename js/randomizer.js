let timer;



const time_to_money = {
    "20": 150,
    "30": 120,
    "40": 80,
    "60": 60,
    "90": 45,
    "120": 30,
    "180": 20,
    "240": 10,
    "300": 5,
}

function init() {

    clearInterval(timer);
    const settings = JSON.parse(get_cookie(cookie_names.settings));
    console.log(settings);
    start_timer(settings.time, document.getElementById('timer'))
    set_info(settings);
}

init();

function set_info(settings) {
    const info = document.getElementById('info');
    let info_text = ''
    Object.keys(settings).forEach(key => {
        info_text += key +': '+settings[key] + '\n';
    })
    info.innerText = info_text;
}

function start_timer(duration, display) {
    let minutes = duration - 1;
    let seconds = 59;
    let cents = 99;
    const initial_value = parseInt(get_cookie(cookie_names.money))
    let earnings = isNaN(initial_value) ? 0 : initial_value;
    const money_per_minute = time_to_money[duration.toString()];
    console.log(earnings, money_per_minute);
    display.innerText = duration + ":00:00";
    timer = setInterval(function () {
        seconds = seconds < 10 ? "0" + seconds : seconds;
        cents = cents < 10 ? "0" + cents : cents;

        display.innerText = minutes + ":" + seconds + ":" + cents;
        cents = parseInt(cents);
        seconds = parseInt(seconds);
        cents--;
        if (cents < 0) {
            seconds--;
            cents = 99
        }
        if (seconds < 0) {
            minutes--;
            seconds = 59
            earnings += money_per_minute;
            document.getElementById('money').innerText = earnings + ' CHF'
            set_cookie(cookie_names.money, earnings, 365);
        }
        if (minutes < 0) {
            clearInterval(timer);
            // do something when timer is 0
        }
    }, 10);
}