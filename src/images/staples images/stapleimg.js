const staples = [
    {
      key: 1,
      name: "Tata Sampann Toor/Arhar Dal (Split)",
      priceint: 657,
      weight: 5,
      unit: "kg",
      price: "₹ 657 / 5 kg",
      src: require("./Tata Sampann Toor Arhar Dal (Split).webp")
    },
    {
      key: 2,
      name: "Tata Sampann Green Moong Dal (Whole)",
      priceint: 84,
      weight: 500,
      unit: "g",
      price: "₹ 84 / 500 g",
      src: require("./Tata Sampann Green Moong Dal (Whole).webp")
    },
    {
      key: 3,
      name: "Tata Sampann Yellow Chana Dal (Split)",
      priceint: 112,
      weight: 1,
      unit: "kg",
      price: "₹ 112 / 1 kg",
      src: require("./Tata Sampann Yellow Chana Dal (Split).webp")
    },
    {
      key: 4,
      name: "Tata Sampann Yellow Moong Dal (Split)",
      priceint: 170,
      weight: 1,
      unit: "kg",
      price: "₹ 170 / 1 kg",
      src: require("./Tata Sampann Yellow Moong Dal (Split).webp")
    },
    {
      key: 5,
      name: "Tata Sampann Brown Chana (Whole)",
      priceint: 108,
      weight: 1,
      unit: "kg",
      price: "₹ 108 / 1 kg",
      src: require("./Tata Sampann Brown Chana (Whole).webp")
    },
    {
      key: 6,
      name: "Tata Sampann Green Moong Dal (Split/Chilka)",
      priceint: 85,
      weight: 500,
      unit: "g",
      price: "₹ 85 / 500 g",
      src: require("./Tata Sampann Green Moong Dal (Split Chilka).webp")
    },
    {
      key: 7,
      name: "Tata Sampann Toor/Arhar Dal",
      priceint: 151,
      weight: 1,
      unit: "kg",
      price: "₹ 151 / 1 kg",
      src: require("./Tata Sampann Toor Arhar Dal.webp")
    },
    {
      key: 8,
      name: "Tata Sampann Toor Dal 1 kg with Moong Dal 1 kg",
      priceint: 217,
      weight: 2,
      unit: "kg",
      price: "₹ 217 / 2 kg",
      src: require("./Tata Sampann Toor Dal 1 kg with Moong Dal 1 kg.webp")
    },
    {
      key: 9,
      name: "Tata Sampann Red Masoor Dal (Whole)",
      priceint: 155,
      weight: 1,
      unit: "kg",
      price: "₹ 155 / 1 kg",
      src: require("./Tata Sampann Red Masoor Dal (Whole).webp")
    },
    {
      key: 10,
      name: "Fortune Rozana Basmati Rice (Medium Grain)",
      price: "₹ 78 / 1 kg",
      priceint: 78,
      src: require("./Fortune Rozana Basmati Rice (Medium Grain).webp"),
      weight: 1,
      unit: "kg"
      },
      {
      key: 11,
      name: "Fortune Biryani Special Basmati Rice (Long Grain)",
      price: "₹ 135 / 1 kg",
      priceint: 135,
      src: require("./Fortune Biryani Special Basmati Rice (Long Grain).webp"),
      weight: 1,
      unit: "kg"
      },
      {
      key: 12,
      name: "UP MANSOORI RICE Basmati Rice",
      price: "₹ 230 / 5 kg",
      priceint: 230,
      src: require("./UP MANSOORI RICE Basmati Rice.webp"),
      weight: 5,
      unit: "kg"
      },
      {
      key: 13,
      name: "Agro Delight Shakkar Chinni Rice",
      price: "₹ 225 / 5 kg",
      priceint: 225,
      src: require("./Agro Delight Shakkar Chinni Rice.webp"),
      weight: 5,
      unit: "kg"
      },
      {
      key: 14,
      name: "Fortune Hamesha Basmati Rice (Broken Grain, Steam)",
      price: "₹ 349 / 5 kg",
      priceint: 349,
      src: require("./Fortune Hamesha Basmati Rice (Broken Grain, Steam).webp"),
      weight: 5,
      unit: "kg"
      },
      {
      key: 15,
      name: "Tata Sampann High in Fibre Poha",
      price: "₹ 51 / 500 g",
      priceint: 51,
      src: require("./Tata Sampann High in Fibre Poha.webp"),
      weight: 500,
      unit: "g"
      },
      {
      key: 16,
      name: "INDIA GATE Regular Choice Basmati Rice (Medium Grain)",
      price: "₹ 404 / 5 kg",
      priceint: 404,
      src: require("./INDIA GATE Regular Choice Basmati Rice (Medium Grain).webp"),
      weight: 5,
      unit: "kg"
      },
      {
      key: 17,
      name: "INDIA GATE Mogra Basmati Rice (Broken Grain)",
      price: "₹ 313 / 5 kg",
      priceint: 313,
      src: require("./INDIA GATE Mogra Basmati Rice (Broken Grain).webp"),
      weight: 5,
      unit: "kg"
      },
      {
        key: 18,
        name: "Kings Soyabean Oil Pouch",
        priceint: 123,
        weight: 1,
        unit: "L",
        price: "₹ 123 / 1 L",
        src: require("./Kings Soyabean Oil Pouch.webp")
      },
      {
        key: 19,
        name: "Saffola Gold Refined Cooking Rice Bran & Corn Blended Oil Pouch",
        priceint: 200,
        weight: 1,
        unit: "L",
        price: "₹ 200 / 1 L",
        src: require("./Saffola Gold Refined Cooking Rice Bran & Corn Blended Oil Pouch.webp")
      },
      {
        key: 20,
        name: "Nutralite DoodhShakti Pure Ghee 1 L Carton",
        priceint: 557,
        weight: 1,
        unit: "L",
        price: "₹ 557 / 1 L",
        src: require("./Nutralite DoodhShakti Pure Ghee 1 L Carton.webp")
      },
      {
        key: 21,
        name: "Fortune Refined Soyabean Oil Can",
        priceint: 664,
        weight: 5,
        unit: "L",
        price: "₹ 664 / 5 L",
        src: require("./Fortune Refined Soyabean Oil Can.webp")
      },
      {
        key: 22,
        name: "Saffola Active Refined Cooking Rice Bran & Soyabean Blended Oil Pouch",
        priceint: 169,
        weight: 1,
        unit: "L",
        price: "₹ 169 / 1 L",
        src: require("./Saffola Active Refined Cooking Rice Bran & Soyabean Blended Oil Pouch.webp")
      },
      {
        key: 23,
        name: "Dalda Soyabean Oil Pouch",
        priceint: 132,
        weight: 1,
        unit: "L",
        price: "₹ 132 / 1 L",
        src: require("./Dalda Soyabean Oil Pouch.webp")
      },
      {
        key: 24,
        name: "EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Plastic Bottle",
        priceint: 155,
        weight: 1,
        unit: "L",
        price: "₹ 155 / 1 L",
        src: require("./EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Plastic Bottle.webp")
      },
      {
        key: 25,
        name: "BRITANNIA Pure Cow Ghee 1 L Tin",
        priceint: 622,
        weight: 1,
        unit: "L",
        price: "₹ 622 / 1 L",
        src: require("./BRITANNIA Pure Cow Ghee 1 L Tin.webp")
      },
      {
        key: 26,
        name: "Bail Kolhu Refined Mustard Oil Pouch",
        priceint: 136,
        weight: 1,
        unit: "L",
        price: "₹ 136 / 1 L",
        src: require("./Bail Kolhu Refined Mustard Oil Pouch.webp")
      },
      {
        key: 27,
        name: 'AASHIRVAAD Shudh Chakki Atta',
        priceint: 205,
        weight: 5,
        unit: 'kg',
        price: '₹ 205 / 5 kg',
        src: require('./AASHIRVAAD Shudh Chakki Atta.webp')
      },
      {
        key: 28,
        name: 'Fortune Chakki Fresh Atta',
        priceint: 217,
        weight: 5,
        unit: 'kg',
        price: '₹ 217 / 5 kg',
        src: require('./Fortune Chakki Fresh Atta.webp')
      },
      {
        key: 29,
        name: 'Chakki Atta',
        priceint: 330,
        weight: 10,
        unit: 'kg',
        price: '₹ 330 / 10 kg',
        src: require('./Chakki Atta.webp')
      },
      {
        key: 30,
        name: 'Sooji/Bombay Rava',
        priceint: 31,
        weight: 500,
        unit: 'g',
        price: '₹ 31 / 500 g',
        src: require('./Sooji Bombay Rava.webp')
      },
      {
        key: 31,
        name: 'Rajdhani Besan Gram Flour',
        priceint: 110,
        weight: 1,
        unit: 'kg',
        price: '₹ 110 / 1 kg',
        src: require('./Rajdhani Besan Gram Flour.webp')
      },
      {
        key: 32,
        name: 'Rajdhani Chakki Fresh Atta',
        priceint: 414,
        weight: 10,
        unit: 'kg',
        price: '₹ 414 / 10 kg',
        src: require('./Rajdhani Chakki Fresh Atta.webp')
      },
      {
        key: 33,
        name: 'AASHIRVAAD Atta with Multigrains',
        priceint: 305,
        weight: 5,
        unit: 'kg',
        price: '₹ 305 / 5 kg',
        src: require('./AASHIRVAAD Atta with Multigrains.webp')
      },
      {
        key: 34,
        name: 'Maida',
        priceint: 45,
        weight: 1,
        unit: 'kg',
        price: '₹ 45 / 1 kg',
        src: require('./Maida.webp')
      },
      {
        key: 35,
        name: "goldiee Turmeric Powder",
        priceint: 60,
        weight: 500,
        src: require("./goldiee Turmeric Powder.webp"),
        unit: "g",
        price: "₹ 60 / 500 g"
      },
      {
        key: 36,
        name: "goldiee Red Chilli Powder",
        priceint: 84,
        weight: 200,
        src: require("./goldiee Red Chilli Powder.webp"),
        unit: "g",
        price: "₹ 84 / 200 g"
      },
      {
        key: 37,
        name: "goldiee Coriander/Dhaniya Powder",
        priceint: 32,
        weight: 200,
        src: require("./goldiee Coriander Dhaniya Powder.webp"),
        unit: "g",
        price: "₹ 32 / 200 g"
      },
      {
        key: 38,
        name: "AASHIRVAAD Chilli Powder",
        priceint: 270,
        weight: 500,
        src: require("./AASHIRVAAD Chilli Powder.webp"),
        unit: "g",
        price: "₹ 270 / 500 g"
      },
      {
        key: 39,
        name: "Aaditya 501 Turmeric Powder",
        priceint: 66,
        weight: 500,
        src: require("./Aaditya 501 Turmeric Powder.webp"),
        unit: "g",
        price: "₹ 66 / 500 g"
      },
      {
        key: 40,
        name: "Tata Sampann Garam Masala with Natural Oils, Crafted by Chef Sanjeev Kapoor",
        priceint: 63,
        weight: 100,
        src: require("./Tata Sampann Garam Masala with Natural Oils, Crafted by Chef Sanjeev Kapoor.webp"),
        unit: "g",
        price: "₹ 63 / 100 g"
      },
      {
        key: 41,
        name: "Maggi Masala Magic All in One Masala",
        priceint: 53,
        weight: 72,
        src: require("./Maggi Masala Magic All in One Masala.webp"),
        unit: "g",
        price: "₹ 53 / 72 g"
      },
      {
        key: 42,
        name: "Classic Turmeric Powder by Flipkart Grocery",
        priceint: 63,
        weight: 500,
        src: require("./Classic Turmeric Powder by Flipkart Grocery.webp"),
        unit: "g",
        price: "₹ 63 / 500 g"
      },
      {
        key: 43,
        name: "Tata Sampann Kitchen King Masala with Natural Oils, Crafted by Chef Sanjeev Kapoor",
        priceint: 56,
        weight: 100,
        src: require("./Tata Sampann Kitchen King Masala with Natural Oils, Crafted by Chef Sanjeev Kapoor.webp"),
        unit: "g",
        price: "₹ 56 / 100 g"
      },
      {
        key: 44,
        name: "DHAMPURE Sulphurless Sugar",
        priceint: 44,
        weight: 1,
        unit: "kg",
        src: require("./DHAMPURE Sulphurless Sugar.webp"),
        price: "₹ 44 / 1 kg"
      },
      {
        key: 45,
        name: "Sugarlite 50% Less Calories Sugar",
        priceint: 59,
        weight: 500,
        unit: "g",
        src: require("./Sugarlite  Less Calories Sugar.webp"),
        price: "₹ 59 / 500 g"
      },
      {
        key: 46,
        name: "Flipkart Supermart Select Bold Sugar",
        priceint: 295,
        weight: 5,
        unit: "kg",
        src: require("./Flipkart Supermart Select Bold Sugar.webp"),
        price: "₹ 295 / 5 kg"
      },
      {
        key: 47,
        name: "Classic by Flipkart Grocery Bold Sugar",
        priceint: 250,
        weight: 5,
        unit: "kg",
        src: require("./Classic by Flipkart Grocery Bold Sugar.webp"),
        price: "₹ 250 / 5 kg"
      },
      {
        key: 48,
        name: "Natureland Organics Sugar",
        priceint: 58,
        weight: 500,
        unit: "g",
        src: require("./Natureland Organics Sugar.webp"),
        price: "₹ 58 / 500 g"
      },
      {
        key: 49,
        name: "Desi Choice Misri Dana Sugar",
        priceint: 49,
        weight: 500,
        unit: "g",
        src: require("./Desi Choice Misri Dana Sugar.webp"),
        price: "₹ 49 / 500 g"
      },
      {
        key: 50,
        name: "Desi Choice Candy Sugar",
        priceint: 55,
        weight: 500,
        unit: "g",
        src: require("./Desi Choice Candy Sugar.webp"),
        price: "₹ 55 / 500 g"
      }
  ];

export default staples;