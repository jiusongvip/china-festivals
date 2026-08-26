// China Festivals — structured data layer
// Single source of truth for the single-page SEO site.
// 2027 Gregorian dates are reference values; lunar dates shift year to year.

export type FestivalCategory = "lunar" | "ethnic" | "modern" | "seasonal";
export type ExperienceType =
  | "visual"
  | "food"
  | "ritual"
  | "party"
  | "romantic"
  | "culture";

export interface Venue {
  name: string;
  city: string;
  zh?: string;
}

export interface HolidaySchedule {
  days: string;
  note?: string;
  referenceYear: number;
}

export interface Festival {
  slug: string;
  name: string;
  nameZh: string;
  category: FestivalCategory;
  lunarDate?: string;
  date2027: string;
  month: number;
  tagline: string;
  significance: string;
  foods: string[];
  highlights: string[];
  bestCities: { name: string; url?: string; note: string }[];
  image?: string;
  venues?: Venue[];
  holiday?: HolidaySchedule;
  tip: string;
  crowd: "low" | "medium" | "high";
  experiences: ExperienceType[];
}

export interface CategoryMeta {
  key: FestivalCategory;
  label: string;
  nameZh: string;
  description: string;
}

export const categoryMeta: CategoryMeta[] = [
  {
    key: "lunar",
    label: "Lunar Festivals",
    nameZh: "农历传统节日",
    description:
      "The classic Chinese calendar festivals, from Spring Festival to Mid-Autumn, each tied to a date on the lunar calendar.",
  },
  {
    key: "ethnic",
    label: "Ethnic Festivals",
    nameZh: "少数民族节日",
    description:
      "Water-splashing, torch-lighting, horse-racing. The celebrations most first-time visitors never hear about.",
  },
  {
    key: "modern",
    label: "Modern Holidays",
    nameZh: "现代公历节日",
    description:
      "Fixed-date national holidays and events, including the Harbin Ice Festival and the Golden Week rush.",
  },
  {
    key: "seasonal",
    label: "Seasonal Events",
    nameZh: "季节活动",
    description:
      "Nature-driven moments worth timing a trip around, from cherry blossoms to Luoyang's peonies.",
  },
];

export const festivals: Festival[] = [
  // ─────────────────────────── LUNAR ───────────────────────────
  {
    slug: "spring-festival",
    name: "Spring Festival",
    nameZh: "春节",
    image: "/images/spring-festival.webp",
    category: "lunar",
    lunarDate: "1st day of the 1st lunar month",
    date2027: "Feb 6",
    month: 2,
    tagline: "The biggest human migration on earth, wrapped in red.",
    significance:
      "Chinese New Year. Families reunite for the year's most important dinner, and cities empty out as hundreds of millions travel home.",
    foods: ["dumplings", "glutinous rice cake (niangao)", "whole fish for abundance"],
    highlights: [
      "Temple fairs in Beijing with folk performances",
      "City-wall lantern shows in Xi'an",
      "Fireworks and dragon dances across the south",
    ],
    bestCities: [
      { name: "Beijing", note: "temple fairs at Ditan and Longtan" },
      { name: "Xi'an", note: "city-wall lantern festival" },
      { name: "Chengdu", note: "lantern shows and hotpot reunions" },
    ],
    venues: [
      { name: "Ditan Temple Fair", zh: "地坛庙会", city: "Beijing" },
      { name: "Longtan Park Temple Fair", zh: "龙潭庙会", city: "Beijing" },
      { name: "Xi'an City Wall Lantern Festival", zh: "西安城墙灯会", city: "Xi'an" },
    ],
    holiday: {
      days: "9 days (Feb 15–23, 2026)",
      note: "Resume work Feb 24; make-up work on Feb 14 & Feb 28",
      referenceYear: 2026,
    },
    tip: "Trains and flights sell out weeks ahead. Many restaurants close from New Year's Eve to day three. Book dinners in advance.",
    crowd: "high",
    experiences: ["party", "food", "culture"],
  },
  {
    slug: "lantern-festival",
    name: "Lantern Festival",
    nameZh: "元宵节",
    image: "/images/lantern-festival.webp",
    category: "lunar",
    lunarDate: "15th day of the 1st lunar month",
    date2027: "Feb 20",
    month: 3,
    tagline: "The glowing finale to fifteen days of New Year.",
    significance:
      "Marks the end of Spring Festival. Streets fill with handcrafted lanterns, riddles, and tangyuan, sweet rice balls that symbolise family togetherness.",
    foods: ["tangyuan (sweet glutinous rice balls)"],
    highlights: [
      "Massive lantern displays in Zigong and Shanghai's Yuyuan",
      "Riddle-guessing on lanterns",
      "Fire dragon dances in southern towns",
    ],
    bestCities: [
      { name: "Shanghai", note: "Yuyuan Garden lantern fair" },
      { name: "Xi'an", note: "city-wall lantern show" },
    ],
    venues: [
      { name: "Yuyuan Garden", zh: "豫园", city: "Shanghai" },
      { name: "Xi'an City Wall", zh: "西安城墙", city: "Xi'an" },
      { name: "Zigong Lantern Show", zh: "自贡灯会", city: "Zigong" },
    ],
    tip: "Yuyuan Garden gets shoulder-to-shoulder after dark. Go at opening or on a weekday.",
    crowd: "medium",
    experiences: ["visual", "food", "culture"],
  },
  {
    slug: "qingming-festival",
    name: "Qingming Festival",
    nameZh: "清明节",
    image: "/images/qingming-festival.webp",
    category: "lunar",
    lunarDate: "Solar term, early April",
    date2027: "Apr 5",
    month: 4,
    tagline: "Tomb-sweeping and spring outings in one day.",
    significance:
      "Tomb-Sweeping Day. Families honor ancestors at gravesites, then head out to enjoy the first real warmth of spring with kite-flying and green rice balls.",
    foods: ["qingtuan (green rice balls filled with sweet bean paste)"],
    highlights: [
      "Kite-flying over city parks",
      "Spring blossoms at their peak",
      "Green rice balls sold at every bakery",
    ],
    bestCities: [
      { name: "Hangzhou", note: "West Lake in full spring bloom" },
      { name: "Suzhou", note: "classical gardens at their greenest" },
    ],
    venues: [
      { name: "West Lake", zh: "西湖", city: "Hangzhou" },
      { name: "Humble Administrator's Garden", zh: "拙政园", city: "Suzhou" },
    ],
    holiday: {
      days: "3 days (Apr 4–6, 2026)",
      note: "Resume work Apr 7",
      referenceYear: 2026,
    },
    tip: "Cemeteries are crowded and emotional. As a visitor, skip the gravesites and enjoy the parks and spring food instead.",
    crowd: "medium",
    experiences: ["food", "culture", "visual"],
  },
  {
    slug: "dragon-boat-festival",
    name: "Dragon Boat Festival",
    nameZh: "端午节",
    image: "/images/dragon-boat-festival.webp",
    category: "lunar",
    lunarDate: "5th day of the 5th lunar month",
    date2027: "Jun 9",
    month: 6,
    tagline: "Dragon boats, zongzi, and a poet's story.",
    significance:
      "Commemorates the poet Qu Yuan. Teams race long, painted boats to pounding drums, and everyone eats zongzi, sticky rice parcels wrapped in bamboo leaves.",
    foods: ["zongzi (sticky rice dumplings)", "salted duck eggs", "realgar wine"],
    highlights: [
      "Dragon boat races on rivers nationwide",
      "Zongzi in dozens of regional styles",
      "Hanging wormwood and calamus at doorways",
    ],
    bestCities: [
      { name: "Guangzhou", note: "some of the fastest, most competitive races" },
      { name: "Yueyang", note: "the race tradition tied to Qu Yuan's Miluo River" },
    ],
    venues: [
      { name: "Pearl River waterfront", zh: "珠江", city: "Guangzhou" },
      { name: "Miluo River", zh: "汨罗江", city: "Yueyang" },
    ],
    holiday: {
      days: "3 days (Jun 19–21, 2026)",
      note: "Resume work Jun 22",
      referenceYear: 2026,
    },
    tip: "Riverbanks pack early for the best view. Bring sun protection, races run through midday heat.",
    crowd: "medium",
    experiences: ["party", "food", "culture"],
  },
  {
    slug: "qixi-festival",
    name: "Qixi Festival",
    nameZh: "七夕节",
    image: "/images/qixi-festival.webp",
    category: "lunar",
    lunarDate: "7th day of the 7th lunar month",
    date2027: "Aug 8",
    month: 8,
    tagline: "China's Valentine's Day, told through star-crossed lovers.",
    significance:
      "The Double Seventh. A legend of the cowherd and the weaver girl who meet once a year across the Milky Way. Today it is a quiet, gift-giving day for couples.",
    foods: ["qiaoguo (fried dough twists)"],
    highlights: [
      "Romantic dinners and riverside strolls",
      "Temples dedicated to the matchmaker deity",
      "Handmade qiaoguo in historic towns",
    ],
    bestCities: [
      { name: "Suzhou", note: "canal-side romance in the old town" },
      { name: "Shanghai", note: "skyline dinners for two" },
    ],
    venues: [
      { name: "Pingjiang Road", zh: "平江路", city: "Suzhou" },
      { name: "The Bund", zh: "外滩", city: "Shanghai" },
    ],
    tip: "It is a couples' day, not a street festival. Book restaurants early, and expect florists to raise prices.",
    crowd: "low",
    experiences: ["romantic", "food"],
  },
  {
    slug: "hungry-ghost-festival",
    name: "Hungry Ghost Festival",
    nameZh: "中元节",
    image: "/images/hungry-ghost-festival.webp",
    category: "lunar",
    lunarDate: "15th day of the 7th lunar month",
    date2027: "Aug 16",
    month: 8,
    tagline: "A month when the spirit world is said to walk among us.",
    significance:
      "The Zhongyuan festival. Offerings are made to wandering spirits, and floating lanterns are set on rivers to guide them home.",
    foods: ["duck", "fruit offerings", "fa gao (steamed prosperity cakes)"],
    highlights: [
      "Floating lanterns on rivers in the south",
      "Traditional opera staged for spirits and audiences",
      "Street-side paper offerings at dusk",
    ],
    bestCities: [
      { name: "Hong Kong", note: "the largest public observance" },
      { name: "Guangzhou", note: "river lantern ceremonies" },
    ],
    venues: [
      { name: "Victoria Harbour waterfront", zh: "维港海滨", city: "Hong Kong" },
      { name: "Pearl River", zh: "珠江", city: "Guangzhou" },
    ],
    tip: "Observe respectfully. Avoid photographing people making offerings without asking.",
    crowd: "low",
    experiences: ["ritual", "culture"],
  },
  {
    slug: "mid-autumn-festival",
    name: "Mid-Autumn Festival",
    nameZh: "中秋节",
    image: "/images/mid-autumn-festival.webp",
    category: "lunar",
    lunarDate: "15th day of the 8th lunar month",
    date2027: "Sep 15",
    month: 9,
    tagline: "Mooncakes and reunion under the year's brightest moon.",
    significance:
      "The Moon Festival. Families gather to admire the full moon and share mooncakes, round pastries that symbolise completeness.",
    foods: ["mooncakes", "pomelo", "hairy crab (in season)"],
    highlights: [
      "Full-moon viewings at scenic spots",
      "Lantern displays and lantern riddle games",
      "Mooncakes in every filling imaginable",
    ],
    bestCities: [
      { name: "Beijing", note: "moon over the Summer Palace" },
      { name: "Guilin", note: "moon over the Li River karst" },
    ],
    venues: [
      { name: "Summer Palace", zh: "颐和园", city: "Beijing" },
      { name: "Three Pools Mirroring the Moon", zh: "三潭印月", city: "Hangzhou" },
      { name: "Li River", zh: "漓江", city: "Guilin" },
    ],
    holiday: {
      days: "3 days (Sep 25–27, 2026)",
      note: "Resume work Sep 28",
      referenceYear: 2026,
    },
    tip: "Mooncakes are dense and heavily sweet, buy a small box first. Hotels and scenic spots fill up for moon-viewing night.",
    crowd: "medium",
    experiences: ["food", "visual", "culture"],
  },
  {
    slug: "double-ninth-festival",
    name: "Double Ninth Festival",
    nameZh: "重阳节",
    image: "/images/double-ninth-festival.webp",
    category: "lunar",
    lunarDate: "9th day of the 9th lunar month",
    date2027: "Oct 8",
    month: 10,
    tagline: "Climb a mountain and honor your elders.",
    significance:
      "The Chongyang festival. A day for climbing heights to ward off bad luck and for respecting the elderly, marked by autumn hiking and chrysanthemum wine.",
    foods: ["chongyang cake", "chrysanthemum wine"],
    highlights: [
      "Autumn hikes with clear, crisp air",
      "Chrysanthemum shows in parks",
      "Multigenerational family outings",
    ],
    bestCities: [
      { name: "Hangzhou", note: "chrysanthemum displays and West Lake hills" },
      { name: "Beijing", note: "autumn hikes on Fragrant Hills" },
    ],
    venues: [
      { name: "Fragrant Hills Park", zh: "香山公园", city: "Beijing" },
      { name: "West Lake hills", zh: "西湖群山", city: "Hangzhou" },
    ],
    tip: "A quieter festival, mostly family-focused. Perfect if you want autumn scenery without the crowds of Golden Week.",
    crowd: "low",
    experiences: ["culture", "visual"],
  },
  {
    slug: "laba-festival",
    name: "Laba Festival",
    nameZh: "腊八节",
    image: "/images/laba-festival.webp",
    category: "lunar",
    lunarDate: "8th day of the 12th lunar month",
    date2027: "Jan 15",
    month: 1,
    tagline: "A warm bowl of porridge that opens the New Year season.",
    significance:
      "The eighth day of the twelfth lunar month. Temples hand out free laba porridge, a sweet or savoury porridge of grains and dried fruit, kicking off the countdown to Spring Festival.",
    foods: ["laba porridge (eight-treasure porridge)", "laba garlic"],
    highlights: [
      "Temples serving free porridge at dawn",
      "Streets beginning to turn red for New Year",
      "Laba garlic pickled in vinegar, ready by New Year",
    ],
    bestCities: [
      { name: "Beijing", note: "temples like Yonghegong serve porridge" },
    ],
    venues: [
      { name: "Yonghegong Lama Temple", zh: "雍和宫", city: "Beijing" },
      { name: "Guangji Temple", zh: "广济寺", city: "Beijing" },
    ],
    tip: "Temple porridge lines form before sunrise. It is a local ritual, not a tourist show, so keep it brief and respectful.",
    crowd: "medium",
    experiences: ["food", "ritual"],
  },
  {
    slug: "chinese-new-year-eve",
    name: "Chinese New Year's Eve",
    nameZh: "除夕",
    image: "/images/chinese-new-year-eve.webp",
    category: "lunar",
    lunarDate: "Last day of the 12th lunar month",
    date2027: "Feb 5",
    month: 2,
    tagline: "The reunion dinner that anchors the entire year.",
    significance:
      "New Year's Eve. The whole family sits down for the most important meal of the year, then stays up late to welcome the new year with fireworks and the Spring Festival Gala on TV.",
    foods: ["reunion dinner", "dumplings at midnight", "fish served whole"],
    highlights: [
      "The reunion dinner, booked months in advance",
      "Midnight fireworks across the country",
      "Staying up late, shousui, to welcome the year",
    ],
    bestCities: [
      { name: "Beijing", note: "city-wide fireworks after midnight" },
      { name: "Shanghai", note: "Bund countdown atmosphere" },
    ],
    venues: [
      { name: "The Bund", zh: "外滩", city: "Shanghai" },
      { name: "Chunxi Road", zh: "春熙路", city: "Chengdu" },
    ],
    holiday: {
      days: "Part of the 9-day Spring Festival break (2026)",
      note: "Eve falls on Feb 16, 2026",
      referenceYear: 2026,
    },
    tip: "Most restaurants close by early evening for private family dinners. Book a hotel dinner well ahead, or plan to eat before 6pm.",
    crowd: "high",
    experiences: ["food", "party"],
  },

  // ─────────────────────────── ETHNIC ───────────────────────────
  {
    slug: "water-splashing-festival",
    name: "Water Splashing Festival",
    nameZh: "泼水节",
    category: "ethnic",
    lunarDate: "Dai New Year, mid-April",
    date2027: "Apr 13-15",
    month: 4,
    tagline: "The Dai New Year, celebrated by soaking everyone in sight.",
    significance:
      "The Dai people's New Year in Yunnan. Buckets, water guns, and smiles everywhere as water is thrown to wash away the old year and bring luck for the new one.",
    foods: ["Dai-style pineapple rice", "lemongrass grilled fish", "paoluda (coconut dessert)"],
    highlights: [
      "Street-wide water fights in Jinghong",
      "Dragon boat races on the Lancang River",
      "Releasing sky lanterns and floating lanterns at night",
    ],
    bestCities: [
      { name: "Xishuangbanna", url: "https://www.yunnan-province.com/", note: "the heart of the festival" },
      { name: "Mangshi (Dehong)", note: "a smaller, more local version" },
    ],
    venues: [
      { name: "Manting Park", zh: "曼听公园", city: "Jinghong" },
      { name: "Dai Minority Park, Ganlanba", zh: "橄榄坝傣族园", city: "Jinghong" },
      { name: "Lancang River waterfront", zh: "澜沧江畔", city: "Jinghong" },
    ],
    tip: "Waterproof everything. Phone pouches and dry bags are essential, and dress in quick-dry clothes you do not mind soaking.",
    crowd: "high",
    experiences: ["party", "culture", "visual"],
  },
  {
    slug: "torch-festival",
    name: "Torch Festival",
    nameZh: "火把节",
    image: "/images/torch-festival.webp",
    category: "ethnic",
    lunarDate: "24th day of the 6th lunar month",
    date2027: "Jul 27 (approx)",
    month: 8,
    tagline: "A mountain of fire under the stars of Yunnan and Sichuan.",
    significance:
      "The Yi people's biggest festival. Huge torches are lit in village squares, and people sing, dance, and parade through the night to drive away bad spirits.",
    foods: ["roast lamb", "buckwheat cakes", "Yi-style sour soup"],
    highlights: [
      "Massive torch lighting at dusk",
      "Traditional Yi song and dance circles",
      "Wrestling and horse races during the day",
    ],
    bestCities: [
      { name: "Liangshan (Sichuan)", note: "the largest Yi celebration" },
      { name: "Dali (Yunnan)", url: "https://www.yunnan-province.com/", note: "torch night by Erhai Lake" },
    ],
    venues: [
      { name: "Torch Square", zh: "火把广场", city: "Xichang" },
      { name: "Yi People Ancient Town", zh: "彝人古镇", city: "Chuxiong" },
      { name: "Dali Ancient City", zh: "大理古城", city: "Dali" },
    ],
    tip: "Watch the big torch from the edges, the crowd surges. Wear natural fibres and keep distance from the flames.",
    crowd: "high",
    experiences: ["visual", "party", "culture"],
  },
  {
    slug: "san-yue-san",
    name: "San Yue San",
    nameZh: "三月三",
    category: "ethnic",
    lunarDate: "3rd day of the 3rd lunar month",
    date2027: "Apr 9",
    month: 4,
    tagline: "Guangxi's Zhuang song festival, the original courtship app.",
    significance:
      "The Zhuang people's song festival. Young people gather to trade improvised songs in call-and-response, a tradition that once served as courtship.",
    foods: ["five-color glutinous rice", "zongzi", "oil tea"],
    highlights: [
      "Antiphonal singing contests",
      "Five-color glutinous rice, a visual feast",
      "Bamboo-pole dancing and drum performances",
    ],
    bestCities: [
      { name: "Nanning", url: "https://www.guangxi-province.com/", note: "the festival's urban heart" },
      { name: "Guilin", note: "Zhuang villages in the surrounding hills" },
    ],
    venues: [
      { name: "Two Rivers and Four Lakes", zh: "两江四湖", city: "Guilin" },
      { name: "Longji Rice Terraces", zh: "龙脊梯田", city: "Longsheng" },
    ],
    holiday: {
      days: "Public holiday in Guangxi (usually 2–3 days)",
      referenceYear: 2026,
    },
    tip: "It is a public holiday in Guangxi, so transport and hotels fill up. Book the Liuzhou-Nanning corridor early.",
    crowd: "medium",
    experiences: ["culture", "food", "visual"],
  },
  {
    slug: "sisters-meal-festival",
    name: "Sisters' Meal Festival",
    nameZh: "姊妹节",
    image: "/images/sisters-meal-festival.webp",
    category: "ethnic",
    lunarDate: "15th day of the 3rd lunar month",
    date2027: "Apr 21 (approx)",
    month: 5,
    tagline: "The Miao Valentine's Day, wrapped in dyed sticky rice.",
    significance:
      "The Miao people's courtship festival in Guizhou. Women prepare five-color sticky rice and dress in heavy silver, and the village sings and dances for days.",
    foods: ["five-color sticky rice", "sour fish soup", "rice wine"],
    highlights: [
      "Miao women in full silver headdresses",
      "Lusheng reed-pipe dancing",
      "Sticky rice dyed with wild plants",
    ],
    bestCities: [
      { name: "Kaili (Guizhou)", note: "gateway to the Miao villages" },
      { name: "Taijiang", note: "the festival's traditional home" },
    ],
    venues: [
      { name: "Shidong Town", zh: "施洞镇", city: "Taijiang" },
      { name: "Xijiang Qianhu Miao Village", zh: "西江千户苗寨", city: "Leishan" },
    ],
    tip: "Villages are remote. Hire a local driver from Kaili, and ask before photographing people in ceremonial dress.",
    crowd: "medium",
    experiences: ["visual", "culture", "food"],
  },
  {
    slug: "naadam-festival",
    name: "Naadam Festival",
    nameZh: "那达慕",
    image: "/images/naadam-festival.webp",
    category: "ethnic",
    lunarDate: "Mid-summer on the grasslands",
    date2027: "mid-Jul (variable)",
    month: 7,
    tagline: "Wrestling, archery, and horse racing on the open steppe.",
    significance:
      "Mongolia's 'three games of men'. On the Inner Mongolian grasslands, wrestlers, archers, and child jockeys compete over days of feasting and celebration.",
    foods: ["roast whole lamb", "milk tea", "airag (fermented mare's milk)"],
    highlights: [
      "Mongolian wrestling in traditional dress",
      "Long-distance horse races with young riders",
      "Yurts and grassland feasts",
    ],
    bestCities: [
      { name: "Hohhot", note: "the main urban Naadam" },
      { name: "Hulunbuir", note: "grassland Naadam at its most authentic" },
    ],
    venues: [
      { name: "Xilingol Grassland", zh: "锡林郭勒草原", city: "Xilinhot" },
      { name: "Hulunbuir Grassland", zh: "呼伦贝尔草原", city: "Hulunbuir" },
    ],
    tip: "Dates shift year to year, confirm locally before flying. Grassland nights are cold even in July, pack layers.",
    crowd: "medium",
    experiences: ["culture", "visual", "party"],
  },
  {
    slug: "shoton-festival",
    name: "Shoton Festival",
    nameZh: "雪顿节",
    category: "ethnic",
    lunarDate: "Late 6th to early 7th Tibetan month",
    date2027: "mid-Aug (variable)",
    month: 8,
    tagline: "A giant thangka unrolled at dawn over Lhasa.",
    significance:
      "Tibet's 'yogurt festival'. At Drepung Monastery a vast thangka is unveiled at first light, followed by days of Tibetan opera and yogurt feasts.",
    foods: ["Tibetan yogurt", "sweet tea", "tsampa"],
    highlights: [
      "The dawn thangka unveiling at Drepung",
      "Tibetan opera performances in Norbulingka",
      "Picnics with fresh yak yogurt",
    ],
    bestCities: [
      { name: "Lhasa", url: "https://www.tibet-lhasa-potala.com/", note: "the festival's home" },
    ],
    venues: [
      { name: "Drepung Monastery", zh: "哲蚌寺", city: "Lhasa" },
      { name: "Norbulingka", zh: "罗布林卡", city: "Lhasa" },
    ],
    tip: "Tibet travel requires permits arranged through an agency. The thangka viewing starts before sunrise, arrive early and dress warmly.",
    crowd: "high",
    experiences: ["ritual", "visual", "culture"],
  },
  {
    slug: "tibetan-new-year",
    name: "Tibetan New Year",
    nameZh: "藏历新年",
    image: "/images/tibetan-new-year.webp",
    category: "ethnic",
    lunarDate: "1st day of the 1st Tibetan month",
    date2027: "Feb (variable)",
    month: 2,
    tagline: "Losar, a New Year all its own on the plateau.",
    significance:
      "Losar. Tibet's New Year, often close to but distinct from Chinese New Year, marked by family feasts, monastery rituals, and the ceremonial guthuk soup.",
    foods: ["guthuk (special dumpling soup)", "dresil (sweet rice dish)", "khapse (fried pastries)"],
    highlights: [
      "Monastery ceremonies and butter lamps",
      "Homes decorated with lucky symbols",
      "The guthuk soup with hidden fortunes inside",
    ],
    bestCities: [
      { name: "Lhasa", url: "https://www.tibet-lhasa-potala.com/", note: "monastery rituals and family feasts" },
    ],
    venues: [
      { name: "Jokhang Temple", zh: "大昭寺", city: "Lhasa" },
      { name: "Potala Palace square", zh: "布达拉宫广场", city: "Lhasa" },
    ],
    tip: "Permits and cold weather make this an advanced trip. Plan through a licensed agency and allow acclimatisation days.",
    crowd: "medium",
    experiences: ["ritual", "culture", "food"],
  },

  // ─────────────────────────── MODERN ───────────────────────────
  {
    slug: "harbin-ice-festival",
    name: "Harbin Ice & Snow Festival",
    nameZh: "哈尔滨冰雪节",
    image: "/images/harbin-ice-festival.webp",
    category: "modern",
    date2027: "Jan 5 - late Feb",
    month: 1,
    tagline: "A city-sized castle built from ice and light.",
    significance:
      "The world's largest ice festival. Harbin is transformed by giant illuminated ice sculptures, some the size of buildings, in temperatures that dip far below freezing.",
    foods: ["Harbin sausage", "frozen pears", "hot pot"],
    highlights: [
      "Ice and Snow World, the main sculpture park",
      "Ice lantern shows on Sun Island",
      "Sledding and winter swimming displays",
    ],
    bestCities: [
      { name: "Harbin", note: "the festival's home, fly direct or via Beijing" },
    ],
    venues: [
      { name: "Harbin Ice and Snow World", zh: "哈尔滨冰雪大世界", city: "Harbin" },
      { name: "Sun Island Snow Sculpture Expo", zh: "太阳岛雪博会", city: "Harbin" },
      { name: "Zhaolin Park Ice Lantern Fair", zh: "兆麟公园冰灯游园会", city: "Harbin" },
    ],
    tip: "Dress for -20°C or colder. Rent proper boots and layer up, and warm up indoors every hour.",
    crowd: "high",
    experiences: ["visual", "party"],
  },
  {
    slug: "national-day",
    name: "National Day",
    nameZh: "国庆节",
    image: "/images/national-day.webp",
    category: "modern",
    date2027: "Oct 1",
    month: 10,
    tagline: "Golden Week, when the whole country travels at once.",
    significance:
      "China's National Day on October 1 opens Golden Week, a seven-day holiday when domestic tourism peaks and every landmark fills to capacity.",
    foods: ["street food at every attraction"],
    highlights: [
      "Flag-raising at Tiananmen Square",
      "City-wide light shows",
      "Autumn scenery at its peak",
    ],
    bestCities: [
      { name: "Beijing", note: "the flag-raising and Tiananmen" },
    ],
    venues: [
      { name: "Tiananmen Square", zh: "天安门广场", city: "Beijing" },
    ],
    holiday: {
      days: "7 days (Oct 1–7, 2026)",
      note: "Resume work Oct 8; make-up work on Sep 20 & Oct 10",
      referenceYear: 2026,
    },
    tip: "This is the single worst week of the year for crowds and prices. If you visit, stay in one city and book everything far in advance.",
    crowd: "high",
    experiences: ["party", "culture"],
  },
  {
    slug: "labor-day",
    name: "Labor Day",
    nameZh: "劳动节",
    image: "/images/labor-day.webp",
    category: "modern",
    date2027: "May 1",
    month: 5,
    tagline: "A five-day spring break, and the first big travel rush of the year.",
    significance:
      "International Workers' Day. China turns it into a five-day holiday, sending millions on their first major trips of the year.",
    foods: ["regional spring dishes"],
    highlights: [
      "Pleasant spring weather nationwide",
      "Flower season in northern cities",
      "A lively, holiday atmosphere",
    ],
    bestCities: [
      { name: "Qingdao", note: "coastal spring before the summer crowds" },
    ],
    venues: [
      { name: "Zhanqiao Pier", zh: "栈桥", city: "Qingdao" },
      { name: "May Fourth Square", zh: "五四广场", city: "Qingdao" },
    ],
    holiday: {
      days: "5 days (May 1–5, 2026)",
      note: "Resume work May 6; make-up work on May 9",
      referenceYear: 2026,
    },
    tip: "Expect full trains and premium hotel rates. Travel mid-week within the holiday window when possible.",
    crowd: "high",
    experiences: ["culture", "visual"],
  },

  // ─────────────────────────── SEASONAL ───────────────────────────
  {
    slug: "cherry-blossom-season",
    name: "Cherry Blossom Season",
    nameZh: "赏樱季",
    image: "/images/cherry-blossom-season.webp",
    category: "seasonal",
    date2027: "mid-Mar - early Apr",
    month: 3,
    tagline: "A pink, week-long window that draws photographers from everywhere.",
    significance:
      "Not a holiday but a season. From Wuhan to Wuxi, cherry trees erupt in pink for about a week each spring, and entire cities come out to picnic beneath them.",
    foods: ["sakura-flavoured snacks", "spring tea"],
    highlights: [
      "Wuhan University's cherry avenue",
      "Wuxi's Yuantouzhu peninsula",
      "Night illuminations under the blossoms",
    ],
    bestCities: [
      { name: "Wuhan", note: "the university campus and East Lake" },
      { name: "Wuxi", note: "Yuantouzhu by Taihu Lake" },
    ],
    venues: [
      { name: "Wuhan University cherry avenue", zh: "武汉大学樱花大道", city: "Wuhan" },
      { name: "East Lake Cherry Blossom Garden", zh: "东湖樱园", city: "Wuhan" },
      { name: "Yuantouzhu Peninsula", zh: "鼋头渚", city: "Wuxi" },
    ],
    tip: "Bloom dates shift with weather, track forecasts closely. Weekends are packed, visit at opening on a weekday.",
    crowd: "high",
    experiences: ["visual", "romantic"],
  },
  {
    slug: "peony-festival",
    name: "Luoyang Peony Festival",
    nameZh: "洛阳牡丹节",
    image: "/images/peony-festival.webp",
    category: "seasonal",
    date2027: "Apr - early May",
    month: 4,
    tagline: "A thousand-year-old flower show in an ancient capital.",
    significance:
      "Luoyang has grown peonies for over a thousand years, and each spring its gardens put on a spectacular, month-long display of the flower once reserved for emperors.",
    foods: ["Luoyang water banquet", "peony cakes"],
    highlights: [
      "Wangcheng Park's vast peony beds",
      "Peonies in every colour and form",
      "Tang-dynasty-themed performances",
    ],
    bestCities: [
      { name: "Luoyang", note: "the festival's home, a short high-speed rail ride from Xi'an" },
    ],
    venues: [
      { name: "Wangcheng Park", zh: "王城公园", city: "Luoyang" },
      { name: "Luoyang National Peony Garden", zh: "中国国花园", city: "Luoyang" },
      { name: "Sui-Tang Botanical Garden", zh: "隋唐城遗址植物园", city: "Luoyang" },
    ],
    tip: "The first two weeks of April are peak bloom. Combine it with a Xi'an trip for a two-city history route.",
    crowd: "medium",
    experiences: ["visual", "culture"],
  },
];

export function festivalsByCategory(category: FestivalCategory): Festival[] {
  return festivals.filter((f) => f.category === category);
}

export type MonthInfo = { weather: string; crowd: string; verdict: string };

// Month-by-month decision guide: weather, crowd level, and a one-line verdict.
export const monthGuide: Record<number, MonthInfo> = {
  1: { weather: "Cold north, mild south", crowd: "High for New Year", verdict: "Best for Harbin's ice" },
  2: { weather: "Cold to cool", crowd: "Peak (Spring Festival)", verdict: "Spectacular but busy" },
  3: { weather: "Mild, warming", crowd: "Moderate", verdict: "Lanterns and first blossoms" },
  4: { weather: "Warm, spring", crowd: "High around holidays", verdict: "Water Splashing + Qingming" },
  5: { weather: "Warm", crowd: "High (Labor Day)", verdict: "Pleasant but busy" },
  6: { weather: "Hot, humid", crowd: "Moderate", verdict: "Dragon Boat races" },
  7: { weather: "Hot", crowd: "Moderate", verdict: "Naadam on the steppe" },
  8: { weather: "Hot", crowd: "High in festival towns", verdict: "Torch + Shoton" },
  9: { weather: "Clear, pleasant", crowd: "Moderate", verdict: "Mid-Autumn, best all-round" },
  10: { weather: "Crisp autumn", crowd: "Peak (Golden Week)", verdict: "Double Ninth; avoid Oct 1-7" },
  11: { weather: "Cool", crowd: "Low", verdict: "A quiet shoulder month" },
  12: { weather: "Cold", crowd: "Low-moderate", verdict: "Pre-New-Year calm" },
};
