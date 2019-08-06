// cookies stuff
const cookie_names = {
    money: 'money',
    settings: 'settings',
    level: 'level'
}


function set_cookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const write_to_cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = write_to_cookie;
}

function get_cookie(cname) {
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
    let money = get_cookie(cookie_names.money);
    if(money === '') money = 0
    document.getElementById('money').innerText = money + ' POINTS';
}
