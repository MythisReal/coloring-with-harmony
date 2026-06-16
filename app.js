const clasMarkers = [
  { id: "0", name: "Colorless Blender", hex: "#f8fafc", family: "Verktyg" },
  { id: "146", name: "Mauve Shadow", hex: "#d8c0cb", family: "Lila" },
  { id: "196", name: "Pale Pink Light", hex: "#ffdbe9", family: "Rosa & rött" },
  { id: "137", name: "Medium Pink", hex: "#f6a4c8", family: "Rosa & rött" },
  { id: "138", name: "Light Pink", hex: "#ffc4d9", family: "Rosa & rött" },
  { id: "84", name: "Pastel Violet", hex: "#dac3ee", family: "Lila" },
  { id: "147", name: "Pale Lilac", hex: "#d7bddf", family: "Lila" },
  { id: "88", name: "Purple Grey", hex: "#b58aa9", family: "Lila" },
  { id: "9", name: "Pale Pink", hex: "#ffcbd7", family: "Rosa & rött" },
  { id: "8", name: "Rose Pink", hex: "#f7a5bb", family: "Rosa & rött" },
  { id: "18", name: "Peach", hex: "#ffb6aa", family: "Hud & pastell" },
  { id: "198", name: "Tender Pink", hex: "#f66daf", family: "Rosa & rött" },
  { id: "6", name: "Vivid Pink", hex: "#ff4fb4", family: "Rosa & rött" },
  { id: "126", name: "Fluorescent Pink", hex: "#ff2db3", family: "Rosa & rött" },
  { id: "125", name: "Fluorescent Rose", hex: "#ff4cb8", family: "Rosa & rött" },
  { id: "86", name: "Vivid Reddish Purple", hex: "#e336a9", family: "Lila" },
  { id: "85", name: "Vivid Purple", hex: "#c33bb6", family: "Lila" },
  { id: "82", name: "Light Violet", hex: "#9e45bd", family: "Lila" },
  { id: "131", name: "Skin White", hex: "#fff2e8", family: "Hud & pastell" },
  { id: "132", name: "Milky White", hex: "#fff5ed", family: "Hud & pastell" },
  { id: "136", name: "Blush", hex: "#ffd7d0", family: "Hud & pastell" },
  { id: "28", name: "Fruit Pink", hex: "#ffbec3", family: "Rosa & rött" },
  { id: "135", name: "Pale Cherry Pink", hex: "#ffc5c9", family: "Rosa & rött" },
  { id: "139", name: "Flesh", hex: "#ffc8b8", family: "Hud & pastell" },
  { id: "109", name: "Pearl White", hex: "#f7f0e8", family: "Hud & pastell" },
  { id: "25", name: "Salmon Pink", hex: "#ffc3a0", family: "Hud & pastell" },
  { id: "133", name: "Baby Skin Pink", hex: "#ffe2cb", family: "Hud & pastell" },
  { id: "134", name: "Raw Silk", hex: "#f3dac0", family: "Hud & pastell" },
  { id: "141", name: "Buttercup Yellow", hex: "#ffecc4", family: "Gul & orange" },
  { id: "142", name: "Pale Cream", hex: "#fff1ce", family: "Hud & pastell" },
  { id: "26", name: "Pastel Peach", hex: "#ffdab5", family: "Hud & pastell" },
  { id: "36", name: "Cream", hex: "#ffd08f", family: "Gul & orange" },
  { id: "107", name: "Sand", hex: "#e5b478", family: "Jord & brun" },
  { id: "97", name: "Rose Beige", hex: "#d59a88", family: "Hud & pastell" },
  { id: "101", name: "Yellow Ochre", hex: "#d39a4b", family: "Jord & brun" },
  { id: "102", name: "Raw Umber", hex: "#a76a56", family: "Jord & brun" },
  { id: "104", name: "Brown Grey", hex: "#a67c52", family: "Jord & brun" },
  { id: "100", name: "Walnut", hex: "#a36531", family: "Jord & brun" },
  { id: "169", name: "Putty", hex: "#c9b9a7", family: "Jord & brun" },
  { id: "99", name: "Bronze", hex: "#9b8369", family: "Jord & brun" },
  { id: "96", name: "Mahogany", hex: "#b06b5e", family: "Jord & brun" },
  { id: "93", name: "Burnt Orange", hex: "#b6604e", family: "Gul & orange" },
  { id: "95", name: "Burnt Sienna", hex: "#b56a52", family: "Jord & brun" },
  { id: "92", name: "Chocolate", hex: "#6d3d35", family: "Jord & brun" },
  { id: "13", name: "Scarlet", hex: "#ff4967", family: "Rosa & rött" },
  { id: "3", name: "Rose Red", hex: "#ff4380", family: "Rosa & rött" },
  { id: "121", name: "Fluorescent Coral Red", hex: "#ff4f7a", family: "Rosa & rött" },
  { id: "12", name: "Coral Red", hex: "#ff5d62", family: "Rosa & rött" },
  { id: "16", name: "Coral Pink", hex: "#ff6f7d", family: "Rosa & rött" },
  { id: "5", name: "Cherry Pink", hex: "#ff3b6c", family: "Rosa & rött" },
  { id: "10", name: "Deep Red", hex: "#f6334d", family: "Rosa & rött" },
  { id: "4", name: "Vivid Red", hex: "#f6374d", family: "Rosa & rött" },
  { id: "1", name: "Wine Red", hex: "#8d1e3a", family: "Rosa & rött" },
  { id: "164", name: "Anise", hex: "#fff0ad", family: "Gul & orange" },
  { id: "49", name: "Pastel Green", hex: "#e8e6b2", family: "Grön" },
  { id: "45", name: "Canaria Yellow", hex: "#f3e24a", family: "Gul & orange" },
  { id: "37", name: "Pastel Yellow", hex: "#fee665", family: "Gul & orange" },
  { id: "35", name: "Lemon Yellow", hex: "#ffd836", family: "Gul & orange" },
  { id: "34", name: "Yellow", hex: "#ffc71d", family: "Gul & orange" },
  { id: "44", name: "Fresh Yellow", hex: "#ffb522", family: "Gul & orange" },
  { id: "33", name: "Melon Yellow", hex: "#ffc462", family: "Gul & orange" },
  { id: "31", name: "Dark Yellow", hex: "#f1a732", family: "Gul & orange" },
  { id: "24", name: "Marigold", hex: "#ffa726", family: "Gul & orange" },
  { id: "140", name: "Light Orange", hex: "#ff9d75", family: "Gul & orange" },
  { id: "122", name: "Fluorescent Orange", hex: "#ff6338", family: "Gul & orange" },
  { id: "173", name: "Dim Green", hex: "#edf5e5", family: "Grön" },
  { id: "166", name: "Mignonette", hex: "#dff3d8", family: "Grön" },
  { id: "167", name: "Pale Green Light", hex: "#d6f2d8", family: "Grön" },
  { id: "163", name: "Green Bice", hex: "#c6dc88", family: "Grön" },
  { id: "174", name: "Spring Dim Green", hex: "#d5df9b", family: "Grön" },
  { id: "175", name: "Lime Green", hex: "#bddb75", family: "Grön" },
  { id: "123", name: "Fluorescent Yellow", hex: "#dfff56", family: "Gul & orange" },
  { id: "124", name: "Fluorescent Green", hex: "#baff3e", family: "Grön" },
  { id: "48", name: "Yellow Green", hex: "#b8e63f", family: "Grön" },
  { id: "47", name: "Grass Green", hex: "#62e182", family: "Grön" },
  { id: "59", name: "Pale Green", hex: "#7bdc9c", family: "Grön" },
  { id: "55", name: "Emerald Green", hex: "#28c8a5", family: "Grön" },
  { id: "56", name: "Mint Green", hex: "#37cbbd", family: "Turkos & blå" },
  { id: "57", name: "Turquoise Green Light", hex: "#50d8d0", family: "Turkos & blå" },
  { id: "58", name: "Mint Green Light", hex: "#9ce9d6", family: "Turkos & blå" },
  { id: "42", name: "Bronze Green", hex: "#aaa568", family: "Grön" },
  { id: "41", name: "Olive Green", hex: "#a49950", family: "Grön" },
  { id: "43", name: "Deep Olive Green", hex: "#367d65", family: "Grön" },
  { id: "51", name: "Dark Green", hex: "#1f514a", family: "Grön" },
  { id: "171", name: "Jade Green", hex: "#bceee8", family: "Turkos & blå" },
  { id: "172", name: "Spectrum Green", hex: "#c9f0e8", family: "Turkos & blå" },
  { id: "178", name: "Cool Shadow", hex: "#e4f7f4", family: "Turkos & blå" },
  { id: "179", name: "Aqua Mint", hex: "#b9f1ed", family: "Turkos & blå" },
  { id: "68", name: "Turquoise Blue", hex: "#89def2", family: "Turkos & blå" },
  { id: "65", name: "Ice Blue", hex: "#55c6e7", family: "Turkos & blå" },
  { id: "61", name: "Peacock Green", hex: "#1fb8ce", family: "Turkos & blå" },
  { id: "143", name: "Mint Blue", hex: "#e4f8fb", family: "Turkos & blå" },
  { id: "182", name: "Frost Blue", hex: "#d4edf9", family: "Turkos & blå" },
  { id: "185", name: "Pale Blue Light", hex: "#cfe7fb", family: "Turkos & blå" },
  { id: "144", name: "Pale Baby Blue", hex: "#cbdcf7", family: "Turkos & blå" },
  { id: "BG3", name: "Blue Grey", hex: "#c3cce2", family: "Gråskala" },
  { id: "183", name: "Phthalo Blue", hex: "#97d4f2", family: "Turkos & blå" },
  { id: "64", name: "Indian Blue", hex: "#1aa5e2", family: "Turkos & blå" },
  { id: "63", name: "Cerulean Blue", hex: "#51b7e6", family: "Turkos & blå" },
  { id: "74", name: "Brilliant Blue", hex: "#4e97e9", family: "Turkos & blå" },
  { id: "71", name: "Cobalt Blue", hex: "#2458e5", family: "Turkos & blå" },
  { id: "72", name: "Napoleon Blue", hex: "#4976bd", family: "Turkos & blå" },
  { id: "69", name: "Prussian Blue", hex: "#3b54a5", family: "Turkos & blå" },
  { id: "73", name: "Ultra Marine", hex: "#6f55c6", family: "Lila" },
  { id: "145", name: "Pale Lavender", hex: "#ded5ee", family: "Lila" },
  { id: "CG4", name: "Cool Grey", hex: "#d1d2d9", family: "Gråskala" },
  { id: "WG1", name: "Warm Grey", hex: "#dfdadd", family: "Gråskala" },
  { id: "GG3", name: "Green Grey", hex: "#d4dad7", family: "Gråskala" },
  { id: "BG6", name: "Blue Grey", hex: "#a7bfd2", family: "Gråskala" },
  { id: "GG5", name: "Green Grey", hex: "#a9b2ae", family: "Gråskala" },
  { id: "WG5", name: "Warm Grey", hex: "#a99fa2", family: "Gråskala" },
  { id: "WG6", name: "Warm Grey", hex: "#938c91", family: "Gråskala" },
  { id: "WG4", name: "Warm Grey", hex: "#bdb5b9", family: "Gråskala" },
  { id: "WG8", name: "Warm Grey", hex: "#6c676b", family: "Gråskala" },
  { id: "BG7", name: "Blue Grey", hex: "#798596", family: "Gråskala" },
  { id: "CG6", name: "Cool Grey", hex: "#92959d", family: "Gråskala" },
  { id: "GG7", name: "Green Grey", hex: "#858d89", family: "Gråskala" },
  { id: "GG9", name: "Green Grey", hex: "#606965", family: "Gråskala" },
  { id: "CG8", name: "Cool Grey", hex: "#696d73", family: "Gråskala" },
  { id: "120", name: "Black", hex: "#171717", family: "Gråskala" }
];

const promarkerMarkers = [
  { id: "Lemon", name: "Lemon", hex: "#ffe72e", family: "Gul & orange" },
  { id: "Pumpkin", name: "Pumpkin", hex: "#f08a24", family: "Gul & orange" },
  { id: "Bright Orange", name: "Bright Orange", hex: "#f26a22", family: "Gul & orange" },
  { id: "Red", name: "Red", hex: "#e43d30", family: "Rosa & rött" },
  { id: "Crimson", name: "Crimson", hex: "#b7203f", family: "Rosa & rött" },
  { id: "Hot Pink", name: "Hot Pink", hex: "#ed3f8f", family: "Rosa & rött" },
  { id: "Rose Pink", name: "Rose Pink", hex: "#ec8aaa", family: "Rosa & rött" },
  { id: "Orchid", name: "Orchid", hex: "#b86ab1", family: "Lila" },
  { id: "Violet", name: "Violet", hex: "#7354a5", family: "Lila" },
  { id: "Duck Egg", name: "Duck Egg", hex: "#b7dde0", family: "Turkos & blå" },
  { id: "Cyan", name: "Cyan", hex: "#19a8d8", family: "Turkos & blå" },
  { id: "True Blue", name: "True Blue", hex: "#2b61ad", family: "Turkos & blå" },
  { id: "Midnight Blue", name: "Midnight Blue", hex: "#27365f", family: "Turkos & blå" },
  { id: "Turquoise", name: "Turquoise", hex: "#1fb7ad", family: "Turkos & blå" },
  { id: "Soft Green", name: "Soft Green", hex: "#bcd9a0", family: "Grön" },
  { id: "Moss", name: "Moss", hex: "#748a44", family: "Grön" },
  { id: "Grass", name: "Grass", hex: "#47a84c", family: "Grön" },
  { id: "Green", name: "Green", hex: "#1d7a45", family: "Grön" },
  { id: "Cocoa", name: "Cocoa", hex: "#7a4e3c", family: "Jord & brun" },
  { id: "Saffron", name: "Saffron", hex: "#e4b03a", family: "Gul & orange" },
  { id: "Putty", name: "Putty", hex: "#b9ad9b", family: "Jord & brun" },
  { id: "Cool Grey 2", name: "Cool Grey 2", hex: "#c7cbd0", family: "Gråskala" },
  { id: "Cool Grey 4", name: "Cool Grey 4", hex: "#8e949b", family: "Gråskala" },
  { id: "Black", name: "Black", hex: "#171717", family: "Gråskala" }
];

const nassauMarkerIds = [
  "33",
  "35",
  "37",
  "140",
  "14",
  "23",
  "339",
  "4",
  "12",
  "2",
  "1",
  "28",
  "7",
  "337",
  "147",
  "338",
  "88",
  "84",
  "5",
  "86",
  "82",
  "81",
  "73",
  "325",
  "59",
  "46",
  "47",
  "179",
  "143",
  "67",
  "183",
  "68",
  "64",
  "69",
  "71",
  "72",
  "25",
  "26",
  "141",
  "103",
  "96",
  "97",
  "94",
  "WG2",
  "WG4",
  "WG6",
  "0",
  "120"
];

const nassauOverrides = [
  { id: "14", name: "Orange Red", hex: "#ff7043", family: "Gul & orange" },
  { id: "23", name: "Golden Yellow", hex: "#ffb43d", family: "Gul & orange" },
  { id: "339", name: "Pale Coral", hex: "#ffa79a", family: "Hud & pastell" },
  { id: "2", name: "Deep Rose", hex: "#d92363", family: "Rosa & rött" },
  { id: "7", name: "Light Rose", hex: "#f78db8", family: "Rosa & rött" },
  { id: "337", name: "Pastel Pink", hex: "#ffc0d4", family: "Rosa & rött" },
  { id: "338", name: "Pale Lavender Pink", hex: "#d9c2e8", family: "Lila" },
  { id: "81", name: "Magenta", hex: "#b8239f", family: "Lila" },
  { id: "325", name: "Pale Mint", hex: "#aeeed4", family: "Grön" },
  { id: "46", name: "Yellow Green", hex: "#9ddc58", family: "Grön" },
  { id: "67", name: "Aqua Blue", hex: "#36c1d4", family: "Turkos & blå" },
  { id: "103", name: "Cream Beige", hex: "#ead4a6", family: "Hud & pastell" },
  { id: "94", name: "Raw Sienna", hex: "#b17a52", family: "Jord & brun" },
  { id: "WG2", name: "Warm Grey", hex: "#cec8c9", family: "Gråskala" }
];

const clasMarkerById = new Map(clasMarkers.map((marker) => [marker.id, marker]));
const nassauOverrideById = new Map(nassauOverrides.map((marker) => [marker.id, marker]));
const nassauMarkers = nassauMarkerIds.map((id) => {
  const marker = nassauOverrideById.get(id) || clasMarkerById.get(id) || {
    id,
    name: `Nassau ${id}`,
    hex: "#b8bec8",
    family: "Gråskala"
  };
  return { ...marker };
});

const familyOrder = [
  "Rosa & rött",
  "Hud & pastell",
  "Gul & orange",
  "Grön",
  "Turkos & blå",
  "Lila",
  "Jord & brun",
  "Gråskala",
  "Verktyg"
];

const schemes = [
  {
    id: "analogous",
    label: "Analog",
    mood: "mjuk",
    note: "Närliggande färger ger lugna övergångar och är särskilt fina i hår, blommor, löv och bakgrunder."
  },
  {
    id: "complementary",
    label: "Komplement",
    mood: "kontrast",
    note: "Motsatta färger skapar tydlig energi. Använd gärna den ena stort och den andra bara i detaljer."
  },
  {
    id: "split",
    label: "Delad kontrast",
    mood: "balans",
    note: "En basfärg plus två färger bredvid komplementet ger kontrast som känns mer följsam än rak motsats."
  },
  {
    id: "triad",
    label: "Triad",
    mood: "färgrik",
    note: "Tre jämnt spridda färger ger en pigg palett. Låt en färg dominera så helheten inte blir splittrad."
  },
  {
    id: "rectangle",
    label: "Rektangel",
    mood: "rik",
    note: "Två komplementpar passar motiv med flera delar, till exempel kläder, blommor, föremål och små accenter."
  },
  {
    id: "mono",
    label: "Tonsteg",
    mood: "blend",
    note: "Ljus, mellan och mörk inom samma färgfamilj är bästa grunden för mjuk alkoholmarker-blending."
  }
];

const clasMotifs = [
  {
    id: "skin",
    title: "Hud, kinder och värme",
    text: "Ljusa lager först, rosa mycket sparsamt, brun bara i skugga.",
    ids: ["132", "131", "133", "139", "97", "96"]
  },
  {
    id: "forest",
    title: "Skog och blad",
    text: "Börja gult grönt, bygg form med oliv och mörkgrönt.",
    ids: ["167", "59", "47", "48", "43", "51"]
  },
  {
    id: "ocean",
    title: "Hav, is och glas",
    text: "Spara mycket vitt papper och lägg blått i kanter.",
    ids: ["143", "182", "185", "68", "65", "69"]
  },
  {
    id: "sunset",
    title: "Solnedgång",
    text: "Gult i ljuset, orange i mitten, rött/lila i djupet.",
    ids: ["37", "35", "33", "140", "122", "73"]
  },
  {
    id: "pastel",
    title: "Pastellfantasy",
    text: "Lätta färger med blågrön kyla och rosa/lila accenter.",
    ids: ["196", "84", "147", "145", "179", "164"]
  },
  {
    id: "vintage",
    title: "Vintage och sepia",
    text: "Dämpad värme för böcker, kartor, tyg och antika föremål.",
    ids: ["142", "107", "101", "99", "100", "92"]
  },
  {
    id: "flowers",
    title: "Rosa blomma",
    text: "Mjuka kronblad, stark mittfärg och grönt som bryter av.",
    ids: ["196", "138", "137", "6", "167", "47"]
  },
  {
    id: "fur",
    title: "Päls och fjädrar",
    text: "Små stråk från ljus till mörk ger textur utan att gegga.",
    ids: ["109", "134", "169", "99", "100", "120"]
  }
];

const promarkerMotifs = [
  {
    id: "portrait",
    title: "Porträtt och värme",
    text: "Setet saknar ljusa hudtoner, så använd Putty/Saffron tunt och Rose Pink sparsamt.",
    ids: ["Putty", "Saffron", "Rose Pink", "Cocoa", "Cool Grey 2", "Cool Grey 4"]
  },
  {
    id: "forest",
    title: "Skog och blad",
    text: "Soft Green som ljus bas, Grass/Green för form och Moss för skugga.",
    ids: ["Soft Green", "Grass", "Green", "Moss", "Saffron", "Cocoa"]
  },
  {
    id: "ocean",
    title: "Hav och natt",
    text: "Duck Egg sparar ljuset, Cyan/Turquoise bygger vatten och Midnight Blue ger djup.",
    ids: ["Duck Egg", "Cyan", "Turquoise", "True Blue", "Midnight Blue", "Cool Grey 2"]
  },
  {
    id: "sunset",
    title: "Solnedgång",
    text: "Lemon och Saffron i ljuset, orange i mellanläge och Violet i skuggor.",
    ids: ["Lemon", "Saffron", "Pumpkin", "Bright Orange", "Red", "Violet"]
  },
  {
    id: "flowers",
    title: "Blomma och blad",
    text: "Rose Pink och Hot Pink i kronblad, Orchid i djup och grönt som kontrast.",
    ids: ["Rose Pink", "Hot Pink", "Crimson", "Orchid", "Soft Green", "Grass"]
  },
  {
    id: "comic",
    title: "Klar illustration",
    text: "Hög kontrast för figurer, kläder och små detaljer utan att paletten blir grumlig.",
    ids: ["Lemon", "Red", "Cyan", "True Blue", "Black", "Cool Grey 2"]
  },
  {
    id: "earth",
    title: "Jord och vintage",
    text: "Dämpade bruna, gula och grå toner för trä, läder, kartor och bakgrunder.",
    ids: ["Putty", "Saffron", "Pumpkin", "Cocoa", "Cool Grey 4", "Black"]
  },
  {
    id: "jewel",
    title: "Juveltoner",
    text: "Mättade färger som fungerar fint till magi, glas, tyg och dekor.",
    ids: ["Crimson", "Orchid", "Violet", "Turquoise", "Midnight Blue", "Black"]
  }
];

const nassauMotifs = [
  {
    id: "skin",
    title: "Hud och mjuk värme",
    text: "Lägg 103/26 tunt först, använd rosa försiktigt och bygg skugga med 97 eller 96.",
    ids: ["103", "26", "25", "339", "97", "96"]
  },
  {
    id: "forest",
    title: "Blad och grönska",
    text: "Pale Mint och Pale Green ger ljus, 46/47 bygger färg och 94 dämpar naturtonen.",
    ids: ["325", "59", "46", "47", "94", "WG4"]
  },
  {
    id: "ocean",
    title: "Hav och is",
    text: "Mint Blue i högdagrar, aqua/turkos i mellanläge och Prussian Blue för djup.",
    ids: ["143", "179", "67", "183", "68", "69"]
  },
  {
    id: "sunset",
    title: "Solnedgång",
    text: "Gult till orange i stora fält, rött och lila som små skuggade accenter.",
    ids: ["37", "35", "33", "23", "140", "73"]
  },
  {
    id: "flowers",
    title: "Rosa blomma",
    text: "Pastellrosa till körsbärsrött i kronblad, lilaton i djup och grönt som kontrast.",
    ids: ["337", "28", "7", "5", "147", "47"]
  },
  {
    id: "vintage",
    title: "Vintage och papper",
    text: "Krämiga gula och bruna toner för trä, kartor, gamla böcker och tyg.",
    ids: ["141", "103", "94", "97", "96", "WG4"]
  },
  {
    id: "jewel",
    title: "Juveltoner",
    text: "Mättad magenta, lila och blå för magi, glas, dekor och starka accenter.",
    ids: ["86", "81", "73", "71", "69", "120"]
  },
  {
    id: "softshadow",
    title: "Mjuk skuggning",
    text: "Blender och varma grå steg hjälper dig tona skuggor utan att färgen smutsas ned.",
    ids: ["0", "WG2", "WG4", "WG6", "96", "120"]
  }
];

const markerSets = {
  twin120: {
    id: "twin120",
    label: "Twin Marker 120-pack",
    shortLabel: "120-pack alkoholmarkers",
    searchPlaceholder: "t.ex. 71, Coral, Green",
    defaultMarkerId: "71",
    markers: clasMarkers,
    motifs: clasMotifs
  },
  promarker24: {
    id: "promarker24",
    label: "Promarker 24 Arts & Illustration",
    shortLabel: "Promarker 24 Arts & Illustration",
    searchPlaceholder: "t.ex. Cyan, Green, Cool Grey",
    defaultMarkerId: "True Blue",
    markers: promarkerMarkers,
    motifs: promarkerMotifs
  },
  nassau48: {
    id: "nassau48",
    label: "Nassau Fine Art Dual Markers 48-pack",
    shortLabel: "Nassau Fine Art 48-pack",
    searchPlaceholder: "t.ex. 33, 143, WG4",
    defaultMarkerId: "68",
    markers: nassauMarkers,
    motifs: nassauMotifs
  }
};

const initialSetId = getInitialSetId();

let activeSet = markerSets[initialSetId];
let markers = activeSet.markers;
let markerById = new Map(markers.map((marker) => [marker.id, marker]));
let families = getFamiliesForSet(activeSet);

const state = {
  setId: initialSetId,
  selectedId: getStoredValue(`markerkompassen:${initialSetId}:selected`, activeSet.defaultMarkerId),
  schemeId: getStoredValue("markerkompassen:scheme", "triad"),
  search: "",
  family: "Alla",
  activeMotifId: null
};

const elements = {
  canvas: document.querySelector("#colorWheel"),
  setEyebrow: document.querySelector("#setEyebrow"),
  setSelect: document.querySelector("#setSelect"),
  selectedMarker: document.querySelector("#selectedMarker"),
  markerSearch: document.querySelector("#markerSearch"),
  familyFilter: document.querySelector("#familyFilter"),
  schemeTabs: document.querySelector("#schemeTabs"),
  schemeNote: document.querySelector("#schemeNote"),
  paletteTitle: document.querySelector("#paletteTitle"),
  paletteMood: document.querySelector("#paletteMood"),
  paletteGrid: document.querySelector("#paletteGrid"),
  blendStrip: document.querySelector("#blendStrip"),
  motifGrid: document.querySelector("#motifGrid"),
  markerGrid: document.querySelector("#markerGrid"),
  libraryCount: document.querySelector("#libraryCount"),
  copyPalette: document.querySelector("#copyPalette"),
  printPalette: document.querySelector("#printPalette"),
  randomize: document.querySelector("#randomize"),
  toast: document.querySelector("#toast")
};

Object.values(markerSets).forEach((set) => {
  set.markers.forEach(enrichMarker);
});

function init() {
  bindEvents();
  render();
}

function bindEvents() {
  elements.setSelect.addEventListener("change", (event) => {
    activateSet(event.target.value);
    persistState();
    render();
  });

  elements.markerSearch.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderMarkerGrid();
  });

  elements.familyFilter.addEventListener("change", (event) => {
    state.family = event.target.value;
    renderMarkerGrid();
  });

  elements.randomize.addEventListener("click", () => {
    const pool = markers.filter((marker) => isUsableColor(marker));
    const marker = pool[Math.floor(Math.random() * pool.length)];
    const scheme = schemes[Math.floor(Math.random() * schemes.length)];
    state.selectedId = marker.id;
    state.schemeId = scheme.id;
    state.activeMotifId = null;
    persistState();
    render();
  });

  elements.copyPalette.addEventListener("click", copyCurrentPalette);
  elements.printPalette.addEventListener("click", () => window.print());

  elements.canvas.addEventListener("click", (event) => {
    const rect = elements.canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * elements.canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * elements.canvas.height;
    const marker = nearestMarkerFromWheel(x, y);
    if (!marker) return;
    state.selectedId = marker.id;
    state.activeMotifId = null;
    persistState();
    render();
  });
}

function render() {
  syncActiveSet();
  if (!markerById.has(state.selectedId)) {
    state.selectedId = activeSet.defaultMarkerId;
  }

  renderSetSelect();
  renderFamilyFilter();
  renderSelectedMarker();
  renderSchemeTabs();
  renderMotifs();
  renderPalette();
  renderMarkerGrid();
  drawWheel();
}

function renderSetSelect() {
  elements.setEyebrow.textContent = activeSet.shortLabel;
  elements.markerSearch.placeholder = activeSet.searchPlaceholder;
  elements.setSelect.innerHTML = Object.values(markerSets)
    .map((set) => `<option value="${set.id}">${escapeHtml(set.label)}</option>`)
    .join("");
  elements.setSelect.value = state.setId;
}

function renderFamilyFilter() {
  if (state.family !== "Alla" && !families.includes(state.family)) {
    state.family = "Alla";
  }

  elements.familyFilter.innerHTML = [
    `<option value="Alla">Alla familjer</option>`,
    ...families.map((family) => `<option value="${escapeHtml(family)}">${escapeHtml(family)}</option>`)
  ].join("");
  elements.familyFilter.value = state.family;
}

function activateSet(setId) {
  state.setId = markerSets[setId] ? setId : "twin120";
  syncActiveSet();
  state.selectedId = getStoredValue(`markerkompassen:${state.setId}:selected`, activeSet.defaultMarkerId);
  state.search = "";
  state.family = "Alla";
  state.activeMotifId = null;
  elements.markerSearch.value = "";
}

function syncActiveSet() {
  if (activeSet.id === state.setId) return;
  activeSet = markerSets[state.setId] || markerSets.twin120;
  state.setId = activeSet.id;
  markers = activeSet.markers;
  markerById = new Map(markers.map((marker) => [marker.id, marker]));
  families = getFamiliesForSet(activeSet);
}

function getFamiliesForSet(set) {
  const present = new Set(set.markers.map((marker) => marker.family));
  return familyOrder.filter((family) => present.has(family));
}

function renderSchemeTabs() {
  elements.schemeTabs.innerHTML = schemes
    .map((scheme) => {
      const selected = scheme.id === state.schemeId && !state.activeMotifId;
      return `
        <button class="scheme-tab" type="button" role="tab" aria-selected="${selected}" data-scheme="${scheme.id}">
          ${escapeHtml(scheme.label)}
        </button>
      `;
    })
    .join("");

  elements.schemeTabs.querySelectorAll("[data-scheme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.schemeId = button.dataset.scheme;
      state.activeMotifId = null;
      persistState();
      render();
    });
  });

  const note = getActiveMotif()?.text || schemes.find((scheme) => scheme.id === state.schemeId)?.note || "";
  elements.schemeNote.textContent = note;
}

function renderSelectedMarker() {
  const marker = getSelectedMarker();
  elements.selectedMarker.innerHTML = `
    <div class="large-swatch" style="background:${marker.hex}"></div>
    <div>
      <h2>${escapeHtml(formatMarkerLabel(marker))}</h2>
      <p>${escapeHtml(marker.family)} · ${marker.hex.toUpperCase()}</p>
      <p>Digital färg är ungefärlig; testa alltid en provruta på samma papper.</p>
    </div>
  `;
}

function renderPalette() {
  const palette = getCurrentPalette();
  elements.paletteTitle.textContent = palette.title;
  elements.paletteMood.textContent = palette.mood;
  elements.paletteGrid.innerHTML = palette.colors.map(renderPaletteCard).join("");
  elements.blendStrip.innerHTML = getBlendPalette(getSelectedMarker()).map(renderBlendStep).join("");
}

function renderPaletteCard(item) {
  return `
    <article class="palette-card">
      <div class="palette-color" style="background:${item.marker.hex}"></div>
      <div class="palette-info">
        <p class="role">${escapeHtml(item.role)}</p>
        <strong>${escapeHtml(formatMarkerLabel(item.marker))}</strong>
        <span>${escapeHtml(item.note || item.marker.family)}</span>
      </div>
    </article>
  `;
}

function renderBlendStep(item) {
  return `
    <div class="blend-step">
      <i style="background:${item.marker.hex}"></i>
      <span>${escapeHtml(item.role)}<br>${escapeHtml(formatMarkerLabel(item.marker))}</span>
    </div>
  `;
}

function renderMotifs() {
  elements.motifGrid.innerHTML = activeSet.motifs
    .map((motif) => {
      const colors = motif.ids.map((id) => markerById.get(id)).filter(Boolean);
      return `
        <button class="motif-card" type="button" data-motif="${motif.id}">
          <span class="motif-swatches">${colors.map((marker) => `<i style="background:${marker.hex}"></i>`).join("")}</span>
          <span class="motif-info">
            <strong>${escapeHtml(motif.title)}</strong>
            <span>${escapeHtml(motif.text)}</span>
          </span>
        </button>
      `;
    })
    .join("");

  elements.motifGrid.querySelectorAll("[data-motif]").forEach((button) => {
    button.addEventListener("click", () => {
      const motif = activeSet.motifs.find((item) => item.id === button.dataset.motif);
      if (!motif) return;
      state.activeMotifId = motif.id;
      state.selectedId = motif.ids[0];
      persistState();
      render();
    });
  });
}

function renderMarkerGrid() {
  const visible = getVisibleMarkers();
  elements.libraryCount.textContent = `${visible.length} av ${markers.length}`;
  elements.markerGrid.innerHTML = visible
    .map((marker) => {
      const selected = marker.id === state.selectedId && !state.activeMotifId;
      return `
        <button class="marker-card" type="button" aria-pressed="${selected}" data-marker="${marker.id}">
          <i class="mini-swatch" style="background:${marker.hex}"></i>
          <span>
            <strong>${escapeHtml(formatMarkerLabel(marker))}</strong>
            <span>${escapeHtml(marker.family)}</span>
          </span>
        </button>
      `;
    })
    .join("");

  elements.markerGrid.querySelectorAll("[data-marker]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.marker;
      state.activeMotifId = null;
      persistState();
      render();
    });
  });
}

function getVisibleMarkers() {
  return markers.filter((marker) => {
    const familyMatch = state.family === "Alla" || marker.family === state.family;
    const haystack = `${marker.id} ${marker.name} ${marker.family}`.toLowerCase();
    return familyMatch && haystack.includes(state.search.toLowerCase());
  });
}

function getCurrentPalette() {
  const motif = getActiveMotif();
  if (motif) {
    return {
      title: motif.title,
      mood: "motiv",
      colors: motif.ids.map((id, index) => ({
        marker: markerById.get(id),
        role: ["Ljus", "Mellan", "Färg", "Djup", "Stöd", "Accent"][index] || "Färg",
        note: motif.text
      })).filter((item) => item.marker)
    };
  }

  const marker = getSelectedMarker();
  if (marker.id === "0") {
    return {
      title: "Blender och mjuka kanter",
      mood: "teknik",
      colors: makePalette(["0", "143", "196", "167"], ["Mjukar kant", "Kall ljus ton", "Varm ljus ton", "Grön ljus ton"])
    };
  }

  if (isNeutral(marker)) {
    return makeNeutralPalette(marker);
  }

  switch (state.schemeId) {
    case "analogous":
      return makeAnalogousPalette(marker);
    case "complementary":
      return makeComplementaryPalette(marker);
    case "split":
      return makeSplitPalette(marker);
    case "rectangle":
      return makeRectanglePalette(marker);
    case "mono":
      return makeMonoPalette(marker);
    case "triad":
    default:
      return makeTriadPalette(marker);
  }
}

function makeAnalogousPalette(marker) {
  const used = new Set([marker.id]);
  const warm = findClosestMarker(marker.hsl.h - 28, marker.hsl.s, marker.hsl.l, used);
  used.add(warm.id);
  const cool = findClosestMarker(marker.hsl.h + 28, marker.hsl.s, marker.hsl.l, used);
  used.add(cool.id);
  const shadow = pickShadow(marker, used);
  return {
    title: `Analog palett från ${marker.id}`,
    mood: "mjuk",
    colors: [
      { marker, role: "Dominant", note: "huvudfärg" },
      { marker: warm, role: "Varmare granne", note: "mjuk variation" },
      { marker: cool, role: "Kallare granne", note: "mjuk variation" },
      { marker: shadow, role: "Skugga", note: "för form och djup" }
    ]
  };
}

function makeComplementaryPalette(marker) {
  const used = new Set([marker.id]);
  const complement = findClosestMarker(marker.hsl.h + 180, clamp(marker.hsl.s, 0.38, 0.82), marker.hsl.l, used);
  used.add(complement.id);
  const light = pickLight(marker, used);
  used.add(light.id);
  const neutral = pickNeutral(marker, used);
  return {
    title: `Komplement från ${marker.id}`,
    mood: "kontrast",
    colors: [
      { marker, role: "Dominant", note: "största ytan" },
      { marker: complement, role: "Accent", note: "motsatt färg" },
      { marker: light, role: "Ljus ton", note: "blending och highlights" },
      { marker: neutral, role: "Dämpare", note: "lugnar stark kontrast" }
    ]
  };
}

function makeSplitPalette(marker) {
  const used = new Set([marker.id]);
  const first = findClosestMarker(marker.hsl.h + 150, clamp(marker.hsl.s, 0.4, 0.82), marker.hsl.l, used);
  used.add(first.id);
  const second = findClosestMarker(marker.hsl.h + 210, clamp(marker.hsl.s, 0.4, 0.82), marker.hsl.l, used);
  used.add(second.id);
  const neutral = pickNeutral(marker, used);
  return {
    title: `Delad kontrast från ${marker.id}`,
    mood: "balans",
    colors: [
      { marker, role: "Dominant", note: "huvudfärg" },
      { marker: first, role: "Accent 1", note: "nära komplement" },
      { marker: second, role: "Accent 2", note: "nära komplement" },
      { marker: neutral, role: "Dämpare", note: "binder ihop paletten" }
    ]
  };
}

function makeTriadPalette(marker) {
  const used = new Set([marker.id]);
  const second = findClosestMarker(marker.hsl.h + 120, clamp(marker.hsl.s, 0.42, 0.86), marker.hsl.l, used);
  used.add(second.id);
  const third = findClosestMarker(marker.hsl.h + 240, clamp(marker.hsl.s, 0.42, 0.86), marker.hsl.l, used);
  used.add(third.id);
  const light = pickLight(marker, used);
  return {
    title: `Triad från ${marker.id}`,
    mood: "färgrik",
    colors: [
      { marker, role: "Dominant", note: "60 procent" },
      { marker: second, role: "Stöd", note: "30 procent" },
      { marker: third, role: "Accent", note: "10 procent" },
      { marker: light, role: "Ljus ton", note: "mjukar övergångar" }
    ]
  };
}

function makeRectanglePalette(marker) {
  const used = new Set([marker.id]);
  const second = findClosestMarker(marker.hsl.h + 60, clamp(marker.hsl.s, 0.4, 0.82), marker.hsl.l, used);
  used.add(second.id);
  const third = findClosestMarker(marker.hsl.h + 180, clamp(marker.hsl.s, 0.4, 0.82), marker.hsl.l, used);
  used.add(third.id);
  const fourth = findClosestMarker(marker.hsl.h + 240, clamp(marker.hsl.s, 0.4, 0.82), marker.hsl.l, used);
  return {
    title: `Rektangel från ${marker.id}`,
    mood: "rik",
    colors: [
      { marker, role: "Dominant", note: "största ytan" },
      { marker: second, role: "Stöd", note: "samma sida av hjulet" },
      { marker: third, role: "Kontrast", note: "komplementpar" },
      { marker: fourth, role: "Accent", note: "andra komplementparet" }
    ]
  };
}

function makeMonoPalette(marker) {
  return {
    title: `Tonsteg från ${marker.id}`,
    mood: "blend",
    colors: getBlendPalette(marker)
  };
}

function makeNeutralPalette(marker) {
  const used = new Set([marker.id]);
  const cool = findClosestMarker(205, 0.58, 0.56, used);
  used.add(cool.id);
  const warm = findClosestMarker(32, 0.65, 0.58, used);
  used.add(warm.id);
  const soft = pickNeutral(marker, used);
  return {
    title: `Neutral palett från ${marker.id}`,
    mood: "dämpad",
    colors: [
      { marker, role: "Neutral bas", note: "största ytan" },
      { marker: cool, role: "Kall accent", note: "bryter av utan att skrika" },
      { marker: warm, role: "Varm accent", note: "ger liv åt grått" },
      { marker: soft, role: "Mjuk skugga", note: "binder ihop paletten" }
    ]
  };
}

function makePalette(ids, roles) {
  return ids
    .map((id, index) => ({
      marker: markerById.get(id),
      role: roles[index] || "Färg",
      note: markerById.get(id)?.family || ""
    }))
    .filter((item) => item.marker);
}

function getBlendPalette(marker) {
  if (marker.id === "0") {
    return makePalette(["0", "143", "196", "167"], ["Blender", "Kall ljus", "Varm ljus", "Mjuk färg"]);
  }

  const used = new Set([marker.id]);
  const pool = getBlendPool(marker);
  const desired = [
    { role: "Ljus bas", lightness: 0.9 },
    { role: "Mellan", lightness: 0.68 },
    { role: "Vald ton", lightness: marker.hsl.l },
    { role: "Djup skugga", lightness: 0.34 }
  ];

  const blend = desired.map((target) => {
    if (target.role === "Vald ton") {
      used.add(marker.id);
      return { marker, role: target.role, note: marker.family };
    }
    const picked = pickByLightness(pool, target.lightness, used, marker);
    used.add(picked.id);
    return { marker: picked, role: target.role, note: picked.family };
  });

  return blend;
}

function getBlendPool(marker) {
  if (isNeutral(marker)) {
    return markers.filter((item) => item.family === "Gråskala" && item.id !== "120");
  }

  const sameFamily = markers.filter((item) => item.family === marker.family && isUsableColor(item));
  const sameHue = markers.filter((item) => {
    if (!isUsableColor(item) || item.id === marker.id) return false;
    return hueDistance(item.hsl.h, marker.hsl.h) <= 24;
  });
  return uniqueMarkers([marker, ...sameFamily, ...sameHue]);
}

function findClosestMarker(targetHue, targetSat, targetLight, exclude = new Set()) {
  const hue = normalizeHue(targetHue);
  const candidates = markers.filter((marker) => isUsableColor(marker) && !exclude.has(marker.id));
  return candidates.reduce((best, marker) => {
    const score =
      hueDistance(marker.hsl.h, hue) * 1.8 +
      Math.abs(marker.hsl.s - targetSat) * 42 +
      Math.abs(marker.hsl.l - targetLight) * 34;
    return !best || score < best.score ? { marker, score } : best;
  }, null).marker;
}

function pickLight(marker, exclude = new Set()) {
  const pool = getBlendPool(marker).filter((item) => !exclude.has(item.id));
  return pickByLightness(pool, 0.86, exclude, marker);
}

function pickShadow(marker, exclude = new Set()) {
  const pool = getBlendPool(marker).filter((item) => !exclude.has(item.id));
  return pickByLightness(pool, 0.35, exclude, marker);
}

function pickNeutral(marker, exclude = new Set()) {
  const desired = marker.hsl.l < 0.45 ? 0.58 : 0.66;
  const familyHint = marker.hsl.h >= 160 && marker.hsl.h <= 260 ? "WG" : marker.hsl.h >= 70 && marker.hsl.h < 160 ? "BG" : "GG";
  const candidates = markers.filter((item) => item.family === "Gråskala" && !exclude.has(item.id) && item.id !== "120");
  return candidates.reduce((best, item) => {
    const nameBonus = item.id.startsWith(familyHint) ? -0.035 : 0;
    const score = Math.abs(item.hsl.l - desired) + nameBonus;
    return !best || score < best.score ? { marker: item, score } : best;
  }, null).marker;
}

function pickByLightness(pool, desiredLightness, exclude = new Set(), anchor = null) {
  const candidates = pool.filter((marker) => !exclude.has(marker.id));
  const fallback = pool.find((marker) => !exclude.has(marker.id)) || anchor || getSelectedMarker();
  if (!candidates.length) return fallback;

  return candidates.reduce((best, marker) => {
    const huePenalty = anchor && !isNeutral(anchor) && !isNeutral(marker) ? hueDistance(anchor.hsl.h, marker.hsl.h) / 300 : 0;
    const score = Math.abs(marker.hsl.l - desiredLightness) + huePenalty;
    return !best || score < best.score ? { marker, score } : best;
  }, null).marker;
}

function getActiveMotif() {
  return activeSet.motifs.find((motif) => motif.id === state.activeMotifId) || null;
}

function getSelectedMarker() {
  return markerById.get(state.selectedId) || markerById.get(activeSet.defaultMarkerId) || markers[0];
}

function formatMarkerLabel(marker) {
  return marker.id === marker.name ? marker.name : `${marker.id} ${marker.name}`;
}

function isUsableColor(marker) {
  return marker.family !== "Verktyg" && marker.id !== "120" && marker.hsl.s > 0.16;
}

function isNeutral(marker) {
  return marker.family === "Gråskala" || marker.family === "Verktyg" || marker.hsl.s <= 0.16;
}

function uniqueMarkers(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function drawWheel() {
  const canvas = elements.canvas;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const center = size / 2;
  const radius = size * 0.46;
  const image = ctx.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = x - center;
      const dy = y - center;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const index = (y * size + x) * 4;

      if (distance > radius) {
        image.data[index + 3] = 0;
        continue;
      }

      const hue = normalizeHue((Math.atan2(dy, dx) * 180) / Math.PI);
      const saturation = clamp(distance / radius, 0, 1);
      const lightness = 0.94 - saturation * 0.38;
      const rgb = hslToRgb(hue, saturation, lightness);

      image.data[index] = rgb.r;
      image.data[index + 1] = rgb.g;
      image.data[index + 2] = rgb.b;
      image.data[index + 3] = 255;
    }
  }

  ctx.clearRect(0, 0, size, size);
  ctx.putImageData(image, 0, 0);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(32, 35, 42, 0.22)";
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.stroke();

  markers.forEach((marker) => drawMarkerPoint(ctx, marker, "base"));

  const palette = getCurrentPalette();
  palette.colors.forEach((item) => drawMarkerPoint(ctx, item.marker, "harmony"));
  drawMarkerPoint(ctx, getSelectedMarker(), "selected");
}

function drawMarkerPoint(ctx, marker, type) {
  const { x, y } = wheelPosition(marker);
  const radius = type === "selected" ? 7 : type === "harmony" ? 6 : 3.6;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = marker.hex;
  ctx.fill();
  ctx.lineWidth = type === "selected" ? 3 : type === "harmony" ? 2.4 : 1;
  ctx.strokeStyle = type === "selected" ? "#111827" : type === "harmony" ? "#c9405b" : "rgba(17, 24, 39, 0.52)";
  ctx.stroke();
}

function wheelPosition(marker) {
  const size = elements.canvas.width;
  const center = size / 2;
  const radius = size * 0.46;
  const saturation = isNeutral(marker) ? Math.max(0.04, marker.hsl.s) : clamp(marker.hsl.s, 0.16, 0.96);
  const angle = (marker.hsl.h * Math.PI) / 180;
  return {
    x: center + Math.cos(angle) * saturation * radius,
    y: center + Math.sin(angle) * saturation * radius
  };
}

function nearestMarkerFromWheel(x, y) {
  const size = elements.canvas.width;
  const center = size / 2;
  const radius = size * 0.46;
  const dx = x - center;
  const dy = y - center;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > radius + 12) return null;

  return markers
    .filter((marker) => marker.family !== "Verktyg")
    .reduce((best, marker) => {
      const pos = wheelPosition(marker);
      const score = Math.hypot(pos.x - x, pos.y - y);
      return !best || score < best.score ? { marker, score } : best;
    }, null).marker;
}

function copyCurrentPalette() {
  const palette = getCurrentPalette();
  const lines = [
    "Markerkompassen",
    activeSet.label,
    palette.title,
    "",
    ...palette.colors.map((item) => `${item.role}: ${formatMarkerLabel(item.marker)} (${item.marker.family})`)
  ];
  const text = lines.join("\n");

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast("Paletten kopierades."),
      () => fallbackCopy(text)
    );
    return;
  }

  fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  showToast("Paletten kopierades.");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2100);
}

function persistState() {
  try {
    localStorage.setItem("markerkompassen:set", state.setId);
    localStorage.setItem(`markerkompassen:${state.setId}:selected`, state.selectedId);
    localStorage.setItem("markerkompassen:scheme", state.schemeId);
  } catch {
    // The app still works if a browser blocks local storage for file pages.
  }
}

function getStoredValue(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function getInitialSetId() {
  const fallback = getStoredValue("markerkompassen:set", "twin120");
  try {
    const query = window.location.search || window.location.hash.slice(1);
    const requested = new URLSearchParams(query).get("set");
    return markerSets[requested] ? requested : markerSets[fallback] ? fallback : "twin120";
  } catch {
    return markerSets[fallback] ? fallback : "twin120";
  }
}

function hueDistance(a, b) {
  const distance = Math.abs(normalizeHue(a) - normalizeHue(b));
  return Math.min(distance, 360 - distance);
}

function normalizeHue(value) {
  return ((value % 360) + 360) % 360;
}

function enrichMarker(marker) {
  marker.rgb = hexToRgb(marker.hex);
  marker.hsl = rgbToHsl(marker.rgb.r, marker.rgb.g, marker.rgb.b);
  marker.lab = rgbToLab(marker.rgb.r, marker.rgb.g, marker.rgb.b);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
}

function rgbToHsl(r, g, b) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      default:
        hue = (red - green) / delta + 4;
    }
    hue *= 60;
  }

  return { h: normalizeHue(hue), s: saturation, l: lightness };
}

function hslToRgb(h, s, l) {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
  let r = 0;
  let g = 0;
  let b = 0;

  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    b = chroma;
  } else {
    r = chroma;
    b = x;
  }

  const match = l - chroma / 2;
  return {
    r: Math.round((r + match) * 255),
    g: Math.round((g + match) * 255),
    b: Math.round((b + match) * 255)
  };
}

function rgbToLab(r, g, b) {
  const xyz = rgbToXyz(r, g, b);
  const x = pivotXyz(xyz.x / 95.047);
  const y = pivotXyz(xyz.y / 100);
  const z = pivotXyz(xyz.z / 108.883);
  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z)
  };
}

function rgbToXyz(r, g, b) {
  const srgb = [r, g, b].map((value) => {
    const channel = value / 255;
    return channel > 0.04045 ? ((channel + 0.055) / 1.055) ** 2.4 : channel / 12.92;
  });
  const [red, green, blue] = srgb.map((value) => value * 100);
  return {
    x: red * 0.4124 + green * 0.3576 + blue * 0.1805,
    y: red * 0.2126 + green * 0.7152 + blue * 0.0722,
    z: red * 0.0193 + green * 0.1192 + blue * 0.9505
  };
}

function pivotXyz(value) {
  return value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
