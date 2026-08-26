// JSON-LD structured data generators
// FAQPage + ItemList + Article + WebSite + Event array for the single page.

import type { Festival } from "../data/festivals";

const MONTHS: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function toISO(dateStr: string, month: number): string {
  const m = dateStr.match(/([A-Z][a-z]{2})\s+(\d{1,2})/);
  if (m) {
    const mm = MONTHS[m[1]];
    const dd = m[2].padStart(2, "0");
    return `2027-${mm}-${dd}`;
  }
  // Approximate "mid-Mar"-style values to the 15th of the month.
  const mid = dateStr.match(/mid-([A-Z][a-z]{2})/);
  if (mid) {
    return `2027-${MONTHS[mid[1]]}-15`;
  }
  return `2027-${String(month).padStart(2, "0")}-01`;
}

// Multi-day festivals get an explicit endDate; single-day events end when they start.
const endDateMap: Record<string, string> = {
  "spring-festival": "Feb 12",
  "water-splashing-festival": "Apr 15",
  "harbin-ice-festival": "Feb 28",
  "national-day": "Oct 7",
  "labor-day": "May 5",
  "dragon-boat-festival": "Jun 11",
  "qingming-festival": "Apr 6",
  "mid-autumn-festival": "Sep 17",
  "cherry-blossom-season": "Apr 7",
  "peony-festival": "May 5",
};

export const faqItems = [
  {
    q: "What are the most important festivals in China?",
    a: "The four big ones are Spring Festival (Chinese New Year), Qingming, Dragon Boat Festival, and Mid-Autumn Festival. Beyond those, the Lantern Festival, Qixi, and the ethnic festivals like the Water Splashing Festival and Torch Festival are worth planning a trip around.",
  },
  {
    q: "When is Chinese New Year in 2027?",
    a: "Chinese New Year falls on February 6, 2027. The Spring Festival holiday runs roughly February 5 to 13, with New Year's Eve reunions on February 5.",
  },
  {
    q: "Which Chinese festival should I visit first?",
    a: "For a first visit, Mid-Autumn (September) offers the best balance of scenery, food, and manageable crowds. Spring Festival is the most spectacular but also the most crowded and expensive, with many restaurants closed. The Water Splashing Festival in April is the most fun if you are open to getting soaked.",
  },
  {
    q: "Are Chinese festivals crowded for tourists?",
    a: "Yes, especially Spring Festival and National Day (Golden Week), when hundreds of millions travel at once. Mid-Autumn, Lantern Festival, and the ethnic festivals are less overwhelming. Booking trains, flights, and hotels weeks ahead is essential during any major holiday.",
  },
  {
    q: "What food do you eat during Chinese festivals?",
    a: "Each festival has a signature food: dumplings and niangao for Spring Festival, tangyuan for Lantern Festival, zongzi for Dragon Boat, mooncakes for Mid-Autumn, and qingtuan for Qingming. Ethnic festivals add their own dishes, like five-color sticky rice at San Yue San.",
  },
  {
    q: "How do Chinese lunar calendar festivals work?",
    a: "Traditional festivals follow the lunar calendar, so their Gregorian dates shift every year. For example, Mid-Autumn is the 15th day of the 8th lunar month, which lands in September or October. Always check the current year's conversion before booking.",
  },
  {
    q: "What are China's ethnic minority festivals?",
    a: "The Water Splashing Festival (Dai, April), Torch Festival (Yi, August), Naadam (Mongolian, July), Shoton Festival (Tibetan, August), and San Yue San (Zhuang, April) are the most famous. Most are concentrated in Yunnan, Guizhou, Sichuan, Inner Mongolia, and Tibet.",
  },
  {
    q: "Is it safe to travel in China during festivals?",
    a: "China is generally safe for tourists during festivals. The main risks are practical, not security: sold-out transport, full hotels, restaurant closures over New Year, and very large crowds. Plan and book ahead and you will be fine.",
  },
  {
    q: "How far in advance should I book festival travel to China?",
    a: "For Spring Festival and Golden Week, book international flights 2 to 3 months out and domestic trains as soon as tickets open (usually 15 days before). For other festivals, 3 to 4 weeks is usually enough, though festival cities like Xishuangbanna fill up earlier.",
  },
  {
    q: "What is the Harbin Ice Festival?",
    a: "The Harbin Ice and Snow Festival, running January into February, is the world's largest ice festival. Artists build illuminated ice and snow sculptures, some the size of buildings, in temperatures around -20°C.",
  },
  {
    q: "How much does a festival trip to China cost?",
    a: "Budget around $60 to $120 a day for a mid-range trip, more in cities like Shanghai and Beijing. Flights and hotels double or triple over Spring Festival and Golden Week. Ethnic festivals cost less to reach but festival towns like Xishuangbanna fill up early.",
  },
  {
    q: "Can I use credit cards or mobile payments during festivals?",
    a: "International credit cards work at hotels and larger restaurants, but many small vendors and attractions only take mobile payment. Set up the international versions of Alipay or WeChat Pay, which accept foreign cards, and carry some cash as a backup.",
  },
  {
    q: "Do I need a visa to travel to China for festivals?",
    a: "China offers visa-free entry to citizens of 76 countries, plus a 240-hour (10-day) transit-free policy for 55 countries at 65 entry ports. Rules change often, so check the latest policy for your passport well before booking.",
  },
  {
    q: "What is the weather like during China's major festivals?",
    a: "Spring Festival (January-February) is cold in the north and mild in the south. Qingming (April) is warm and rainy. Dragon Boat (June) is hot and humid. Mid-Autumn (September) is the most pleasant, with clear autumn skies.",
  },
  {
    q: "Can I travel in China without speaking Chinese during festivals?",
    a: "Yes, but festivals add friction. Metros and major attractions have English signs, but small shops and taxis may not. Download a translation app and a ride-hailing app, and ask hotel staff to write destinations in Chinese.",
  },
  {
    q: "Are attractions and transport open during Chinese New Year?",
    a: "Trains and flights run but sell out fast. Some museums and attractions close or shorten hours from New Year's Eve to day three, and many family restaurants shut for several days. Plan outdoor sights for the first days and book dinners in advance.",
  },
  {
    q: "Can I use my phone and the internet in China during festivals?",
    a: "Yes, but many foreign apps and sites are blocked. Buy a local SIM or eSIM, and if you need blocked services, set up a VPN before you arrive. Hotel and airport Wi-Fi usually requires a local number to register.",
  },
  {
    q: "How do I book train tickets in China as a foreigner?",
    a: "Use the official 12306 app or website, which has an English version, and pay with an international card. Tickets open about 15 days before travel and sell out fast over holidays, so book the moment they go on sale.",
  },
  {
    q: "Is it safe to travel solo in China during festivals?",
    a: "Yes, China is one of the safer countries for solo travellers, including during festivals. The main challenges are practical: crowds, language, and sold-out transport. Keep your phone charged and your hotel address written in Chinese.",
  },
  {
    q: "What should I do if I can't speak Chinese?",
    a: "Download a translation app that works offline, and save your hotel's address and key phrases. Ask hotel staff to write destinations in Chinese for taxi drivers, and use ride-hailing apps rather than street taxis.",
  },
  {
    q: "How early should I arrive at festival events?",
    a: "For major events like the Harbin Ice Festival or temple fairs, arrive at opening or on a weekday. Dawn events like the Shoton thangka unveiling require arriving before sunrise. Popular spots fill fast after midday.",
  },
  {
    q: "Spring Festival vs Mid-Autumn: which is better to experience?",
    a: "For a first visit, Mid-Autumn is the better trip: September weather, mooncakes, and moderate crowds, versus Spring Festival's February cold, sold-out transport, and restaurant closures. Spring Festival is far more spectacular, but you pay for it in crowds and cost. Choose Spring Festival only if you want the spectacle and can handle the crush.",
  },
  {
    q: "Water Splashing Festival vs Torch Festival: which should I choose?",
    a: "Both are Yunnan ethnic festivals but suit different travellers. The Water Splashing Festival (April 13-15) is a wet, joyful street party in warm weather; the Torch Festival (late July) is fire, dance, and spectacle after dark. Choose Water Splashing for pure fun and heat, Torch for photography and atmosphere.",
  },
  {
    q: "Lantern Festival vs Mid-Autumn: what is the difference?",
    a: "Both feature lanterns and a full moon, but they are opposite bookends of the year. The Lantern Festival (February 20, 2027) closes Chinese New Year with the year's biggest lantern displays and riddle games; Mid-Autumn (September 15, 2027) is the Moon Festival, centred on mooncakes and family reunion. Lantern Festival is better for light shows, Mid-Autumn for food and calm.",
  },
];

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "China Festivals",
    url: "https://www.festivals-china.com/",
    description:
      "A decision guide to China's festivals, with dates, a festival finder, and city-by-city advice for travelers.",
  };
}

export function buildArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "China Festivals 2027: Dates, Calendar & Where to Go",
    description:
      "Plan a trip around China's festivals: 2027 dates, a festival finder, best cities, foods, and tips for Spring Festival, Mid-Autumn & more.",
    author: {
      "@type": "Person",
      name: "China Festivals Editorial Team",
      jobTitle: "Travel Editors",
    },
    publisher: {
      "@type": "Organization",
      name: "China Festivals",
      url: "https://www.festivals-china.com",
    },
    datePublished: "2026-01-05",
    dateModified: "2026-08-21",
    mainEntityOfPage: "https://www.festivals-china.com/",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "China Festivals",
    url: "https://www.festivals-china.com",
    logo: "https://www.festivals-china.com/favicon.svg",
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildItemListSchema(festivals: Festival[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "China Festivals by Month",
    itemListElement: festivals.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.name,
      url: `https://www.festivals-china.com/#${f.slug}`,
    })),
  };
}

export function buildEventsSchema(festivals: Festival[]) {
  return {
    "@context": "https://schema.org",
    "@graph": festivals.map((f) => ({
      "@type": "Event",
      name: f.name,
      description: f.significance,
      startDate: toISO(f.date2027, f.month),
      endDate: toISO(endDateMap[f.slug] ?? f.date2027, f.month),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: f.bestCities[0]?.name ?? "China",
        address: {
          "@type": "PostalAddress",
          addressCountry: "CN",
        },
      },
    })),
  };
}

export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "China Festivals",
        item: "https://www.festivals-china.com/",
      },
    ],
  };
}

export function buildHowToSchema() {
  const sections = [
    {
      name: "Water Splashing Festival",
      items: [
        "Waterproof phone pouch",
        "Quick-dry clothes",
        "Dry bag for valuables",
        "Water shoes",
        "Sunscreen",
        "A spare set of clothes",
      ],
    },
    {
      name: "Harbin Ice Festival",
      items: [
        "Thermal base layers",
        "A down jacket",
        "Insulated waterproof boots",
        "Hat, gloves, and a face covering",
        "Hand warmers",
      ],
    },
    {
      name: "Spring Festival",
      items: [
        "Warm layers for the north",
        "Cash and red envelopes for hongbao",
        "Booked trains and dinners",
        "A power bank",
      ],
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to Pack for China's Biggest Festivals",
    description:
      "A packing checklist for the Water Splashing Festival, Harbin Ice Festival, and Spring Festival.",
    step: sections.map((s) => ({
      "@type": "HowToSection",
      name: s.name,
      itemListElement: s.items.map((item) => ({
        "@type": "HowToStep",
        name: `Pack ${item}`,
        text: `Pack ${item} for the ${s.name}.`,
      })),
    })),
  };
}
