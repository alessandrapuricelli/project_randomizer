// load header and footer
let speed = 0;
speed = 50 + (Math.floor(Math.random() * 3) * 10);
const head = document.getElementById('head')
head.innerHTML = '<marquee scrolldelay="'+speed+'" behavior="alternate" truespeed class="marquee-offset"><a href="/index.html">RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR RANDOM POSTERGENERATOR RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR</a></marquee>';

speed = 50 + (Math.floor(Math.random() * 3) * 10);
const foot = document.getElementById('foot')
foot.innerHTML = '<marquee scrolldelay="'+speed+'" behavior="alternate" truespeed class="marquee-offset"><a href="/index.html">RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR RANDOM POSTERGENERATOR RANDOM POSTER GENERATOR RANDOM POSTER GENERATOR</a></marquee>';



// cookies stuff
const cookie_names = {
    earned_points: 'earned_points',
    points: 'points',
    settings: 'settings',
    level: 'level'
}
const level_names = {
    beginner: 'beginner', intermediate: 'intermediate', expert: 'expert'
}

function set_cookie(item_name, cvalue, exdays) {
    localStorage.setItem(item_name, cvalue)
    // const d = new Date();
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // const expires = "expires=" + d.toUTCString();
    // const write_to_cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // document.cookie = write_to_cookie;
}



function get_cookie(cname) {
    // const name = cname + "=";
    // const ca = document.cookie.split(';');
    // for (let i = 0; i < ca.length; i++) {
    //     let c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //         c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //         return c.substring(name.length, c.length);
    //     }
    // }
    // return "";

    return localStorage.getItem(cname)
}

function write_settings_cookie(json) {
    const formatted_json = JSON.stringify(json)
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const write_to_cookie = cookie_names.settings + "=" + formatted_json + ";" + expires + ";path=/";
    document.cookie = write_to_cookie;

}

function read_settings() {
    const cname = cookie_names.settings;
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}

// function check_cookie(cname) {
//     let cookie = get_cookie(cname);
//     if (cookie != "") {
//         // if there is no cookie write the cookie
//     } else {
//         // else rewrite the cookie
//         cookie = prompt("how many cookies have you eaten in your life?", "10000 or more?");
//         if (cookie != "" && cookie != null) {
//             set_cookie("cookies", cookie, 365);
//             draw_cookies();
//         }
//     }
//     set_text(); // <= same here
// }

// set money div
set_money_div();

function set_money_div() {
    let points = get_cookie(cookie_names.points);
    if (points === '' || points === null || isNaN(points)) points = 0;
    document.getElementById('points').innerText = points + ' POINTS';
}

function erase_points() {
    set_cookie(cookie_names.points, 0, 365);
}

function get_level() {
    const points = get_cookie(cookie_names.points);
    let level;
    if (points >= 500) {
        level = level_names.expert;
    } else if (points < 500 && points >= 100) {
        level = level_names.intermediate;
    } else {
        level = level_names.beginner
    }
    // we also set the level here
    set_cookie(cookie_names.level, level, 365);
    return level;
}

function make_colored_spans(string){
    console.log(string);
    if(string === 'Black and White'){
        return '<span style="color:#000">Black and White</span>';
    }else{
        const colors = string.split(' + ');
        console.log(colors);
        let result = '';
        for (const color of colors) {
           result += '<span style="color:'+color+'">'+color+'&nbsp</span> '
        }
        return result;
    }
}