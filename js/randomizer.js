let timer;
let settings;


const time_to_points = {
    "5": 200,
    "10": 150,
    "15": 100,
    "20": 70,
    "25": 50,
    "30": 30,
    "35": 20,
    "40": 10,
    "45": 5,
}

const extra_points = {
    beginner: 5,
    intermediate: 10,
    expert: 20
}

function init() {

    clearInterval(timer);
    settings = JSON.parse(read_settings());
    start_timer(settings.time, document.getElementById('timer'))
    set_info(settings);
}

init();

function set_info(settings) {
    const info = document.getElementById('info');
    let info_text = '';
    Object.keys(settings).forEach(key => {
        let setting = settings[key];
        if (key === 'topic') {
            const topic_name = Object.keys(setting)[0];
            setting = topic_name + ' >> ' + setting[topic_name][0].name + ' + ' + setting[topic_name][1].name;
          }
        info_text += key + ': ' + setting + '\n';
    })
    info.innerText = info_text;
}

let timer_done = false;
let pause = false;
function start_timer(duration, display) {
    let minutes = duration - 1;
    let seconds = 59;
    let cents = 99;
    // const initial_value = parseInt(get_cookie(cookie_names.money))
    // let earnings = isNaN(initial_value) ? 0 : initial_value;
    display.innerText = duration + ":00:00";
    timer = setInterval(function () {
        seconds = seconds < 10 ? "0" + seconds : seconds;
        cents = cents < 10 ? "0" + cents : cents;

        display.innerText = minutes + ":" + seconds + ":" + cents;
        cents = parseInt(cents);
        seconds = parseInt(seconds);
        if (!pause) {
            cents--;
            if (cents < 0) {
                seconds--;
                cents = 99
            }
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }
            if (minutes < 0) {
                // if timer done is set to true the user doesn't get any extra points for being faster
                timer_done = true;
                finish();
            }
        }
    }, 10);
}

function finish() {

    clearInterval(timer);
    // this should e done when the poster has been published
    // find a way to transmit the poits to next page, maybe use localStorage
    let points = 0;
    const level = get_cookie(cookie_names.level);
    if (!timer_done) {
        points += extra_points[level];
    }
    points += time_to_points[settings.time];

    console.log(points);
    // set_cookie(cookie_names.points, points, 365);
    // console.log(window.location.origin);
    set_cookie(cookie_names.earned_points, points);
    window.location.href = window.location.origin + '/publish/index.html';
}

function quit(){
    pause = true;
    document.getElementById('quit').style.display = 'grid';
}

function resume(){
    pause = false;
    document.getElementById('quit').style.display = 'none';
}