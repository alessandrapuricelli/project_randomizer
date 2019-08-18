// TOPIC
const art_a = [
  { name: 'Fall Season', text_info: 'Poster for the starting of the Fall Season 15th September 2020', images_link: ['https://unsplash.com/photos/lhnOvu72BM8', 'https://unsplash.com/photos/OHPdgstNFGs'] },
  { name: 'Jon Rafman', text_info: 'Jon Rafman January 2020 - May 2020 The exhibition brings together a selection of multimedia installations, tracing the arc of the Canadian artist’s practice from 2011 to the present.', images_link: ['http://tiny.cc/ke19az', 'http://tiny.cc/jf19az'] },
  { name: 'Party', text_info: 'Party / Vernissage July 2019', images_link: ['https://unsplash.com/photos/Bycd2wF5vQU', 'https://unsplash.com/photos/Xaanw0s0pMk', 'https://unsplash.com/photos/v5yPUQYbrcw'] },
  { name: 'Post Internet', text_info: 'Collective Exhibition October 2019. Images: The Importance of Eyebrows by Catharina Sonnenberg', images_link: ['http://tiny.cc/8g19az', 'http://tiny.cc/rh19az', 'http://tiny.cc/oi19az'] },
  { name: 'Signe Pierce', text_info: 'Solo exhibition December 2019. Signe Pierce is an American artist. She has worked in performance, photography, video and digital art.', images_link: ['http://tiny.cc/lk19az', 'http://tiny.cc/4k19az', 'http://tiny.cc/wl19az'] },
  { name: 'Modern Staircases', text_info: 'Exploration of staircases in modern architecture. March 2020', images_link: ['http://tiny.cc/tr19az', 'http://tiny.cc/6s19az'] },
  { name: 'Summer Night Party', text_info: 'June 2020', images_link: ['https://unsplash.com/photos/UKLIuV8rAks', 'https://unsplash.com/photos/2_BZuGgkP4k', 'https://unsplash.com/photos/7jQh3EiS8Bs'] },
  { name: 'Swiss Style Exhibition', text_info: 'October 2019. The International Typographic Style (Swiss Style) has had profound influence on graphic design as a part of the modernist movement, impacting many design-related fields including architecture and art.', images_link: ['http://tiny.cc/sx19az', 'http://tiny.cc/ty19az', 'http://tiny.cc/nz19az'] },
  { name: 'Underground Architecture', text_info: 'Brutalist Architecture today in Europe. September 2019 ', images_link: ['http://tiny.cc/t019az', 'http://tiny.cc/e219az'] },
  { name: 'Wong Ping', text_info: '5th December 2019', images_link: ['http://tiny.cc/o519az', 'http://tiny.cc/0619az'] },
]
const art_b = [
  { name: 'Fondazione Prada Milano', text_info: 'Exhibition x. Largo Isarco, 2, 20139 Milano, Italy' },
  { name: 'Gallery House', text_info: 'Exhibition x. Via Carlo Alberto 31, 20021 Milano', images_link: ['https://drive.google.com/open?id=1jKgVSTaHRSDKvA-hRYCtFOa8dNIsEhFm'] },
  { name: 'Kunsthalle Basel', text_info: 'Exhibition x. Steinenberg 7, 4051 Basel' },
  { name: 'Louisiana Museum of Modern Art', text_info: 'Exhibition x. Strandvej 13, 3050 Humlebæk, Denmark' },
  { name: 'Mori Art Museum Tokyo', text_info: 'Exhibition x. 〒106-6150 Tokyo, Minato City, Roppongi, 6 Chome−10−１ 六本木ヒルズ森タワー53階, Japan' },
  { name: 'Museo Nacional Centro de arte Reina Sofia', text_info: 'Exhibition x. Calle de Santa Isabel, 52, 28012 Madrid, Spain' },
  { name: 'Second Chances Gallery', text_info: 'Exhibition x. 1924 Providence Lane, Los Angeles 90017, California, USA', images_link: ['https://drive.google.com/open?id=1uYMG_cG0N2_SNMthQCBMFg51sRC-VFJC'] },
  { name: 'Stedelijk Amsterdam', text_info: 'Exhibition x. Museumplein 10, 1071 DJ Amsterdam, Netherlands' },
  { name: 'Tate Modern London', text_info: 'Exhibition x. Bankside, London SE1 9TG, United Kingdom' },
  { name: 'Vitra Museum', text_info: 'Exhibition x. Charles-Eames-Straße 2, 79576 Weil am Rhein, Germany' },
]
const fashion_a = [
  { name: 'Asics', text_info: 'www.asics.com', images_link: ['http://tiny.cc/1i39az', 'http://tiny.cc/0k39az', 'http://tiny.cc/tm39az', 'https://seekvectorlogo.net/asics-vector-logo-svg/'] },
  { name: 'Balenciaga', text_info: 'www.balenciaga.com', images_link: ['https://www.balenciaga.com/66/41/41897040mo_14_a_g.jpg', 'https://www.balenciaga.com/66/54/54167441os_14_a_g.jpg', 'https://www.balenciaga.com/66/39/39971168lc_14_a_g.jpg', 'http://tiny.cc/gv39az'] },
  { name: 'Contemporary Maniac', text_info: 'New fashion brand based in Copenhagen wwww.contemporarymaniac.com', images_link: ['https://unsplash.com/photos/cp-VMJ-mdKs', 'https://unsplash.com/photos/hKwQ_Gu1bSk', 'https://unsplash.com/photos/sRZ-ThDqbe8', 'https://drive.google.com/open?id=1XaC2gueLAoyYjkwBFufHyvDT8OCsx-QB'] },
  { name: 'Dazed Beauty', text_info: 'Art Photography Fashion Magazine by Dazed Digital www.dazeddigital.com/beauty', images_link: ['http://tiny.cc/x139az', 'http://tiny.cc/s239az', 'http://tiny.cc/w339az'] },
  { name: 'Gucci', text_info: 'www.gucci.com', images_link: ['https://tinyurl.com/y45j8khg', 'https://tinyurl.com/y3wflwvj', 'https://tinyurl.com/y53g5l8v', 'https://tinyurl.com/y5drxrd4'] },
  { name: 'Neural', text_info: 'New fashion brand based in Stockholm wwww.neural.com', images_link: ['https://unsplash.com/photos/k1vmVCuxLss', 'https://unsplash.com/photos/QY3MlQzMKOU', 'https://unsplash.com/photos/lGG_vMu4fS4', 'https://drive.google.com/open?id=1S6jiQsib0eVAooF_ZVemQB29nrlI8eay'] },
  { name: 'Nike', text_info: 'www.nike.com', images_link: ['https://tinyurl.com/yxwgn4yd', 'https://tinyurl.com/y437m7rj', 'https://tinyurl.com/yy3wqfcw', 'https://tinyurl.com/y3w3vcqe'] },
  { name: 'Nike secret shoes launch', text_info: 'www.nike.com', images_link: ['https://tinyurl.com/y3w3vcqe'] },
  { name: 'Prada', text_info: 'www.prada.com', images_link: ['https://tinyurl.com/y5amapls', 'https://tinyurl.com/y2rofuh6', 'https://tinyurl.com/y5k8b7t9', 'https://tinyurl.com/yxken9qt'] },
  { name: 'Rarekind Natural Skincare', text_info: 'www.rarekind.com', images_link: ['https://drive.google.com/open?id=1FeiARJDFVVYMQNgl-kJBc9Psto8TpA5A', 'https://drive.google.com/open?id=1TRL3VdMmQjPdUl-iRXDSH7VaXbLF9eAA'] },
]
const fashion_b = [
  { name: 'Advertising', text_info: 'Advertising poster for brand' },
  { name: 'Gallery House', text_info: 'Exhibition x. Via Carlo Alberto 31, 20021 Milano', images_link: ['https://drive.google.com/open?id=1jKgVSTaHRSDKvA-hRYCtFOa8dNIsEhFm'] },
  { name: 'New Collection', text_info: 'Advertising for Brand new collection' },
  { name: 'Party in New York', text_info: 'Brand Party. 9487 Bellevue St., Bronx, NY 10458 7/09/2019' },
  { name: 'Party Elysia Basel', text_info: 'Brand Party @ Elysia. Frankfurt-Strasse 36, 4142 Münchenstein 4/09/2019' },
  { name: 'Fondazione Prada', text_info: 'Brand Party @ Fondazione Prada. Largo Isarco, 2, 20139 Milano MI, Italia 7/9/2019' },
  { name: 'Temporary Store', text_info: 'Brand x temporary store in Zurich. December 2019 place TBA' },
  { name: 'Balenciaga collaboration', text_info: 'Brand x collaboration with Balenciaga. Available on December 2019', images_link: ['https://tinyurl.com/yy5vhs7w', 'https://tinyurl.com/y6xamko7', 'https://tinyurl.com/yxaabcrj', 'http://tiny.cc/gv39az'] },
  { name: 'Nike collaboration', text_info: 'Brand x collaboration with Nike. Available on December 2019', images_link: ['https://tinyurl.com/y3hmzo8t', 'https://tinyurl.com/y53kzkj4', 'https://tinyurl.com/y3av6exp', 'https://tinyurl.com/y3w3vcqe'] },
  { name: 'Prada collaboration', text_info: 'Brand x collaboration with Prada. Available on December 2019', images_link: ['https://tinyurl.com/y5amapls', 'https://tinyurl.com/y2rofuh6', 'https://tinyurl.com/yy5o84fw', 'https://tinyurl.com/yxken9qt'] },
]
const music_a = [
  { name: 'AABB', text_info: 'AABB from Belgium. Techno music', images_link: ['https://unsplash.com/photos/JO5Wh3ngbKY', 'https://unsplash.com/photos/2zH2tDtmGro', 'https://unsplash.com/photos/jUwvjOmCTWc'] },
  { name: 'Agar Agar', text_info: 'French electro-pop band agar--agar.bandcamp.com', images_link: ['https://tinyurl.com/y4vmwg2e', 'https://tinyurl.com/y27zj3og', 'http://lolamag.de/wp-content/uploads/2018/08/Agar-Agar-%C2%A9-Andrea-Mae-Perez-2.jpg'] },
  { name: 'Blood Orange', text_info: 'bloodorange.net', images_link: ['https://tinyurl.com/yyb5dbwg', 'https://tinyurl.com/yx8syhhz', 'https://tinyurl.com/y4rt6tec'] },
  { name: 'DJ6', text_info: 'DJ6 from Germany. Electronic music', images_link: ['https://unsplash.com/photos/Ce3O7pK4Ywg', 'https://unsplash.com/photos/hyxQJPRvJlU', 'https://unsplash.com/photos/Gvx1cXeS4xw'] },
  { name: 'DJ Magic', text_info: 'DJ Magic from the Netherlands. Electronic music', images_link: ['https://unsplash.com/photos/m41k1lTzjVM', 'https://unsplash.com/photos/zbUvPw1wUIw', 'https://unsplash.com/photos/iTZOPe7BpTM'] },
  { name: 'Melt!', text_info: 'Melt! is a music festival that change location every year. Line up TBA', images_link: ['https://unsplash.com/photos/DMaOGYRS4_U', 'https://unsplash.com/photos/l28IKbjb7oc', 'https://unsplash.com/photos/xSTQzSLJA4c', 'https://drive.google.com/open?id=1Gl0Q6-y0uLE2i5oJ8R4aUv0cnOgyL2Yd'] },
  { name: 'Fate Club', text_info: 'Party Organisers in different locations. Location TBA', images_link: ['https://unsplash.com/photos/vCbKwN2IXT4', 'https://unsplash.com/photos/dR_hXZBkwXg', 'https://unsplash.com/photos/93BHnsK4PbI', 'https://drive.google.com/open?id=1poCnGUsw_SxvMTNh9fg3J5an-s0ff1B8'] },
  { name: 'Salut C’est Cool', text_info: 'Salut C’est Cool is a group of four French musicians from Paris. www.salutcestcool.com', images_link: ['https://tinyurl.com/y688ywx2', 'https://tinyurl.com/y385b2sx', 'https://tinyurl.com/y6cj9rgw'] },
  { name: 'Sporting Life', text_info: 'Sporting Life, is an American artist, architect, and record producer from New York City.', images_link: ['https://tinyurl.com/y3kpznfh', 'https://tinyurl.com/y5kwcw7d'] },
  { name: 'Tyler, the Creator', text_info: 'Tyler, the Creator, is an American rapper, singer, songwriter, record producer, music video director, fashion designer and graphic designer.golfwang.com', images_link: ['https://tinyurl.com/yxhqq5on', 'https://tinyurl.com/y2u3cq88', 'https://i.ytimg.com/vi/C67JLkuvVx4/maxresdefault.jpg'] },
]
const music_b = [
  { name: 'Tour 2020', text_info: 'dates TBA' },
  { name: 'Concert Paris', text_info: 'MAY 3 2019@ Botanique, Paris 7 PM – 11 PM' },
  { name: 'Elysia Basel', text_info: 'Event @ Elysia Frankfurt-Strasse 36, 4142 Münchenstein 14/10/2019' },
  { name: 'Kaserne Basel', text_info: 'Event Klybeckstrasse 1b, 4057 Basel 12/12/2019 7 PM – 11 PM' },
  { name: 'New CD', text_info: 'Artist / Event New CD / compilation launch' },
  { name: 'Secret Party', text_info: 'Date and Place TBA' },
  { name: 'Jakobshalle Basel', text_info: '7', images_link: 'Event St. Jakobs-Strasse 390, 4052 Basel 10/12/2019' },
  { name: 'the Gate', text_info: 'Event @ the Gate 105 Guild Street, E98 2WA, London 05/06/2020' },
  { name: 'Tower Copenaghen', text_info: 'Event @ Tower Ådalen 58, 1900 Copenaghen 19/11/2019' },
  { name: 'The King Budapest', text_info: 'Event @ The King Csabai kapu 54, 1044 Budapest 15/11/2019' },
];

const topic = [art_a, art_b, fashion_a, fashion_b, music_a, music_b];

// COLORS
const mono = ['Black and White'];
const duotone = ['#38437e + #2c4dfb + #6f85fc', '#7f5b36 + #fd9232 + #fdb46d', '#627f41 + #a8fd4e + #c3fd84', '#7f3e3f + #fc2028 + #fd7e7f', '#74febb + #5fdde7 + #428efb', '#e2b6b8 + #652d30 + #b29091', '#bca8fc + #8b8fe5 + #9ab7fc', '#fc5936 + #e53630 + #fc3c72', '#f3fd53 + #e7d84a + #fedd5a', '#68f3fe + #5fe7cb + #74febb'];
const tritone = ['#fff10e + #d0e234 + #802cff', '#ff00ff + #3a2ae2 + #f7101c', '#ff0000 + #f88825 + #fb1998', '#ff1482 + #8768ff + #ed28f7', '#112378 + #fb0c1b + #32dc83', '#21de80 + #cd7df8 + #cd30dc', '#00b28b + #a2775e + #ef9228', '#9b8fff + #cb9a3d + #2bf582', '#ff7700 + #e91b4b + #af28ec', '#98eaf2 + #330b0c + #9b92fc'];

const colors = [mono, duotone, tritone];

// TYPOS
const serif = ['Baskerville', 'Big caslon', 'Bodoni', 'Charter', 'Cochin', 'Didot', 'Georgia', 'Kai', 'Minion', 'Times New Roman'];
const sans_serif = ['Arial', 'Arial Black', 'Arial Rounded', 'Avenir', 'Din alternate', 'Futura', 'Gill', 'Helvetica neue', 'Univers lt 55', 'Verdana'];
const crazy = ['Andale mono', 'Brush Script', 'Birch', 'Courier', 'Hobo', 'Impact', 'OCR A', 'Optima', 'Zapfino', 'Apple Color Emoji'];

const typo = [serif, sans_serif, crazy];

const settings = { topic, colors, typo }

const settings_order = ['time', 'style', 'tools', 'colors', 'typo', 'topic', 'recap', 'links']

let settings_counter = 0;

// console.log(settings);


let level;
let points;
// // initialize the menu
function init() {
  // get the level
  level = get_level();
  const level_btns = document.getElementsByClassName('btns')[0].children;
  for (const el of level_btns) {
    const attribute = el.getAttribute('class');
    // console.log(attribute, el.dataset.level);
    if (el.dataset.level === level) {
      el.setAttribute('class', attribute + ' dark');
    } else {
      el.setAttribute('class', attribute + ' lighten');
    }
  }
}

init();


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

  if (settings_counter === 0) {
    // first hide the level menu
    $('.level').hide('fast');
    // hide the random button
    $('#random').hide('fast');

    set_timers(level);
  }
  // remove the older
  if (settings_counter > 0) {

    // remove older setting
    document.getElementById(settings_order[settings_counter - 1]).style.visibility = 'collapse';
  }

  // show the new setting
  const id = settings_order[settings_counter];
  const setting = document.getElementById(id);
  setting.style.visibility = 'visible';

  if (id === 'recap') {
    // get all the settings

    get_settings();
  }

  // when we reach the last setting we change the next button to start
  if (settings_counter >= settings_order.length - 1) {
    const next_btn = document.getElementById('next');
    console.log(next_btn);
    next_btn.removeAttribute("onclick");
    next_btn.innerHTML = '<a href="../randomizer/index.html">START!</a>';
  }

  settings_counter++;
}



function random() {
  randomize_settings();
  settings_counter = 6;
  if (settings_counter === 6) {
    // first hide the level menu
    $('.level').hide('fast');
    // hide the random button
    $('#random').hide('fast');

    set_timers(level);
  }
  next_settings();
}

const beginner = [35, 40, 45];
const intermediate = [20, 25, 30];
const expert = [5, 10, 15];
const timings = { beginner, intermediate, expert }

function set_timers(level) {
  const timers = document.getElementById('time').children
  switch (level) {
    case 'beginner':
      // console.log(`I'm a beginner`);
      assign_time(timings[level]);
      break;
    case 'intermediate':
      // console.log(`I'm a intermediate`);
      assign_time(timings[level]);
      break;
    case 'expert':
      assign_time(timings[level]);
      // console.log(`I'm an expert`);
      break;
    default:
      // console.log('something went wrong you got assigned beginner!');
      assign_time(timings['beginner']);
      break;

  }

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
  switch (result['topic']) {
    case 'art':
      result['topic'] = { art: [get_random_element_from_array(art_a), get_random_element_from_array(art_b)] };
      break;
    case 'music':
      result['topic'] = { music: [get_random_element_from_array(music_a), get_random_element_from_array(music_b)] };
      break;
    case 'fashion':
      result['topic'] = { fashion: [get_random_element_from_array(fashion_a), get_random_element_from_array(fashion_b)] };
      break;
  }

  switch (result['typo']) {
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

  switch (result['colors']) {
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

  // console.log(result);

  generate_recap(result);

  generate_links(result['topic']);

  // const json = JSON.stringify(result);
  // console.log(result);
  // set_cookie(cookie_names.settings, json, 365);
  write_settings_cookie(result);
  // now we should write them to a cookie to be read in the next page

}

function generate_recap(settings) {
  const parent = document.getElementById('recap');


  Object.keys(settings).forEach(key => {
    let setting = settings[key];
    const setting_name = key;
    if (setting_name === 'topic') {
      // console.log(setting);
      const topic_name = Object.keys(setting)[0];
      // console.log(setting[topic_name][0]);
      setting = topic_name + ': ' + setting[topic_name][0].name + ' + ' + setting[topic_name][1].name;
    }

    // draw the recap title
    const recap_title = document.createElement('div');
    recap_title.setAttribute('class', 'info-text dark center-item');
    recap_title.innerText = setting_name;
    parent.appendChild(recap_title);


    // draw the recap content
    const recap_content = document.createElement('div');
    recap_content.setAttribute('class', 'info-text center-item');
    if (setting_name === 'colors') {
      // console.log('colors!');
      setting = make_colored_spans(setting);
      recap_content.innerHTML = setting;
    } else {

      recap_content.innerText = setting;
    }
    parent.appendChild(recap_content);
  })

  const level = get_cookie(cookie_names.level);
  const level_btn = document.createElement('div');
  level_btn.setAttribute('class', 'info-text dark center-item');
  level_btn.innerText = level;
  parent.appendChild(level_btn);

}

function generate_links(topic) {

  const link_a = document.getElementById('links-a');
  const link_b = document.getElementById('links-b');

  const topic_name = Object.keys(topic)[0];
  // console.log(topic_name, topic[topic_name]);
  const topic_a = topic[topic_name][0];
  const topic_b = topic[topic_name][1];
  let idx = 0;
  for (const el of topic[topic_name]) {
    const topic_head = document.createElement('p');
    topic_head.setAttribute('class', 'links-big');
    topic_head.innerText = el.name + '\ntext content:';
    if (idx === 0) link_a.appendChild(topic_head);
    else link_b.appendChild(topic_head);

    const topic_txt = document.createElement('p');
    topic_txt.innerText = el.text_info;
    if (idx === 0) link_a.appendChild(topic_txt);
    else link_b.appendChild(topic_txt);


    console.log(el.images_link);
    if (el.images_link === undefined) {
      idx++;
      continue;
    }
    const links_head = document.createElement('p')

    links_head.setAttribute('class', 'links-big');
    links_head.innerText = 'images links:';
    if (idx === 0) link_a.appendChild(links_head);
    else link_b.appendChild(links_head);

    



    const list = document.createElement('ul');

    let link_idx = 0;
    for (const link of el.images_link) {
      const list_el = document.createElement('li');
      const links_txt = document.createElement('a');
      links_txt.href = link;
      links_txt.innerText = link_idx + '↗';
      list_el.appendChild(links_txt);
      list.appendChild(list_el);
      link_idx++;
    }

    if (idx === 0) link_a.appendChild(list);
    else link_b.appendChild(list);

    idx++;
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
