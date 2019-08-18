let points = parseInt(get_cookie(cookie_names.earned_points));
console.log(points);
let timer;

let load_animation;

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
            // finish();
            clearInterval(timer);
            const motivation_text = 'Oh no, you failed!\nYou lost the possibility to publish your poster, and you will not get the points.\nBe more careful next time. Other designers are publishing instead of you.\nYou need to make a new poster. Believe in yourself!'
            finish(motivation_text);
        }
    }, 10);
}
const timer_div = document.getElementById('timer');
start_timer(3, timer_div);

function finish(txt) {
    console.log(txt);
    const motivation = document.getElementById('motivation');
    motivation.style.display = 'none';
    const finish_div = document.getElementById('finish-text');
    finish_div.innerText = txt;
    finish_div.style.display = 'flex';
    timer_div.style.display = 'none';

    const publish = document.getElementById('publish');
    publish.style.display = 'none';

    const home_btn = document.getElementById('home')
    home_btn.style.display = 'flex'
}

function make_caption() {
    const settings = JSON.parse(read_settings());
    const level = get_cookie(cookie_names.level)
    let info_text = '';
    info_text += level + '\n\n'
    Object.keys(settings).forEach(key => {
        let setting = settings[key];
        if (key === 'topic') {
            const topic_name = Object.keys(setting)[0];
            setting = topic_name;
        } else if (key === 'time') {
            setting += ' minutes';
        }
        info_text += setting + '\n\n';
    })
    return info_text
}

/*

888888888888  88        88  88b           d88  88888888ba   88           88888888ba
     88       88        88  888b         d888  88      "8b  88           88      "8b
     88       88        88  88`8b       d8'88  88      ,8P  88           88      ,8P
     88       88        88  88 `8b     d8' 88  88aaaaaa8P'  88           88aaaaaa8P'
     88       88        88  88  `8b   d8'  88  88""""""8b,  88           88""""88'
     88       88        88  88   `8b d8'   88  88      `8b  88           88    `8b
     88       Y8a.    .a8P  88    `888'    88  88      a8P  88           88     `8b
     88        `"Y8888Y"'   88     `8'     88  88888888P"   88888888888  88      `8b


*/


$('#img-loader').on('change', function (event) {
    // visualize loaded image
    event.preventDefault();
    var file = event.target.files[0];
    // console.log(file);
    var file_reader = new FileReader();


    // stop timer

    clearInterval(timer);
    timer_div.style.display = 'none';

    const publish = document.getElementById('publish');
    publish.style.display = 'none';

    file_reader.onload = function (event_2) {

        event_2.preventDefault();
        // console.dir(event_2);
        $('#loaded-image').attr('src', event_2.target.result);

        timer_div.style.display = 'none';

        const fraction = Math.PI / 50;
        let counter = 1;
        load_animation = setInterval(() => {
            let motivation_div = document.getElementById('motivation');
            motivation_div.innerText = 'Loading to the Cloud ☁️...'
            const alpha = (Math.sin(counter) + 1) / 2;
            motivation_div.style.color = 'rgba(0, 0, 0, ' + alpha + ')'
            counter += fraction;
        }, 20);




        const publish = document.getElementById('publish');
        publish.style.display = 'none';
        // console.log(event_2.target);
        post_image();
        // assign points

        // show text with congrtulation and option to do a new poster
    };

    file_reader.readAsDataURL(file);


});

function post_image() {
    const form_data = new FormData();
    const file_field = document.querySelector('input[type="file"]');
    const caption = make_caption(); // here I need to add a caption that will be published on tumblr
    form_data.append('caption', caption);
    form_data.append('image', file_field.files[0]);
    const options = {
        method: 'POST',
        body: form_data,
        mode: 'cors', // no-cors, cors, *same-origin
    }
    // Remove 'Content-Type' header to allow browser to add
    // along with the correct 'boundary'
    // delete options.headers['Content-Type'];
    //https://publish-poster.glitch.me/post
    //https://my-nodejs-project.alessandrapuricelli.now.sh/post my-nodejs-project.alessandrapuricelli.now.sh
    //http://127.0.0.1:5000/post
    fetch('https://publish-to-tumlr.herokuapp.com/post', options)
        .then(response => {
            console.log(response);
            if (response.status === 500) {
                error_handling()
            }
            return response.text()
        })
        .then(response => {
            // console.log(response);
            const motivation = document.getElementById('motivation');
            motivation.style.display = 'none';
            clearInterval(load_animation)
            const finish_text = '<p>Thank you for your poster! Be proud of yourself!<br>Now you can finally use your poster to compete with other designers like you!<br>Now don’t waste time!<br>Make a new poster!<br>You can become successful!<br>Your poster can be seen <a href="' + response + '" target="_blank" rel="noopener noreferrer">HERE</a></p>';
            // const motivation = document.getElementById('motivation');
            // motivation.innerHTML = finish_text;
            const finish_div = document.getElementById('finish-text');
            finish_div.innerHTML = finish_text;
            finish_div.style.display = 'flex';

            const home_btn = document.getElementById('home')
            home_btn.style.display = 'flex';
            let user_points = get_cookie(cookie_names.points);
            console.log(user_points);
            user_points = user_points === null ? 0 : user_points;
            points += parseInt(user_points);
            set_cookie(cookie_names.points, points);
            set_money_div()
        })
        .catch(error => console.error('Error:', error))
}


// const speed = 100;
