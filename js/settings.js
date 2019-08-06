// COLORS
const mono = ['B / W'];
const duotone = ['B / W + col1', 'B / W + col2', 'B / W + col3', 'B / W + col4', 'B / W + col5', 'B / W + col6', 'B / W + col7', 'B / W + col8'];
const tritone = ['B / W + col1 + col1', 'B / W + col2 + col2', 'B / W + col3 + col3', 'B / W + col4 + col4', 'B / W + col5 + col5', 'B / W + col6 + col6', 'B / W + col7 + col7', 'B / W + col8 + col8'];

const colors = [mono, duotone, tritone];

// TYPOS
const serif = ['serif1', 'serif2', 'serif3', 'serif4', 'serif5', 'serif6'];
const sans_serif = ['sans_serif1', 'sans_serif2', 'sans_serif3', 'sans_serif4', 'sans_serif5', 'sans_serif6'];
const crazy = ['crazy1', 'crazy2', 'crazy3', 'crazy4', 'crazy5', 'crazy6'];

const typo = [serif, sans_serif, crazy];

const settings = { topic, colors, typo }

const settings_order = ['time', 'style', 'tools', 'colors', 'typo', 'topic', 'recap', 'links']

let settings_counter = 0;

console.log(settings);



// // initialize the menu
// function init() {
//   // clearInterval(timer);
//   // $('#timer').hide('fast');
//   // set_initial_settings();

//   // check setting cookie and set it to empty

// }

// init();


function go_to_settings(el) {
  // first hide the level menu
  $('.level').hide('fast', () => {
    next_settings();
    // show the rest of the footer
    const footer = document.getElementsByClassName('hidden-footer')
    for (const el of footer) {
      el.style.visibility = 'visible'
    }
    const level = el.dataset.level
    // set the level as cookie. we will need it later on the next page
    set_cookie(cookie_names.level, level, 365);
    set_timers(level);
  })
}

function next_settings() {

  // remove the older
  if (settings_counter > 0) {

    // remove older setting
    document.getElementById(settings_order[settings_counter - 1]).style.visibility = 'collapse';
  }

  // show the new setting
  const id = settings_order[settings_counter];
  const setting = document.getElementById(id);
  setting.style.visibility = 'visible';

  if(id === 'recap'){
    // get all the settings

    get_settings();
  }

  // when we reach the last setting we change the next button to start
  if (settings_counter >= settings_order.length - 1) {
    const next_btn = document.getElementById('next');
    next_btn.innerHTML = '<a href="../randomizer/index.html">START!</a>';
  }

  settings_counter++;
}



// function set_initial_settings() {
//   console.log('set random settings');
//   const ids = ['topic', 'colors', 'typo'];
//   for (const id of ids) {
//     const setting = document.getElementById(id).children;
//     // console.log(setting);
//     let idx = 0;
//     for (const item of setting) {
//       // console.log(item);
//       const label = $(item).find('label.radio');
//       // console.log(label);
//       if (label.length > 0) {
//         const txt = get_random_element_from_array(settings[id][idx]);
//         // console.log(txt);
//         $(label).text(txt);
//         idx++;
//         if (idx > 2) break;
//       }
//     }
//   }
// }

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

randomize_settings()

function get_settings() {
  const result = {};
  for (const id of ids) {
    const children = document.getElementById(id).children;
    const inputs = $(children).find('label.radio');

    for (const input of inputs) {
      if (input.control.checked === true) {
        result[id] = input.dataset.setting;
        if (id === 'time') result[id] = input.value;
      }
    }
  }
  // set the combination settings
  switch(result['topic']){
    case 'art':
      result['topic'] = {art: [get_random_element_from_array(art_a), get_random_element_from_array(art_a)]};
      break;
    case 'music':
        result['topic'] = {music: [get_random_element_from_array(music_a), get_random_element_from_array(music_a)]};
      break;
    case 'fashion':
        result['topic'] = {fashion: [get_random_element_from_array(fashion_a), get_random_element_from_array(fashion_a)]};
      break;
  }

  switch(result['typo']){
    case 'serif':
        result['typo'] = get_random_element_from_array(serif);
      break;
    case 'sans-serif':
        result['typo'] = get_random_element_from_array(sans_serif);
      break;
    case 'surprise':
        result['typo'] = get_random_element_from_array(crazy);
      break;
  }

  switch(result['colors']){
    case 'b/w':
        result['colors'] = get_random_element_from_array(mono);
      break;
    case 'similar colors':
        result['colors'] = get_random_element_from_array(duotone);
      break;
    case 'different colors':
        result['colors'] = get_random_element_from_array(tritone);
      break;
  }

  console.log(result);

  generate_recap(result);

  generate_links(result['topic']);

  const json = JSON.stringify(result);
  set_cookie(cookie_names.settings, json, 365);
  // now we should write them to a cookie to be read in the next page

}

function generate_recap(settings){
  const parent = document.getElementById('recap');
  

  Object.keys(settings).forEach(key => {
    let setting = settings[key];
    const setting_name = key;
    if(setting_name === 'topic'){
      console.log(Object.keys(setting));
      setting = Object.keys(setting)[0];
    }

    // draw the recap title
    const recap_title = document.createElement('div');
    recap_title.setAttribute('class', 'info-text dark center-item');
    recap_title.innerText = setting_name;
    parent.appendChild(recap_title)
    
    // draw the recap content
    const recap_content = document.createElement('div');
    recap_content.setAttribute('class', 'info-text center-item');
    recap_content.innerText = setting;
    parent.appendChild(recap_content);
  })

  const level = get_cookie(cookie_names.level);
  const level_btn = document.createElement('div');
  level_btn.setAttribute('class', 'info-text dark center-item');
  level_btn.innerText = level;
  parent.appendChild(level_btn);

}

function generate_links(topic){

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
