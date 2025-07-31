const menuData = [
  {
    "category": "BEZALKOHOLNA PIĆA / NON-ALCOHOLIC BEVERAGES",
    "items": [
      {
        "subcategory": "KAFA / COFFEE",
        "items": [
          {"name": "Espresso / Espresso", "price": 230},
          {"name": "Dupli espresso / Double espresso", "price": 420},
          {"name": "Espresso sa mlekom / Espresso with milk", "price": 280},
          {"name": "Cappuccino / Cappuccino", "price": 300},
          {"name": "Espresso sa sojinim mlekom / Espresso with soy milk", "price": 320},
          {"name": "Latte Macchiato / Latte macchiato", "price": 320},
          {"name": "Nescafe / Instant coffee", "price": 290},
          {"name": "Nescafe sa sojinim mlekom / Instant coffee with soy milk", "price": 380},
          {"name": "Čajevi / Teas", "price": 270}
        ]
      },
      {
        "subcategory": "VODA / WATER",
        "items": [
          {"name": "Rosa negazirana 0.33 / Still water 0.33", "price": 240},
          {"name": "Rosa negazirana 0.75 / Still water 0.75", "price": 450},
          {"name": "Rosa gazirana 0.33 / Sparkling water 0.33", "price": 240},
          {"name": "Rosa gazirana 0.75 / Sparkling water 0.75", "price": 450},
          {"name": "Römerquelle limunska trava 0.33 / Römerquelle lemongrass 0.33", "price": 300}
        ]
      },
      {
        "subcategory": "SOKOVI / SOFT DRINKS",
        "items": [
          {"name": "Coca-Cola", "price": 280},
          {"name": "Coca-Cola Zero", "price": 280},
          {"name": "Schweppes Tonic", "price": 280},
          {"name": "Schweppes Bitter", "price": 280},
          {"name": "Sprite", "price": 280},
          {"name": "Fanta", "price": 280},
          {"name": "Ice Tea", "price": 320},
          {"name": "Prirodni sokovi – Next / Natural Juices – Next", "price": 300, "description": "Narandža, breskva, jagoda, šumsko voće, borovnica, jabuka"}
        ]
      },
      {
        "subcategory": "ENERGETSKA PIĆA / ENERGY DRINKS",
        "items": [
          {"name": "Red Bull", "price": 450},
          {"name": "ULTRA ENERGY", "price": 300}
        ]
      },
      {
        "subcategory": "CEĐENI SOKOVI / FRESHLY SQUEEZED JUICES",
        "items": [
          {"name": "Limunada / Lemonade", "price": 300},
          {"name": "Pomorandža / Orange", "price": 420},
          {"name": "Grejpfrut / Grapefruit", "price": 440},
          {"name": "Ceđeni mix / Mixed juice", "price": 440}
        ]
      },
      {
        "subcategory": "HLADNO CEĐENI SOKOVI / COLD-PRESSED JUICES",
        "items": [
          {"name": "Malina / Raspberry 0.2", "price": 490},
          {"name": "Borovnica / Blueberry 0.2", "price": 490},
          {"name": "Jabuka / Apple 0.2", "price": 490}
        ]
      },
      {
        "subcategory": "RUČNO PRAVLJENI NAPICI / HANDMADE DRINKS",
        "items": [
          {"name": "Limunana / Lemonade with mint", "price": 400},
          {"name": "Breskva / Peach ice tea", "price": 380},
          {"name": "Marakuja / Passion fruit ice tea", "price": 380},
          {"name": "Hladna kafa sa ukusom čokolade / Iced coffee with chocolate flavor", "price": 350}
        ]
      },
      {
        "subcategory": "TONIK / TONIC",
        "items": [
          {"name": "Three Cents Pink Grapefruit Soda", "price": 470},
          {"name": "Three Cents Lemon Tonic", "price": 470},
          {"name": "Three Cents Dry Tonic", "price": 470},
          {"name": "Three Cents Tonic Water", "price": 470}
        ]
      }
    ]
  },
  {
    "category": "ALKOHOLNA PIĆA / ALCOHOLIC DRINKS",
    "items": [
      {
        "subcategory": "PIVO / BEER",
        "items": [
          {"name": "Carlsberg točeno 0.25", "price": 320},
          {"name": "Carlsberg točeno 0.5", "price": 430},
          {"name": "Carlsberg 0.25", "price": 390},
          {"name": "Lav Premium 0.33", "price": 370},
          {"name": "Tuborg 0.33", "price": 390},
          {"name": "Kronenbourg Blanc 0.33", "price": 420},
          {"name": "Budweiser tamno 0.33", "price": 480},
          {"name": "Budweiser 0.33", "price": 480},
          {"name": "Erdinger 0.33", "price": 490}
        ]
      },
      {
        "subcategory": "SAJDERI / CIDERS",
        "items": [
          {"name": "Somersby Mango & Lime 0.33", "price": 450},
          {"name": "Somersby Jagoda / Strawberry 0% 0.33", "price": 450},
          {"name": "Somersby Kruška / Pear 0.33", "price": 450},
          {"name": "Somersby Passion Fruit & Orange 0.33", "price": 450}
        ]
      },
      {
        "subcategory": "RAKIJA / BRANDY 0.03",
        "items": [
          {"name": "Sokolova Suza Šljiva 24YO (plum)", "price": 500},
          {"name": "Sokolova Suza Šljiva 13YO (plum)", "price": 370},
          {"name": "Sokolova Suza Dunja (quince)", "price": 370},
          {"name": "Sokolova Suza Divlja kruška (wild pear)", "price": 370},
          {"name": "Sokolova Suza Kajsija (apricot)", "price": 370},
          {"name": "Sokolova Suza Kruška (pear)", "price": 370},
          {"name": "Pirum, Abate Fetel (pear)", "price": 370},
          {"name": "Pirum, Carmen (pear)", "price": 370}
        ]
      },
      {
        "subcategory": "LIKERI / LIQUEURS 0.03",
        "items": [
          {"name": "Pelinkovac Gorki list", "price": 270},
          {"name": "Campari", "price": 290},
          {"name": "Amaretto Disaronno", "price": 290},
          {"name": "Jägermeister", "price": 330},
          {"name": "Limoncello", "price": 340},
          {"name": "Aperol", "price": 340},
          {"name": "Baileys", "price": 380}
        ]
      },
      {
        "subcategory": "COGNAC & RUM / COGNAC & RUM 0.03",
        "items": [
          {"name": "Hennessy X.O.", "price": 1950},
          {"name": "Hennessy V.S.O.P.", "price": 800},
          {"name": "Diplomatico Reserva Exclusiva 12YO", "price": 580}
        ]
      },
      {
        "subcategory": "DŽIN / GIN 0.03",
        "items": [
          {"name": "Beefeater", "price": 300},
          {"name": "Beefeater Pink", "price": 300},
          {"name": "Bombay Sapphire", "price": 320},
          {"name": "Dry džin Zločin i Kazan", "price": 340},
          {"name": "Nar Zločin i Kazan", "price": 350},
          {"name": "Zlodžin", "price": 380},
          {"name": "Botanički džin", "price": 380},
          {"name": "Old džin Zločin i Kazan", "price": 420},
          {"name": "Mare", "price": 440}
        ]
      },
      {
        "subcategory": "VISKI / WHISKEY 0.03",
        "items": [
          {"name": "Macallan 15YO", "price": 1700},
          {"name": "Macallan 12YO", "price": 990},
          {"name": "Glenmorangie Quinta Ruban 14YO", "price": 720},
          {"name": "Glenmorangie Lasanta 12YO", "price": 560},
          {"name": "Jack Daniel’s Single Barrel", "price": 590},
          {"name": "Jack Daniel’s", "price": 410},
          {"name": "Jack Daniel’s Honey", "price": 410},
          {"name": "Nikka Days", "price": 560},
          {"name": "Gentleman Jack", "price": 540},
          {"name": "Woodford Bourbon", "price": 540},
          {"name": "Jameson Black Barrel", "price": 510},
          {"name": "Jameson", "price": 420},
          {"name": "Johnnie Walker Black Label", "price": 520},
          {"name": "Chivas Regal 12YO", "price": 440}
        ]
      },
      {
        "subcategory": "VOTKA / VODKA 0.03",
        "items": [
          {"name": "Grey Goose", "price": 570},
          {"name": "Finlandia", "price": 300},
          {"name": "Absolut", "price": 300}
        ]
      },
      {
        "subcategory": "TEKILA / TEQUILA 0.03",
        "items": [
          {"name": "Patrón Silver", "price": 740},
          {"name": "El Jimador Blanco", "price": 370}
        ]
      },
      {
        "subcategory": "VERMUT / VERMOUTH 0.03",
        "items": [
          {"name": "Martini Bianco", "price": 300},
          {"name": "Martini Rosso", "price": 300}
        ]
      }
    ]
  },
{
  "category": "KOKTELI / COCKTAILS",
  "items": [
    {
      "name": "Long Island Iced Tea",
      "description": "(vodka, gin, white rum, tequila, triple sec, lemon juice, Coca-Cola)",
      "price": 990
    },
    {
      "name": "Old Fashioned",
      "description": "(Jack Daniel's, brown sugar, angostura bitters, soda)",
      "price": 890
    },
    {
      "name": "Zlatni Old Fashioned / Golden Old Fashioned",
      "description": "(Old gin Zločin i Kazan, angostura bitters, soda)",
      "price": 800
    },
    {
      "name": "Melon Martini",
      "description": "(vodka, melon liqueur, lemon juice)",
      "price": 790
    },
    {
      "name": "Negroni",
      "description": "(gin, Campari, Martini Rosso)",
      "price": 790
    },
    {
      "name": "Zlodžin",
      "description": "(Botanical gin, tonic, soda, elderflower syrup)",
      "price": 750
    },
    {
      "name": "Negroni Zločin i Kazan",
      "description": "(Zločin i Kazan gin, Campari, Martini Rosso)",
      "price": 730
    },
    {
      "name": "Aperol Spritz",
      "description": "(Aperol, prosecco, soda, orange slice)",
      "price": 720
    },
    {
      "name": "Hugo",
      "description": "(prosecco, elderflower, soda, mint, lime)",
      "price": 720
    },
    {
      "name": "Limoncello Spritz",
      "description": "(limoncello, prosecco, soda)",
      "price": 720
    },
    {
      "name": "Sonar",
      "description": "(Pomegranate gin, tonic, soda)",
      "price": 650
    },
    {
      "name": "Champagne koktel / Champagne cocktail",
      "description": "(Cava, angostura bitters)",
      "price": 600
    },
    {
      "name": "Dry džin tonik / Dry gin & tonic",
      "description": "(dry gin, soda, tonic)",
      "price": 600
    }
  ]
}
,

{
  "category": "VINA / WINES",
  "items": [
    {
      "subcategory": "BELA VINA / WHITE WINES - SRBIJA",
      "items": [
        {"name": "Eden Chardonnay", "description": "Eden | Chardonnay Barik", "price": 2820},
        {"name": "Nebo", "description": "Despotika | Pinot Blanc, Rajnski Riesling", "priceGlass": 490, "priceBottle": 2900},
        {"name": "Ponoćna priča", "description": "Tri planine | Tamjanika", "priceGlass": 550, "priceBottle": 2950},
        {"name": "Pusula Sauvignon Blanc", "description": "Pusula | Sauvignon Blanc", "price": 3050},
        {"name": "Dodir", "description": "Despotika | Muscat", "priceGlass": 550, "priceBottle": 3200},
        {"name": "Deurić Gewürztraminer", "description": "Deurić | Gewürztraminer", "priceGlass": 560, "priceBottle": 3300},
        {"name": "Panta Rei", "description": "Stemina | Chardonnay", "priceGlass": 590, "priceBottle": 3300},
        {"name": "Jagoda", "description": "Tri planine | Strawberry grape", "price": 4400}
      ]
    },
    {
      "subcategory": "BELA VINA / WHITE WINES - HRVATSKA",
      "items": [
        {"name": "Pošip Jokić", "description": "Jokić | Pošip", "priceGlass": 580, "priceBottle": 3320},
        {"name": "Coronica Malvazija", "description": "Coronica | Malvazija", "price": 3700}
      ]
    },
    {
      "subcategory": "BELA VINA / WHITE WINES - MAKEDONIJA",
      "items": [
        {"name": "Luda Mara", "description": "Tikveš | Tamjanika", "price": 2940},
        {"name": "Bela Voda", "description": "Tikveš | Chardonnay", "price": 6200}
      ]
    },
    {
      "subcategory": "BELA VINA / WHITE WINES - FRANCUSKA",
      "items": [
        {"name": "Touraine", "description": "Calvet | Sauvignon Blanc", "price": 2800},
        {"name": "Henri Bourgeois Petit Bourgeois Blanc", "description": "Henri Bourgeois | Sauvignon Blanc", "priceGlass": 530, "priceBottle": 2950},
        {"name": "Chablis La Chanfleure Louis Latour", "description": "Louis Latour | Chardonnay", "price": 6500},
        {"name": "Chablis Grand Cru Blanchot Simonnet-Febvre", "description": "Simonnet-Febvre | Chardonnay", "price": 19000}
      ]
    },
    {
      "subcategory": "BELA VINA / WHITE WINES - ITALIJA",
      "items": [
        {"name": "Calalenta Pecorino", "description": "Fantini | Pecorino", "priceGlass": 510, "priceBottle": 2970},
        {"name": "3 Passo", "description": "Ciello e Terra | organic", "price": 3050},
        {"name": "Jermann Pinot Grigio", "description": "Jermann | Pinot Grigio", "price": 5700}
      ]
    },
    {
      "subcategory": "BELA VINA / WHITE WINES - ŠPANIJA",
      "items": [
        {"name": "Aresan Verdejo", "description": "Castillo de Aresan | Verdejo", "priceGlass": 510, "priceBottle": 2920},
        {"name": "Esmeralda Torres", "description": "Torres | Muscat, Gewürztraminer", "price": 2960}
      ]
    },
    {
      "subcategory": "PENUŠAVA VINA / SPARKLING WINES",
      "items": [
        {"name": "Aresan Cava", "description": "Castillo de Aresan | Xarello, Macabeo, Parellada | Španija (Penedès)", "priceGlass": 490, "priceBottle": 2900},
        {"name": "Perlino Prosecco DOC", "description": "Perlino | Glera | Italija (Veneto)", "priceGlass": 500, "priceBottle": 2950},
        {"name": "Borgoluce Valdobbiadene Prosecco Superiore D.O.C.G Brut", "description": "Borgoluce | Glera | Italija", "price": 3610},
        {"name": "Crémant de Loire Brut Marquis de Goulaine", "description": "Marquis de Goulaine | Chenin Blanc, Chardonnay, Pinot Noir | Francuska", "price": 3920},
        {"name": "Cap Classique Blanc", "description": "Neethlingshof | Chardonnay, Pinot Noir | Južna Afrika", "price": 4800},
        {"name": "Louis Roederer Brut", "description": "Louis Roederer | Chardonnay, Pinot Noir, Pinot Meunier | Francuska", "price": 10400}
      ]
    },
    {
      "subcategory": "DEZERTNA VINA / DESSERT WINES",
      "items": [
        {"name": "Artesao Ruis Porto", "description": "Artesao Ruis | blend autohtonih portugalskih sorti | Španija", "priceGlass": 470, "priceBottle": 2820},
        {"name": "Michele Chiarlo Palás Moscato d’Asti", "description": "Michele Chiarlo | Bianco Moscato | Italija", "priceGlass": 620, "priceBottle": 3650}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - SRBIJA",
      "items": [
        {"name": "Boja Zore", "description": "Tri planine | Prokupac", "price": 2980},
        {"name": "Trag", "description": "Despotika | Merlo", "priceGlass": 560, "priceBottle": 3200},
        {"name": "Deurić Pinot Noir", "description": "Deurić | Pinot Noir", "priceGlass": 550, "priceBottle": 3250},
        {"name": "Dokaz", "description": "Despotika | Cabernet Sauvignon", "priceGlass": 560, "priceBottle": 3300},
        {"name": "Deurić Probus", "description": "Deurić | Probus", "price": 3400},
        {"name": "Stephanos", "description": "Stemina | Cabernet Sauvignon, Merlot", "priceGlass": 600, "priceBottle": 3420},
        {"name": "Jeremić Merlot Terroire", "description": "Jeremić | Merlot", "price": 4660},
        {"name": "Cabernet reserve", "description": "Radovanović | Cabernet Sauvignon", "price": 4800}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - HRVATSKA",
      "items": [
        {"name": "Cuvee Jokić", "description": "Jokić | Cabernet Sauvignon, Merlot, Syrah", "priceGlass": 570, "priceBottle": 3380}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - MAKEDONIJA",
      "items": [
        {"name": "Barovo terroir crveno", "description": "Tikveš | Vranac, Kratošija", "price": 6790}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - ŠPANIJA",
      "items": [
        {"name": "Aresan Tempranillo", "description": "Castillo de Aresan | Tempranillo", "price": 3120}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - FRANCUSKA",
      "items": [
        {"name": "Michel Lynch Reserve Medoc", "description": "Michel Lynch | Cabernet Sauvignon, Merlot", "priceGlass": 640, "priceBottle": 3780}
      ]
    },
    {
      "subcategory": "CRVENA VINA / RED WINES - ITALIJA",
      "items": [
        {"name": "3 Passo rosso", "description": "Ciello e Terra | Organic", "price": 2950},
        {"name": "Luccarelli Primitivo Puglia IGP", "description": "Luccarelli | Primitivo", "priceGlass": 540, "priceBottle": 3120},
        {"name": "Campo Marina Primitivo Di Manduria", "description": "Luccarelli | Primitivo", "priceGlass": 910, "priceBottle": 5360},
        {"name": "Marina Cvetić Montepulciano D'Abruzzo", "description": "Masciarelli | Montepulciano", "price": 5940},
        {"name": "Brunello Pelagrilli Siro Pacenti", "description": "Siro Pacenti | Sangiovese", "price": 9270},
        {"name": "Amarone Classico Della Vapolicella", "description": "Tomassi | Corvinia, Corvinone, Rondinella, Oseleta", "price": 9960},
        {"name": "Brunello di Montalcino Pieve Santa Restituta", "description": "Gaja | Sangiovese", "price": 15270},
        {"name": "Cepparello", "description": "Isole e Olena | Sangiovese", "price": 19700}
      ]
    },
    {
      "subcategory": "ROZE VINA / ROSE WINES",
      "items": [
        {"name": "Minna Rosé", "description": "Stemina | Pinot Noir | Srbija", "priceGlass": 480, "priceBottle": 2820},
        {"name": "Calalenta Rosé", "description": "Fantini | Merlot | Italija", "priceGlass": 510, "priceBottle": 2970},
        {"name": "Roza Nostra", "description": "Erdevik | Merlot, Cabernet Sauvignon | Srbija", "price": 2990},
        {"name": "Château Gigery Côtes de Provence", "description": "Château Gigery | Grenache Noir, Syrah, Cinsault | Francuska", "price": 3200},
        {"name": "Whispering Angel", "description": "Château d'Esclans | blend | Francuska", "price": 5900}
      ]
    }
  ]
}


,

  // OVDE KRECE
 

{
  "category": "NEŠTO ZA POJESTI / FINGER FOOD",
  "items": [
    {
      "name": "Daska pršute & sireva",
      "description": "Kombinacija pažljivo odabranih sireva i suhomesnatih proizvoda",
      "price": 1800
    },
    {
      "name": "Mixed board (cheese & dry-cured ham)",
      "description": "A combination of carefully selected cheese and prosciutto",
      "price": 1800
    },
    {
      "name": "Paleta sireva / Cheese board",
      "price": 900
    },
    {
      "name": "Masline / Olives",
      "price": 250
    }
  ]
}



]
export default menuData;