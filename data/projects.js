export const PROJECTS = {
  1: {
    title: "KODAMANJU",
    type: "Short Film",
    year: "2022",
    role: "Director",
    image: "/images/work1.png",
    watchUrl: "https://youtu.be/ade9Cd5ws20?si=Yf-enP8_Jfg3O1K4",
    logline: "A child steps into a landscape of quiet kindness, finding belonging in the simple offer of a helping hand and a shared meal.",
    description: "Kodamanju is a quiet reflection on nurturing, the power of human connection, and the small, domestic acts that transform a house into a home.",
    gallery: [
      { image: "/images/kodamanju/still-1.jpg", caption: "Lighting the way" },
      { image: "/images/kodamanju/still-2.jpg", caption: "Walking to the water" },
      { image: "/images/kodamanju/still-3.jpg", caption: "Mother and son" },
      { image: "/images/kodamanju/still-4.jpg", caption: "A quiet grief" },
      { image: "/images/kodamanju/still-5.jpg", caption: "Between worlds" }
    ],
    credits: {
      "Direction": "Stephy Manjooran",
      "Written": "Stephy Manjooran",
      "Producer": "Women and Child Development Department, District Child Protection Unit, Ernakulam",
      "Cinematography": "Rishi Raju",
      "Editing": "Anes Manilal",
      "Sound Design": "Anoop Siva",
      "Music": "Sandeep Sajeeva",
      "Dubbing": "K7 Studio"
    }
  },
  2: {
    title: "JOKUTTAN AND THE DRAGON",
    type: "Short Film",
    year: "2026",
    role: "Director",
    image: "/images/work2.png",
    watchUrl: "https://youtu.be/z6BqnKfXelI?si=LYLzhN7KVCme9Gpw",
    logline: "A boy confronts the shadow of loss when a cherished companion is taken, sparking a quest for justice that leads him to face his own internal \"dragons\".",
    description: "Jokuttan and the Dragon sits with the innocence of childhood faith, the weight of anger, and the grace found in the courage to forgive.",
    credits: {
      "Direction": "Stephy Manjooran",
      "Producer": "CMC Vision, Mount Carmel Generalate, Aluva",
      "Written": "Stephy Manjooran",
      "Cinematography": "Rishi Raju",
      "Editing": "FCD",
      "Music": "Sandeep Sajeeva",
      "Sound Design": "Anoop Siva",
      "Dubbing Studio": "Sapthaa Records"
    }
  },
  3: {
    title: "KIDS BUDDY QUIZ",
    type: "Ad",
    year: "2023",
    role: "Director / DOP",
    image: "/images/work3.png",
    watchUrl: "https://youtu.be/5oRg0sV9l0Y?si=RIvfLMlosqmiMOj8",
    logline: "A father and child bridge the gap between wonder and knowledge, transforming a simple game into a journey through the marvels of the natural world.",
    description: "Kids Buddy Quiz celebrates the spark of curiosity, the intimacy of shared learning, and the boundless potential of a mind awakened to discovery.",
    credits: {
      "Direction": "Stephy",
      "Cinematography": "Stephy",
      "Producer": "Anjali Menon",
      "Editing": "Marco Diehl",
      "Sound Design": "Priya Nair",
      "Music": "Kavi Rajan"
    }
  },
  4: {
    title: "KIDS BUDDY PUZZLE",
    type: "Ad",
    year: "2022",
    role: "Director",
    image: "/images/work4.png",
    watchUrl: "https://www.youtube.com/watch?v=YdseKIjEQDo",
    logline: "A child explores a world of vibrant shapes and logic, finding delight in the creative puzzles that turn study into play.",
    description: "Kids Buddy Puzzle is a study in the spark of early learning, the accessibility of creative tools, and the lifelong companion found in the joy of discovery.",
    credits: {
      "Direction": "Stephy",
      "Story": "Anjali Menon",
      "Producer": "Nadia Correia",
      "Cinematography": "Rohan Verma",
      "Editing": "Stephy",
      "Sound Design": "Priya Nair",
      "Music": "Ólafur Halldórsson"
    }
  }
};

export const PROJECT_IDS = Object.keys(PROJECTS);

export function getProject(id) {
  return PROJECTS[id] || null;
}

export function getNextProjectId(id) {
  const ids = PROJECT_IDS;
  const nextIndex = (ids.indexOf(String(id)) + 1) % ids.length;
  return ids[nextIndex];
}
