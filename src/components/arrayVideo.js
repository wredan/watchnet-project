const cardArray = [
    {
        type: "Film",
        image: './assets/avengers.jpg',
        imageL: './assets/locandinaAVG.jpg',
        title: 'Avengers: Endgame',
        description: 'Avengers: Endgame è un film del 2019 diretto da Anthony e Joe Russo. Basato sul gruppo di supereroi dei Vendicatori di Marvel Comics, il film è il seguito di Avengers: Infinity War (2018) e costituisce il ventiduesimo film del Marvel Cinematic Universe. È prodotto dai Marvel Studios ed è distribuito da Walt Disney Studios Motion Pictures. La sceneggiatura del film è stata scritta da Christopher Markus e Stephen McFeely, e la pellicola comprende un cast corale che include molti degli attori comparsi nei precedenti film del MCU.',
        nVisual: 2000,
        genere: 'Azione',
        valMedia: 4.3,
        url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c'
    },
    {
        type: "Film",
        image: './assets/avatar.jpeg',
        title: 'Avatar',
        imageL: './assets/avatarL.jpg',
        description: 'È un film di fantascienza interpretato da Sam Worthington, Stephen Lang, Zoe Saldana, Sigourney Weaver, Giovanni Ribisi e Michelle Rodriguez. Con un budget di produzione di circa 237 milioni di dollari,[2] Avatar ha incassato quasi 2,8 miliardi di dollari in tutto il mondo.',
        nVisual: 3000,
        genere: 'Azione',
        valMedia: 4.7,
        url: 'https://youtu.be/5PSNL1qE6VY?t=6'
    },
    {
        type: "Film",
        image: './assets/titanic.jpg',
        title: 'Titanic',
        imageL: './assets/titanicL.jpg',
        description: 'Titanic è un film del 1997 co-montato, co-prodotto, scritto e diretto da James Cameron. La pellicola è un colossal storico e drammatico interpretato da Leonardo DiCaprio e Kate Winslet nei ruoli di Jack e Rose, due membri di differenti classi sociali che si innamorano durante il tragico viaggio inaugurale del RMS Titanic. ',
        nVisual: 10000,
        genere: 'Drammatico',
        valMedia: 3.2,
        url: 'https://www.youtube.com/watch?v=jUm88F3MEbQ'
    },
    {
        type: "Film",
        image: './assets/iltraditore.jpg',
        title: 'Il Traditore',
        imageL: './assets/iltraditoreL.jpg',
        description: 'Il traditore è un film del 2019 diretto da Marco Bellocchio. La pellicola narra le vicende di Tommaso Buscetta, mafioso e successivamente collaboratore di giustizia, membro di Cosa nostra.[1]',
        nVisual: 1850,
        genere: 'Drammatico',
        valMedia: 4.3,
        url: 'https://www.youtube.com/watch?v=7nvYMRpKzak'
    },
    {
        type: "Film",
        image: './assets/badboys.jpg',
        title: 'Bad Boys',
        imageL: './assets/badboysL.jpg',
        description: 'Bad Boys è un film commedia-azione americano del 1995 diretto da Michael Bay, prodotto da Don Simpson e Jerry Bruckheimer e interpretato da Martin Lawrence e Will Smith e da due detective della narcotici di Miami, Marcus Burnett e Mike Lowrey. Ha dato vita al franchise di Bad Boys , che include un sequel, Bad Boys II (2003), e un film in uscita Bad Boys for Life (2020).',
        nVisual: 2000,
        genere: 'Azione',
        valMedia: 4.5,
        url: 'https://www.youtube.com/watch?v=Xm12NSa8jsM'
    },
    {
        type: "Film",
        image: './assets/up.jpg',
        title: 'UP',
        imageL: './assets/upL.jpg',
        description: 'Up è un film d\'animazione del 2009 scritto e diretto da Pete Docter e Bob Peterson. È il decimo lungometraggio realizzato dai Pixar Animation Studios in co-produzione con la Walt Disney Pictures[2], ed ha aperto il 62º Festival di Cannes il 13 maggio 2009.[3] È stato il secondo film di animazione della storia ad essere stato candidato agli Oscar come miglior film dopo La bella e la bestia nel 1991, ottenendo 5 candidature in totale, e vincendo due Premi Oscar, ossia miglior film d\'animazione e migliore colonna sonora',
        nVisual: 5000,
        genere: 'Animazione',
        valMedia: 3.5,
        url: 'https://www.youtube.com/watch?v=ORFWdXl_zJ4'
    },
    {
        type: "Film",
        image: './assets/tarzan.jpg',
        title: 'Tarzan',
        imageL: './assets/tarzanL.jpg',
        description: 'Tarzan è un film di animazione del 1999 per la regia di Chris Buck e Kevin Lima. È il 37º classico Disney animato secondo il canone ufficiale. La storia è tratta dal romanzo Tarzan delle Scimmie di Edgar Rice Burroughs; è il primo film d\'animazione su Tarzan che sia mai stato realizzato ed è considerato dalla critica tra i più riusciti prodotti dell\'azienda Disney nel suo cosiddetto Rinascimento Disney (1989-1999).',
        nVisual: 4500,
        genere: 'Animazione',
        valMedia: 4.5,
        url: 'https://youtu.be/cB3NW3O_OfE?t=6'
    },
    {
        type: "Film",
        image: './assets/lalaland.jpeg',
        title: 'La La Land',
        imageL: './assets/lalalandL.jpg',
        description: 'La La Land è un film del 2016 scritto e diretto da Damien Chazelle. Il film racconta la storia d\'amore tra un musicista jazz e un\'aspirante attrice, interpretati da Ryan Gosling ed Emma Stone, realizzato come un musical contemporaneo che omaggia i classici film musicali prodotti tra gli anni cinquanta e sessanta. Il titolo del film è sia un riferimento alla città di Los Angeles sia al significato di essere nel "mondo dei sogni" o "fuori dalla realtà". ',
        nVisual: 6300,
        genere: 'Commedia',
        valMedia: 4.6,
        url: 'https://www.youtube.com/watch?v=0pdqf4P9MB8'
    },
    {
        type: "Film",
        image: './assets/lafuitinasbagliata.jpg',
        title: 'La Fuitina Sbagliata',
        imageL: './assets/lafuitinasbagliataL.jpg',
        description: 'Claudio e Anna si lasciano dopo essere stati insieme per molti anni. Non hanno però il coraggio di confessarlo ai rispettivi genitori e questo porterà ad una serie di bugie e di situazioni divertenti.',
        nVisual: 3200,
        genere: 'Commedia',
        valMedia: 3.5,
        url: 'https://www.youtube.com/watch?v=-yF9bAZIvyo'
    },
    {
        type: "Film",
        image: './assets/airbud.jpg',
        title: 'Air Bud',
        imageL: './assets/airbudL.jpg',
        description: 'La vita di un ragazzino solitario è trasformata quando fa amicizia con un cane "meraviglia" che gli insegna a giocare a basket.',
        nVisual: 3200,
        genere: 'Famiglia',
        valMedia: 3.0,
        url: 'https://www.youtube.com/watch?v=0cOrwS3Xihw'
    },
    {
        type: "Serie TV",
        image: './assets/smallville.jpg',
        imageL: './assets/smallvilleL.jpg',
        title: 'Smallville',
        description: 'Smallville è una serie televisiva statunitense prodotta dal 2001 al 2011, per un totale di 217 episodi in 10 stagioni.[1] Fa parte dell\'universo multimediale legato alle avventure di Superman, benché si distacchi dalle avventure del supereroe principalmente per il fatto che è ambientato ai giorni nostri e non rispetta quindi la cronologia classica legata al protagonista. ',
        nVisual: 8050,
        genere: 'Azione',
        valMedia: 4.0,
        url: 'https://www.youtube.com/watch?v=Iuqtz_9JMfc'
    },
    {
        type: "Serie TV",
        image: './assets/igriffin.jpeg',
        title: 'I Griffin',
        imageL: './assets/igriffinL.jpeg',
        description: 'Una sitcom animata sulle vicende del clan Griffin, costituito da mamma, papà, tre figli e un cane parlante.',
        nVisual: 5280,
        genere: 'Animazione',
        valMedia: 3.7,       
        url: 'https://www.youtube.com/watch?v=mwJXOTwJHT0' 
    },
    {
        type: "Serie TV",
        image: './assets/himym.jpg',
        title: 'How I met your mother',
        imageL: './assets/himymL.png',
        description: 'Ted Mosby racconta ai figli adolescenti gli eventi che venticinque anni prima lo hanno portato a conoscere quella che sarebbe diventata la sua futura moglie e loro madre. Ted era un giovane ragazzo ossessionato dal matrimonio. Conosce una giovane ragazza canadese con la quale instaura un complicato rapporto di amicizia/amore. La sua storia è un pretesto per spiegare le difficoltà sentimentali.',
        nVisual: 13000,
        genere: 'Commedia',
        valMedia: 4.8,
        url: 'https://www.youtube.com/watch?v=8lguc5Ota4U' 
    },
    {
        type: "Serie TV",
        image: './assets/thegooddoctor.png',
        title: 'The Good Doctor',
        imageL: './assets/thegooddoctorL.jpg',
        description: 'La serie narra di un giovane chirurgo affetto dalla sindrome del Savant che viene assunto nel reparto di chirurgia pediatrica di un prestigioso ospedale. Sorgerà la domanda: una persona che non ha l\'abilità di relazionarsi con la gente può riuscire a salvargli la vita?',
        nVisual: 2345,
        genere: 'Drammatico',
        valMedia: 4.0,
        url: 'https://www.youtube.com/watch?v=fYlZDTru55g'
    },
    {
        type: "Serie TV",
        image: './assets/victorious.jpg',
        title: 'Victorious',
        imageL: './assets/victoriousL.jpg',
        description: 'Victorious (reso graficamente come VICTORiOUS) è una sitcom statunitense per ragazzi, creata da Dan Schneider per Nickelodeon. La serie è incentrata sull\'aspirante cantante Tori Vega, interpretata da Victoria Justice, che frequenta una scuola di arti dello spettacolo chiamata Hollywood Arts. ',
        nVisual: 4789,
        genere: 'Famiglia',
        valMedia: 3.3,
        url: 'https://www.youtube.com/watch?v=FpLBDJw8iJI'
    },   
];

export default cardArray;