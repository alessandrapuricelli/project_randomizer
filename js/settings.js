// TOPIC
const art = ["Wong Ping: Golden Shower @ KUNSTHALLE BASEL", "Lizzie Fitch + Ryan Trecartin: Whether Line @ FONDAZIONE PRADA", "Wagner + De Burca: You Are Seeing Things @ STEDELIJK"]
const fashion = ["BALENCIAGA F/W 2020", "PRADA F/W 2020", "GANNI F/W 2020"]
const music = ["BLOOD ORANGE 2020 TOUR", "SALUT C'EST COOL CONCERT", "NOISE GATE: GIANT SWAN & S S S S @ H3K Basel"]

const topic = [art, fashion, music];

// COLORS
const monochrome = ['B / W'];
const duotone = ['B / W + col1', 'B / W + col2', 'B / W + col3', 'B / W + col4', 'B / W + col5', 'B / W + col6', 'B / W + col7', 'B / W + col8'];
const tritone = ['B / W + col1 + col1', 'B / W + col2 + col2', 'B / W + col3 + col3', 'B / W + col4 + col4', 'B / W + col5 + col5', 'B / W + col6 + col6', 'B / W + col7 + col7', 'B / W + col8 + col8'];

const colors = [monochrome, duotone, tritone];

// TYPOS
const serif = ['serif1', 'serif2', 'serif3', 'serif4', 'serif5', 'serif6'];
const sans_serif = ['sans_serif1', 'sans_serif2', 'sans_serif3', 'sans_serif4', 'sans_serif5', 'sans_serif6'];
const crazy = ['crazy1', 'crazy2', 'crazy3', 'crazy4', 'crazy5', 'crazy6'];

const typo = [serif, sans_serif, crazy];

const settings = { topic, colors, typo }

console.log(settings);



// initialize the menu
function init() {
  // clearInterval(timer);
  // $('#timer').hide('fast');
  set_initial_settings();
}

init();


function go_to_settings(el) {
  // first hide the level menu
  $('.level').hide('fast', () => show_settings(el.dataset.level))
}

function show_settings(level) {
  const filters = document.getElementsByClassName('filters');
  for (const el of filters) {
    el.style.visibility = 'visible'
  }
  set_timers(level);
}



function set_initial_settings() {
  console.log('set random settings');
  const ids = ['topic', 'colors', 'typo'];
  for (const id of ids) {
    const setting = document.getElementById(id).children;
    // console.log(setting);
    let idx = 0;
    for (const item of setting) {
      // console.log(item);
      const label = $(item).find('label.radio');
      // console.log(label);
      if (label.length > 0) {
        const txt = get_random_element_from_array(settings[id][idx]);
        // console.log(txt);
        $(label).text(txt);
        idx++;
        if (idx > 2) break;
      }
    }
  }
}

const beginner = [180, 240, 300];
const intermediate = [60, 90, 120];
const expert = [20, 30, 40];
const timings = { beginner, intermediate, expert }

function set_timers(level) {
  const timers = document.getElementById('time').children
  switch (level) {
    case 'beginner':
      console.log(`I'm a beginner`);
      assign_time(timings[level]);
      break;
    case 'intermediate':
      console.log(`I'm a intermediate`);
      assign_time(timings[level]);
      break;
    case 'expert':
      assign_time(timings[level]);
      console.log(`I'm an expert`);
      break;
    default:
      console.log('something went wrong you got assigned beginner!');
      assign_time(timings['beginner']);
      break;

  }

  randomize_settings();

  function assign_time(arr) {
    const minutes = ' "';//cambia questo per cambiare cosa viene scritto dopo i minuti
    let idx = 0
    for (const child of timers) {
      const label = $(child).find('label.radio');
      if (label.length > 0) {
        label.text(arr[idx] + minutes);
        idx++;
      }
    }
  }
}

function set_setting(arr) {
  const rnd_idx = Math.floor(Math.random() * arr.length);
  const btn = arr[rnd_idx];
  $(btn)[0].control.checked = 'true';
}

function randomize_settings() {

  const ids = [
    'topic',
    'tools',
    'colors',
    'typo',
    'style',
    'time'
  ]

  for (const id of ids) {
    const children = document.getElementById(id).children;
    const inputs = $(children).find('label.radio');

    const input = get_random_element_from_array(inputs);

    input.control.checked = true;
    // for (const child of children) {

    //   // console.log(item);
    //   const input = $(child).find('label.radio');
    //   if (input.length > 0) {
    //     // const txt = get_random_element_from_array(settings[id][idx]);
    //     // // console.log(txt);
    //     // $(input).text(txt);
    //     // idx++;
    //     // if (idx > 2) break;
    //   }
    // }
  }
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


// // get the settings
// function start() {
//   const labels = document.getElementsByTagName('label');
//   const settings = []
//   for (const label of labels) {
//     if (label.control.checked) {
//       settings.push(label.innerText);
//     }
//   }
//   const dispaly_timer = document.getElementById('timer-min');
//   const timer_text = document.getElementById('timer-text')
//   const minutes = parseInt(settings[settings.length - 2]);
//   const break_time = parseInt(settings[settings.length - 1]);
//   // const motivation_txt = '\nW O R K !!\nW O R K !!\nW O R K !!\n'
//   const motivation_txt = '\n💪 ! W O R K ! ! W O R K ! ! W O R K ! ! W O R K ! 💪\n'
//   timer_text.innerText = motivation_txt;
//   // $('#timer').show('fast', () => start_timer(minutes + break_time, dispaly_timer));
//   start_timer(minutes + break_time, dispaly_timer)
//   $('#timer').show('fast');
// }

// function start_timer(duration, display) {
//   let minutes = duration - 1;
//   let seconds = 59;
//   let cents = 99
//   display.innerText = duration + ":00:00";
//   timer = setInterval(function () {
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     cents = cents < 10 ? "0" + cents : cents;

//     display.innerText = minutes + ":" + seconds + ":" + cents;
//     cents = parseInt(cents);
//     seconds = parseInt(seconds);
//     cents--;
//     if(cents < 0){
//       seconds--;
//       cents = 99
//     }
//     if (seconds < 0) {
//       minutes--;
//       seconds = 59
//     }
//     if (minutes < 0) {
//       clearInterval(timer);
//       // do something when timer is 0
//     }
//   }, 10);
// }