const questions = [
  {
    question: "In quale anno é stata inventata la bicicletta?",
    answer: 1817,
    min: 1500,
    max: 2000,
    step: 1,
    unit: "",
    image: "1"
  },
  {
    question: "Quanti pianeti ha il nostro sistema solare?",
    answer: 8,
    min: 5,
    max: 10,
    step: 1,
    unit: "",
    image: "2"
  },
  {
    question: "Quante nazioni ci sono in tutto il mondo? (solo stati sovrani)",
    answer: 195,
    min: 100,
    max: 200,
    step: 1,
    unit: "",
    image: "3"
  },
  {
    question: "A quale velocitá (in km/h) é necessario vaggiare per percorrere 287 km in 2 ore e 56 minuti?",
    answer: 98,
    min: 50,
    max: 200,
    step: 1,
    unit: "km/h",
    image: "4"
  },
  {
    question: "In che anno é nato Benito Mussolini (a.k.a. il puzzone)?",
    answer: 1883,
    min: 1800,
    max: 1900,
    step: 1,
    unit: "km/h",
    image: "5"
  },
  {
    question: "Quante banane sono necessarie per apportare il giusto quantitativo di calore per camminare 10 km considerando un uomo di peso 70 kg?",
    answer: 5,
    min: 1,
    max: 100,
    step: 1,
    unit: "banane",
    image: "6"
  },
  {
    question: "Quanti abitanti ha la Thailandia in milioni (anno 2023/2024)?",
    answer: 70,
    min: 1,
    max: 100,
    step: 1,
    unit: "milioni",
    image: "7"
  },
  {
    question: "Quanti anni ha la statua della libertá (considerando come anno di nascita l'anno di fine costruzione e 2024 come ultimo anno?",
    answer: 140,
    min: 100,
    max: 200,
    step: 1,
    unit: "anni",
    image: "8"
  },
  {
    question: "Quanti ponti ha Venezia?",
    answer: 435,
    min: 100,
    max: 500,
    step: 1,
    unit: "ponti",
    image: "9"
  },
  {
    question: "Qual'é la temperatura piú alta mai registrata (in °C)?",
    answer: 57,
    min: 50,
    max: 100,
    step: 1,
    unit: "°C",
    image: "10"
  },
  {
    question: "Quanti anni aveva Michael Jackson quando é morto?",
    answer: 50,
    min: 30,
    max: 70,
    step: 1,
    unit: "anni",
    image: "11"
  },
  {
    question: "Quante ossa ci sono nel corpo umano?",
    answer: 206,
    min: 50,
    max: 500,
    step: 1,
    unit: "ossa",
    image: "12"
  },
  {
    question: "Con quanti stati confina l'Italia?",
    answer: 6,
    min: 2,
    max: 10,
    step: 1,
    unit: "stati",
    image: "13"
  },
  {
    question: "Quanto é alto il monte K2 in metri?",
    answer: 8611,
    min: 0,
    max: 20000,
    step: 1,
    unit: "metri",
    image: "14"
  },
  {
    question: "Qual'é l'etá piú alta mai raggiunta da un uomo (maschio)?",
    answer: 116,
    min: 90,
    max: 150,
    step: 1,
    unit: "anni",
    image: "15"
  },
  {
    question: "Qual'é l'etá piú alta mai raggiunta da una donna?",
    answer: 122,
    min: 90,
    max: 150,
    step: 1,
    unit: "anni",
    image: "16"
  },
  {
    question: "Quanti sono gli stati che compongono gli Stati Uniti d'America?",
    answer: 50,
    min: 1,
    max: 100,
    step: 1,
    unit: "stati",
    image: "17"
  },
  {
    question: "Quanti chilometri distanziano Spagna e Marocco nello stretto di Gibilterra?",
    answer: 58,
    min: 1,
    max: 200,
    step: 1,
    unit: "km",
    image: "18"
  },
  {
    question: "Quando é uscito il primo film Disney (Biancaneve)?",
    answer: 1937,
    min: 1800,
    max: 2000,
    step: 1,
    unit: "",
    image: "19"
  },
  {
    question: "In quale anno si é tenuto il primo Giro d'Italia?",
    answer: 1909,
    min: 1800,
    max: 2000,
    step: 1,
    unit: "",
    image: "20"
  },
  {
    question: "Quanti milioni di anni fa si sono estinti i dinosauri?",
    answer: 65,
    min: 1,
    max: 100,
    step: 1,
    unit: "milioni di anni fa",
    image: "21"
  },
  {
    question: "Quanti milioni di km dista la Terra dal Sole? (afelio)",
    answer: 152,
    min: 1,
    max: 500,
    step: 1,
    unit: "milioni di km",
    image: "22"
  },
  {
    question: "Quanti fusi orari ci sono in Russia?",
    answer: 11,
    min: 1,
    max: 20,
    step: 1,
    unit: "",
    image: "23"
  },
  {
    question: "Qual'é l'etá media in Italia?",
    answer: 48,
    min: 10,
    max: 80,
    step: 1,
    unit: "anni",
    image: "24"
  },
  {
    question: "Quando si é tenuto il primo mondiale di calcio?",
    answer: 1930,
    min: 1800,
    max: 2000,
    step: 1,
    unit: "",
    image: "25"
  },
  {
    question: "Quanti pedoni ci sono in una scacchiera? (considerando bianchi e neri)",
    answer: 16,
    min: 1,
    max: 30,
    step: 1,
    unit: "",
    image: "26"
  },
  {
    question: "Quanti episodi ha la nota serie 'Il Segreto'?",
    answer: 2324,
    min: 1,
    max: 5000,
    step: 1,
    unit: "",
    image: "27"
  },
  {
    question: "Quanti milioni di visualizzazioni ha il videoclip della nota canzone 'Gangnam Style' di PSY?",
    answer: 132,
    min: 1,
    max: 300,
    step: 1,
    unit: "milioni",
    image: "28"
  },
  {
    question: "Quanti album hanno pubblicato i Pink Floyd?",
    answer: 15,
    min: 1,
    max: 30,
    step: 1,
    unit: "album",
    image: "29"
  },
  {
    question: "In che anno è uscita il brano 'Never Gonna Give You Up' di Rick Astley?",
    answer: 1987,
    min: 1950,
    max: 2000,
    step: 1,
    unit: "",
    image: "30"
  },
  {
    question: "Quanti km devono essere percorsi in macchina per arrivare a Belluno partendo da Treviso? (prendendo la A27)",
    answer: 77,
    min: 20,
    max: 200,
    step: 1,
    unit: "km",
    image: "31"
  },
  {
    question: "Quante province ci sono in Italia?",
    answer: 110,
    min: 20,
    max: 150,
    step: 1,
    unit: "",
    image: "32"
  },
  {
    question: "In quale hanno è nato Albrecht Dürer (pittore e incisore tedesco)?",
    answer: 1471,
    min: 1200,
    max: 2000,
    step: 1,
    unit: "",
    image: "33"
  },
  {
    question: "In quale anno è stata lanciato Instagram?",
    answer: 2010,
    min: 2000,
    max: 2015,
    step: 1,
    unit: "",
    image: "34"
  },
  {
    question: "Qual'era il prezzo di lancio dell'iPhone 15 in Italia?",
    answer: 979,
    min: 500,
    max: 1500,
    step: 1,
    unit: "euro",
    image: "35"
  },
  {
    question: "Il record di salto in alto di Gianmarco Tamberi è di 2 metri e...?",
    answer: 39,
    min: 0,
    max: 99,
    step: 1,
    unit: "cm",
    image: "36"
  },
  {
    question: "Quanti anni ha il presidende Mattarella?",
    answer: 83,
    min: 50,
    max: 90,
    step: 1,
    unit: "anni",
    image: "37"
  },
  {
    question: "In quale anno venne concesso il diritto di voto alle donne in Italia?",
    answer: 1946,
    min: 1850,
    max: 1980,
    step: 1,
    unit: "",
    image: "38"
  },
  {
    question: "In quale episodio di DragonBall venne sconfitto Majin Bu (291 episodi totali)?",
    answer: 286,
    min: 200,
    max: 291,
    step: 1,
    unit: "",
    image: "39"
  },
  {
    question: "Quante stagioni ha la serie 'Breaking Bad'?",
    answer: 5,
    min: 1,
    max: 10,
    step: 1,
    unit: "",
    image: "40"
  },
  {
    question: "Quanti capitoli ha il manga di 'Death Note'?",
    answer: 108,
    min: 30,
    max: 150,
    step: 1,
    unit: "",
    image: "41"
  },
  {
    question: "Quanti ristoranti stellati Michelin ci sono in Italia?",
    answer: 392,
    min: 10,
    max: 400,
    step: 1,
    unit: "",
    image: "42"
  },
  {
    question: "Qual'è la velocità massima (in km/h) raggiunta in una schiacciata di pallavolo (maschile)?",
    answer: 138,
    min: 50,
    max: 150,
    step: 1,
    unit: "km/h",
    image: "43"
  },
  {
    question: "Quanti lati ha un endeicosagono",
    answer: 21,
    min: 11,
    max: 111,
    step: 1,
    unit: "",
    image: "44"
  },
  {
    question: "In che anno è uscita la Playstation 2?",
    answer: 2000,
    min: 2000,
    max: 2015,
    step: 1,
    unit: "",
    image: "45"
  },
  {
    question: "Sommando i colori primari e secondari, quanti colori si ottengono?",
    answer: 6,
    min: 3,
    max: 24,
    step: 1,
    unit: "",
    image: "46"
  },
  {
    question: "Quanti comuni ci sono in provincia di Treviso?",
    answer: 94,
    min: 30,
    max: 100,
    step: 1,
    unit: "",
    image: "47"
  },
  {
    question: "Qual'è l'altezza del Burj Khalifa (in metri)?",
    answer: 828,
    min: 100,
    max: 1200,
    step: 1,
    unit: "metri",
    image: "48"
  },
  {
    question: "Qual'è l'altezza media di un adulto in Italia (in cm)?",
    answer: 175,
    min: 160,
    max: 190,
    step: 1,
    unit: "",
    image: "49"
  },
  {
    question: "In quale anno nacque il canale Youtube di Favij?",
    answer: 2012,
    min: 2007,
    max: 2017,
    step: 1,
    unit: "",
    image: "50"
  },
  // {
  //   question: "",
  //   answer:,
  //   min: ,
  //   max: ,
  //   step: ,
  //   unit: "",
  //   image: ""
  // },
  // {
  //   question: "",
  //   answer:,
  //   min: ,
  //   max: ,
  //   step: ,
  //   unit: "",
  //   image: ""
  // },
  // {
  //   question: "",
  //   answer:,
  //   min: ,
  //   max: ,
  //   step: ,
  //   unit: "",
  //   image: ""
  // },
];

module.exports = questions;