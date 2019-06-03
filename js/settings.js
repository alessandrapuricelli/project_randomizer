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

  // check setting cookie and set it to empty

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
  // set the level as cookie. we will need it later on the next page
  set_cookie(cookie_names.level, level, 365);
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
        label.val(arr[idx])
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



const ids = [
  'topic',
  'tools',
  'colors',
  'typo',
  'style',
  'time'
]

function randomize_settings() {

  for (const id of ids) {
    const children = document.getElementById(id).children;
    const inputs = $(children).find('label.radio');

    const input = get_random_element_from_array(inputs);

    input.control.checked = true;
  }
}

function get_settings() {
  const result = {};
  for (const id of ids) {
    const children = document.getElementById(id).children;
    const inputs = $(children).find('label.radio');

    for (const input of inputs) {
      if(input.control.checked === true){
        result[id] = input.innerText;
        if(id === 'time')result[id] = input.value;
      }
    }    
  }
  console.log(result);
  const json = JSON.stringify(result);
  set_cookie(cookie_names.settings, json, 365);
  // now we should write them to a cookie to be read in the next page

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
