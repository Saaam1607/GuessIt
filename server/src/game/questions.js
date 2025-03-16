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
    image: "1a",
    explanation: "Ecco la classifica:\n- iPhone 14: 3,9%\n- iPhone 14 Pro Max: 2,8%\n- iPhone 14 Pro: 2,4%\n- iPhone 13: 2,2%\n- iPhone 15 Pro Max: 1,7%\n- iPhone 15 Pro: 1,4%\n- iPhone 15: 1,4%\n- Samsung Galaxy A14 5G: 1,4%\n- Samsung Galaxy A04e: 1,3%\n- Samsung Galaxy A14 4G: 1,3%"
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
    image: "2a",
    explanation: "Il nome corretto è Nikola"
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
    image: "3a",
    explanation: "Il ragno dei Cunicoli, o ragno di Sidney, si trova in Australia ed è considerato uno dei più pericolosi al mondo e il più letale per gli esseri umani. Il suo livello di tossicità è letale anche per le persone adulte in buona salute.\n\nIl morso del ragno dei Cunicoli può portare al disorientamento, spasmi muscolari e all’edema cerebrale. Potrebbe causare la morte in un tempo compreso tra i 15 minuti ed i 3 giorni, a seconda dell’età e dallo stato fisico della vittima.\n\nEcco la classifica:\n1) Ragno dei Cunicoli\n2) Ragno delle Banane\n3) La Vedova Nera\n4) Ragno dal dorso rosso\n5) Ragno Eremita marrone"
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
    image: "4a",
    explanation: "Ecco la classifica (aggiornata al 2023):\n3) Wii Sports: 82 mln\n9) Super Mario Bros: 58 mln\n35) Pokémon Oro e Argento: 29 mln\n42) Call Of Duty: Black Ops: 26 mln"
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
    image: "5a",
    explanation: "Il gormita è 'Noctis, il Signore dei Cieli'.\nI restanti nomi sono tutti inventati!"
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
    image: "6a",
    explanation: "Milotic è un pokemon di tipo Acqua!"
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
    image: "7a",
    explanation: "La 'Pinza a Dente di Leone' è inventata.\nLa 'Pinza a Morsa' e la 'Pinza a Becco' invece sono altri attrezzi"
  },
  {
    questionType: 1,
    question: "Qual'è il Social Network con più utenti attivi?",
    answer: "Facebook",
    availableAnswers: [
      { answer: "YouTube"},
      { answer: "Facebook"},
      { answer: "Instagram"},
      { answer: "WhatsApp"},
    ],
    image: "8a",
    explanation: "Ecco la classifica aggiornata ad Aprile 2024:\n1) Facebook: 3,0 miliardi\n2) YouTube: 2,5 miliardi\n3) Instagram: 2,0 miliardi\n4) WhatsApp: 2,0 miliardi"
  },
  {
    questionType: 1,
    question: "Chi ha segnato più goal in carriera?",
    answer: "Cristiano Ronaldo",
    availableAnswers: [
      { answer: "Messi"},
      { answer: "Pelè"},
      { answer: "Ronaldo il Fenomeno"},
      { answer: "Cristiano Ronaldo"},
    ],
    image: "9a",
    explanation: "Ecco la classifica (aggiornata a Marzo 2025):\n1) Cristiano Ronaldo: 944 goal\n2) Messi: 879 goal\n4) Pelè: 757 goal\n4) Ronaldo il Fenomeno: 442 goal"
  },
  {
    questionType: 1,
    question: "Come si chiama la specie del polpo in figura?",
    answer: "Polpo Dumbo",
    availableAnswers: [
      { answer: "Polpo Elefantino"},
      { answer: "Polpo delle Corna"},
      { answer: "Polpo degli Anelli"},
      { answer: "Polpo Dumbo"},
    ],
    image: "10a",
    explanation: "Il polpo in figura è un Polpo Dumbo!\nSi tratta di un polpo dall'aspetto insolito, perché ha una forma appiattita e con tentacoli più corti. Presenta due protuberanze simili a orecchie poste sulla testa che ricordano le orecchie dell'omonimo personaggio della Disney. Vive negli abissi.\nIl polpo Elefantino e il Polpo delle Anelli sono altre razze mente il Polpo delle Corna è inventato"
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
    image: "11a",
    explanation: "'John Cleese' e 'Stephen Fry' sono altri attori mentre 'Arthur Bafflington' è inventato"
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
    image: "12a",
    explanation: "Fino al 2016, WhatsApp costava 0.89€ all'anno"
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
    image: "13a",
    explanation: "Ryan Tedder è il cantante dei One Republic"
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
    image: "14a",
    explanation: "Sammy Basso è stato affetto da Progeria. Le altre malattie sono però tutte esistenti"
  },
  {
    questionType: 1,
    question: "Qual'è la città in figura?",
    answer: "Siena",
    availableAnswers: [
      { answer: "Rovigo"},
      { answer: "Bologna"},
      { answer: "Siena"},
      { answer: "Arezzo"},
    ],
    image: "15a",
    explanation: "La foto è stata scatta in 'Piazza del Campo' a Siena"
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
    image: "17a",
    explanation: "Ecco la classifica:\n5) Palermo 1.268.000\n6) Brescia 1.262.000\n7) Verona 921.000\n8) Varese 890.000"
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
    image: "18a",
    explanation: "La manticora (letteralmente 'mangiatore di uomini') è una terribile creatura ibrida che si può trovare nella letteratura medievale e classica.\nDotata di corpo leonino e testa umana, la manticora è anche provvista di una coda di scorpione in grado di lanciare dardi velenosi"
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
    image: "19a",
    explanation: "Il risotto alla milanese è un primo piatto tipico della cucina lombarda, in particolare di quella milanese. La sua caratteristica principale è il colore giallo, dovuto allo zafferano, che conferisce al piatto un sapore particolare e unico"
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
    image: "20a",
    explanation: "Un ragionamento lapalissiano è un ragionamento particolarmente ovvio, banale, scontato, che non richiede particolare acume o intelligenza per essere compreso"
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
    image: "21a",
    explanation: "L'ornitorinco è un mammifero monotremato endemico dell'Australia e della Tasmania"
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
    image: "22a",
    explanation: "Il cane in figura è un Akita, una razza giapponese di cani da lavoro utilizzati sia per la guardia sia per la caccia"
  },
  {
    questionType: 1,
    question: "Chi ha dipinto il quadro in figura?",
    answer: "Bramante",
    availableAnswers: [
      { answer: "Modigliani"},
      { answer: "Caravaggio"},
      { answer: "Bramante"},
      { answer: "Botticelli"},
    ],
    image: "23a",
    explanation: "L'opera in figura è il 'Cristo alla colonna' di Bramante (1490 circa)"
  },
  // {
  //   questionType: 1,
  //   question: "Dove si trova questo castello?",
  //   answer: "Germania",
  //   availableAnswers: [
  //     { answer: "Germania"},
  //     { answer: "Austria"},
  //     { answer: "Svizzera"},
  //     { answer: "Francia"},
  //   ],
  //   image: "24a"
  // },
  // {
  //   questionType: 1,
  //   question: "In quale stato è stata scattata questa foto?",
  //   answer: "Buthan",
  //   availableAnswers: [
  //     { answer: "Vietnam"},
  //     { answer: "Tibet"},
  //     { answer: "India"},
  //     { answer: "Buthan"},
  //   ],
  //   image: "25a"
  // },
  // {
  //   questionType: 1,
  //   question: "In quale stato è stata scattata questa foto?",
  //   answer: "Tibet",
  //   availableAnswers: [
  //     { answer: "Vietnam"},
  //     { answer: "Tibet"},
  //     { answer: "India"},
  //     { answer: "Buthan"},
  //   ],
  //   image: "26a"
  // },
  // {
  //   questionType: 1,
  //   question: "In quale stato è situata la sede di Samsung?",
  //   answer: "Corea del Sud",
  //   availableAnswers: [
  //     { answer: "Vietnam"},
  //     { answer: "Cina"},
  //     { answer: "Corea del Sud"},
  //     { answer: "Singapore"},
  //   ],
  //   image: "28a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi animali ha il morso più potente?",
  //   answer: "Iena maculata",
  //   availableAnswers: [
  //     { answer: "Leone"},
  //     { answer: "Iena maculata"},
  //     { answer: "Tigre siberiana"},
  //     { answer: "Orso grizzly"},
  //   ],
  //   image: "29a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi animali è più veloce?",
  //   answer: "Gazzella di Grant",
  //   availableAnswers: [
  //     { answer: "Coyote"},
  //     { answer: "Struzzo"},
  //     { answer: "Gazzella di Grant"},
  //     { answer: "Zebra"},
  //   ],
  //   image: "30a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi videogiochi non ha vinto un GOTY?",
  //   answer: "Far Cry 4",
  //   availableAnswers: [
  //     { answer: "Far Cry 4"},
  //     { answer: "Overwatch"},
  //     { answer: "Elden Ring"},
  //     { answer: "Resident Evil 4"},
  //   ],
  //   image: "31a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale di questi non è un Horcrux di Voldemort?",
  //   answer: "Bacchetta di Narciso",
  //   availableAnswers: [
  //     { answer: "Mantello dell'Invisibilità"},
  //     { answer: "Pietra della Resurrezione"},
  //     { answer: "Diadema di Priscilla Corvonero"},
  //     { answer: "Bacchetta di Narciso"},
  //   ],
  //   image: "32a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quanti sono i film dell'Era Glaciale?",
  //   answer: "5",
  //   availableAnswers: [
  //     { answer: "3"},
  //     { answer: "4"},
  //     { answer: "5"},
  //     { answer: "6"},
  //   ],
  //   image: "33a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quante braccia ha un polpo?",
  //   answer: "8",
  //   availableAnswers: [
  //     { answer: "6"},
  //     { answer: "8"},
  //     { answer: "10"},
  //     { answer: "12"},
  //   ],
  //   image: "34a"
  // },
  // {
  //   questionType: 1,
  //   question: "Come si chiama questo personaggio dei Simpson?",
  //   answer: "Willie",
  //   availableAnswers: [
  //     { answer: "Willie"},
  //     { answer: "Bobbie"},
  //     { answer: "Freddy"},
  //     { answer: "Winchester"},
  //   ],
  //   image: "35a"
  // },
  // {
  //   questionType: 1,
  //   question: "'Chi ha farina non ha la ...?'",
  //   answer: "Sacca",
  //   availableAnswers: [
  //     { answer: "Moneta"},
  //     { answer: "Botte"},
  //     { answer: "Sacca"},
  //     { answer: "Moneta"},
  //   ],
  //   image: "36a"
  // },
  // {
  //   questionType: 1,
  //   question: "'È meglio un leone che mille ...?'",
  //   answer: "Mosche",
  //   availableAnswers: [
  //     { answer: "Serpenti"},
  //     { answer: "Formiche"},
  //     { answer: "Zebre"},
  //     { answer: "Mosche"},
  //   ],
  //   image: "37a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi è il dittatore in figura?",
  //   answer: "Saddam Hussein",
  //   availableAnswers: [
  //     { answer: "Bashar Al-Assad"},
  //     { answer: "Saddam Hussein"},
  //     { answer: "Hosni Mubarak"},
  //     { answer: "Idi Amin Dada"},
  //   ],
  //   image: "38a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è stata la serie più vista su Netflix nel 2019?",
  //   answer: "Stranger Things",
  //   availableAnswers: [
  //     { answer: "Stranger Things"},
  //     { answer: "The Witcher"},
  //     { answer: "La casa di carta"},
  //     { answer: "Peaky Blinders"},
  //   ],
  //   image: "39a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quando è iniziata la guerra tra Russia e Ucraina?",
  //   answer: "Febbraio 2024",
  //   availableAnswers: [
  //     { answer: "Novembre 2023"},
  //     { answer: "Dicembre 2023"},
  //     { answer: "Aprile 2024"},
  //     { answer: "Febbraio 2024"},
  //   ],
  //   image: "40a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi è questo noto personaggio della tv italiana?",
  //   answer: "Pippo Baudo",
  //   availableAnswers: [
  //     { answer: "Pippo Baudo"},
  //     { answer: "Giacomo Poretti"},
  //     { answer: "Massimo Boldi"},
  //     { answer: "Renato Pozzetto"},
  //   ],
  //   image: "41a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi è il regista in figura?",
  //   answer: "Chris Nolan",
  //   availableAnswers: [
  //     { answer: "Quentin Tarantino"},
  //     { answer: "Chris Nolan"},
  //     { answer: "James Cameron"},
  //     { answer: "Tim Burton"},
  //   ],
  //   image: "42a"
  // },
  // {
  //   questionType: 1,
  //   question: "Come si chiama il personaggio dal Signore degli Anelli in figura?",
  //   answer: "Saruman",
  //   availableAnswers: [
  //     { answer: "Sivilius"},
  //     { answer: "Thèodon"},
  //     { answer: "Ulug"},
  //     { answer: "Saruman"},
  //   ],
  //   image: "43a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi film è uscito per primo?",
  //   answer: "Blade Runner",
  //   availableAnswers: [
  //     { answer: "Seven"},
  //     { answer: "Blade Runner"},
  //     { answer: "Top Gun"},
  //     { answer: "E.T. l'extra-terrestre"},
  //   ],
  //   image: "44a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi elementi ha un peso atomico minore?",
  //   answer: "Boro",
  //   availableAnswers: [
  //     { answer: "Ossigeno"},
  //     { answer: "Carbonio"},
  //     { answer: "Neon"},
  //     { answer: "Boro"},
  //   ],
  //   image: "45a"
  // },
  // {
  //   questionType: 1,
  //   question: "Di che colore è l'Ossigeno liquido?",
  //   answer: "Celeste",
  //   availableAnswers: [
  //     { answer: "Celeste"},
  //     { answer: "Trasparente"},
  //     { answer: "Grigio"},
  //     { answer: "Bianco"},
  //   ],
  //   image: "46a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi animali NON ha il sangue blu?",
  //   answer: "Pesce Palla",
  //   availableAnswers: [
  //     { answer: "Calamaro"},
  //     { answer: "Limulo"},
  //     { answer: "Aragosta"},
  //     { answer: "Pesce Palla"},
  //   ],
  //   image: "47a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi animali non esiste?",
  //   answer: "Topo Formica",
  //   availableAnswers: [
  //     { answer: "Topo Formica"},
  //     { answer: "Anguilla pellicano"},
  //     { answer: "Falena barboncino"},
  //     { answer: "Cicala di mare"},
  //   ],
  //   image: "48a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi nomi è il più scelto dai genitori nel 2024?",
  //   answer: "Leonardo",
  //   availableAnswers: [
  //     { answer: "Matteo"},
  //     { answer: "Leonardo"},
  //     { answer: "Andrea"},
  //     { answer: "Francesco"},
  //   ],
  //   image: "49a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi nomi è il più scelto dai genitori nel 2024?",
  //   answer: "Sofia",
  //   availableAnswers: [
  //     { answer: "Sofia"},
  //     { answer: "Giulia"},
  //     { answer: "Giorgia"},
  //     { answer: "Vittoria"},
  //   ],
  //   image: "50a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è il significato originale del nome 'Luigi'?",
  //   answer: "Celebre combattente",
  //   availableAnswers: [
  //     { answer: "Protettore bianco"},
  //     { answer: "Benedetto da Dio"},
  //     { answer: "Salvatore felice"},
  //     { answer: "Celebre combattente"},
  //   ],
  //   image: "51a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è la causa di morte più diffusa in Italia (dati ISTAT 2017)?",
  //   answer: "Malattie del sistema circolatorio",
  //   availableAnswers: [
  //     { answer: "Tumore"},
  //     { answer: "Malattie infettiva"},
  //     { answer: "Malattia del sistema circolatorio"},
  //     { answer: "Malattia del sistema respiratorio"},
  //   ],
  //   image: "52a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi cascate non esistono?",
  //   answer: "Cascate Plateadas",
  //   availableAnswers: [
  //     { answer: "Cascate Plateadas"},
  //     { answer: "Cascate Skógafoss"},
  //     { answer: "Cascate Vittoria"},
  //     { answer: "Cascata Dettifoss"},
  //   ],
  //   image: "53a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra questi social è il più usato nel 2024?",
  //   answer: "Telegram",
  //   availableAnswers: [
  //     { answer: "Snapchat"},
  //     { answer: "X/Twitter"},
  //     { answer: "Douyin"},
  //     { answer: "Telegram"},
  //   ],
  //   image: "54a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale tra queste città si trova più a nord?",
  //   answer: "Zurigo",
  //   availableAnswers: [
  //     { answer: "Budapest"},
  //     { answer: "Innsbruck"},
  //     { answer: "Zurigo"},
  //     { answer: "Ginevra"},
  //   ],
  //   image: "55a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale nazione ha il maggior numero di vulcani attivi?",
  //   answer: "Indonesia",
  //   availableAnswers: [
  //     { answer: "Indonesia"},
  //     { answer: "Islanda"},
  //     { answer: "Giappone"},
  //     { answer: "Stati Uniti"},
  //   ],
  //   image: "56a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale nazione ha il maggior numero di isole?",
  //   answer: "Svezia",
  //   availableAnswers: [
  //     { answer: "Indonesia"},
  //     { answer: "Svezia"},
  //     { answer: "Norvegia"},
  //     { answer: "Canada"},
  //   ],
  //   image: "57a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi ha sviluppato la tavola periodica degli elementi?",
  //   answer: "Dmitrij Mendeleev",
  //   availableAnswers: [
  //     { answer: "Albert Einstein"},
  //     { answer: "Dmitrij Mendeleev"},
  //     { answer: "Marie Curie"},
  //     { answer: "Ernest Rutherford"},
  //   ],
  //   image: "58a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi è l'autore del celebre romanzo 'Moby Dick'?",
  //   answer: "Herman Melville",
  //   availableAnswers: [
  //     { answer: "Herman Melville"},
  //     { answer: "Mark Twain"},
  //     { answer: "Charles Dickens"},
  //     { answer: "Nathaniel Hawthorne"},
  //   ],
  //   image: "59a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale compositore è famoso per la sua 'Sinfonia n. 5'?",
  //   answer: "Ludwig van Beethoven",
  //   availableAnswers: [
  //     { answer: "Franz Schubert"},
  //     { answer: "Johann Sebastian Bach"},
  //     { answer: "Giuseppe Verdi"},
  //     { answer: "Ludwig van Beethoven"},
  //   ],
  //   image: "60a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi ha scritto 'Le Metamorfosi'?",
  //   answer: "Ovidio",
  //   availableAnswers: [
  //     { answer: "Ovidio"},
  //     { answer: "Seneca"},
  //     { answer: "Platone"},
  //     { answer: "Virgilio"},
  //   ],
  //   image: "61a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è la capitale del Canada?",
  //   answer: "Ottawa",
  //   availableAnswers: [
  //     { answer: "Montreal"},
  //     { answer: "Vancouver"},
  //     { answer: "Toronto"},
  //     { answer: "Ottawa"},
  //   ],
  //   image: "62a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è la capitale dell'India?",
  //   answer: "Nuova Delhi",
  //   availableAnswers: [
  //     { answer: "Mumbai"},
  //     { answer: "Nuova Delhi"},
  //     { answer: "Calcultta"},
  //     { answer: "Jaipur"},
  //   ],
  //   image: "63a"
  // },
  // {
  //   questionType: 1,
  //   question: "Che strumento suonava George Harrison?",
  //   answer: "Chitarra",
  //   availableAnswers: [
  //     { answer: "Basso"},
  //     { answer: "Batteria"},
  //     { answer: "Chitarra"},
  //     { answer: "Tastiera elettrica"},
  //   ],
  //   image: "64a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi ha vinto il campionato della MotoGP nel 2024?",
  //   answer: "Jorge Martín",
  //   availableAnswers: [
  //     { answer: "Jorge Martín"},
  //     { answer: "Francesco Bagnaia"},
  //     { answer: "Jack Miller"},
  //     { answer: "Marc Márquez"},
  //   ],
  //   image: "65a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quale di questi personaggi non partecipa alla prima rapina nella serie 'La Casa di Carta'?",
  //   answer: "Lisbona",
  //   availableAnswers: [
  //     { answer: "Berlino"},
  //     { answer: "Lisbona"},
  //     { answer: "Mosca"},
  //     { answer: "Helsinki"},
  //   ],
  //   image: "66a"
  // },
  // {
  //   questionType: 1,
  //   question: "Cosa studia un frenologo?",
  //   answer: "La conformazione del cranio",
  //   availableAnswers: [
  //     { answer: "I reni"},
  //     { answer: "Il comportamento degli animali"},
  //     { answer: "La conformazione del cranio"},
  //     { answer: "Le malformazioni delle dita"},
  //   ],
  //   image: "67a"
  // },
  // {
  //   questionType: 1,
  //   question: "Come si chiamano i maschi delle Api?",
  //   answer: "Fuchi",
  //   availableAnswers: [
  //     { answer: "Muchi"},
  //     { answer: "Fuchi"},
  //     { answer: "Tuchi"},
  //     { answer: "Ruchi"},
  //   ],
  //   image: "68a"
  // },
  // {
  //   questionType: 1,
  //   question: "Per quale occasione venne costruita la Torre Eiffel?",
  //   answer: "Esposizione Universale a Parigi",
  //   availableAnswers: [
  //     { answer: "Creazione del protettorato francese sul Marocco"},
  //     { answer: "Esposizione Universale a Parigi"},
  //     { answer: "Vittoria francese nella prima guerra mondiale"},
  //     { answer: "Salita al trono di Luigi Filippo"},
  //   ],
  //   image: "69a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi viene detto una 'mosca bianca'?",
  //   answer: "Persona non comune",
  //   availableAnswers: [
  //     { answer: "Persona che prende le difese di un'altra"},
  //     { answer: "Persona facilmente irritabile"},
  //     { answer: "Persona che si fa notare"},
  //     { answer: "Persona non comune"},
  //   ],
  //   image: "70a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi dei seguenti NON è stato pontefice?",
  //   answer: "Ferdinando II",
  //   availableAnswers: [
  //     { answer: "Pio X"},
  //     { answer: "Leone XIII"},
  //     { answer: "Beato Pio IX"},
  //     { answer: "Ferdinando II"},
  //   ],
  //   image: "71a"
  // },
  // {
  //   questionType: 1,
  //   question: "Di quale stato fu dittatore Francisco Franco?",
  //   answer: "Spagna",
  //   availableAnswers: [
  //     { answer: "Spagna"},
  //     { answer: "Portogallo"},
  //     { answer: "Messico"},
  //     { answer: "Argentina"},
  //   ],
  //   image: "72a"
  // },
  // {
  //   questionType: 1,
  //   question: "Dove morì Napoleone?",
  //   answer: "Nell'Isola d'Elba",
  //   availableAnswers: [
  //     { answer: "In Corsica"},
  //     { answer: "Nell'Isola di Sant'Elena"},
  //     { answer: "Nell'Isola d'Elba"},
  //     { answer: "In Francia"},
  //   ],
  //   image: "73a"
  // },
  // {
  //   questionType: 1,
  //   question: "Chi è stato l'ultimo italiano a vincere il premio Nobel per la letteratura?",
  //   answer: "Dario Fo",
  //   availableAnswers: [
  //     { answer: "Umberto Eco"},
  //     { answer: "Dario Fo"},
  //     { answer: "Gianrico Carofiglio"},
  //     { answer: "Alberto Moravia"},
  //   ],
  //   image: "74a"
  // },
  // {
  //   questionType: 1,
  //   question: "Qual'è il contrario di 'coercitivo'?",
  //   answer: "Libero",
  //   availableAnswers: [
  //     { answer: "Libero"},
  //     { answer: "Incoerente"},
  //     { answer: "Inutile"},
  //     { answer: "Semplice"},
  //   ],
  //   image: "75a"
  // },
  // {
  //   questionType: 1,
  //   question: "Che fig. retorica è 'Vito non è certo un genio'?",
  //   answer: "Litote",
  //   availableAnswers: [
  //     { answer: "Antitesi"},
  //     { answer: "Sineddoche"},
  //     { answer: "Litote"},
  //     { answer: "Sinestesia"},
  //   ],
  //   image: "76a"
  // },
  // {
  //   questionType: 1,
  //   question: "Per cosa sta la sigla RAM?",
  //   answer: "Memoria ad accesso casuale",
  //   availableAnswers: [
  //     { answer: "Memoria temporanea veloce"},
  //     { answer: "Memoria di controllo di operazioni su disco"},
  //     { answer: "Memoria che si può solo leggere"},
  //     { answer: "Memoria ad accesso casuale"},
  //   ],
  //   image: "77a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quali di questi piatti NON esiste?",
  //   answer: "Memoria ad accesso casuale",
  //   availableAnswers: [
  //     { answer: "Burrito suicida coreano"},
  //     { answer: "Baba Ganoush"},
  //     { answer: "Scorpioni fritti"},
  //     { answer: "Dende Muzi"},
  //   ],
  //   image: "78a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quali di queste NON fa parte delle isole Eolie?",
  //   answer: "Etna",
  //   availableAnswers: [
  //     { answer: "Etna"},
  //     { answer: "Stromboli"},
  //     { answer: "Vulcano"},
  //     { answer: "Lipari"},
  //   ],
  //   image: "79a"
  // },
  // {
  //   questionType: 1,
  //   question: "Quali di queste NON è una delle Forza di Porter?",
  //   answer: "Capitale investito",
  //   availableAnswers: [
  //     { answer: "Capitale investito"},
  //     { answer: "Prodotti sostitutivi"},
  //     { answer: "Potere contrattuale dei fornitori"},
  //     { answer: "Concorrenti di settore"},
  //   ],
  //   image: "79a"
  // },
  // {
  //   questionType: 1,
  //   question: "La calanca è ...?",
  //   answer: "Un'insenatura marina",
  //   availableAnswers: [
  //     { answer: "Un utensile da cucina"},
  //     { answer: "Un'insenatura marina"},
  //     { answer: "Un attrezzo agricolo"},
  //     { answer: "Un formaggio sardo"},
  //   ],
  //   image: "80a"
  // },
  // // ------------------------------------------------------------------------------------------
  // {
  //   questionType: 0,
  //   question: "In quale anno é stata inventata la bicicletta?",
  //   answer: 1817,
  //   min: 1500,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "1"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti pianeti ha il nostro sistema solare?",
  //   answer: 8,
  //   min: 5,
  //   max: 10,
  //   step: 1,
  //   unit: "",
  //   image: "2"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante nazioni ci sono in tutto il mondo? (solo stati sovrani)",
  //   answer: 195,
  //   min: 100,
  //   max: 200,
  //   step: 1,
  //   unit: "",
  //   image: "3"
  // },
  // {
  //   questionType: 0,
  //   question: "A quale velocitá (in km/h) é necessario vaggiare per percorrere 287 km in 2 ore e 56 minuti?",
  //   answer: 98,
  //   min: 50,
  //   max: 200,
  //   step: 1,
  //   unit: "km/h",
  //   image: "4"
  // },
  // {
  //   questionType: 0,
  //   question: "In che anno é nato Benito Mussolini (a.k.a. il puzzone)?",
  //   answer: 1883,
  //   min: 1800,
  //   max: 1900,
  //   step: 1,
  //   unit: "km/h",
  //   image: "5"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante banane sono necessarie per apportare il giusto quantitativo di calore per camminare 10 km considerando un uomo di peso 70 kg?",
  //   answer: 5,
  //   min: 1,
  //   max: 100,
  //   step: 1,
  //   unit: "banane",
  //   image: "6"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti abitanti ha la Thailandia in milioni (anno 2023/2024)?",
  //   answer: 70,
  //   min: 1,
  //   max: 100,
  //   step: 1,
  //   unit: "milioni",
  //   image: "7"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti anni ha la statua della libertá (considerando come anno di nascita l'anno di fine costruzione e 2024 come ultimo anno?",
  //   answer: 140,
  //   min: 100,
  //   max: 200,
  //   step: 1,
  //   unit: "anni",
  //   image: "8"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti ponti ha Venezia?",
  //   answer: 435,
  //   min: 100,
  //   max: 500,
  //   step: 1,
  //   unit: "ponti",
  //   image: "9"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'é la temperatura piú alta mai registrata (in °C)?",
  //   answer: 57,
  //   min: 50,
  //   max: 100,
  //   step: 1,
  //   unit: "°C",
  //   image: "10"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti anni aveva Michael Jackson quando é morto?",
  //   answer: 50,
  //   min: 30,
  //   max: 70,
  //   step: 1,
  //   unit: "anni",
  //   image: "11"
  // },
  // {
  //   questionType: 0,
  //   question: "Quante ossa ci sono nel corpo umano?",
  //   answer: 206,
  //   min: 50,
  //   max: 500,
  //   step: 1,
  //   unit: "ossa",
  //   image: "12"
  // },
  // {
  //   questionType: 0,
  //   question: "Con quanti stati confina l'Italia?",
  //   answer: 6,
  //   min: 2,
  //   max: 10,
  //   step: 1,
  //   unit: "stati",
  //   image: "13"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanto é alto il monte K2 in metri?",
  //   answer: 8611,
  //   min: 0,
  //   max: 20000,
  //   step: 1,
  //   unit: "metri",
  //   image: "14"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'é l'etá piú alta mai raggiunta da un uomo (maschio)?",
  //   answer: 116,
  //   min: 90,
  //   max: 150,
  //   step: 1,
  //   unit: "anni",
  //   image: "15"
  // },
  // {
  //   questionType: 0,
  //   question: "Qual'é l'etá piú alta mai raggiunta da una donna?",
  //   answer: 122,
  //   min: 90,
  //   max: 150,
  //   step: 1,
  //   unit: "anni",
  //   image: "16"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti sono gli stati che compongono gli Stati Uniti d'America?",
  //   answer: 50,
  //   min: 1,
  //   max: 100,
  //   step: 1,
  //   unit: "stati",
  //   image: "17"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti chilometri distanziano Spagna e Marocco nello stretto di Gibilterra?",
  //   answer: 58,
  //   min: 1,
  //   max: 200,
  //   step: 1,
  //   unit: "km",
  //   image: "18"
  // },
  // {
  //   questionType: 0,
  //   question: "Quando é uscito il primo film Disney (Biancaneve)?",
  //   answer: 1937,
  //   min: 1800,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "19"
  // },
  // {
  //   questionType: 0,
  //   question: "In quale anno si é tenuto il primo Giro d'Italia?",
  //   answer: 1909,
  //   min: 1800,
  //   max: 2000,
  //   step: 1,
  //   unit: "",
  //   image: "20"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti milioni di anni fa si sono estinti i dinosauri?",
  //   answer: 65,
  //   min: 1,
  //   max: 100,
  //   step: 1,
  //   unit: "milioni di anni fa",
  //   image: "21"
  // },
  // {
  //   questionType: 0,
  //   question: "Quanti milioni di km dista la Terra dal Sole? (afelio)",
  //   answer: 152,
  //   min: 1,
  //   max: 500,
  //   step: 1,
  //   unit: "milioni di km",
  //   image: "22"
  // },
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