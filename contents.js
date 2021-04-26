const products = {
    'margherita':{
        titolo: 'Margherita',
        immagine: 'foto_progetto/pizze/margherita.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Mozzarella.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'diavola':{
        titolo: 'Diavola',
        immagine: 'foto_progetto/pizze/diavola.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Mozzarella, Salame Piccante.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'capricciosa':{
        titolo: 'Capricciosa',
        immagine: 'foto_progetto/pizze/capricciosa.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Mozzarella, Carciofi, Funghi freschi, Capperi, Olive.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'marinara':{
        titolo: 'Marinara',
        immagine: 'foto_progetto/pizze/marinara.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Aglio, Olio d\'oliva, Origano.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    '4formaggi':{
        titolo: 'Quattro Formaggi',
        immagine: 'foto_progetto/pizze/4formaggi.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Fiordilatte, Pecorino, Dolce verde, Emmental.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'tonno':{
        titolo: 'Tonno e Cipolla',
        immagine: 'foto_progetto/pizze/cipolla.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pomodoro, Mozzarella, Tonno, Cipolla.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'amatriciana':{
        titolo: 'Amatriciana',
        immagine: 'foto_progetto/primi/amatriciana.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Spaghetti, Pomodori pelati, Guanciale, Pecorino romano,Olio d\'oliva, Peperoncino, Vino bianco.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'norma':{
        titolo: 'Pasta alla norma',
        immagine: 'foto_progetto/primi/pasta-alla-norma.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Spaghetti, Ricotta salata, Melenzane, Olio d\'oliva, Aglio, Pomodori ramati, Basilico.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'lasagne':{
        titolo: 'Lasagne',
        immagine: 'foto_progetto/primi/lasagne.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pasta sfoglia all\'uovo, Ragu\', Besciamella, Parmigiano, Prosciutto Cotto.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'carbonara':{
        titolo: 'Carbonara',
        immagine: 'foto_progetto/primi/spaghetti-alla-carbonara.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Spaghetti, Guanciale, Tuorli, Pecorino romano, Pepe Nero.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'pescatora':{
        titolo: 'Linguine allo scoglio',
        immagine: 'foto_progetto/primi/linguine-pescatora.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Linguine, Code di gambero, Cozze, Vongole, Calamari, Passata di pomodoro, Aglio.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'riso':{
        titolo: 'Risotto ai funghi',
        immagine: 'foto_progetto/primi/risotto-funghi-porcini.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Riso, Funghi porcini, Olio d\'oliva, Brodo Vegetale, Cipolle dorate, Aglio, Burro, Pepe Nero, Parmigiano, Prezzemolo.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'pollo':{
        titolo: 'Pollo al forno',
        immagine: 'foto_progetto/secondi/cosce-di-pollo-al-forno.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Cosce di pollo, Patate, Pepe nero, Olio d\'oliva, Rosmarino.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'pesce':{
        titolo: 'Pesce gratinato',
        immagine: 'foto_progetto/secondi/pesce_spada_gratinato.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Pesce spada, Olio d\'oliva, Succo di limone, Aglio, Prezzemolo, Pangrattato.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'scaloppine':{
        titolo: 'Scaloppine ai funghi',
        immagine: 'foto_progetto/secondi/scaloppine.png',
        show_more: 'Dettagli',
        ingredienti: 'Vitello, Burro, Farina 00, Olio d\'oliva, Timo, Funghi champignon, Pepe nero, Aglio, Rosmarino.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'Bistecca':{
        titolo: 'Fiorentina',
        immagine: 'foto_progetto/secondi/bistecca-alla-fiorentina.png',
        show_more: 'Dettagli',
        ingredienti: 'Bistecca alla fiorentina, Olio d\'oliva, Pepe.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'cotoletta':{
        titolo: 'Cotoletta',
        immagine: 'foto_progetto/secondi/cotoletta-alla-milanese.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Carne di vitello, Uova, Pangrattato, Burro.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'fritto':{
        titolo: 'Fritto misto',
        immagine: 'foto_progetto/secondi/Fritto-misto-di-pesce.png',
        show_more: 'Dettagli',
        ingredienti: 'Gamberetti, Acciughe, Triglie, Merluzzetti, Cepole, Calamari, Semola.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'bianco':{
        titolo: 'Vino Bianco',
        immagine: 'foto_progetto/bevande/bianco.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Da abbinare preferibilmente con piatti a base di pesce.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'rosso':{
        titolo: 'Vino Rosso',
        immagine: 'foto_progetto/bevande/rosso.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Da abbinare con secondi di carne.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    
    'birra':{
        titolo: 'Birra',
        immagine: 'foto_progetto/bevande/birra.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Disponibile bionda, mora, rossa, in bottiglia o lattina.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'caffè':{
        titolo: 'Caffe\'',
        immagine: 'foto_progetto/bevande/caffe.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Disponibili Espresso, Decaffeinato, Cappuccino, Macchiato, Americano.',
        carrello: 'foto_progetto/add-to-cart.png'
    }, 

    'amaro':{
        titolo: 'Distillati e liquori',
        immagine: 'foto_progetto/bevande/liquori.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Liquori da bere dopo il caffè. I digestivi sono indicati dopo un pranzo, i liquori dolci e superalcolici dopo una cena.',
        carrello: 'foto_progetto/add-to-cart.png'
    },

    'varie':{
        titolo: 'Bibite gassate',
        immagine: 'foto_progetto/bevande/bibite_gas.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Disponibili Coca-cola, Fanta, Sprite, in lattina o bottiglia.',
        carrello: 'foto_progetto/add-to-cart.png'
    },
    
    'acqua':{
        titolo: 'Acqua Minerale',
        immagine: 'foto_progetto/bevande/water.jpg',
        show_more: 'Dettagli',
        ingredienti: 'Disponibile naturale o frizzante.',
        carrello: 'foto_progetto/add-to-cart.png'
    }
}