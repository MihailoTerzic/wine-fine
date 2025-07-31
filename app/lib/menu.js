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
      {"name": "Long Island Iced Tea", "description": "(vodka, gin, white rum, tequila, triple sec, lemon juice, Coca-Cola)", "price": 990},
      {"name": "Old Fashioned", "description": "(Jack Daniel's, brown sugar, angostura bitters, soda)", "price": 890},
      {"name": "Zlatni Old Fashioned / Golden Old Fashioned", "description": "(Old gin Zločin i Kazan, angostura bitters, soda)", "price": 950},
      {"name": "Gin Tonic / Tonic & Gin", "description": "(gin, tonic)", "price": 720},
      {"name": "Martini & Tonic / Martini & Tonic", "description": "(martini bianco, tonic)", "price": 720},
      {"name": "Bloody Mary / Bloody Mary", "description": "(vodka, tomato juice, Worcestershire sauce, tabasco)", "price": 690},
      {"name": "Mojito / Mojito", "description": "(white rum, mint, sugar, soda, lime)", "price": 790},
      {"name": "Whiskey Sour", "description": "(whiskey, lemon juice, sugar syrup)", "price": 790},
      {"name": "Whiskey Ginger", "description": "(whiskey, ginger ale)", "price": 790},
      {"name": "Daiquiri", "description": "(white rum, lime juice, sugar syrup)", "price": 790},
      {"name": "Cosmopolitan", "description": "(vodka, triple sec, lime juice, cranberry juice)", "price": 790},
      {"name": "Caipirinha", "description": "(cachaça, lime, sugar)", "price": 790}
    ]
  },
  {
    "category": "NAPIĆI ZA ODRASLE / DRINKS FOR ADULTS",
    "items": [
      {
        "subcategory": "VINO / WINE",
        "items": [
          {"name": "Pino Sivi 0.75", "price": 2200},
          {"name": "Vranac 0.75", "price": 2200},
          {"name": "Nešto belo (sorta zaleži od ponude)", "price": 2200}
        ]
      }
    ]
  }
]
export default menuData;