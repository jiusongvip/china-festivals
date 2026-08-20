// Deep-dive guides for the three flagship festivals.
// These power the /festivals/[slug] inner pages (hub -> spoke expansion).

export interface GuideFood {
  name: string;
  desc: string;
}

export interface GuideActivity {
  name: string;
  desc: string;
}

export interface GuideCity {
  name: string;
  url?: string;
  note: string;
}

export interface GuideItinerary {
  title: string;
  days: string;
  steps: string[];
}

export interface FestivalGuide {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  history: string[];
  foods: GuideFood[];
  activities: GuideActivity[];
  cities: GuideCity[];
  itinerary: GuideItinerary;
  tips: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const festivalGuides: FestivalGuide[] = [
  {
    slug: "spring-festival",
    title: "Spring Festival 2026: Dates, Food & Where to Celebrate Chinese New Year",
    metaDescription:
      "Chinese New Year 2026 falls on February 17. Dates, reunion dinner foods, temple fairs, best cities, a 5-day itinerary and insider tips.",
    h1: "Spring Festival: China's New Year, Explained",
    intro:
      "Spring Festival, or Chinese New Year, is the most important date on the Chinese calendar. It triggers the largest annual human migration on earth as hundreds of millions travel home, and it transforms every city into a red-lit celebration of food, fireworks, and family.",
    history: [
      "The festival has roots in the ancient year-end sacrifice to ancestors and gods, a tradition more than 4,000 years old. What began as a harvest prayer became the New Year as the lunar calendar took shape.",
      "The best-known origin story is the Nian beast, a creature that emerged at year's end to destroy crops and livestock. Villagers found it feared the color red, bright light, and loud noise, which is why firecrackers, red couplets, and lanterns still define the holiday today.",
      "Today Spring Festival is less a single day than a two-week season that opens with Laba and closes with the Lantern Festival. The core event is the New Year's Eve reunion dinner, the one meal of the year no one wants to miss.",
    ],
    foods: [
      { name: "Dumplings (jiaozi)", desc: "Shaped like gold ingots and eaten at midnight in the north, symbolising wealth for the year ahead." },
      { name: "Nian gao", desc: "A glutinous rice cake whose name means year high, a wish for rising fortunes." },
      { name: "Whole fish", desc: "Served with head and tail intact, a play on the phrase surplus every year." },
      { name: "Tangyuan", desc: "Sweet rice balls more common in the south, standing for family togetherness." },
    ],
    activities: [
      { name: "Temple fairs", desc: "Folk performances, handicrafts, and street snacks at Ditan and Longtan in Beijing." },
      { name: "Dragon and lion dances", desc: "Performed through streets and markets to drive away bad luck and welcome prosperity." },
      { name: "Fireworks", desc: "Legal in some cities and banned in others, but where allowed they light up the sky at midnight." },
      { name: "The Spring Festival Gala", desc: "A televised variety show watched by hundreds of millions on New Year's Eve." },
    ],
    cities: [
      { name: "Beijing", note: "temple fairs at Ditan and Longtan" },
      { name: "Xi'an", note: "the city-wall lantern festival" },
      { name: "Chengdu", note: "lantern shows and hotpot reunions" },
    ],
    itinerary: {
      title: "Spring Festival in Beijing, then Xi'an",
      days: "5 days",
      steps: [
        "Arrive, wander Qianmen for new-year shopping and red decorations",
        "Ditan temple fair for folk shows and street snacks",
        "Forbidden City by day, check holiday hours first",
        "High-speed rail to Xi'an for the city-wall lanterns",
        "Fly home from Xi'an",
      ],
    },
    tips: [
      "Trains and flights sell out weeks ahead. Book as soon as tickets open.",
      "Many family restaurants close from New Year's Eve to day three. Book dinners in advance.",
      "Hotel prices often double or triple over the holiday. Book two to three months out.",
      "Red envelopes, hongbao, are given to children and unmarried adults as a blessing.",
    ],
    faq: [
      { q: "When is Chinese New Year in 2026?", a: "February 17, 2026, with the public holiday running roughly February 15 to 23." },
      { q: "How long does Spring Festival last?", a: "Officially 15 days, from New Year's Eve to the Lantern Festival, though the public holiday is about 8 days." },
      { q: "Should tourists visit during Spring Festival?", a: "Yes for the spectacle and atmosphere, no if you want calm and low prices. It is the busiest and most expensive time of year." },
      { q: "Are restaurants open during Spring Festival?", a: "Many small, family-run restaurants close for the first few days. Hotel restaurants and larger chains usually stay open." },
    ],
    related: ["lantern-festival", "chinese-new-year-eve", "mid-autumn-festival"],
  },
  {
    slug: "water-splashing-festival",
    title: "Water Splashing Festival 2026: Dai New Year in Xishuangbanna",
    metaDescription:
      "The Water Splashing Festival (Dai New Year) in April is Yunnan's biggest water fight. Dates, food, where to go, a 3-day plan and survival tips.",
    h1: "Water Splashing Festival: The Dai New Year in Yunnan",
    intro:
      "The Water Splashing Festival is the Dai people's New Year, celebrated across Xishuangbanna and Dehong in Yunnan. In mid-April, the tropical south turns into a joyful, city-wide water fight in which being soaked is not an accident but a blessing.",
    history: [
      "The festival marks the Dai New Year and falls in mid-April, when the southern tropics are already warm. Water is thrown to wash away the misfortunes of the old year and invite luck for the new one.",
      "The water has a Buddhist root, linked to the ritual bathing of Buddha statues, but over centuries it grew into the open, good-natured free-for-all visitors know today.",
    ],
    foods: [
      { name: "Pineapple rice", desc: "Sticky rice steamed inside a hollowed pineapple, sweet and fragrant." },
      { name: "Lemongrass grilled fish", desc: "Dai-style river fish grilled with lemongrass, smoky and aromatic." },
      { name: "Paoluda", desc: "A coconut-milk dessert with bread and jelly, a local street favourite." },
    ],
    activities: [
      { name: "The water fight", desc: "Streets become a free-for-all with buckets, hoses, and water guns." },
      { name: "Dragon boat races", desc: "Teams race long boats on the Lancang River to drumbeats." },
      { name: "Sky lanterns", desc: "Released at night, carrying wishes into the sky." },
      { name: "Ganbai markets", desc: "Street fairs with Dai food, crafts, and performances." },
    ],
    cities: [
      { name: "Xishuangbanna", url: "https://www.yunnan-province.com/", note: "the heart of the festival in Jinghong" },
      { name: "Mangshi (Dehong)", note: "a smaller, more local version of the celebration" },
    ],
    itinerary: {
      title: "Water Splashing in Xishuangbanna",
      days: "3 days",
      steps: [
        "Arrive in Jinghong, night market at Gaozhuang",
        "The main water fight and dragon-boat races",
        "Manting Park, release a sky lantern, fly out",
      ],
    },
    tips: [
      "Waterproof everything. Phone pouches and dry bags are essential.",
      "Dress in quick-dry clothes you do not mind soaking all day.",
      "Book accommodation early, Jinghong fills up weeks before.",
      "The festival is also a public holiday in parts of Yunnan, so transport is busy.",
    ],
    faq: [
      { q: "What is the Water Splashing Festival?", a: "The Dai people's New Year in Yunnan, celebrated by throwing water on everyone as a blessing for the new year." },
      { q: "When is the Water Splashing Festival?", a: "April 13 to 15 each year, the fixed dates of the Dai New Year." },
      { q: "Where should I experience it?", a: "Xishuangbanna in southern Yunnan is the heart of the festival, with Dehong as a quieter alternative." },
      { q: "Is it safe for tourists?", a: "Yes, it is joyful and good-natured. Just protect your phone and valuables from water." },
    ],
    related: ["torch-festival", "san-yue-san", "spring-festival"],
  },
  {
    slug: "mid-autumn-festival",
    title: "Mid-Autumn Festival 2026: Mooncakes, Dates & Where to Celebrate",
    metaDescription:
      "Mid-Autumn Festival 2026 falls on September 25. Mooncake guide, the Chang'e legend, best moon-viewing cities, a 3-day itinerary and tips.",
    h1: "Mid-Autumn Festival: The Moon Festival, Explained",
    intro:
      "The Mid-Autumn Festival, or Moon Festival, falls on the 15th day of the 8th lunar month, when the moon is at its fullest and brightest. Families gather to admire it and share mooncakes, round pastries that symbolise completeness and reunion.",
    history: [
      "The festival began as a harvest celebration, when families thanked the gods for the year's crops under the autumn moon.",
      "Its best-known legend is Chang'e, who drank an elixir of immortality and floated to the moon, where she lives with a jade rabbit. The festival honours her with moon-gazing and offerings.",
    ],
    foods: [
      { name: "Mooncakes", desc: "Round pastries with fillings from lotus seed paste to salted egg yolk, given as gifts and shared among family." },
      { name: "Pomelo", desc: "A round citrus whose name sounds like reunion, eaten alongside mooncakes." },
      { name: "Hairy crab", desc: "In season in the Yangtze delta, a prized autumn delicacy." },
    ],
    activities: [
      { name: "Moon-gazing", desc: "At scenic spots, parks, and rooftops, the core ritual of the night." },
      { name: "Lantern displays", desc: "Many cities hold lantern shows, with riddle games attached." },
      { name: "Riddle games", desc: "Riddles written on lanterns, a playful tradition at fairs and gardens." },
    ],
    cities: [
      { name: "Beijing", note: "moon over the Summer Palace" },
      { name: "Guilin", note: "moon over the Li River karst" },
      { name: "Shanghai", note: "moon over the skyline" },
    ],
    itinerary: {
      title: "Mid-Autumn in Guilin",
      days: "3 days",
      steps: [
        "Arrive, buy mooncakes at a night market",
        "Li River cruise by day, moon over the karst at night",
        "Yangshuo countryside in the morning, fly out",
      ],
    },
    tips: [
      "Mooncakes are dense and heavily sweet, buy a small box first.",
      "Scenic spots fill up on moon-viewing night, go early or choose a quieter viewpoint.",
      "Mid-Autumn can overlap with National Day Golden Week, so book transport early.",
    ],
    faq: [
      { q: "When is Mid-Autumn Festival 2026?", a: "September 25, 2026, with the public holiday around September 25 to 27." },
      { q: "What do you eat at Mid-Autumn?", a: "Mooncakes, pomelo, and seasonal hairy crab, all shared among family." },
      { q: "Is Mid-Autumn a public holiday in China?", a: "Yes, it is a three-day public holiday, one of China's major festivals." },
      { q: "Where is the best place to watch the moon?", a: "Scenic spots like Guilin's Li River, the West Lake, or any high vantage point in a clear city." },
    ],
    related: ["spring-festival", "lantern-festival", "double-ninth-festival"],
  },
  {
    slug: "lantern-festival",
    title: "Lantern Festival 2026: Dates, Tangyuan & China's Best Lantern Displays",
    metaDescription:
      "The Lantern Festival on March 3, 2026 ends Chinese New Year. Tangyuan, lantern displays in Zigong and Shanghai, plus a 2-day itinerary and tips.",
    h1: "Lantern Festival: The Glowing End of Chinese New Year",
    intro:
      "The Lantern Festival falls on the 15th day of the first lunar month, the first full moon of the new year. It closes out two weeks of Spring Festival celebrations with handcrafted lanterns, riddle games, and tangyuan, the sweet rice balls that symbolise family togetherness.",
    history: [
      "The festival traces back to the Han dynasty. Emperor Ming (around 67 CE) promoted Buddhism and ordered lanterns lit in the palace on the fifteenth day of the first month to honour the Buddha, a practice that spread from the court to the common people.",
      "It is also called the Shangyuan Festival. The first lunar month is the yuan month, and night is xiao, so the first full-moon night of the year became Yuanxiao.",
      "Today the festival is the grand finale of Chinese New Year. Lantern displays, riddle guessing, and eating tangyuan are the three pillars, and many cities stage large-scale light shows that rival the New Year itself.",
    ],
    foods: [
      { name: "Tangyuan (yuanxiao)", desc: "Glutinous rice balls with fillings like black sesame, peanut, or red bean. In the north they are rolled, in the south wrapped, but both stand for reunion." },
      { name: "Sweet and savoury fillings", desc: "Sweet sesame and peanut dominate, while savoury pork versions are common in the south." },
    ],
    activities: [
      { name: "Lantern displays", desc: "The Zigong Lantern Festival in Sichuan is the world's most famous, with Shanghai's Yuyuan and Xi'an's city wall close behind." },
      { name: "Riddle guessing", desc: "Riddles written on lanterns, a playful tradition where correct answers win small prizes." },
      { name: "Dragon and lion dances", desc: "Street performances that carry the New Year's energy into the first full moon." },
      { name: "Sky lanterns", desc: "Released in some southern towns, carrying wishes into the night sky." },
    ],
    cities: [
      { name: "Shanghai", note: "Yuyuan Garden lantern fair" },
      { name: "Xi'an", note: "the city-wall lantern show" },
      { name: "Zigong", note: "the world-famous lantern festival, one hour from Chengdu by rail" },
    ],
    itinerary: {
      title: "Lantern Festival in Shanghai",
      days: "2 days",
      steps: [
        "Arrive, evening at Yuyuan Garden for the lantern fair",
        "Daytime riddle games and tangyuan, fly out in the evening",
      ],
    },
    tips: [
      "Yuyuan Garden gets shoulder-to-shoulder after dark. Go at opening or on a weekday.",
      "The Zigong lantern festival needs a dedicated trip, reachable by high-speed rail from Chengdu in about an hour.",
      "By Lantern Festival most shops have reopened after the New Year closure.",
      "Tangyuan are dense and filling, order a small bowl first.",
    ],
    faq: [
      { q: "When is the Lantern Festival in 2026?", a: "March 3, 2026, the 15th day of the first lunar month." },
      { q: "What do you eat at the Lantern Festival?", a: "Tangyuan, glutinous rice balls with sweet or savoury fillings that symbolise family reunion." },
      { q: "Where are the best lantern displays in China?", a: "Zigong in Sichuan has the world's most famous display, followed by Shanghai's Yuyuan and Xi'an's city wall." },
      { q: "Is the Lantern Festival part of Chinese New Year?", a: "Yes, it is the final day of the 15-day Spring Festival period and marks its official end." },
    ],
    related: ["spring-festival", "mid-autumn-festival", "dragon-boat-festival"],
  },
  {
    slug: "dragon-boat-festival",
    title: "Dragon Boat Festival 2026: Dates, Zongzi & Where to Watch the Races",
    metaDescription:
      "The Dragon Boat Festival on June 19, 2026 honours the poet Qu Yuan. Zongzi guide, where to watch races, a 2-day plan and practical tips.",
    h1: "Dragon Boat Festival: Races, Zongzi, and a Poet's Story",
    intro:
      "The Dragon Boat Festival, or Duanwu, falls on the fifth day of the fifth lunar month. It is a day of dragon boat races, zongzi, and the story of Qu Yuan, the poet whose death the festival commemorates.",
    history: [
      "The best-known origin story centres on Qu Yuan, a poet and minister of the ancient state of Chu. In 278 BCE, in despair over his state's fall, he drowned himself in the Miluo River.",
      "Locals raced out in boats to save him and threw rice into the river to keep fish away from his body. These acts became the dragon boat races and the zongzi we know today.",
      "Other regions honour different figures, including the general Wu Zixu and the filial daughter Cao E. The festival also carries an older meaning of driving away disease as summer heat and humidity arrive.",
    ],
    foods: [
      { name: "Zongzi", desc: "Sticky rice parcels wrapped in bamboo or reed leaves. Northern versions are sweet with dates or bean paste, while southern ones are savoury with pork or salted egg yolk." },
      { name: "Salted duck eggs", desc: "A seasonal treat often eaten with zongzi during the festival." },
      { name: "Realgar wine", desc: "A traditional drink once believed to ward off insects and evil, now mostly used symbolically." },
    ],
    activities: [
      { name: "Dragon boat races", desc: "Long, painted boats with drummers race on rivers and lakes nationwide, from Guangzhou's Pearl River to Yueyang's Miluo River." },
      { name: "Hanging wormwood", desc: "Bundles of mugwort and calamus are hung at doorways to repel insects and bad luck." },
      { name: "Scented sachets", desc: "Children wear small pouches of herbs, tied with five-colour thread for protection." },
    ],
    cities: [
      { name: "Guangzhou", note: "some of the fastest, most competitive races on the Pearl River" },
      { name: "Yueyang", note: "the race tradition tied to Qu Yuan's Miluo River" },
      { name: "Hangzhou", note: "races on the West Lake in a scenic setting" },
    ],
    itinerary: {
      title: "Dragon Boat in Guangzhou",
      days: "2 days",
      steps: [
        "Arrive, try zongzi at a local dim sum spot",
        "Morning dragon boat races on the Pearl River, fly out",
      ],
    },
    tips: [
      "Riverbanks pack early for the best view, and races run through midday heat, so bring sun protection and water.",
      "Zongzi are heavy and glutinous, eat them in moderation.",
      "The festival falls in the rainy season across southern China, carry an umbrella.",
      "Book riverside hotels early if you want a view of the races from your room.",
    ],
    faq: [
      { q: "When is the Dragon Boat Festival in 2026?", a: "June 19, 2026, the fifth day of the fifth lunar month." },
      { q: "Why do people eat zongzi?", a: "The tradition recalls villagers throwing rice into the river to keep fish away from the poet Qu Yuan's body." },
      { q: "Where can I watch dragon boat races?", a: "Guangzhou's Pearl River, Yueyang's Miluo River, and Hangzhou's West Lake are among the best-known venues." },
      { q: "Is the Dragon Boat Festival a public holiday?", a: "Yes, it is one of China's major festivals, with a three-day public holiday." },
    ],
    related: ["spring-festival", "lantern-festival", "mid-autumn-festival"],
  },
  {
    slug: "qingming-festival",
    title: "Qingming Festival 2026: Tomb-Sweeping Day, Qingtuan & Spring Outings",
    metaDescription:
      "Qingming (Tomb-Sweeping Day) falls on April 5, 2026. The Jie Zitui legend, qingtuan green rice balls, where to enjoy spring, and practical tips.",
    h1: "Qingming Festival: Tomb-Sweeping Day, Explained",
    intro:
      "Qingming, or Tomb-Sweeping Day, falls in early April, when families honour their ancestors at gravesites and then head out to enjoy the first real warmth of spring. It is a day of quiet remembrance and bright spring outings rolled into one.",
    history: [
      "Qingming is closely tied to the Cold Food Festival, which honours Jie Zitui, a loyal follower of the exiled prince Chong'er (later Duke Wen of Jin). Jie is said to have cut flesh from his own leg to feed the starving prince.",
      "When Chong'er returned to power and tried to reward Jie, he refused and retreated to Mount Mian. The duke set the mountain alight to force him out, but Jie died holding a willow tree. In remorse, the duke ordered that no fire be lit on the anniversary of his death, giving rise to the cold-food custom.",
      "Over centuries the Cold Food and Qingming observances merged, and the day became one of sweeping tombs, remembering ancestors, and welcoming spring.",
    ],
    foods: [
      { name: "Qingtuan", desc: "Green rice balls coloured with mugwort or barley grass and filled with sweet red bean paste, sold at every bakery in early April." },
      { name: "Cold dishes", desc: "A nod to the Cold Food Festival, with cold noodles and pickles appearing on spring tables." },
    ],
    activities: [
      { name: "Tomb sweeping", desc: "Families clean graves, offer food and flowers, and burn incense in remembrance." },
      { name: "Spring outings", desc: "After the gravesites, families picnic, fly kites, and enjoy the first warm days." },
      { name: "Kite flying", desc: "A tradition carried into the evening, sometimes with lanterns tied to the kite strings." },
      { name: "Willow branches", desc: "Branches are hung at doors, a custom tied to the Jie Zitui legend." },
    ],
    cities: [
      { name: "Hangzhou", note: "West Lake in full spring bloom" },
      { name: "Suzhou", note: "classical gardens at their greenest" },
      { name: "Beijing", note: "spring outings in the city parks" },
    ],
    itinerary: {
      title: "Qingming in Hangzhou",
      days: "2 days",
      steps: [
        "Arrive, try qingtuan at a lakeside bakery",
        "Morning around West Lake for blossoms and kites, fly out",
      ],
    },
    tips: [
      "Cemeteries are crowded and emotional on the day itself. As a visitor, enjoy the parks and spring food instead.",
      "Qingtuan are seasonal, only widely sold in the weeks around early April.",
      "April weather is changeable, bring a light layer and an umbrella.",
    ],
    faq: [
      { q: "When is Qingming in 2026?", a: "April 5, 2026, with the public holiday around April 4 to 6." },
      { q: "What is Qingming Festival?", a: "Tomb-Sweeping Day, when families honour ancestors by cleaning graves, then welcome spring with outings and kite flying." },
      { q: "What do you eat at Qingming?", a: "Qingtuan, green rice balls filled with sweet red bean paste, the signature spring treat." },
      { q: "Should tourists visit during Qingming?", a: "Yes for the spring scenery and seasonal food, though avoid the cemeteries themselves, which are for families." },
    ],
    related: ["spring-festival", "dragon-boat-festival", "mid-autumn-festival"],
  },
  {
    slug: "harbin-ice-festival",
    title: "Harbin Ice Festival 2026: Dates, Tickets & How to Survive the Cold",
    metaDescription:
      "The Harbin Ice and Snow Festival runs January to late February 2026. Ice and Snow World, what to eat, what to wear, and a 3-day plan.",
    h1: "Harbin Ice Festival: A City Built From Ice and Light",
    intro:
      "The Harbin Ice and Snow Festival is the world's largest ice festival. Every winter, Harbin in northeast China turns into a glowing city of illuminated ice and snow sculptures, some the size of buildings, in temperatures that routinely drop below -20°C.",
    history: [
      "The festival grew out of Harbin's ice lantern shows, a local winter pastime that dates back to the 1960s. In 1963 the city staged its first organised ice lantern garden party.",
      "It became the official Ice and Snow Festival in 1985 and has since grown into a sprawling multi-venue event centred on the Ice and Snow World, a park of colossal illuminated ice structures rebuilt from scratch each winter.",
      "Harbin's position in China's far northeast, where rivers freeze solid for months, gives the festival its raw material and its signature extreme cold.",
    ],
    foods: [
      { name: "Harbin sausage", desc: "A smoky, garlicky cured sausage with Russian influence, sold from street stalls across the city." },
      { name: "Frozen pears", desc: "Frozen pears and persimmons, eaten thawed or half-frozen, a classic northeast winter snack." },
      { name: "Guo bao rou", desc: "Crispy sweet-and-sour pork, Harbin's most famous dish, perfect after hours in the cold." },
      { name: "Modern ice cream", desc: "A century-old ice cream brand sold on Central Street, eaten outdoors even in winter." },
    ],
    activities: [
      { name: "Ice and Snow World", desc: "The main park, with ice castles, slides, and illuminated sculptures on a colossal scale." },
      { name: "Sun Island Snow Expo", desc: "A separate park focused on snow sculpture, often quieter than the main venue." },
      { name: "Central Street", desc: "A pedestrian boulevard of Russian-era architecture, lined with food and shops." },
      { name: "Winter swimming", desc: "A hardy local tradition, with swimmers plunging into a hole cut in the frozen Songhua River." },
    ],
    cities: [
      { name: "Harbin", note: "the festival's home, reachable by flight or high-speed rail from Beijing" },
    ],
    itinerary: {
      title: "Harbin Ice Festival",
      days: "3 days",
      steps: [
        "Arrive, warm up with Harbin sausage on Central Street",
        "Ice and Snow World from late afternoon into the illuminated evening",
        "Sun Island Snow Expo in the morning, fly out",
      ],
    },
    tips: [
      "Dress for -20°C or colder: proper boots, thermal layers, hat, gloves, and a face covering.",
      "Warm up indoors every hour, frostbite sets in faster than it feels.",
      "The ice structures are at their best after dark, when the lights come on. Visit from late afternoon.",
      "Book flights and hotels early, Harbin is at peak demand through the festival.",
    ],
    faq: [
      { q: "When is the Harbin Ice Festival in 2026?", a: "It runs from early January to late February 2026, with the Ice and Snow World open through the season." },
      { q: "How cold does it get?", a: "Temperatures routinely drop below -20°C, and can reach -30°C at night." },
      { q: "What should I wear?", a: "Thermal layers, insulated boots, a hat, gloves, and a face covering. Rent or buy gear locally if needed." },
      { q: "Is it worth the cold?", a: "Yes, the illuminated ice sculptures are unlike anything else in the world, and are best seen after dark." },
    ],
    related: ["spring-festival", "cherry-blossom-season", "national-day"],
  },
  {
    slug: "torch-festival",
    title: "Torch Festival 2026: Yunnan's Fire Festival, Dates & Where to Go",
    metaDescription:
      "The Yi Torch Festival in August lights up Yunnan and Sichuan. Dates, the meaning of the fire, where to go, food, and a 3-day plan.",
    h1: "Torch Festival: A Mountain of Fire in Yunnan and Sichuan",
    intro:
      "The Torch Festival is the Yi people's biggest celebration, held in late summer across Yunnan and Sichuan. Villages and towns light enormous torches, and people sing, dance, and parade through the night to drive away bad spirits and pray for a good harvest.",
    history: [
      "The festival is rooted in the Yi people's fire worship, an ancient belief that fire can drive away evil and bring fertility to the land. It falls on the 24th day of the sixth lunar month, at the height of summer.",
      "Legend adds a heroic layer: a brave man is said to have used torches to defeat a plague of locusts descending on the crops, and the festival commemorates the victory.",
      "Today it is celebrated by the Yi and other ethnic groups across the southwest, with the largest gatherings in Liangshan in Sichuan and around Dali in Yunnan.",
    ],
    foods: [
      { name: "Roast lamb", desc: "Whole lamb roasted over open fires, the centrepiece of festival feasts." },
      { name: "Buckwheat cakes", desc: "A staple of the Yi highlands, served with chilli dips and pickles." },
      { name: "Sour soup", desc: "A tangy Yi-style soup, warming and restorative after a night of dancing." },
    ],
    activities: [
      { name: "Torch lighting", desc: "Giant torches are lit in village squares at dusk, and the night glows with fire." },
      { name: "Song and dance circles", desc: "The Yi dage dance brings whole villages into circling, hand-held movement around the flames." },
      { name: "Wrestling and horse races", desc: "Daytime competitions of strength and skill, part of the festival's athletic tradition." },
    ],
    cities: [
      { name: "Liangshan (Sichuan)", note: "the largest Yi celebration, around Xichang" },
      { name: "Dali (Yunnan)", url: "https://www.yunnan-province.com/", note: "torch night by Erhai Lake" },
    ],
    itinerary: {
      title: "Torch Festival in Dali",
      days: "3 days",
      steps: [
        "Arrive in Dali, explore the old town",
        "Torch lighting and dance circles by Erhai Lake",
        "Daytime wrestling and horse events, fly out",
      ],
    },
    tips: [
      "Watch the big torch from the edges, the crowd surges forward as it is lit.",
      "Wear natural fibres rather than synthetics near open flame.",
      "Dates shift with the lunar calendar, confirm locally before you book.",
      "Highland nights are cool even in August, bring a warm layer.",
    ],
    faq: [
      { q: "When is the Torch Festival?", a: "It falls on the 24th day of the sixth lunar month, which lands in August, and the exact date shifts each year." },
      { q: "Who celebrates the Torch Festival?", a: "Primarily the Yi people, with related celebrations among other ethnic groups in Yunnan and Sichuan." },
      { q: "Where is the best place to see it?", a: "Liangshan in Sichuan has the largest celebration, while Dali in Yunnan offers torch night by Erhai Lake." },
      { q: "Is it safe for tourists?", a: "Yes, it is joyful and welcoming, but keep distance from the flames and wear natural fibres." },
    ],
    related: ["water-splashing-festival", "san-yue-san", "naadam-festival"],
  },
  {
    slug: "qixi-festival",
    title: "Qixi Festival 2026: China's Valentine's Day, Dates & Where to Celebrate",
    metaDescription:
      "Qixi, China's Valentine's Day, falls on August 19, 2026. The cowherd and weaver girl legend, how it is celebrated, food, and romantic cities.",
    h1: "Qixi Festival: China's Valentine's Day, Explained",
    intro:
      "Qixi, the Double Seventh, is China's Valentine's Day, falling on the seventh day of the seventh lunar month. It tells the story of two star-crossed lovers who meet once a year, and today it is a quiet, gift-giving day for couples.",
    history: [
      "The legend centres on the cowherd Niulang and the weaver girl Zhinü, a heavenly maiden. They fell in love and married, but Zhinü's mother, the Queen Mother of the West, separated them by drawing the Milky Way between them.",
      "Moved by their sorrow, the magpies of the world form a bridge once a year, on the seventh day of the seventh month, so the lovers can meet. The star Altair is said to be the cowherd, and Vega the weaver girl.",
      "Historically the festival was a night for women to pray for skillful hands in weaving, a tradition called qiqiao. Over time it has become China's answer to Valentine's Day, focused on romance and gifts.",
    ],
    foods: [
      { name: "Qiaoguo", desc: "Crisp, twisted fried dough strips, the traditional festival snack named for the request for clever hands." },
      { name: "Seasonal fruit", desc: "Melons and fruit were once offered as part of the qiqiao rituals." },
    ],
    activities: [
      { name: "Romantic dinners", desc: "Couples book riverside or skyline restaurants, the modern heart of the festival." },
      { name: "Temples to the matchmaker", desc: "Some temples honour Yue Lao, the deity who ties destined couples together with red thread." },
      { name: "Gift giving", desc: "Flowers, jewellery, and chocolates now rival the traditional handmade crafts." },
    ],
    cities: [
      { name: "Suzhou", note: "canal-side romance in the old town" },
      { name: "Shanghai", note: "skyline dinners for two along the Bund" },
      { name: "Hangzhou", note: "West Lake, long a setting for love stories" },
    ],
    itinerary: {
      title: "Qixi in Suzhou",
      days: "2 days",
      steps: [
        "Arrive, stroll the canals and old town",
        "Riverside dinner at dusk, fly out the next morning",
      ],
    },
    tips: [
      "Qixi is a couples' day, not a street festival, so do not expect parades.",
      "Book restaurants early, and expect florists and jewellers to raise prices.",
      "It is a working day in most of China, so transport is normal rather than holiday-busy.",
    ],
    faq: [
      { q: "When is Qixi in 2026?", a: "August 19, 2026, the seventh day of the seventh lunar month." },
      { q: "What is the Qixi Festival?", a: "China's Valentine's Day, based on the legend of the cowherd and the weaver girl who meet once a year across the Milky Way." },
      { q: "How do people celebrate Qixi?", a: "Mostly with romantic dinners, gifts, and flowers, rather than public street events." },
      { q: "Is Qixi the same as Western Valentine's Day?", a: "It serves the same romantic role but has its own legend and traditions rooted in the lunar calendar." },
    ],
    related: ["mid-autumn-festival", "cherry-blossom-season", "lantern-festival"],
  },
  {
    slug: "hungry-ghost-festival",
    title: "Hungry Ghost Festival 2026: The Zhongyuan Festival, Explained",
    metaDescription:
      "The Hungry Ghost Festival (Zhongyuan) falls on August 27, 2026. Offerings, floating lanterns, the Mulian legend, and how to observe respectfully.",
    h1: "Hungry Ghost Festival: When the Spirit World Is Honoured",
    intro:
      "The Hungry Ghost Festival, or Zhongyuan, falls on the fifteenth day of the seventh lunar month. According to tradition, the gates of the underworld open and the spirits of the dead return to the living world for a month, and the living make offerings to appease them.",
    history: [
      "The festival blends Taoist and Buddhist traditions. In Taoism it is the Zhongyuan festival, a day when the underworld's gates open; in Buddhism it is the Ullambana festival, tied to the story of Mulian.",
      "Mulian, a disciple of the Buddha, discovered his mother suffering in the realm of hungry ghosts. The Buddha taught him to make offerings on the fifteenth day of the seventh month, and her suffering was relieved.",
      "The custom of floating lanterns on rivers, burning paper offerings, and staging opera for the spirits grew from these beliefs, and remains strongest in southern China and Hong Kong.",
    ],
    foods: [
      { name: "Duck", desc: "The festival's signature dish, as the word for duck sounds like suppress, symbolising keeping bad spirits at bay." },
      { name: "Fa gao", desc: "Steamed prosperity cakes, made puffy and split on top to symbolise good fortune." },
      { name: "Fruit offerings", desc: "Placed on altars and streetside shrines for wandering spirits." },
    ],
    activities: [
      { name: "Floating lanterns", desc: "Paper lanterns set on rivers to guide lost spirits home." },
      { name: "Paper offerings", desc: "Joss paper and paper money burned at dusk for ancestors and wandering souls." },
      { name: "Opera performances", desc: "Traditional opera staged for both the spirits and the living audience." },
    ],
    cities: [
      { name: "Hong Kong", note: "the largest public observance in the region" },
      { name: "Guangzhou", note: "river lantern ceremonies and street offerings" },
    ],
    itinerary: {
      title: "Hungry Ghost Festival in Hong Kong",
      days: "2 days",
      steps: [
        "Arrive, watch street-side offerings at dusk",
        "Attend an opera performance staged for the spirits",
      ],
    },
    tips: [
      "Observe respectfully. Avoid photographing people making offerings without asking.",
      "Do not touch offerings or pick up objects left at shrines.",
      "Folk custom advises against swimming or staying out very late during the ghost month, take it as local colour rather than a rule.",
    ],
    faq: [
      { q: "When is the Hungry Ghost Festival in 2026?", a: "August 27, 2026, the fifteenth day of the seventh lunar month." },
      { q: "What is the Hungry Ghost Festival?", a: "A Taoist and Buddhist observance when the gates of the underworld are believed to open and offerings are made to wandering spirits." },
      { q: "Where is it best observed?", a: "Hong Kong has the largest public observance, with Guangzhou's river lantern ceremonies close behind." },
      { q: "Is it safe for tourists?", a: "Yes, it is a respectful family observance, just be considerate of people making offerings." },
    ],
    related: ["qingming-festival", "double-ninth-festival", "qixi-festival"],
  },
  {
    slug: "double-ninth-festival",
    title: "Double Ninth Festival 2026: Chongyang, Dates & Autumn Hikes",
    metaDescription:
      "The Double Ninth Festival (Chongyang) falls on October 18, 2026. The legend, chrysanthemum wine, mountain climbing, and where to enjoy autumn.",
    h1: "Double Ninth Festival: Climb a Mountain and Honour the Elders",
    intro:
      "The Double Ninth Festival, or Chongyang, falls on the ninth day of the ninth lunar month. The double nine is a lucky number in Chinese tradition, and the day is marked by climbing heights, admiring chrysanthemums, and honouring the elderly.",
    history: [
      "Nine is a yang, or positive, number in Chinese cosmology, and the ninth day of the ninth month doubles it, giving the festival its name and its auspicious character.",
      "A well-known legend tells of Huan Jing, who was warned that disaster would strike his home on the double ninth. He took his family up a mountain and returned to find their livestock dead, spared because they had climbed to safety.",
      "Today the festival is also a day to respect the elderly, with families visiting older relatives and taking them on autumn outings.",
    ],
    foods: [
      { name: "Chongyang cake", desc: "A layered rice cake, its name echoing the word for high, tied to the climbing tradition." },
      { name: "Chrysanthemum wine", desc: "Flower-scented wine drunk as a nod to the season's blossom." },
    ],
    activities: [
      { name: "Mountain climbing", desc: "The central ritual, with families hiking in the clear autumn air." },
      { name: "Chrysanthemum shows", desc: "Parks stage displays of the season's flower." },
      { name: "Visiting elders", desc: "A day to call on and honour older relatives." },
    ],
    cities: [
      { name: "Hangzhou", note: "chrysanthemum displays and West Lake hills" },
      { name: "Beijing", note: "autumn hikes on Fragrant Hills" },
    ],
    itinerary: {
      title: "Double Ninth in Hangzhou",
      days: "2 days",
      steps: [
        "Arrive, hike the West Lake hills in clear autumn air",
        "Chrysanthemum show in a city park, fly out",
      ],
    },
    tips: [
      "A quieter, mostly family-focused festival, perfect for autumn scenery without Golden Week crowds.",
      "October weather is crisp and clear in eastern China, ideal for hiking.",
      "The festival often falls close to National Day, so check dates and book transport early if they overlap.",
    ],
    faq: [
      { q: "When is the Double Ninth Festival in 2026?", a: "October 18, 2026, the ninth day of the ninth lunar month." },
      { q: "What is the Double Ninth Festival?", a: "A day for climbing heights, admiring chrysanthemums, and honouring the elderly." },
      { q: "What do people eat?", a: "Chongyang cake and chrysanthemum wine are the traditional foods." },
      { q: "Is it a public holiday?", a: "It is not a national public holiday, but it is widely observed as a family day." },
    ],
    related: ["mid-autumn-festival", "qingming-festival", "national-day"],
  },
  {
    slug: "laba-festival",
    title: "Laba Festival 2026: Laba Porridge, Dates & Temple Traditions",
    metaDescription:
      "The Laba Festival on January 26, 2026 opens the New Year season. Laba porridge, laba garlic, temple porridge lines, and what to expect.",
    h1: "Laba Festival: A Warm Bowl That Opens the New Year",
    intro:
      "The Laba Festival falls on the eighth day of the twelfth lunar month, and it opens the countdown to Spring Festival. Its signature is laba porridge, a sweet or savoury porridge of grains, beans, and dried fruit handed out free at temples at dawn.",
    history: [
      "Laba has roots in the ancient end-of-year sacrifices to ancestors and gods, held in the twelfth lunar month to give thanks and ask for a good harvest.",
      "Buddhism added another layer: the eighth day of the twelfth month marks the enlightenment of the Buddha, and temples began serving porridge to the poor in his honour.",
      "Today the temple porridge lines remain the festival's most visible tradition, with places like Yonghegong in Beijing serving thousands of bowls before sunrise.",
    ],
    foods: [
      { name: "Laba porridge", desc: "An eight-treasure porridge of rice, beans, nuts, and dried fruit, the festival's namesake dish." },
      { name: "Laba garlic", desc: "Garlic cloves pickled in vinegar, which turn green and are ready to eat by Spring Festival." },
    ],
    activities: [
      { name: "Temple porridge", desc: "Monasteries serve free porridge at dawn, drawing long, quiet queues." },
      { name: "Pickling laba garlic", desc: "Families pickle garlic in vinegar as a New Year preparation." },
      { name: "First New Year decorations", desc: "Streets begin to turn red as the Spring Festival approaches." },
    ],
    cities: [
      { name: "Beijing", note: "Yonghegong and other temples serve porridge at dawn" },
    ],
    itinerary: {
      title: "Laba in Beijing",
      days: "2 days",
      steps: [
        "Arrive, join a temple porridge line at dawn",
        "Stroll streets turning red for New Year, fly out",
      ],
    },
    tips: [
      "Temple porridge lines form before sunrise and are a local ritual, not a tourist show, so keep it brief and respectful.",
      "Porridge is handed out until supplies run out, arrive early.",
      "It is a working day in most of China, so transport and hotels are normal.",
    ],
    faq: [
      { q: "When is the Laba Festival in 2026?", a: "January 26, 2026, the eighth day of the twelfth lunar month." },
      { q: "What is laba porridge?", a: "A porridge of grains, beans, and dried fruit, served free at temples to mark the festival." },
      { q: "Where can I try it?", a: "Buddhist temples, especially in Beijing, hand out free porridge at dawn." },
      { q: "Is Laba a public holiday?", a: "No, it is a traditional observance that opens the countdown to Spring Festival." },
    ],
    related: ["spring-festival", "chinese-new-year-eve", "lantern-festival"],
  },
  {
    slug: "chinese-new-year-eve",
    title: "Chinese New Year's Eve 2026: The Reunion Dinner, Explained",
    metaDescription:
      "Chinese New Year's Eve on February 16, 2026 is the year's most important meal. The reunion dinner, midnight dumplings, fireworks, and tips.",
    h1: "Chinese New Year's Eve: The Reunion Dinner, Explained",
    intro:
      "New Year's Eve, or Chuxi, is the most important night of the Chinese year. The whole family sits down to the reunion dinner, the year's most significant meal, then stays up late to welcome the new year with fireworks and the Spring Festival Gala.",
    history: [
      "The custom of staying up on New Year's Eve, called shousui, is centuries old, a vigil that began as a way to guard against the mythical Nian beast and became a family ritual of togetherness.",
      "The reunion dinner is the festival's anchor. Wherever people work, they travel home for this one meal, which is why New Year's Eve triggers the world's largest annual migration.",
      "At midnight, families eat dumplings in the north, symbolising the turning of the old year into the new.",
    ],
    foods: [
      { name: "The reunion dinner", desc: "A multi-course feast, with dishes chosen for their lucky meanings rather than taste alone." },
      { name: "Midnight dumplings", desc: "Eaten as the year turns, their shape echoing the old money ingots." },
      { name: "Whole fish", desc: "Served with head and tail intact for the phrase surplus every year." },
    ],
    activities: [
      { name: "The reunion dinner", desc: "The one meal no one misses, booked weeks or months in advance." },
      { name: "Midnight fireworks", desc: "Cities light up at midnight where fireworks are permitted." },
      { name: "The Spring Festival Gala", desc: "A televised variety show watched by hundreds of millions on the night." },
      { name: "Shousui", desc: "Staying up late to welcome the new year together." },
    ],
    cities: [
      { name: "Beijing", note: "city-wide fireworks after midnight" },
      { name: "Shanghai", note: "Bund countdown atmosphere" },
    ],
    itinerary: {
      title: "New Year's Eve in Beijing",
      days: "2 days",
      steps: [
        "Arrive, book a hotel reunion dinner in advance",
        "Midnight fireworks and shousui, recover on day two",
      ],
    },
    tips: [
      "Most restaurants close by early evening for private family dinners. Book a hotel dinner well ahead, or plan to eat before 6pm.",
      "Transport into cities peaks in the days before, book trains and flights early.",
      "The first days of the new year are very quiet, with many shops closed.",
    ],
    faq: [
      { q: "When is Chinese New Year's Eve in 2026?", a: "February 16, 2026, the last day of the twelfth lunar month." },
      { q: "What is the reunion dinner?", a: "The most important family meal of the year, when everyone travels home to eat together." },
      { q: "Are restaurants open on New Year's Eve?", a: "Many family restaurants close by evening. Hotel restaurants and larger chains stay open, but book ahead." },
      { q: "What happens at midnight?", a: "Families eat dumplings and welcome the new year with fireworks and the Spring Festival Gala." },
    ],
    related: ["spring-festival", "laba-festival", "lantern-festival"],
  },
  {
    slug: "san-yue-san",
    title: "San Yue San 2026: The Zhuang Song Festival in Guangxi",
    metaDescription:
      "San Yue San, the Zhuang song festival, falls in April in Guangxi. The courtship tradition, five-color rice, singing contests, and where to go.",
    h1: "San Yue San: The Zhuang Song Festival of Guangxi",
    intro:
      "San Yue San, the third day of the third lunar month, is the Zhuang people's song festival and a public holiday across Guangxi. Young people gather to trade improvised songs in call-and-response, a tradition that once served as courtship and still fills villages with music today.",
    history: [
      "The Zhuang are China's largest ethnic minority, and their song festival, known as the gexu, has roots in an ancient courtship custom where young people met and sang to each other in the fields.",
      "Legend adds a mythical heroine, Liu Sanjie, the third sister, a singer so gifted that her songs became the heart of the festival's identity.",
      "Today San Yue San is a public holiday in Guangxi, and the festival fills city squares and villages with antiphonal singing, bamboo-pole dancing, and five-color rice.",
    ],
    foods: [
      { name: "Five-color glutinous rice", desc: "Sticky rice dyed black, red, yellow, purple, and white with wild plants, a visual centrepiece and blessing." },
      { name: "Oil tea", desc: "A savoury tea brewed with puffed rice, peanuts, and ginger, a Zhuang staple." },
      { name: "Zongzi", desc: "The Zhuang make oversized, leaf-wrapped rice parcels for the festival." },
    ],
    activities: [
      { name: "Antiphonal singing", desc: "Call-and-response song contests, the festival's core tradition." },
      { name: "Bamboo-pole dancing", desc: "Dancers step between poles clapped in rhythm, a crowd favourite." },
      { name: "Throwing the embroidered ball", desc: "A courtship game where a silk ball is tossed to choose a partner." },
    ],
    cities: [
      { name: "Nanning", url: "https://www.guangxi-province.com/", note: "the festival's urban heart" },
      { name: "Guilin", note: "Zhuang villages in the surrounding hills" },
    ],
    itinerary: {
      title: "San Yue San in Guangxi",
      days: "3 days",
      steps: [
        "Arrive in Nanning, try five-color rice",
        "Watch singing contests and bamboo-pole dancing",
        "Day trip to a Zhuang village, fly out",
      ],
    },
    tips: [
      "It is a public holiday in Guangxi, so transport and hotels fill up. Book the Nanning corridor early.",
      "The best singing is in villages outside the cities, so plan a day trip with a local driver.",
      "Ask before photographing people in traditional dress.",
    ],
    faq: [
      { q: "When is San Yue San in 2026?", a: "Around April 19, 2026, the third day of the third lunar month." },
      { q: "What is San Yue San?", a: "The Zhuang people's song festival in Guangxi, a public holiday marked by antiphonal singing and five-color rice." },
      { q: "Where is it celebrated?", a: "Across Guangxi, with the largest events in Nanning and in Zhuang villages around Guilin." },
      { q: "What should I eat?", a: "Five-color glutinous rice, oil tea, and Zhuang-style zongzi." },
    ],
    related: ["water-splashing-festival", "sisters-meal-festival", "torch-festival"],
  },
  {
    slug: "sisters-meal-festival",
    title: "Sisters' Meal Festival 2026: The Miao Courtship Festival in Guizhou",
    metaDescription:
      "The Miao Sisters' Meal Festival in Guizhou celebrates courtship with five-color rice and silver dress. Dates, villages, food, and how to visit.",
    h1: "Sisters' Meal Festival: The Miao Courtship Festival",
    intro:
      "The Sisters' Meal Festival is the Miao people's courtship celebration, held in Guizhou in spring. Women prepare five-color sticky rice and dress in heavy silver, and the village sings and dances for days in a tradition that once served as an open marriage market.",
    history: [
      "The Miao, known for their elaborate silver jewellery and embroidery, have long used the festival as a way for young people from different villages to meet and court.",
      "The five-color rice is the festival's signature: women dye sticky rice with wild plants and wrap it, sometimes hiding tokens inside that signal a reply to a suitor.",
      "Today the festival draws visitors to the Miao villages around Kaili, where the silver headdresses, reed-pipe music, and rice wine remain unchanged at heart.",
    ],
    foods: [
      { name: "Five-color sticky rice", desc: "Dyed with wild plants and wrapped in leaves, the festival's centrepiece." },
      { name: "Sour fish soup", desc: "A Miao staple of pickled fish and vegetables, sharp and warming." },
      { name: "Rice wine", desc: "Home-brewed and offered generously to guests." },
    ],
    activities: [
      { name: "Silver-dressed parades", desc: "Miao women in full silver headdresses and layered necklaces." },
      { name: "Lusheng reed-pipe dancing", desc: "Men play the lusheng while dancers circle in step." },
      { name: "Courtship games", desc: "Songs and games that preserve the festival's matchmaking roots." },
    ],
    cities: [
      { name: "Kaili (Guizhou)", note: "the gateway to the Miao villages" },
      { name: "Taijiang", note: "the festival's traditional home" },
    ],
    itinerary: {
      title: "Sisters' Meal Festival in Guizhou",
      days: "3 days",
      steps: [
        "Arrive in Kaili, hire a local driver",
        "Visit a festival village for the silver parade and dancing",
        "Try five-color rice and rice wine, fly out",
      ],
    },
    tips: [
      "The villages are remote, so hire a local driver from Kaili.",
      "Ask before photographing people in ceremonial dress.",
      "Dates shift with the lunar calendar, confirm before you book.",
    ],
    faq: [
      { q: "What is the Sisters' Meal Festival?", a: "The Miao people's courtship festival in Guizhou, marked by five-color rice and silver-dressed parades." },
      { q: "Where is it held?", a: "In Miao villages around Kaili, with Taijiang as its traditional home." },
      { q: "What is five-color sticky rice?", a: "Glutinous rice dyed with wild plants in five colours, the festival's signature food." },
      { q: "Is it tourist-friendly?", a: "Yes, visitors are welcome, but the villages are remote and it helps to have a local guide." },
    ],
    related: ["san-yue-san", "water-splashing-festival", "naadam-festival"],
  },
  {
    slug: "naadam-festival",
    title: "Naadam Festival 2026: Mongolia's Three Games of Men, Explained",
    metaDescription:
      "The Naadam Festival in Inner Mongolia features wrestling, archery, and horse racing. Dates, where to go, food, and how to experience it.",
    h1: "Naadam Festival: Wrestling, Archery, and Horse Racing on the Steppe",
    intro:
      "Naadam is Mongolia's greatest festival, centred on the three games of men: wrestling, archery, and horse racing. On the Inner Mongolian grasslands, competitors gather for days of sport and feasting, and the whole event carries the spirit of the nomadic steppe.",
    history: [
      "Naadam has roots in the military and hunting traditions of the steppe, where a warrior's worth was measured in strength, aim, and horsemanship.",
      "The three games, wrestling, archery, and horse racing, are unchanged in essence from those origins, and the festival remains a point of pride for Mongolian communities.",
      "In Inner Mongolia, Naadam is held in summer, with the largest urban event in Hohhot and more authentic gatherings on the grasslands of Hulunbuir.",
    ],
    foods: [
      { name: "Roast whole lamb", desc: "The centrepiece of the festival feast, roasted over open fires." },
      { name: "Milk tea", desc: "Savoury, salted tea made with milk, the everyday drink of the steppe." },
      { name: "Airag", desc: "Fermented mare's milk, lightly alcoholic and an acquired taste." },
    ],
    activities: [
      { name: "Wrestling", desc: "Competitors in traditional vests and boots grapple in open-air bouts." },
      { name: "Archery", desc: "Archers shoot at distant targets with traditional bows." },
      { name: "Horse racing", desc: "Long-distance races often ridden by young jockeys." },
    ],
    cities: [
      { name: "Hohhot", note: "the main urban Naadam" },
      { name: "Hulunbuir", note: "grassland Naadam at its most authentic" },
    ],
    itinerary: {
      title: "Naadam in Inner Mongolia",
      days: "3 days",
      steps: [
        "Arrive in Hohhot, acclimatise to the plateau",
        "Watch the opening ceremony and wrestling",
        "Grassland day for horse racing and archery, fly out",
      ],
    },
    tips: [
      "Dates shift year to year, confirm locally before flying.",
      "Grassland nights are cold even in July, pack layers.",
      "The grassland Naadam in Hulunbuir is more authentic but requires a long drive.",
    ],
    faq: [
      { q: "What is Naadam?", a: "Mongolia's festival of the three games of men: wrestling, archery, and horse racing." },
      { q: "When is it held?", a: "In July in Inner Mongolia, though exact dates shift each year." },
      { q: "Where is the best Naadam?", a: "Hohhot has the main urban event, while Hulunbuir offers the most authentic grassland setting." },
      { q: "What should I eat?", a: "Roast lamb, salted milk tea, and airag, the fermented mare's milk." },
    ],
    related: ["torch-festival", "sisters-meal-festival", "shoton-festival"],
  },
  {
    slug: "shoton-festival",
    title: "Shoton Festival 2026: Tibet's Yogurt Festival, Dates & the Thangka",
    metaDescription:
      "The Shoton Festival in Lhasa unveils a giant thangka at dawn. Dates, the Drepung ceremony, Tibetan opera, yogurt, and how to attend.",
    h1: "Shoton Festival: A Giant Thangka Unveiled at Dawn",
    intro:
      "The Shoton Festival, Tibet's yogurt festival, is famous for a single moment: the unveiling of a vast thangka at Drepung Monastery at first light. What follows is days of Tibetan opera, picnics, and yogurt feasts in the summer air of Lhasa.",
    history: [
      "The name Shoton means yogurt banquet. It began as a monastic observance, when monks emerged from a summer retreat and lay people offered them yogurt.",
      "Over time the offering grew into a public festival, and the dawn unveiling of the giant thangka at Drepung became its centrepiece.",
      "Tibetan opera, performed over the following days in Norbulingka, completes the festival's blend of the sacred and the festive.",
    ],
    foods: [
      { name: "Tibetan yogurt", desc: "Rich, tangy yak-milk yogurt, the festival's namesake offering." },
      { name: "Sweet tea", desc: "A milky, sweetened tea served in teahouses across Lhasa." },
      { name: "Tsampa", desc: "Roasted barley flour, the staple of the plateau, eaten with tea." },
    ],
    activities: [
      { name: "The thangka unveiling", desc: "A vast painted thangka unrolled down the hillside at Drepung at dawn." },
      { name: "Tibetan opera", desc: "Masked performances staged in Norbulingka over the following days." },
      { name: "Picnics", desc: "Families picnic on the grass with yogurt and sweet tea." },
    ],
    cities: [
      { name: "Lhasa", url: "https://www.tibet-lhasa-potala.com/", note: "the festival's home" },
    ],
    itinerary: {
      title: "Shoton in Lhasa",
      days: "3 days",
      steps: [
        "Arrive in Lhasa, acclimatise to the altitude",
        "Dawn thangka unveiling at Drepung Monastery",
        "Tibetan opera in Norbulingka, fly out",
      ],
    },
    tips: [
      "Tibet travel requires permits arranged through a licensed agency.",
      "The thangka viewing starts before sunrise, arrive early and dress warmly.",
      "Acclimatise to Lhasa's altitude for a day or two before the festival.",
    ],
    faq: [
      { q: "What is the Shoton Festival?", a: "Tibet's yogurt festival, famous for the dawn unveiling of a giant thangka at Drepung Monastery." },
      { q: "When is it held?", a: "In August, on the last day of the sixth Tibetan month, with dates shifting each year." },
      { q: "Do I need a permit?", a: "Yes, most visitors to Tibet need a permit arranged through a licensed travel agency." },
      { q: "What should I see first?", a: "The thangka unveiling at Drepung at dawn, then the Tibetan opera in Norbulingka." },
    ],
    related: ["tibetan-new-year", "torch-festival", "naadam-festival"],
  },
  {
    slug: "tibetan-new-year",
    title: "Tibetan New Year 2026: Losar, Dates & How It Is Celebrated",
    metaDescription:
      "Tibetan New Year, or Losar, falls in February. Guthuk soup, monastery rituals, family feasts, and how to experience it in Lhasa.",
    h1: "Tibetan New Year: Losar, Explained",
    intro:
      "Losar, the Tibetan New Year, is Tibet's most important festival, often close to but distinct from Chinese New Year. It is marked by family feasts, monastery rituals, and the ceremonial guthuk soup with fortunes hidden inside.",
    history: [
      "Losar predates Buddhism in Tibet, rooted in winter bonfires and offerings to the spirits of the land, and later absorbed Buddhist ritual.",
      "The festival begins days before the new year with house cleaning and the making of khapse, fried pastries, and builds to the eve, when families eat guthuk together.",
      "On the first morning, families rise early, dress in their best, and visit monasteries and relatives to exchange good wishes for the year ahead.",
    ],
    foods: [
      { name: "Guthuk", desc: "A special eve soup of dumplings, some holding hidden fortunes like wool or coal." },
      { name: "Khapse", desc: "Fried pastries shaped into knots, prepared in the days before the new year." },
      { name: "Dresil", desc: "A sweet dish of rice, butter, and sugar served as a first taste of the year." },
    ],
    activities: [
      { name: "Monastery ceremonies", desc: "Butter lamps and prayers at the Jokhang and other temples." },
      { name: "House blessings", desc: "Homes decorated with lucky symbols and offerings of the chemar box." },
      { name: "Family visits", desc: "Relatives exchange greetings and gifts through the first days." },
    ],
    cities: [
      { name: "Lhasa", url: "https://www.tibet-lhasa-potala.com/", note: "monastery rituals and family feasts" },
    ],
    itinerary: {
      title: "Losar in Lhasa",
      days: "3 days",
      steps: [
        "Arrive in Lhasa, acclimatise",
        "Watch monastery ceremonies and butter lamps",
        "Try guthuk and khapse, fly out",
      ],
    },
    tips: [
      "Permits and cold weather make this an advanced trip. Plan through a licensed agency.",
      "Allow acclimatisation days for Lhasa's altitude.",
      "Many businesses close over Losar, so plan meals and transport ahead.",
    ],
    faq: [
      { q: "When is Tibetan New Year in 2026?", a: "It falls in February, though the exact date follows the Tibetan calendar and shifts each year." },
      { q: "What is guthuk?", a: "A special eve soup of dumplings, some hiding tokens that predict the coming year." },
      { q: "Is Losar the same as Chinese New Year?", a: "No, it follows the Tibetan calendar and often falls close to but distinct from Chinese New Year." },
      { q: "Do I need a permit?", a: "Yes, most visitors to Tibet need a permit arranged through a licensed agency." },
    ],
    related: ["shoton-festival", "spring-festival", "naadam-festival"],
  },
  {
    slug: "national-day",
    title: "National Day 2026: Golden Week, Dates & How to Navigate the Crowds",
    metaDescription:
      "China's National Day on October 1, 2026 opens Golden Week, the busiest travel week of the year. What to expect, where to go, and survival tips.",
    h1: "National Day: Golden Week, Explained",
    intro:
      "National Day on October 1 marks the founding of the People's Republic of China and opens Golden Week, a seven-day holiday when the entire country travels at once. It is the single busiest travel period of the Chinese year.",
    history: [
      "October 1, 1949 marked the founding of the People's Republic of China, and the day has been a national holiday ever since.",
      "In 1999 the holiday was extended into Golden Week, a full week off designed to boost domestic tourism and spending.",
      "The result is a predictable annual phenomenon: hundreds of millions of trips, sold-out transport, and landmarks filled to capacity.",
    ],
    foods: [
      { name: "Street food", desc: "Every attraction becomes a food street, with regional snacks on sale everywhere." },
      { name: "Autumn crab", desc: "Hairy crab is in season, a prized treat in the Yangtze delta." },
    ],
    activities: [
      { name: "Flag-raising", desc: "The Tiananmen Square flag-raising at dawn draws huge crowds." },
      { name: "City light shows", desc: "Major cities stage illuminated displays and evening events." },
      { name: "Autumn scenery", desc: "Golden Week lands in the best season for northern China's autumn colours." },
    ],
    cities: [
      { name: "Beijing", note: "the flag-raising and Tiananmen Square" },
    ],
    itinerary: {
      title: "National Day in Beijing",
      days: "2 days",
      steps: [
        "Arrive, watch the city light shows at dusk",
        "Dawn flag-raising at Tiananmen, fly out",
      ],
    },
    tips: [
      "This is the worst week of the year for crowds and prices. If you visit, stay in one city and book everything far in advance.",
      "Attractions often require advance tickets during Golden Week, check before you go.",
      "If your dates are flexible, travel the week before or after for the same scenery without the crowds.",
    ],
    faq: [
      { q: "When is National Day in 2026?", a: "October 1, 2026, opening a seven-day holiday through October 7." },
      { q: "What is Golden Week?", a: "The seven-day National Day holiday, the busiest travel week of the Chinese year." },
      { q: "Should tourists avoid Golden Week?", a: "Most travellers find it too crowded and expensive, but if your dates are fixed, stay in one city and book early." },
      { q: "What is there to see?", a: "The Tiananmen flag-raising, city light shows, and peak autumn scenery." },
    ],
    related: ["mid-autumn-festival", "labor-day", "double-ninth-festival"],
  },
  {
    slug: "labor-day",
    title: "Labor Day 2026 in China: The Five-Day Spring Holiday, Explained",
    metaDescription:
      "China's Labor Day holiday on May 1, 2026 is a five-day spring break and the first big travel rush of the year. What to expect and where to go.",
    h1: "Labor Day: China's Five-Day Spring Holiday",
    intro:
      "Labor Day on May 1 becomes a five-day holiday in China, sending millions on their first major trips of the year. It is spring's answer to Golden Week, pleasant in weather but busy on the roads and rails.",
    history: [
      "May 1 is International Workers' Day, observed in China since the early twentieth century.",
      "China extends the single day into a multi-day holiday, a spring counterpart to October's Golden Week.",
      "The holiday reliably triggers a travel rush, with popular coastal and scenic cities filling up.",
    ],
    foods: [
      { name: "Regional spring dishes", desc: "Spring greens, bamboo shoots, and the first seafood of the season." },
    ],
    activities: [
      { name: "Coastal escapes", desc: "Cities like Qingdao and Xiamen fill with visitors seeking spring sun." },
      { name: "Flower season", desc: "Northern cities reach their spring bloom during the holiday." },
      { name: "City breaks", desc: "Museums and parks run extended hours and special events." },
    ],
    cities: [
      { name: "Qingdao", note: "coastal spring before the summer crowds" },
      { name: "Hangzhou", note: "West Lake in full spring bloom" },
    ],
    itinerary: {
      title: "Labor Day on the coast",
      days: "2 days",
      steps: [
        "Arrive in Qingdao, walk the coast",
        "Spring seafood and the old town, fly out",
      ],
    },
    tips: [
      "Expect full trains and premium hotel rates. Travel mid-week within the holiday window when possible.",
      "Book transport the moment tickets go on sale.",
      "Coastal cities are cooler than inland ones, bring a light layer.",
    ],
    faq: [
      { q: "When is Labor Day in China in 2026?", a: "May 1, 2026, extended into a five-day holiday." },
      { q: "Is Labor Day busy for travel?", a: "Yes, it is one of the busiest travel periods of the year, second only to Golden Week." },
      { q: "Where should I go?", a: "Coastal cities like Qingdao and Xiamen are popular for spring weather." },
      { q: "Is it a good time to visit?", a: "The weather is pleasant, but book early and expect crowds at popular spots." },
    ],
    related: ["national-day", "cherry-blossom-season", "qingming-festival"],
  },
  {
    slug: "cherry-blossom-season",
    title: "Cherry Blossom Season 2026 in China: Dates, Wuhan & Wuxi",
    metaDescription:
      "China's cherry blossom season peaks from mid-March to early April. Wuhan University, Wuxi's Yuantouzhu, bloom tracking, and viewing tips.",
    h1: "Cherry Blossom Season: A Pink Week Worth Timing",
    intro:
      "Cherry blossom season is not a holiday but a moment. For about a week each spring, from Wuhan to Wuxi, the trees erupt in pink and entire cities come out to picnic beneath them, a tradition borrowed from Japan and made China's own.",
    history: [
      "Cherry blossoms arrived in China's modern cities partly through friendship plantings and campus landscaping in the twentieth century, and the custom of hanami, flower viewing, travelled with them.",
      "Wuhan University's cherry avenue, planted in the mid-twentieth century, became the country's most famous viewing spot, drawing photographers and students each spring.",
      "The bloom is famously brief, often lasting a week or less, which is precisely what makes it an event worth timing.",
    ],
    foods: [
      { name: "Sakura-flavoured snacks", desc: "Seasonal cakes, drinks, and ice cream flavoured with cherry blossom." },
      { name: "Spring tea", desc: "Fresh green tea, harvested in the same early-spring weeks." },
    ],
    activities: [
      { name: "Campus viewing", desc: "Wuhan University's cherry avenue is the iconic spot, busy but beautiful." },
      { name: "Yuantouzhu peninsula", desc: "Wuxi's lakeside peninsula, with blossoms framing Taihu Lake." },
      { name: "Night illuminations", desc: "Some gardens light the blossoms after dark." },
    ],
    cities: [
      { name: "Wuhan", note: "the university campus and East Lake" },
      { name: "Wuxi", note: "Yuantouzhu by Taihu Lake" },
      { name: "Nanjing", note: "blossoms around Jiming Temple" },
    ],
    itinerary: {
      title: "Cherry blossoms in Wuhan and Wuxi",
      days: "2 days",
      steps: [
        "Arrive in Wuhan, visit the university cherry avenue",
        "High-speed rail to Wuxi for Yuantouzhu, fly out",
      ],
    },
    tips: [
      "Bloom dates shift with weather, track local forecasts closely.",
      "Weekends are packed, visit at opening on a weekday.",
      "The bloom lasts a week or less, so be ready to move your dates.",
    ],
    faq: [
      { q: "When is cherry blossom season in China?", a: "Roughly mid-March to early April, peaking for about a week." },
      { q: "Where are the best cherry blossoms?", a: "Wuhan University, Wuxi's Yuantouzhu, and Nanjing's Jiming Temple area." },
      { q: "How long does the bloom last?", a: "Often only a week or so, which is why tracking the forecast matters." },
      { q: "Is it crowded?", a: "Yes, especially weekends. Visit at opening on a weekday if you can." },
    ],
    related: ["peony-festival", "qingming-festival", "labor-day"],
  },
  {
    slug: "peony-festival",
    title: "Luoyang Peony Festival 2026: Dates, Gardens & How to See the Peonies",
    metaDescription:
      "The Luoyang Peony Festival runs April to early May 2026. Wangcheng Park, the peony's imperial history, Luoyang water banquet, and a 2-day plan.",
    h1: "Luoyang Peony Festival: A Thousand-Year-Old Flower Show",
    intro:
      "Luoyang has grown peonies for over a thousand years, and each spring its gardens put on a spectacular, month-long display of the flower once reserved for emperors. The city, an ancient capital, turns the bloom into a festival of gardens, food, and Tang-dynasty flair.",
    history: [
      "Luoyang's peony tradition reaches back to the Sui and Tang dynasties, when the flower was cultivated in imperial gardens and prized as the king of flowers.",
      "A popular legend holds that the Empress Wu Zetian ordered all flowers to bloom in winter. When the peony refused, she banished it to Luoyang, where it flourished, a story locals tell with pride.",
      "Today the annual Peony Festival fills Luoyang's parks with hundreds of varieties, and the city leans into its Tang heritage with performances and displays.",
    ],
    foods: [
      { name: "Luoyang water banquet", desc: "A famous multi-course feast of soups, the city's signature dining experience." },
      { name: "Peony cakes", desc: "Sweet pastries shaped and flavoured with the festival's flower." },
    ],
    activities: [
      { name: "Wangcheng Park", desc: "The festival's main venue, with vast beds of peonies in every colour." },
      { name: "Peony gardens", desc: "Several parks across the city stage their own displays, some quieter than Wangcheng." },
      { name: "Tang-dynasty performances", desc: "Cultural shows themed on the city's imperial past." },
    ],
    cities: [
      { name: "Luoyang", note: "the festival's home, a short high-speed rail ride from Xi'an" },
    ],
    itinerary: {
      title: "Luoyang Peony Festival",
      days: "2 days",
      steps: [
        "Arrive in Luoyang, visit Wangcheng Park's peony beds",
        "Try the water banquet, day trip to the Longmen Grottoes, fly out",
      ],
    },
    tips: [
      "The first two weeks of April are peak bloom. Book ahead for the busiest days.",
      "Combine Luoyang with Xi'an for a two-city history route, one high-speed rail ride apart.",
      "Several parks show peonies, so spread your visit to avoid the biggest crowds at Wangcheng.",
    ],
    faq: [
      { q: "When is the Luoyang Peony Festival in 2026?", a: "It runs from April into early May, with the first two weeks of April as peak bloom." },
      { q: "Why is Luoyang famous for peonies?", a: "The city has cultivated the flower for over a thousand years, since the Sui and Tang dynasties." },
      { q: "Where should I see them?", a: "Wangcheng Park is the main venue, with several quieter gardens across the city." },
      { q: "What else is there in Luoyang?", a: "The Longmen Grottoes, a UNESCO site, and the famous Luoyang water banquet." },
    ],
    related: ["cherry-blossom-season", "qingming-festival", "national-day"],
  },
];

export function getGuide(slug: string): FestivalGuide | undefined {
  return festivalGuides.find((g) => g.slug === slug);
}
