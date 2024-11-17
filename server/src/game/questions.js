const questions = [
  {
    questionType: 1,
    question: "Qual'è il telefono più venduto del 2023?",
    answer: "iPhone 14",
    availableAnswers: [
      { answer: "iPhone 14"},
      { answer: "iPhone 15"},
      { answer: "Samsung Galaxy A14"},
      { answer: "Samsung Galaxy S23"},
    ],
    image: "1a"
  },
  {
    questionType: 1,
    question: "Qual'è il nome dello scienziato Tesla?",
    answer: "Nikola",
    availableAnswers: [
      { answer: "Nicola"},
      { answer: "Nicolas"},
      { answer: "Nicolò"},
      { answer: "Nikola"},
    ],
    image: "2a"
  },
  {
    questionType: 1,
    question: "Qual'è il ragno più velenoso al mondo?",
    answer: "Ragno dei Cunicoli",
    availableAnswers: [
      { answer: "Ragno delle Banane"},
      { answer: "Vedova Nera"},
      { answer: "Ragno dei Cunicoli"},
      { answer: "Ragno Eremita Marrone"},
    ],
    image: "3a"
  },
  {
    questionType: 1,
    question: "Qual'è tra questi il videogioco più venduto?",
    answer: "Wii Sports",
    availableAnswers: [
      { answer: "Super Mario Bros"},
      { answer: "Wii Sports"},
      { answer: "Call Of DUty: Black Ops"},
      { answer: "Pokémon Oro e Argento"},
    ],
    image: "4a"
  },
  {
    questionType: 1,
    question: "Come si chiama il Gormita in figura",
    answer: "Noctis, il Signore dei Cieli",
    availableAnswers: [
      { answer: "Noctis, il Signore dei Cieli"},
      { answer: "Caelumor, il Sovrano dell'Abisso Celeste"},
      { answer: "Arialis, il Signore delle Nuovole"},
      { answer: "Neburios , il Signore dell'Aria"},
    ],
    image: "5a"
  },
  {
    questionType: 1,
    question: "Qual'è la tipologia del Pokemon Milotic?",
    answer: "Acqua",
    availableAnswers: [
      { answer: "Drago"},
      { answer: "Acqua"},
      { answer: "Acqua / Drago"},
      { answer: "Acqua / Volante"},
    ],
    image: "6a"
  },
  {
    questionType: 1,
    question: "Come si chiama l'attrezzo in figura",
    answer: "Pinza a Pappagallo",
    availableAnswers: [
      { answer: "Pinza a Dente di Leone"},
      { answer: "Pinza a Morsa"},
      { answer: "Pinza a Pappagallo"},
      { answer: "Pinza a Becco"},
    ],
    image: "7a"
  },
  {
    questionType: 1,
    question: "Qual'è il Social Network con più utenti",
    answer: "Facebook",
    availableAnswers: [
      { answer: "YpuTube"},
      { answer: "Facebook"},
      { answer: "Instagram"},
      { answer: "WhatsApp"},
    ],
    image: "8a"
  },
  {
    questionType: 1,
    question: "Chi ha segnato più gol in carriera?",
    answer: "Cristiano Ronaldo",
    availableAnswers: [
      { answer: "Messi"},
      { answer: "Pelè"},
      { answer: "Ronaldo il Fenomeno"},
      { answer: "Cristiano Ronaldo"},
    ],
    image: "9a"
  },
  {
    questionType: 1,
    question: "Come si chiama la specie del polpo in figura?",
    answer: "Polpo Dumbo",
    availableAnswers: [
      { answer: "Polpo Elefantino"},
      { answer: "Polpo delle Corna"},
      { answer: "Polp degli Anelli"},
      { answer: "Polpo Dumbo"},
    ],
    image: "10a"
  },
  {
    questionType: 1,
    question: "Qual'è il vero nome dell'attore di Mr.Bean?",
    answer: "Rowan Atkinson",
    availableAnswers: [
      { answer: "John Cleese"},
      { answer: "Rowan Atkinson"},
      { answer: "Arthur Bafflington"},
      { answer: "Stephen Fry"},
    ],
    image: "11a"
  },
  {
    questionType: 1,
    question: "Fino al 2016, qual'era il costo annuale di WhatsApp?",
    answer: "0.89€",
    availableAnswers: [
      { answer: "0.89€"},
      { answer: "0.99€"},
      { answer: "1.49€"},
      { answer: "1.99€"},
    ],
    image: "12a"
  },
  {
    questionType: 1,
    question: "Chi è la persona in figura?",
    answer: "Ryan Tedder (One Republic)",
    availableAnswers: [
      { answer: "Avicii"},
      { answer: "Chris Martin (Coldplay)"},
      { answer: "Dan Reynolds (Imagine Dragons)"},
      { answer: "Ryan Tedder (One Republic)"},
    ],
    image: "13a"
  },
  {
    questionType: 1,
    question: "Come si chiama la malattia degenerativa che ha colpito Sammy Basso?",
    answer: "Progeria",
    availableAnswers: [
      { answer: "Progeria"},
      { answer: "Sindrome di Prader-Willi"},
      { answer: "Fibromialgia"},
      { answer: "Sindrome di Marfan"},
    ],
    image: "14a"
  },
  {
    questionType: 1,
    question: "Qual'è la città in figura?",
    answer: "",
    availableAnswers: [
      { answer: "Rovigo"},
      { answer: "Bologna"},
      { answer: "Siena"},
      { answer: "Arezzo"},
    ],
    image: "15a"
  },
  {
    questionType: 1,
    question: "Come si chiama l'attuale imperatore del Giappone?",
    answer: "Naruhito",
    availableAnswers: [
      { answer: "Naruhito"},
      { answer: "Akihiro"},
      { answer: "Kiyotaka"},
      { answer: "Masayoshi"},
    ],
    image: "16a"
  },
  {
    questionType: 1,
    question: "Qual'è la provincia più popolosa tra le seguenti?",
    answer: "Palermo",
    availableAnswers: [
      { answer: "Brescia"},
      { answer: "Verona"},
      { answer: "Varese"},
      { answer: "Palermo"},
    ],
    image: "17a"
  },
  {
    questionType: 1,
    question: "Come si chiama la creature mitologica in figura?",
    answer: "Manticora",
    availableAnswers: [
      { answer: "Chimera"},
      { answer: "Basilisco"},
      { answer: "Manticora"},
      { answer: "Echidna"},
    ],
    image: "18a"
  },
  {
    questionType: 1,
    question: "Con cosa si prepara il 'Risotto alla Milanese'?",
    answer: "Zafferano",
    availableAnswers: [
      { answer: "Zafferano"},
      { answer: "Curcuma"},
      { answer: "Timo"},
      { answer: "Zucca"},
    ],
    image: "19a"
  },
  {
    questionType: 1,
    question: "Un 'ragionamento lapalissiano' è un ragionamento particolarmente...?",
    answer: "Ovvio",
    availableAnswers: [
      { answer: "Complesso"},
      { answer: "Ovvio"},
      { answer: "Stupido"},
      { answer: "Inutilmente lungo"},
    ],
    image: "20a"
  },
  {
    questionType: 1,
    question: "L'ornitorinco è un...?",
    answer: "Mammifero",
    availableAnswers: [
      { answer: "Anfibio"},
      { answer: "Mammifero"},
      { answer: "Rettile"},
      { answer: "Pesce"},
    ],
    image: "21a"
  },
  {
    questionType: 1,
    question: "Di che razza è il cane in figura?",
    answer: "Akita",
    availableAnswers: [
      { answer: "Shih Tzu"},
      { answer: "Shiba"},
      { answer: "Kangal"},
      { answer: "Akita"},
    ],
    image: "22a"
  },



  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},A
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },
  // {
  //   questionType: 1,
  //   question: "",
  //   answer: "",
  //   availableAnswers: [
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //     { answer: ""},
  //   ],
  //   image: ""
  // },






  {
    questionType: 0,
    question: "In quale anno é stata inventata la bicicletta?",
    answer: 1817,
    min: 1500,
    max: 2000,
    step: 1,
    unit: "",
    image: "1"
  },
  {
    questionType: 0,
    question: "Quanti pianeti ha il nostro sistema solare?",
    answer: 8,
    min: 5,
    max: 10,
    step: 1,
    unit: "",
    image: "2"
  },
  {
    questionType: 0,
    question: "Quante nazioni ci sono in tutto il mondo? (solo stati sovrani)",
    answer: 195,
    min: 100,
    max: 200,
    step: 1,
    unit: "",
    image: "3"
  },
  {
    questionType: 0,
    question: "A quale velocitá (in km/h) é necessario vaggiare per percorrere 287 km in 2 ore e 56 minuti?",
    answer: 98,
    min: 50,
    max: 200,
    step: 1,
    unit: "km/h",
    image: "4"
  },
  {
    questionType: 0,
    question: "In che anno é nato Benito Mussolini (a.k.a. il puzzone)?",
    answer: 1883,
    min: 1800,
    max: 1900,
    step: 1,
    unit: "km/h",
    image: "5"
  },
  {
    questionType: 0,
    question: "Quante banane sono necessarie per apportare il giusto quantitativo di calore per camminare 10 km considerando un uomo di peso 70 kg?",
    answer: 5,
    min: 1,
    max: 100,
    step: 1,
    unit: "banane",
    image: "6"
  },
  {
    questionType: 0,
    question: "Quanti abitanti ha la Thailandia in milioni (anno 2023/2024)?",
    answer: 70,
    min: 1,
    max: 100,
    step: 1,
    unit: "milioni",
    image: "7"
  },
  {
    questionType: 0,
    question: "Quanti anni ha la statua della libertá (considerando come anno di nascita l'anno di fine costruzione e 2024 come ultimo anno?",
    answer: 140,
    min: 100,
    max: 200,
    step: 1,
    unit: "anni",
    image: "8"
  },
  {
    questionType: 0,
    question: "Quanti ponti ha Venezia?",
    answer: 435,
    min: 100,
    max: 500,
    step: 1,
    unit: "ponti",
    image: "9"
  },
  {
    questionType: 0,
    question: "Qual'é la temperatura piú alta mai registrata (in °C)?",
    answer: 57,
    min: 50,
    max: 100,
    step: 1,
    unit: "°C",
    image: "10"
  },
  {
    questionType: 0,
    question: "Quanti anni aveva Michael Jackson quando é morto?",
    answer: 50,
    min: 30,
    max: 70,
    step: 1,
    unit: "anni",
    image: "11"
  },
  {
    questionType: 0,
    question: "Quante ossa ci sono nel corpo umano?",
    answer: 206,
    min: 50,
    max: 500,
    step: 1,
    unit: "ossa",
    image: "12"
  },
  {
    questionType: 0,
    question: "Con quanti stati confina l'Italia?",
    answer: 6,
    min: 2,
    max: 10,
    step: 1,
    unit: "stati",
    image: "13"
  },
  {
    questionType: 0,
    question: "Quanto é alto il monte K2 in metri?",
    answer: 8611,
    min: 0,
    max: 20000,
    step: 1,
    unit: "metri",
    image: "14"
  },
  {
    questionType: 0,
    question: "Qual'é l'etá piú alta mai raggiunta da un uomo (maschio)?",
    answer: 116,
    min: 90,
    max: 150,
    step: 1,
    unit: "anni",
    image: "15"
  },
  {
    questionType: 0,
    question: "Qual'é l'etá piú alta mai raggiunta da una donna?",
    answer: 122,
    min: 90,
    max: 150,
    step: 1,
    unit: "anni",
    image: "16"
  },
  {
    questionType: 0,
    question: "Quanti sono gli stati che compongono gli Stati Uniti d'America?",
    answer: 50,
    min: 1,
    max: 100,
    step: 1,
    unit: "stati",
    image: "17"
  },
  {
    questionType: 0,
    question: "Quanti chilometri distanziano Spagna e Marocco nello stretto di Gibilterra?",
    answer: 58,
    min: 1,
    max: 200,
    step: 1,
    unit: "km",
    image: "18"
  },
  {
    questionType: 0,
    question: "Quando é uscito il primo film Disney (Biancaneve)?",
    answer: 1937,
    min: 1800,
    max: 2000,
    step: 1,
    unit: "",
    image: "19"
  },
  {
    questionType: 0,
    question: "In quale anno si é tenuto il primo Giro d'Italia?",
    answer: 1909,
    min: 1800,
    max: 2000,
    step: 1,
    unit: "",
    image: "20"
  },
  {
    questionType: 0,
    question: "Quanti milioni di anni fa si sono estinti i dinosauri?",
    answer: 65,
    min: 1,
    max: 100,
    step: 1,
    unit: "milioni di anni fa",
    image: "21"
  },
  {
    questionType: 0,
    question: "Quanti milioni di km dista la Terra dal Sole? (afelio)",
    answer: 152,
    min: 1,
    max: 500,
    step: 1,
    unit: "milioni di km",
    image: "22"
  },
  // {
  //   questionType: 0,
  //   question: "Quanti fusi orari ci sono in Russia?",
  //   answer: 11,
  //   min: 1,
  //   max: 20,
  //   step: 1,
  //   unit: "",
  //   image: "23"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'é l'etá media in Italia?",
  //   answer: 48,
  //   min: 10,
  //   max: 80,
  //   step: 1,
  //   unit: "anni",
  //   image: "24"
  // },
  // {
  //   questionType: 0,
  //   question: "Quando si é tenuto il primo mondiale di calcio?",
  //   answer: 1930,
  //   min: 1800,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "25"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti pedoni ci sono in una scacchiera? (considerando bianchi e neri)",
  //   answer: 16,
  //   min: 1,
  //   max: 30,
  //   step: 1,
  //   unit: "",
  //   image: "26"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti episodi ha la nota serie 'Il Segreto'?",
  //   answer: 2324,
  //   min: 1,
  //   max: 5000,
  //   step: 1,
  //   unit: "",
  //   image: "27"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti miliardi di visualizzazioni ha il videoclip della nota canzone 'Gangnam Style' di PSY?",
  //   answer: 5,
  //   min: 1,
  //   max: 40,
  //   step: 1,
  //   unit: "miliardi",
  //   image: "28"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti album hanno pubblicato i Pink Floyd?",
  //   answer: 15,
  //   min: 1,
  //   max: 30,
  //   step: 1,
  //   unit: "album",
  //   image: "29"
  // },
  // {
  //   questionType: 0,
  //   question: "In che anno è uscita il brano 'Never Gonna Give You Up' di Rick Astley?",
  //   answer: 1987,
  //   min: 1950,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "30"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti km devono essere percorsi in macchina per arrivare a Belluno partendo da Treviso? (prendendo la A27)",
  //   answer: 77,
  //   min: 20,
  //   max: 200,
  //   step: 1,
  //   unit: "km",
  //   image: "31"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante province ci sono in Italia?",
  //   answer: 110,
  //   min: 20,
  //   max: 150,
  //   step: 1,
  //   unit: "",
  //   image: "32"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno è nato Albrecht Dürer (pittore e incisore tedesco)?",
  //   answer: 1471,
  //   min: 1200,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "33"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno è stata lanciato Instagram?",
  //   answer: 2010,
  //   min: 2000,
  //   max: 2015,
  //   step: 1,
  //   unit: "",
  //   image: "34"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'era il prezzo di lancio dell'iPhone 15 in Italia?",
  //   answer: 979,
  //   min: 500,
  //   max: 1500,
  //   step: 1,
  //   unit: "euro",
  //   image: "35"
  // },
  // {
  //   questionType: 0,
  //   question: "Il record di salto in alto di Gianmarco Tamberi è di 2 metri e...?",
  //   answer: 39,
  //   min: 0,
  //   max: 99,
  //   step: 1,
  //   unit: "cm",
  //   image: "36"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti anni ha il presidende Mattarella?",
  //   answer: 83,
  //   min: 50,
  //   max: 90,
  //   step: 1,
  //   unit: "anni",
  //   image: "37"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno venne concesso il diritto di voto alle donne in Italia?",
  //   answer: 1946,
  //   min: 1850,
  //   max: 1980,
  //   step: 1,
  //   unit: "",
  //   image: "38"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale episodio di DragonBall venne sconfitto Majin Bu (291 episodi totali)?",
  //   answer: 286,
  //   min: 200,
  //   max: 291,
  //   step: 1,
  //   unit: "",
  //   image: "39"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante stagioni ha la serie 'Breaking Bad'?",
  //   answer: 5,
  //   min: 1,
  //   max: 10,
  //   step: 1,
  //   unit: "",
  //   image: "40"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti capitoli ha il manga di 'Death Note'?",
  //   answer: 108,
  //   min: 30,
  //   max: 150,
  //   step: 1,
  //   unit: "",
  //   image: "41"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti ristoranti stellati Michelin ci sono in Italia?",
  //   answer: 392,
  //   min: 10,
  //   max: 400,
  //   step: 1,
  //   unit: "",
  //   image: "42"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'è la velocità massima (in km/h) raggiunta in una schiacciata di pallavolo (maschile)?",
  //   answer: 138,
  //   min: 50,
  //   max: 150,
  //   step: 1,
  //   unit: "km/h",
  //   image: "43"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti lati ha un endeicosagono",
  //   answer: 21,
  //   min: 11,
  //   max: 111,
  //   step: 1,
  //   unit: "",
  //   image: "44"
  // },
  // {
  //   questionType: 0,
  //   question: "In che anno è uscita la Playstation 2?",
  //   answer: 2000,
  //   min: 2000,
  //   max: 2015,
  //   step: 1,
  //   unit: "",
  //   image: "45"
  // },
  // {
  //   questionType: 0,
  //   question: "Sommando i colori primari e secondari, quanti colori si ottengono?",
  //   answer: 6,
  //   min: 3,
  //   max: 24,
  //   step: 1,
  //   unit: "",
  //   image: "46"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti comuni ci sono in provincia di Treviso?",
  //   answer: 94,
  //   min: 30,
  //   max: 100,
  //   step: 1,
  //   unit: "",
  //   image: "47"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'è l'altezza del Burj Khalifa (in metri)?",
  //   answer: 828,
  //   min: 100,
  //   max: 1200,
  //   step: 1,
  //   unit: "metri",
  //   image: "48"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'è l'altezza media di un adulto in Italia (in cm)?",
  //   answer: 175,
  //   min: 160,
  //   max: 190,
  //   step: 1,
  //   unit: "",
  //   image: "49"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno nacque il canale Youtube di Favij?",
  //   answer: 2012,
  //   min: 2007,
  //   max: 2017,
  //   step: 1,
  //   unit: "",
  //   image: "50"
  // },
  // {
  //   questionType: 0,
  //   question: "A quale livello Dragonair evolve in Dragonite?",
  //   answer: 55,
  //   min: 36,
  //   max: 71,
  //   step: 1,
  //   unit: "",
  //   image: "51"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante colonne ha ci sono nella fronte del duomo di Treviso?",
  //   answer: 6,
  //   min: 1,
  //   max: 12,
  //   step: 1,
  //   unit: "",
  //   image: "52"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'è il record di velocità di picco raggiunta da Usaian Bolt?",
  //   answer: 45,
  //   min: 30,
  //   max: 50,
  //   step: 1,
  //   unit: "",
  //   image: "53"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti ora ha vinto l'Italia alle ultime Olimpiadi?",
  //   answer: 12,
  //   min: 3,
  //   max: 31,
  //   step: 1,
  //   unit: "",
  //   image: "54"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno si è conclusa la transizione definitiva al Digitale Terrestre in Italia?",
  //   answer: 2012,
  //   min: 2004,
  //   max: 2017,
  //   step: 1,
  //   unit: "",
  //   image: "55"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti gironi ci sono nell'Inferno di Dante?",
  //   answer: 9,
  //   min: 3,
  //   max: 33,
  //   step: 1,
  //   unit: "",
  //   image: "56"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti sono i giganti multiforma in 'Attack on Titan'?",
  //   answer: 9,
  //   min: 3,
  //   max: 20,
  //   step: 1,
  //   unit: "",
  //   image: "57"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante sono le isole principali delle Hawaii?",
  //   answer: 8,
  //   min: 5,
  //   max: 25,
  //   step: 1,
  //   unit: "",
  //   image: "58"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti stati compongono l'Oceania?",
  //   answer: 14,
  //   min: 2,
  //   max: 16,
  //   step: 1,
  //   unit: "",
  //   image: "59"
  // },
  // {
  //   questionType: 0,
  //   question: "A quando risale la prima edizione animata di 'Yu-Gi-Oh!'? (in Giappone)",
  //   answer: 1998,
  //   min: 1983,
  //   max: 2007,
  //   step: 1,
  //   unit: "",
  //   image: "60"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante evoluzioni possibili ha ad oggi Eevee?",
  //   answer: 8,
  //   min: 3,
  //   max: 14,
  //   step: 1,
  //   unit: "",
  //   image: "61"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno venne disegnata la 'Trollface'?",
  //   answer: 2008,
  //   min: 1990,
  //   max: 2014,
  //   step: 1,
  //   unit: "",
  //   image: "62"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti livelli di municipio ci sono in 'Clash of Clans' attualmente?",
  //   answer: 16,
  //   min: 8,
  //   max: 23,
  //   step: 1,
  //   unit: "",
  //   image: "63"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti sono in totale i film di 'Harry Potter'?",
  //   answer: 8,
  //   min: 4,
  //   max: 13,
  //   step: 1,
  //   unit: "",
  //   image: "64"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno è uscito il film 'Il Padrino'?",
  //   answer: 1972,
  //   min: 1970,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "65"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno è caduto il muro di Berlino?",
  //   answer: 1989,
  //   min: 1970,
  //   max: 1999,
  //   step: 1,
  //   unit: "",
  //   image: "66"
  // },
  // {
  //   questionType: 0,
  //   question: "In che anno è morto Chester Bennington, frontman dei Linking Park?",
  //   answer: 2017,
  //   min: 2009,
  //   max: 2021,
  //   step: 1,
  //   unit: "",
  //   image: "67"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti giorni durano i 74esimi Hunger Games (primo film)?",
  //   answer: 18,
  //   min: 2,
  //   max: 19,
  //   step: 1,
  //   unit: "",
  //   image: "68"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti anni ha Shawn Frost in 'Inazuma Eleven' (prima apparizione)?",
  //   answer: 13,
  //   min: 9,
  //   max: 19,
  //   step: 1,
  //   unit: "",
  //   image: "69"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanto pesa una Fiat Panda del '98",
  //   answer: 790,
  //   min: 300,
  //   max: 1800,
  //   step: 10,
  //   unit: "",
  //   image: "70"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti hanno ha Scorza, la tartaruga di 'Alla ricerca di Nemo'?",
  //   answer: 150,
  //   min: 10,
  //   max: 300,
  //   step: 10,
  //   unit: "",
  //   image: "71"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanto è lungo il giardino della Reggia di Caserta? (in metri)",
  //   answer: 3000,
  //   min: 1000,
  //   max: 10000,
  //   step: 500,
  //   unit: "",
  //   image: "72"
  // },
  // {
  //   questionType: 0,
  //   question: "Secondo l'Eneide, in quale anno risale l'inganno del cavallo di Troia? (a.C.)",
  //   answer: 1184,
  //   min: 200,
  //   max: 1200,
  //   step: 1,
  //   unit: "",
  //   image: "73"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti romanzi ha scritto Luigi Pirandello?",
  //   answer: 7,
  //   min: 3,
  //   max: 25,
  //   step: 1,
  //   unit: "",
  //   image: "74"
  // },
  // {
  //   questionType: 0,
  //   question: "Quando avvenne la 'Strage di Bologna'?",
  //   answer: 1980,
  //   min: 1950,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "75"
  // },
  // {
  //   questionType: 0,
  //   question: "Dei 1223 siti riconosciuti dall'UNESCO come patrimoni dell'umanità, quanti sono in Italia?",
  //   answer: 60,
  //   min: 53,
  //   max: 349,
  //   step: 1,
  //   unit: "",
  //   image: "76"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti km è lungo il fiume Po?",
  //   answer: 652,
  //   min: 333,
  //   max: 652,
  //   step: 1,
  //   unit: "",
  //   image: "77"
  // },
  // {
  //   questionType: 0,
  //   question: "Per quante migliaia di dollari è stata venduta 'The One Ring', la carta di Magic edizione unica e speciale rappresentante l'Anello di Sauron?",
  //   answer: 2000000,
  //   min: 10000,
  //   max: 2700000,
  //   step: 10000,
  //   unit: "",
  //   image: "78"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante canzoni ad oggi fanno parte del 'Billions Club' di Spotify?",
  //   answer: 708,
  //   min: 500,
  //   max: 1400,
  //   step: 1,
  //   unit: "",
  //   image: "79"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'è il costo medio al metro quadro di un immobile residenziale in Veneto (Luglio 2024)?",
  //   answer: 1971,
  //   min: 1000,
  //   max: 10000,
  //   step: 1,
  //   unit: "",
  //   image: "80"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti milioni ha speso il Real Madrid per l'acquisto di Kylian Mbappé dal PSG? (senza considerare lo stipendio)",
  //   answer: 0,
  //   min: 0,
  //   max: 300,
  //   step: 1,
  //   unit: "",
  //   image: "81"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti giocatori sono in campo per squadra nella pallamano",
  //   answer: 7,
  //   min: 4,
  //   max: 11,
  //   step: 1,
  //   unit: "",
  //   image: "82"
  // },
  // {
  //   questionType: 0,
  //   question: "Tirando un dado tre volte, con quale percentuale la somma dei tre numeri sarà minore o uguale a 5",
  //   answer: 5,
  //   min: 1,
  //   max: 100,
  //   step: 1,
  //   unit: "",
  //   image: "83"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti km è lungo il cammino di Santiago di Compostela?",
  //   answer: 760,
  //   min: 1,
  //   max: 800,
  //   step: 1,
  //   unit: "",
  //   image: "84"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante sono le vaccinazioni attualmente obbligatorie in Italia?",
  //   answer: 10,
  //   min: 3,
  //   max: 13,
  //   step: 1,
  //   unit: "",
  //   image: "85"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti milioni di copie ha venduto il gioco 'GTA V'?",
  //   answer: 200,
  //   min: 10,
  //   max: 250,
  //   step: 5,
  //   unit: "milioni",
  //   image: "86"
  // },
  // {
  //   questionType: 0,
  //   question: "Quandi mondi ci sono nel gioco 'Super Mario Bros'?",
  //   answer: 8,
  //   min: 3,
  //   max: 15,
  //   step: 1,
  //   unit: "",
  //   image: "87"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanto pesa in grammi il Nintendo DS",
  //   answer: 275,
  //   min: 100,
  //   max: 1000,
  //   step: 5,
  //   unit: "grammi",
  //   image: "88"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti anni ha Francesco Totti",
  //   answer: 47,
  //   min: 35,
  //   max: 60,
  //   step: 1,
  //   unit: "",
  //   image: "89"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante tipologie di pokemon esistono?",
  //   answer: 18,
  //   min: 8,
  //   max: 30,
  //   step: 1,
  //   unit: "",
  //   image: "90"
  // },

];

module.exports = questions;