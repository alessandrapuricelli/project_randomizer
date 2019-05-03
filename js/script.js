let timer;

const art = ["Wong Ping: Golden Shower @ KUNSTHALLE BASEL", "Lizzie Fitch + Ryan Trecartin: Whether Line @ FONDAZIONE PRADA", "Wagner + De Burca: You Are Seeing Things @ STEDELIJK"]
const fashion = ["BALENCIAGA F/W 2020", "PRADA F/W 2020", "GANNI F/W 2020"]
const music = ["BLOOD ORANGE 2020 TOUR", "SALUT C'EST COOL CONCERT", "NOISE GATE: GIANT SWAN & S S S S @ H3K Basel"]

const institutions = [art, fashion, music]

function init() {
  clearInterval(timer);
  $('#timer').hide('fast');
  set_random_settings();
}

init();

// get the settings
function start() {
  const labels = document.getElementsByTagName('label');
  const settings = []
  for (const label of labels) {
    if (label.control.checked) {
      settings.push(label.innerText);
    }
  }
  const dispaly_timer = document.getElementById('timer-min');
  const timer_text = document.getElementById('timer-text')
  const minutes = parseInt(settings[settings.length - 2]);
  const break_time = parseInt(settings[settings.length - 1]);
  // const motivation_txt = '\nW O R K !!\nW O R K !!\nW O R K !!\n'
  const motivation_txt = '\n💪 ! W O R K ! ! W O R K ! ! W O R K ! ! W O R K ! 💪\n'
  timer_text.innerText = motivation_txt;
  // $('#timer').show('fast', () => start_timer(minutes + break_time, dispaly_timer));
  start_timer(minutes + break_time, dispaly_timer)
  $('#timer').show('fast');
}

function start_timer(duration, display) {
  let minutes = duration - 1;
  let seconds = 59;
  let cents = 99
  display.innerText = duration + ":00:00";
  timer = setInterval(function () {
    seconds = seconds < 10 ? "0" + seconds : seconds;
    cents = cents < 10 ? "0" + cents : cents;

    display.innerText = minutes + ":" + seconds + ":" + cents;
    cents = parseInt(cents);
    seconds = parseInt(seconds);
    cents--;
    if(cents < 0){
      seconds--;
      cents = 99
    }
    if (seconds < 0) {
      minutes--;
      seconds = 59
    }
    if (minutes < 0) {
      clearInterval(timer);
      // do something when timer is 0
    }
  }, 10);
}

function set_random_settings() {

  // set the name of the settings
  const setting = document.getElementById('setting').children;
  let idx = 0;
  for (const child of setting) {
    const label = $(child).find('.btn label');
    if (label.length > 0) {
      $(label).text(get_random_element_from_array(institutions[idx]));
      idx++;
      if (idx > 2) break;
    }
  }

  // get the time settings
  const classes = ['setting', 'time', 'break'];
  for (const class_name of classes) {
    const this_class = document.getElementById(class_name).children;
    let btns = [];
    for (const child of this_class) {
      const btn = $(child).find('.btn label');
      if (btn.length > 0) {
        // avoid empty divs
        btns.push(btn)
        if (btns.length >= 3) {
          set_setting(btns);
          btns = []
        }
      }
    }
  }
}

function set_setting(arr) {
  const rnd_idx = Math.floor(Math.random() * arr.length);
  const btn = arr[rnd_idx];
  $(btn)[0].control.checked = 'true';
}



function fill_array(string, item_num) {
  const result = []
  for (let i = 0; i < item_num; i++)result.push(string + i);
  return result
}

function get_random_element_from_array(arr) {
  const rnd_idx = Math.floor(Math.random() * arr.length);
  return arr[rnd_idx];
}