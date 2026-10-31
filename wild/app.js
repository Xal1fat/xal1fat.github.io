/* ============================================================
   WILD — shared app.js
   i18n, tour data, hero reveal, rendering, transitions, form
   ============================================================ */
(() => {
  "use strict";

  /* ----------------------------------------------------------
     i18n dictionary
  ---------------------------------------------------------- */
  const I18N = {
    ua: {
      "title.home": "WILD — Тури та експедиції",
      "title.destinations": "Напрямки — WILD",
      "title.about": "Про нас — WILD",
      "title.contact": "Контакти — WILD",

      "nav.home": "Головна",
      "nav.destinations": "Напрямки",
      "nav.about": "Про нас",
      "nav.contact": "Контакти",
      "nav.instagram": "Instagram",
      "nav.facebook": "Facebook",
      "lang.label": "Перемкнути мову",

      "footer.blurb": "Експедиції WILD — це малі групи, дикі місця та дороги, які залишаються з тобою назавжди.",
      "footer.cta": "У дику подорож",

      "hero.cta": "У дику подорож",
      "hero.tagline": "Тури та експедиції дикими місцями",
      "hero.scroll": "Гортайте",
      "hero.sound": "Перемкнути звукові хвилі",

      "home.featuredTitle": "Обране",
      "home.featuredAll": "Всі напрямки",
      "home.intro": "Ми віримо, що справжня подорож починається там, де закінчується асфальт. WILD збирає малі групи, щоб пройти гірськими хребтами, перетнути фіорди й заночувати під зорями — без натовпу, без поспіху, з командою, якій можна довіряти.",

      "destinations.title": "Напрямки",
      "destinations.intro": "Дев'ять маршрутів — від карпатських полонин до фіордів Лофотенських островів. Обирай напрямок, а ми подбаємо про логістику, гідів і безпеку.",

      "card.from": "від $",
      "card.details": "Деталі →",

      "tour.duration": "Тривалість",
      "tour.itinerary": "Маршрут",
      "tour.included": "Що включено",
      "tour.from": "від",
      "tour.perPerson": "за людину",
      "tour.book": "Забронювати тур",
      "tour.back": "← Назад до напрямків",
      "tour.notFoundTitle": "Тур не знайдено",
      "tour.notFoundText": "Схоже, такого маршруту немає. Повернись до напрямків і обери інший.",

      "about.title": "Про нас",
      "about.intro": "WILD почався з однієї подорожі навмання — без плану, з рюкзаком і картою, яку ми забули вдома. Відтоді ми будуємо експедиції так, щоб дикість лишалася дикою, а ти повертався додому з історіями, а не лише з фотографіями.",
      "value1.title": "Малі групи",
      "value1.text": "До десяти людей у групі, щоб кожен маршрут лишався особистим і тихим.",
      "value2.title": "Місцеві гіди",
      "value2.text": "Нас ведуть люди, які виросли в цих горах і знають кожну стежку.",
      "value3.title": "Без сліду",
      "value3.text": "Ми залишаємо місця такими, якими знайшли, і вчимо цього кожного мандрівника.",
      "stat.dest": "напрямків",
      "stat.travellers": "мандрівників",
      "stat.years": "років у дорозі",

      "contact.title": "Контакти",
      "contact.intro": "Розкажи, куди хочеш поїхати — і ми зберемо маршрут під тебе. Заповни форму, і відповімо протягом двох днів.",
      "form.name": "Ім'я",
      "form.namePh": "Як тебе звати",
      "form.email": "Електронна пошта",
      "form.emailPh": "you@example.com",
      "form.tour": "Тур",
      "form.tourNone": "— оберіть тур —",
      "form.message": "Повідомлення",
      "form.messagePh": "Куди і коли хочеш поїхати?",
      "form.submit": "Надіслати",
      "form.errName": "Вкажи ім'я.",
      "form.errEmail": "Вкажи коректну електронну пошту.",
      "form.errMessage": "Напиши кілька слів про подорож.",
      "form.successTitle": "Дякуємо!",
      "form.successText": "Твоє повідомлення надіслано. Ми відповімо протягом двох робочих днів.",
      "contact.reach": "На зв'язку",
      "contact.reachEmail": "hello@wild.tours",
      "contact.reachPhone": "+380 44 000 00 00",
      "contact.follow": "Соцмережі",
      "contact.studio": "Студія",
      "contact.address": "Київ, вул. Січових Стрільців 21",
    },
    en: {
      "title.home": "WILD — Tours & expeditions",
      "title.destinations": "Destinations — WILD",
      "title.about": "About — WILD",
      "title.contact": "Contact — WILD",

      "nav.home": "Home",
      "nav.destinations": "Destinations",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.instagram": "Instagram",
      "nav.facebook": "Facebook",
      "lang.label": "Switch language",

      "footer.blurb": "Every trip is a small group, a wild place, and a road that stays with you long after you come home.",
      "footer.cta": "Let's Get Wild",

      "hero.cta": "Let's Get Wild",
      "hero.tagline": "Tours & expeditions to wild places",
      "hero.scroll": "Scroll",
      "hero.sound": "Toggle sound waves",

      "home.featuredTitle": "Featured",
      "home.featuredAll": "View all",
      "home.intro": "We believe a real journey begins where the asphalt ends. WILD gathers small groups to walk mountain ridges, cross fjords, and sleep under open skies — no crowds, no rush, and a crew you can trust.",

      "destinations.title": "Destinations",
      "destinations.intro": "Nine routes — from the Carpathian highlands to the fjords of Lofoten. Pick a destination and we handle the logistics, the guides, and the safety.",

      "card.from": "from $",
      "card.details": "Details →",

      "tour.duration": "Duration",
      "tour.itinerary": "Itinerary",
      "tour.included": "What's included",
      "tour.from": "from",
      "tour.perPerson": "per person",
      "tour.book": "Book this tour",
      "tour.back": "← Back to destinations",
      "tour.notFoundTitle": "Tour not found",
      "tour.notFoundText": "That route doesn't seem to exist. Head back to destinations and pick another.",

      "about.title": "About",
      "about.intro": "WILD began with one trip taken on a whim — no plan, a backpack, and a map we left at home. Since then we've built expeditions that keep the wild wild, and send you home with stories, not just photos.",
      "value1.title": "Small groups",
      "value1.text": "Up to ten people per group, so every route stays personal and quiet.",
      "value2.title": "Local guides",
      "value2.text": "We're led by people who grew up in these mountains and know every trail.",
      "value3.title": "Leave no trace",
      "value3.text": "We leave places exactly as we found them, and teach every traveller to do the same.",
      "stat.dest": "destinations",
      "stat.travellers": "travellers",
      "stat.years": "years on the road",

      "contact.title": "Contact",
      "contact.intro": "Tell us where you want to go and we'll shape a route around you. Fill in the form and we'll reply within two days.",
      "form.name": "Name",
      "form.namePh": "Your name",
      "form.email": "Email",
      "form.emailPh": "you@example.com",
      "form.tour": "Tour",
      "form.tourNone": "— choose a tour —",
      "form.message": "Message",
      "form.messagePh": "Where and when do you want to go?",
      "form.submit": "Send",
      "form.errName": "Please enter your name.",
      "form.errEmail": "Please enter a valid email.",
      "form.errMessage": "Tell us a few words about your trip.",
      "form.successTitle": "Thank you!",
      "form.successText": "Your message is on its way. We'll get back to you within two working days.",
      "contact.reach": "Reach us",
      "contact.reachEmail": "hello@wild.tours",
      "contact.reachPhone": "+380 44 000 00 00",
      "contact.follow": "Follow",
      "contact.studio": "Studio",
      "contact.address": "Kyiv, 21 Sichovykh Striltsiv St",
    },
  };

  /* ----------------------------------------------------------
     Tour data (original, invented)
  ---------------------------------------------------------- */
  const TOURS = [
    {
      id: "carpathian-ridge",
      illustration: "mountains",
      name: { ua: "Карпатський хребет", en: "Carpathian Ridge" },
      region: { ua: "Карпати, Україна", en: "Carpathians, Ukraine" },
      days: 5,
      price: 420,
      short: {
        ua: "П'ять днів полонинами й хребтами Чорногори — найвищі вершини України та ночі просто неба.",
        en: "Five days across the meadows and ridges of Chornohora — Ukraine's highest summits and nights under open sky.",
      },
      itinerary: [
        { ua: "Старт із Ворохти — підйом на полонину.", en: "Start from Vorokhta — climb to the meadow." },
        { ua: "Перехід хребтом до озера Несамовите.", en: "Ridge traverse to Lake Nesamovyte." },
        { ua: "Сходження на Говерлу та Петрос.", en: "Summit Hoverla and Petros." },
        { ua: "Спуск долиною Пруту до Яремче.", en: "Descend the Prut valley to Yaremche." },
        { ua: "Прощальний сніданок і дорога додому.", en: "Farewell breakfast and the road home." },
      ],
      included: [
        { ua: "Гід і трансфери", en: "Guide and transfers" },
        { ua: "Проживання в колибах і таборах", en: "Mountain huts and camps" },
        { ua: "Харчування на маршруті", en: "Meals on route" },
        { ua: "Спорядження для табору", en: "Camping equipment" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "lofoten-winter",
      illustration: "aurora",
      name: { ua: "Зимове світло Лофотен", en: "Lofoten Winter Light" },
      region: { ua: "Лофотени, Норвегія", en: "Lofoten, Norway" },
      days: 7,
      price: 1890,
      short: {
        ua: "Полярна ніч, північне сяйво та рибальські села над фіордами — сім днів за Полярним колом.",
        en: "Polar nights, northern lights, and fishing villages above the fjords — seven days inside the Arctic Circle.",
      },
      itinerary: [
        { ua: "Прибуття до Свольвера, акліматизація.", en: "Arrive in Svolvær, settle in." },
        { ua: "Хайкінг до Рейнебрінген на світанку.", en: "Hike Reinebringen at first light." },
        { ua: "Плавання фіордом і сауна на березі.", en: "Fjord boat trip and a shore sauna." },
        { ua: "Ніч полювання за північним сяйвом.", en: "A night hunting the aurora." },
        { ua: "Село О і музей тріски.", en: "The village of Å and the stockfish museum." },
        { ua: "Фотодень на пляжі Уттаклейв.", en: "A photo day at Uttakleiv beach." },
        { ua: "Повернення до Свольвера.", en: "Return to Svolvær." },
      ],
      included: [
        { ua: "Проживання в рорбу (рибальських хатинках)", en: "Lodging in rorbu (fishermen's cabins)" },
        { ua: "Авто 4×4 і трансфери", en: "4×4 vehicle and transfers" },
        { ua: "Гід із місцевих", en: "Local guide" },
        { ua: "Човен на фіорд", en: "Fjord boat" },
        { ua: "Снігоступи", en: "Snowshoes" },
      ],
    },
    {
      id: "faroe-cliffs",
      illustration: "cliffs",
      name: { ua: "Скелі Фарер", en: "Faroe Cliff Roads" },
      region: { ua: "Фарерські острови, Данія", en: "Faroe Islands, Denmark" },
      days: 6,
      price: 2100,
      short: {
        ua: "Скелі, що падають в океан, тумани й зелені дахи — шість днів на краю Атлантики.",
        en: "Cliffs that drop into the ocean, fog, and turf roofs — six days at the edge of the Atlantic.",
      },
      itinerary: [
        { ua: "Прибуття до Торсгавна.", en: "Arrive in Tórshavn." },
        { ua: "Трек до водоспаду Мулафоссур.", en: "Trek to the Múlafossur waterfall." },
        { ua: "Човен під пташині скелі Вестманни.", en: "Boat under the Vestmanna bird cliffs." },
        { ua: "Дорога до Сорвагсватна — озеро над океаном.", en: "Road to Sørvágsvatn — the lake above the sea." },
        { ua: "Острів Калсой і маяк Каллур.", en: "Kalsoy island and the Kallur lighthouse." },
        { ua: "Прощальний день у Торсгавні.", en: "Farewell day in Tórshavn." },
      ],
      included: [
        { ua: "Проживання і сніданки", en: "Lodging and breakfast" },
        { ua: "Авто та пороми", en: "Car and ferries" },
        { ua: "Гід", en: "Guide" },
        { ua: "Човнова екскурсія", en: "Boat excursion" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "dolomites-alta-via",
      illustration: "spires",
      name: { ua: "Альта-Віа Доломітів", en: "Dolomites Alta Via" },
      region: { ua: "Доломіти, Італія", en: "Dolomites, Italy" },
      days: 8,
      price: 1650,
      short: {
        ua: "Вісім днів класичною високогірною стежкою між ріфуджі — скелі, що рожевіють на заході сонця.",
        en: "Eight days on a classic high route between rifugi — rock that turns pink at sunset.",
      },
      itinerary: [
        { ua: "Старт із Кортіни д'Ампеццо.", en: "Start from Cortina d'Ampezzo." },
        { ua: "Перехід до ріфуджо Нуволау.", en: "Cross to Rifugio Nuvolau." },
        { ua: "Хребет Чінкве-Торрі.", en: "The Cinque Torri ridge." },
        { ua: "Трек до Тре-Чіме.", en: "Trek to Tre Cime." },
        { ua: "Озеро Брайес і ріфуджо.", en: "Lake Braies and the rifugio." },
        { ua: "Перевал Пордої.", en: "Passo Pordoi." },
        { ua: "Спуск у Валь-Гардену.", en: "Descend into Val Gardena." },
        { ua: "Прощальна вечеря.", en: "Farewell dinner." },
      ],
      included: [
        { ua: "Проживання в ріфуджі", en: "Lodging in rifugi" },
        { ua: "Гірський гід", en: "Mountain guide" },
        { ua: "Напівпансіон", en: "Half board" },
        { ua: "Трансфери", en: "Transfers" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "iceland-highlands",
      illustration: "volcano",
      name: { ua: "Високогір'я Ісландії", en: "Iceland Highland Rivers" },
      region: { ua: "Ісландія", en: "Iceland" },
      days: 6,
      price: 2300,
      short: {
        ua: "Чорні пустелі, гейзери й річкові броди — шість днів внутрішнім високогір'ям Ісландії.",
        en: "Black deserts, geysers, and river fords — six days through Iceland's interior highlands.",
      },
      itinerary: [
        { ua: "Рейк'явік — південний берег.", en: "Reykjavík — the south coast." },
        { ua: "Ландманналаугар і ріолітові гори.", en: "Landmannalaugar and the rhyolite hills." },
        { ua: "Броди річки Кьйолур.", en: "River fords of Kjölur." },
        { ua: "Каньйон Аусбіргі та водоспад Деттіфосс.", en: "Ásbyrgi canyon and Dettifoss." },
        { ua: "Озеро Міватн і геотермальні купальні.", en: "Lake Mývatn and geothermal baths." },
        { ua: "Повернення до Рейк'явіка.", en: "Return to Reykjavík." },
      ],
      included: [
        { ua: "Авто 4×4 і водій", en: "4×4 vehicle and driver" },
        { ua: "Проживання", en: "Lodging" },
        { ua: "Гід", en: "Guide" },
        { ua: "Вхід до купалень", en: "Bath admission" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "svaneti-towers",
      illustration: "towers",
      name: { ua: "Башти Сванетії", en: "Svaneti Towers" },
      region: { ua: "Сванетія, Грузія", en: "Svaneti, Georgia" },
      days: 7,
      price: 980,
      short: {
        ua: "Середньовічні башти, льодовики й гостинні села — сім днів у серці Кавказу.",
        en: "Medieval towers, glaciers, and hospitable villages — seven days in the heart of the Caucasus.",
      },
      itinerary: [
        { ua: "Тбілісі — переїзд до Местії.", en: "Tbilisi — drive to Mestia." },
        { ua: "Трек до льодовика Чалааді.", en: "Trek to the Chalaadi glacier." },
        { ua: "Ушгулі — найвище поселення Європи.", en: "Ushguli — Europe's highest village." },
        { ua: "Перехід до озер Корульді.", en: "Cross to the Koruldi lakes." },
        { ua: "Сванські башти й дегустація.", en: "Svan towers and a tasting." },
        { ua: "День відпочинку в Местії.", en: "Rest day in Mestia." },
        { ua: "Повернення до Тбілісі.", en: "Return to Tbilisi." },
      ],
      included: [
        { ua: "Проживання в гестхаусах", en: "Guesthouse lodging" },
        { ua: "Трансфери 4×4", en: "4×4 transfers" },
        { ua: "Гід", en: "Guide" },
        { ua: "Харчування", en: "Meals" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "scottish-west-coast",
      illustration: "coast",
      name: { ua: "Західне узбережжя Шотландії", en: "Scottish West Coast" },
      region: { ua: "Шотландське високогір'я, Велика Британія", en: "Scottish Highlands, UK" },
      days: 6,
      price: 1420,
      short: {
        ua: "Острови, віскі й дороги вздовж моря — шість днів західним узбережжям Шотландії.",
        en: "Islands, whisky, and roads beside the sea — six days along Scotland's west coast.",
      },
      itinerary: [
        { ua: "Глазго — Лох-Ломонд.", en: "Glasgow — Loch Lomond." },
        { ua: "Гленко й долина річки Етів.", en: "Glencoe and Glen Etive." },
        { ua: "Острів Скай і Кулінські гори.", en: "Isle of Skye and the Cuillin." },
        { ua: "Старий Ман-оф-Сторр.", en: "The Old Man of Storr." },
        { ua: "Дорога на Малл і бухта Тоберморі.", en: "Road to Mull and Tobermory harbour." },
        { ua: "Повернення до Глазго.", en: "Return to Glasgow." },
      ],
      included: [
        { ua: "Проживання", en: "Lodging" },
        { ua: "Авто і пороми", en: "Car and ferries" },
        { ua: "Гід", en: "Guide" },
        { ua: "Дегустація віскі", en: "Whisky tasting" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "atlas-traverse",
      illustration: "desert",
      name: { ua: "Перетин Атласу", en: "Atlas Traverse" },
      region: { ua: "Високий Атлас, Марокко", en: "High Atlas, Morocco" },
      days: 7,
      price: 860,
      short: {
        ua: "Берберські села, кам'яні пустелі й вершина Тубкаль — сім днів через Високий Атлас.",
        en: "Berber villages, stone deserts, and the summit of Toubkal — seven days across the High Atlas.",
      },
      itinerary: [
        { ua: "Марракеш — переїзд до Імліль.", en: "Marrakesh — drive to Imlil." },
        { ua: "Трек до базового табору Тубкаль.", en: "Trek to Toubkal base camp." },
        { ua: "Сходження на Тубкаль (4167 м).", en: "Summit Toubkal (4,167 m)." },
        { ua: "Спуск у долину Азіф-Тазарт.", en: "Descend the Azif Tazarht valley." },
        { ua: "Берберські села й гостинність.", en: "Berber villages and hospitality." },
        { ua: "Перевал Тізі-н-Тічка.", en: "Tizi n'Tichka pass." },
        { ua: "Повернення до Марракеша.", en: "Return to Marrakesh." },
      ],
      included: [
        { ua: "Проживання в ріадах і таборах", en: "Riads and camp lodging" },
        { ua: "Гірський гід і мули", en: "Mountain guide and mules" },
        { ua: "Харчування", en: "Meals" },
        { ua: "Трансфери", en: "Transfers" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
    {
      id: "albanian-alps",
      illustration: "peaks",
      name: { ua: "Прокляті гори", en: "Accursed Mountains" },
      region: { ua: "Албанські Альпи, Албанія", en: "Albanian Alps, Albania" },
      days: 6,
      price: 720,
      short: {
        ua: "Дикі хребти, блакитні річки й села, куди не доїжджає автобус — шість днів на Балканах.",
        en: "Wild ridges, turquoise rivers, and villages no bus reaches — six days in the Balkans.",
      },
      itinerary: [
        { ua: "Тирана — переїзд до Вальбони.", en: "Tirana — drive to Valbona." },
        { ua: "Трек долиною Вальбони.", en: "Trek the Valbona valley." },
        { ua: "Перехід через перевал до Тети.", en: "Cross the pass to Theth." },
        { ua: "Синє Око і водоспад Грунас.", en: "The Blue Eye spring and the Grunas waterfall." },
        { ua: "Село Тет і кам'яна вежа.", en: "Theth village and the lock-in tower." },
        { ua: "Повернення до Тирани.", en: "Return to Tirana." },
      ],
      included: [
        { ua: "Проживання в гестхаусах", en: "Guesthouse lodging" },
        { ua: "Трансфери", en: "Transfers" },
        { ua: "Гід", en: "Guide" },
        { ua: "Харчування", en: "Meals" },
        { ua: "Страхування", en: "Insurance" },
      ],
    },
  ];

  const FEATURED = ["carpathian-ridge", "lofoten-winter", "svaneti-towers"];

  /* ----------------------------------------------------------
     State
  ---------------------------------------------------------- */
  const body = document.body;
  const page = body.dataset.page || "home";
  let lang = localStorage.getItem("wild-lang");
  if (lang !== "ua" && lang !== "en") lang = "ua";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isRec = new URLSearchParams(location.search).get("rec") === "1";

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
  function L(obj) { return (obj && obj[lang]) || (obj && obj.en) || obj; }

  /* ----------------------------------------------------------
     S-curve background
  ---------------------------------------------------------- */
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let x = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildCurves() {
    const hosts = document.querySelectorAll(".bg-paper");
    if (!hosts.length) return;
    const rnd = mulberry32(7);
    const W = 1440, H = 900;
    const NS = "http://www.w3.org/2000/svg";
    hosts.forEach((host) => {
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "curves-svg");
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      svg.setAttribute("aria-hidden", "true");
      for (let i = 0; i < 15; i++) {
        const sx = -80 + rnd() * W * 0.35;
        const sy = H * 0.12 + rnd() * H * 0.72;
        const L = 520 + rnd() * 1200;
        const amp = 28 + rnd() * 130;
        const rise = 70 + rnd() * 280;
        const flip = rnd() > 0.5 ? 1 : -1;
        const w = (1.2 + rnd() * 2.7).toFixed(2);
        const o = (0.55 + rnd() * 0.3).toFixed(2);
        const d = `M ${sx.toFixed(1)} ${sy.toFixed(1)} ` +
          `C ${(sx + L * 0.25).toFixed(1)} ${(sy - amp * flip).toFixed(1)}, ` +
          `${(sx + L * 0.75).toFixed(1)} ${(sy + amp * flip).toFixed(1)}, ` +
          `${(sx + L).toFixed(1)} ${(sy - rise).toFixed(1)}`;
        const p = document.createElementNS(NS, "path");
        p.setAttribute("d", d);
        p.setAttribute("fill", "none");
        p.setAttribute("stroke", "#ffffff");
        p.setAttribute("stroke-width", w);
        p.setAttribute("opacity", o);
        p.setAttribute("stroke-linecap", "round");
        svg.appendChild(p);
      }
      host.appendChild(svg);
    });
  }

  /* ----------------------------------------------------------
     Line-style illustrations
  ---------------------------------------------------------- */
  function illustration(variant) {
    const ink = "#1d1d1d";
    const wrap = (inner) =>
      `<svg viewBox="0 0 400 300" fill="none" stroke="${ink}" stroke-width="2.2" ` +
      `stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;
    switch (variant) {
      case "aurora":
        return wrap(
          `<path d="M-10 230 L70 130 L130 215 L220 140 L300 220 L410 160"/>` +
          `<path d="M-10 230 L70 130 L130 215 L220 140 L300 220 L410 160" opacity=".3" transform="translate(0,34)"/>` +
          `<path d="M20 60 C80 20 140 90 200 50 S340 30 390 60" opacity=".6"/>` +
          `<path d="M40 40 C90 5 150 70 210 32 S350 10 400 40" opacity=".35"/>`
        );
      case "cliffs":
        return wrap(
          `<path d="M30 130 V60 H80 V130 M120 130 V80 H160 V130 M210 130 V50 H250 V130 M300 130 V70 H340 V130"/>` +
          `<path d="M-10 150 H410" opacity=".35"/>` +
          `<path d="M30 185 q40 -20 80 0 q40 20 80 0 q40 -20 80 0 q40 20 80 0" opacity=".5"/>` +
          `<path d="M320 45 q9 -14 18 0 q-9 -14 -18 0" opacity=".55"/>`
        );
      case "spires":
        return wrap(
          `<path d="M60 250 L110 90 L150 250 M140 250 L185 60 L225 250 M215 250 L255 110 L300 250 M60 250 H300"/>` +
          `<path d="M110 90 L110 78 M185 60 L185 48 M255 110 L255 98" opacity=".4"/>` +
          `<circle cx="330" cy="80" r="20" opacity=".45"/>`
        );
      case "volcano":
        return wrap(
          `<path d="M120 250 L200 120 L280 250"/>` +
          `<path d="M185 120 L200 90 L215 120" opacity=".5"/>` +
          `<path d="M200 90 q-8 -14 0 -20 q8 -6 0 -20" opacity=".5"/>` +
          `<path d="M-10 250 H120 M280 250 H410" opacity=".35"/>` +
          `<path d="M0 300 V275 H410 V300 Z" fill="#ffffff" stroke="none" opacity=".6"/>`
        );
      case "towers":
        return wrap(
          `<path d="M90 250 V120 L120 95 L150 120 V250 M90 120 H150"/>` +
          `<path d="M200 250 V130 L232 108 L264 130 V250 M200 130 H264"/>` +
          `<path d="M100 250 V150 h20 v100 M210 250 V160 h20 v90" opacity=".4"/>` +
          `<path d="M-10 250 H410" opacity=".3"/>`
        );
      case "coast":
        return wrap(
          `<path d="M60 170 V92 l16 -14 v92 M60 92 h16"/>` +
          `<path d="M-10 170 q50 -30 100 0 q50 30 100 0 q50 -30 100 0 q50 30 100 0"/>` +
          `<path d="M-10 210 q40 -16 80 0 q40 16 80 0 q40 -16 80 0 q40 16 80 0" opacity=".4"/>` +
          `<path d="M300 245 q40 -20 80 0 q40 20 80 0" opacity=".35"/>` +
          `<path d="M360 150 q10 -12 20 0 q-10 12 -20 0" opacity=".5"/>`
        );
      case "desert":
        return wrap(
          `<path d="M-10 200 q60 -60 120 0 q60 60 120 0 q60 -60 120 0 q60 60 120 0"/>` +
          `<path d="M-10 235 q55 -45 110 0 q55 45 110 0 q55 -45 110 0" opacity=".4"/>` +
          `<circle cx="320" cy="80" r="26"/>` +
          `<path d="M320 40 v-6 M320 120 v6 M280 80 h-6 M360 80 h6" opacity=".4"/>`
        );
      case "peaks":
        return wrap(
          `<path d="M-10 230 L60 110 L110 210 L170 90 L230 215 L290 120 L350 220 L410 150"/>` +
          `<path d="M-10 230 L60 110 L110 210 L170 90 L230 215 L290 120 L350 220 L410 150" opacity=".3" transform="translate(0,30)"/>` +
          `<path d="M0 300 V268 q50 -10 100 0 t100 0 t100 0 t110 0 V300 Z" fill="#ffffff" stroke="none" opacity=".7"/>`
        );
      default: // mountains
        return wrap(
          `<path d="M-10 200 L70 140 L140 195 L215 115 L300 190 L370 130 L410 195" opacity=".35"/>` +
          `<path d="M-10 235 L85 175 L150 230 L235 160 L315 225 L410 180"/>` +
          `<path d="M-10 300 V265 L95 245 L170 272 L265 240 L345 268 L410 250 V300 Z" fill="#ffffff" stroke="none" opacity=".7"/>` +
          `<circle cx="300" cy="80" r="20" opacity=".5"/>`
        );
    }
  }

  /* ----------------------------------------------------------
     Rendering helpers
  ---------------------------------------------------------- */
  function daysLabel(days) { return lang === "ua" ? `${days} днів` : `${days} days`; }
  function priceLabel(price) { return `${t("card.from")}${price}`; }

  function cardHTML(tour) {
    return (
      `<li><a class="card" href="tour.html?id=${tour.id}" data-transition>` +
      `<span class="card__ill">${illustration(tour.illustration)}</span>` +
      `<span class="card__name">${L(tour.name)}</span>` +
      `<span class="card__region">${L(tour.region)}</span>` +
      `<span class="card__meta"><span>${daysLabel(tour.days)}</span><span class="card__price">${priceLabel(tour.price)}</span></span>` +
      `<span class="card__cta pill-btn">${t("card.details")}</span>` +
      `</a></li>`
    );
  }

  function renderFeatured() {
    const el = document.getElementById("featured-grid");
    if (!el) return;
    el.innerHTML = FEATURED.map((id) => cardHTML(TOURS.find((x) => x.id === id))).join("");
  }

  function renderDestinations() {
    const el = document.getElementById("destinations-grid");
    if (!el) return;
    el.innerHTML = TOURS.map(cardHTML).join("");
  }

  function renderTourDetail() {
    const root = document.getElementById("tour-root");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const tour = TOURS.find((x) => x.id === id);
    if (!tour) {
      root.innerHTML =
        `<header class="tour-hero"><h1 class="display">${t("tour.notFoundTitle")}</h1></header>` +
        `<p class="lede">${t("tour.notFoundText")}</p>` +
        `<a class="tour-back" href="destinations.html" data-transition>${t("tour.back")}</a>`;
      document.title = `${t("tour.notFoundTitle")} — WILD`;
      return;
    }
    document.title = `${L(tour.name)} — WILD`;
    const steps = tour.itinerary.map((s) => `<li>${L(s)}</li>`).join("");
    const included = tour.included.map((s) => `<li>${L(s)}</li>`).join("");
    root.innerHTML =
      `<header class="tour-hero">` +
      `<h1 class="display">${L(tour.name)}</h1>` +
      `<p class="tour-region">${L(tour.region)} · ${daysLabel(tour.days)}</p>` +
      `</header>` +
      `<div class="tour-grid"><div>` +
      `<section class="tour-block"><h2 class="tour-block__title">${t("tour.itinerary")}</h2><ol class="tour-steps">${steps}</ol></section>` +
      `<section class="tour-block"><h2 class="tour-block__title">${t("tour.included")}</h2><ul class="tour-included">${included}</ul></section>` +
      `</div>` +
      `<aside class="tour-aside"><div class="tour-price-box">` +
      `<p class="from">${t("tour.from")}</p><p class="amount">$${tour.price}</p><p class="per">${t("tour.perPerson")}</p>` +
      `<a class="pill-btn" href="contact.html?tour=${tour.id}" data-transition>${t("tour.book")}</a>` +
      `</div><a class="tour-back" href="destinations.html" data-transition>${t("tour.back")}</a></aside>` +
      `</div>`;
  }

  function fillTourSelect() {
    const sel = document.getElementById("tour-select");
    if (!sel) return;
    const current = sel.value;
    const preselect = new URLSearchParams(location.search).get("tour");
    sel.innerHTML =
      `<option value="">${t("form.tourNone")}</option>` +
      TOURS.map((x) => `<option value="${x.id}">${L(x.name)}</option>`).join("");
    sel.value = preselect && TOURS.some((x) => x.id === preselect) ? preselect : current || "";
  }

  /* ----------------------------------------------------------
     i18n application + toggle
  ---------------------------------------------------------- */
  function updateToggle() {
    const btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;
    const on = lang === "ua" ? "ua" : "en";
    const off = lang === "ua" ? "en" : "ua";
    btn.setAttribute("aria-label", t("lang.label"));
    btn.innerHTML =
      `<span class="${on === "ua" ? "lt-on" : "lt-off"}">UA</span>` +
      `<span class="lt-slash">/</span>` +
      `<span class="${on === "en" ? "lt-on" : "lt-off"}">EN</span>`;
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = t(`title.${page}`);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const v = el.getAttribute("data-i18n-attr");
      const i = v.indexOf(":");
      el.setAttribute(v.slice(0, i), t(v.slice(i + 1)));
    });
    updateToggle();
    renderFeatured();
    renderDestinations();
    renderTourDetail();
    fillTourSelect();
  }

  function initLangToggle() {
    const btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;
    btn.addEventListener("click", () => {
      lang = lang === "ua" ? "en" : "ua";
      localStorage.setItem("wild-lang", lang);
      applyI18n();
    });
  }

  /* ----------------------------------------------------------
     Hero reveal (home)
  ---------------------------------------------------------- */
  const EASE_A = "cubic-bezier(0.5, 0, 0.3, 1)";
  const EASE_B = "cubic-bezier(0.45, 0, 0.3, 1)";
  const EASE_C = "cubic-bezier(0.4, 0, 0.2, 1)";
  const EASE_INOUT = "cubic-bezier(0.2, 0.8, 0.2, 1)";
  const DUR = 2100;

  function initHero() {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const scene = hero.closest(".hero-scene") || hero.parentElement;
    const word = hero.querySelector(".hero__word");
    const pill = hero.querySelector(".hero__pill");
    const wrap = hero.querySelector(".hero__pill-wrap");
    const media = hero.querySelector(".hero__pill-media");
    const hairlineEl = hero.querySelector(".hero__pill-hairline");
    const bg = document.querySelector(".bg-paper");
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    const rule = document.querySelector(".footer__rule");
    const icons = Array.from(hero.querySelectorAll(".hero__icon"));
    const scrollCta = hero.querySelector("[data-scroll-cta]");
    const scrollHint = hero.querySelector("[data-scroll-hint]");
    const video = hero.querySelector("video");
    const speaker = hero.querySelector(".hero__icon--speaker");

    const isPhone = () => window.matchMedia("(max-width: 720px)").matches;
    const fsPx = () => parseFloat(getComputedStyle(word.querySelector(".hero__half")).fontSize) || 176;

    function dims() {
      const fs = fsPx();
      if (isPhone()) {
        const pillW = window.innerWidth - 40;
        return { fs, phone: true, pillW, pillH: pillW / 1.85, gapStart: fs * 0.03, gapEnd: fs * 0.1 };
      }
      return {
        fs, phone: false,
        finalW: fs * 3.62, pillH: fs * 1.81,
        hairline: fs * 0.012, slit: fs * 0.16, circle: fs * 1.81,
        gapStart: fs * 0.026, gapMid: fs * 0.05, gapEnd: fs * 0.085,
      };
    }

    // Scroll-scrubbed pill animation (paused; driven by currentTime each frame).
    function buildScrubAnims(d) {
      const anims = [];
      if (d.phone) {
        const Y = (h) => (d.pillH - h) / 2;
        anims.push(pill.animate([
          { clipPath: `inset(${Y(1.5)}px 0 ${Y(1.5)}px 0 round 999px)`, offset: 0 },
          { clipPath: `inset(${Y(1.5)}px 0 ${Y(1.5)}px 0 round 999px)`, offset: 0.14 },
          { clipPath: `inset(${Y(d.pillH * 0.1)}px 0 ${Y(d.pillH * 0.1)}px 0 round 999px)`, offset: 0.3, easing: EASE_A },
          { clipPath: `inset(${Y(d.pillH * 0.55)}px 0 ${Y(d.pillH * 0.55)}px 0 round 999px)`, offset: 0.58, easing: EASE_B },
          { clipPath: "inset(0 0 0 0 round 999px)", offset: 1, easing: EASE_C },
        ], { duration: DUR, fill: "both" }));
        anims.push(media.animate([
          { clipPath: "inset(0 50%)", offset: 0 },
          { clipPath: "inset(0 0)", offset: 0.14 },
          { clipPath: "inset(0 0)", offset: 1 },
        ], { duration: DUR, fill: "both" }));
        anims.push(wrap.animate([
          { marginTop: d.gapStart + "px", marginBottom: d.gapStart + "px", offset: 0 },
          { marginTop: ((d.gapStart + d.gapEnd) / 2) + "px", marginBottom: ((d.gapStart + d.gapEnd) / 2) + "px", offset: 0.58, easing: EASE_B },
          { marginTop: d.gapEnd + "px", marginBottom: d.gapEnd + "px", offset: 1, easing: EASE_C },
        ], { duration: DUR, fill: "both" }));
      } else {
        const X = (w) => (d.finalW - w) / 2;
        anims.push(pill.animate([
          { clipPath: `inset(0 ${X(d.hairline)}px 0 ${X(d.hairline)}px round 999px)`, offset: 0 },
          { clipPath: `inset(0 ${X(d.hairline)}px 0 ${X(d.hairline)}px round 999px)`, offset: 0.14 },
          { clipPath: `inset(0 ${X(d.slit)}px 0 ${X(d.slit)}px round 999px)`, offset: 0.3, easing: EASE_A },
          { clipPath: `inset(0 ${X(d.circle)}px 0 ${X(d.circle)}px round 999px)`, offset: 0.58, easing: EASE_B },
          { clipPath: "inset(0 0 0 0 round 999px)", offset: 1, easing: EASE_C },
        ], { duration: DUR, fill: "both" }));
        anims.push(media.animate([
          { clipPath: "inset(50% 0)", offset: 0 },
          { clipPath: "inset(0 0)", offset: 0.14 },
          { clipPath: "inset(0 0)", offset: 1 },
        ], { duration: DUR, fill: "both" }));
        anims.push(wrap.animate([
          { marginLeft: d.gapStart + "px", marginRight: d.gapStart + "px", offset: 0 },
          { marginLeft: d.gapMid + "px", marginRight: d.gapMid + "px", offset: 0.58, easing: EASE_B },
          { marginLeft: d.gapEnd + "px", marginRight: d.gapEnd + "px", offset: 1, easing: EASE_C },
        ], { duration: DUR, fill: "both" }));
      }
      anims.push(hairlineEl.animate([
        { opacity: 1, offset: 0 },
        { opacity: 1, offset: 0.14 },
        { opacity: 0, offset: 0.3, easing: EASE_A },
        { opacity: 0, offset: 1 },
      ], { duration: DUR, fill: "both" }));
      icons.forEach((i) => anims.push(i.animate([
        { opacity: 0, offset: 0 },
        { opacity: 0, offset: 0.8 },
        { opacity: 1, offset: 1, easing: EASE_C },
      ], { duration: DUR, fill: "both" })));
      anims.forEach((a) => a.pause());
      return anims;
    }

    function buildChromeAnims() {
      const anims = [];
      anims.push(bg.animate([
        { opacity: 0, offset: 0.45 },
        { opacity: 1, offset: 0.78, easing: EASE_B },
        { opacity: 1, offset: 1 },
      ], { duration: DUR, fill: "both" }));
      anims.push(nav.animate([
        { transform: "translateY(-140%)", offset: 0 },
        { transform: "translateY(-140%)", offset: 0.5 },
        { transform: "translateY(0)", offset: 0.86, easing: EASE_INOUT },
        { transform: "translateY(0)", offset: 1 },
      ], { duration: DUR, fill: "both" }));
      anims.push(footer.animate([
        { transform: "translateY(160%)", offset: 0 },
        { transform: "translateY(160%)", offset: 0.52 },
        { transform: "translateY(0)", offset: 0.9, easing: EASE_B },
        { transform: "translateY(0)", offset: 1 },
      ], { duration: DUR, fill: "both" }));
      anims.push(rule.animate([
        { transform: "scaleX(0)", offset: 0 },
        { transform: "scaleX(0)", offset: 0.4 },
        { transform: "scaleX(1)", offset: 0.95, easing: EASE_C },
        { transform: "scaleX(1)", offset: 1 },
      ], { duration: DUR, fill: "both" }));
      anims.forEach((a) => a.pause());
      return anims;
    }

    let scrubAnims = [];
    let chromeAnims = [];
    let chromeSeen = 0;
    let ticking = false;

    function getProgress() {
      const max = scene.offsetHeight - window.innerHeight;
      if (max <= 0) return 1;
      return Math.max(0, Math.min(1, window.scrollY / max));
    }

    function update() {
      ticking = false;
      const p = getProgress();
      scrubAnims.forEach((a) => { a.currentTime = p * DUR; });
      chromeSeen = Math.max(chromeSeen, p);
      chromeAnims.forEach((a) => { a.currentTime = Math.min(1, chromeSeen / 0.2) * DUR; });
      if (scrollHint) scrollHint.style.opacity = p > 0.05 ? "0" : "1";
    }

    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    // CTA: smooth-scroll to the content below the scene.
    if (scrollCta) {
      scrollCta.addEventListener("click", () => {
        const target = document.getElementById("content") || document.querySelector(".hero-scene + .home-section");
        if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    }

    // Speaker icon toggles its waves (clip is silent).
    if (speaker) {
      speaker.addEventListener("click", (e) => {
        e.stopPropagation();
        speaker.classList.toggle("is-muted");
        if (video) video.muted = !speaker.classList.contains("is-muted");
      });
    }

    window.__recVideo = function (t) { return (t % 4.25) + 1 / 120; };

    if (reduceMotion) {
      document.body.classList.add("is-revealed");
      icons.forEach((i) => (i.style.opacity = "0.85"));
      if (scrollHint) scrollHint.style.display = "none";
      if (video) video.pause();
      return;
    }

    scrubAnims = buildScrubAnims(dims());
    chromeAnims = buildChromeAnims();
    if (video) { try { video.play().catch(() => {}); } catch (e) {} }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    // Resize / orientation: rebuild the scrub (px-based clip) and re-apply progress.
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        scrubAnims.forEach((a) => { try { a.cancel(); } catch (e) {} });
        scrubAnims = buildScrubAnims(dims());
        update();
      }, 150);
    });
  }

  /* ----------------------------------------------------------
     Non-home entrance (nav drops in, content fades/rises)
  ---------------------------------------------------------- */
  function entrance() {
    const main = document.querySelector(".page-main");
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    if (!main) return;
    if (reduceMotion) { main.style.opacity = "1"; return; }
    nav.animate(
      [{ transform: "translateY(-120%)" }, { transform: "translateY(0)" }],
      { duration: 700, easing: EASE_INOUT, fill: "both" }
    );
    footer.animate(
      [{ transform: "translateY(120%)" }, { transform: "translateY(0)" }],
      { duration: 700, easing: EASE_B, fill: "both", delay: 80 }
    );
    main.animate(
      [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 700, easing: EASE_C, fill: "both", delay: 120 }
    );
  }

  /* ----------------------------------------------------------
     Cross-page View Transitions
  ---------------------------------------------------------- */
  function initNavTransitions() {
    if (!document.startViewTransition) return;
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.includes(":") || href.startsWith("#") || a.target === "_blank") return;
      e.preventDefault();
      document.startViewTransition(() => new Promise((resolve) => {
        const done = () => resolve();
        window.addEventListener("pagehide", done, { once: true });
        window.location.href = href;
        setTimeout(done, 2500);
      }));
    });
  }

  /* ----------------------------------------------------------
     Contact form (client-side validation, no backend)
  ---------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const success = document.getElementById("form-success");

    const validators = {
      name: (v) => v.trim().length > 0,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: (v) => v.trim().length > 0,
    };

    function validateField(name) {
      const field = form.querySelector(`[data-field="${name}"]`);
      const input = form.querySelector(`[name="${name}"]`);
      if (!field || !input) return true;
      const ok = validators[name](input.value);
      field.classList.toggle("is-invalid", !ok);
      return ok;
    }

    Object.keys(validators).forEach((name) => {
      const input = form.querySelector(`[name="${name}"]`);
      if (input) input.addEventListener("input", () => validateField(name));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const allOk = Object.keys(validators).map(validateField).every(Boolean);
      if (!allOk) return;
      form.style.display = "none";
      if (success) success.style.display = "block";
    });
  }

  /* ----------------------------------------------------------
     Boot
  ---------------------------------------------------------- */
  function boot() {
    buildCurves();
    applyI18n();
    initLangToggle();
    initNavTransitions();
    initContactForm();
    if (page === "home") initHero();
    else entrance();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
