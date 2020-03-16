import MODELS from "./models";

const PRICES = {
  seltos:         1054900,
  picanto:        689900,
  rio:            637110,
  rio_x_line:     773910,
  ceed:           989900,
  ceed_sw:        1029900,
  cerato_classic: 929900,
  cerato:         1046900,
  optima:         1264900,
  stinger:        1804900,
  k900:           3499900,
  soul:           934900,
  sportage:       1229900,
  sorento:        1054900,
  sorento_prime:  1794900,
  mohave:         2669900
};

const ADVANTAGES = {
  seltos:         45000,
  rio:            162790,
  rio_x_line:     129490,
  ceed:           90000,
  ceed_sw:        90000,
  cerato_classic: 90000,
  cerato:         88000,
  optima:         100000,
  stinger:        310000,
  k900:           120000,
  soul:           95000,
  sportage:       160000,
  sorento:        245000,
  sorento_prime:  230000,
  mohave:         150000
};

const CREDITS = {
  seltos:         6000,
  picanto:        113,
  rio:            193,
  rio_x_line:     193,
  ceed:           193,
  ceed_sw:        222,
  cerato_classic: 193,
  cerato:         200,
  optima:         258,
  stinger:        387,
  k900:           803,
  soul:           192,
  sportage:       256,
  sorento:        354,
  sorento_prime:  451,
  mohave:         638
};

export default {
  CARS: [
    {
      id:        "seltos",
      name:      "KIA SELTOS",
      price:     PRICES.seltos,
      advantage: ADVANTAGES.seltos,
      credit:    CREDITS.seltos,
      imgUrl:    require("../images/cars/car-01.png")
    },
    {
      id:     "picanto",
      name:   "KIA PICANTO",
      price:  PRICES.picanto,
      credit: CREDITS.picanto,
      imgUrl: require("../images/cars/car-02.png")
    },
    {
      id:        "rio",
      name:      "KIA RIO",
      price:     PRICES.rio,
      advantage: ADVANTAGES.rio,
      credit:    CREDITS.rio,
      imgUrl:    require("../images/cars/car-03.png")
    },
    {
      id:        "rio_x-line",
      name:      "KIA RIO X-LINE",
      price:     PRICES.rio_x_line,
      advantage: ADVANTAGES.rio_x_line,
      credit:    CREDITS.rio_x_line,
      imgUrl:    require("../images/cars/car-04.png")
    },
    {
      id:        "cee'd",
      name:      "KIA CEE'D",
      price:     PRICES.ceed,
      advantage: ADVANTAGES.ceed,
      credit:    CREDITS.ceed,
      imgUrl:    require("../images/cars/car-05.png")
    },
    {
      id:        "cee'd_sw",
      name:      "KIA CEE'D SW",
      price:     PRICES.ceed_sw,
      advantage: ADVANTAGES.ceed_sw,
      credit:    CREDITS.ceed_sw,
      imgUrl:    require("../images/cars/car-06.png")
    },
    {
      id:        "cerato_classic",
      name:      "KIA CERATO CLASSIC",
      price:     PRICES.cerato_classic,
      advantage: ADVANTAGES.cerato_classic,
      credit:    CREDITS.cerato_classic,
      imgUrl:    require("../images/cars/car-07.png")
    },
    {
      id:        "cerato",
      name:      "KIA CERATO",
      price:     PRICES.cerato,
      advantage: ADVANTAGES.cerato,
      credit:    CREDITS.cerato,
      imgUrl:    require("../images/cars/car-08.png")
    },
    {
      id:        "optima",
      name:      "KIA OPTIMA",
      price:     PRICES.optima,
      advantage: ADVANTAGES.optima,
      credit:    CREDITS.optima,
      imgUrl:    require("../images/cars/car-09.png")
    },
    {
      id:        "stinger",
      name:      "KIA STINGER",
      price:     PRICES.stinger,
      advantage: ADVANTAGES.stinger,
      credit:    CREDITS.stinger,
      imgUrl:    require("../images/cars/car-10.png")
    },
    {
      id:        "k900",
      name:      "KIA K900",
      price:     PRICES.k900,
      advantage: ADVANTAGES.k900,
      credit:    CREDITS.k900,
      imgUrl:    require("../images/cars/car-11.png")
    },
    {
      id:        "soul",
      name:      "KIA SOUL",
      price:     PRICES.soul,
      advantage: ADVANTAGES.soul,
      credit:    CREDITS.soul,
      imgUrl:    require("../images/cars/car-12.png")
    },
    {
      id:        "sportage",
      name:      "KIA SPORTAGE",
      price:     PRICES.sportage,
      advantage: ADVANTAGES.sportage,
      credit:    CREDITS.sportage,
      imgUrl:    require("../images/cars/car-13.png")
    },
    {
      id:        "sorento",
      name:      "KIA SORENTO",
      price:     PRICES.sorento,
      advantage: ADVANTAGES.sorento,
      credit:    CREDITS.sorento,
      imgUrl:    require("../images/cars/car-14.png")
    },
    {
      id:        "sorento_prime",
      name:      "KIA SORENTO PRIME",
      price:     PRICES.sorento_prime,
      advantage: ADVANTAGES.sorento_prime,
      credit:    CREDITS.sorento_prime,
      imgUrl:    require("../images/cars/car-15.png")
    },
    {
      id:        "mohave",
      name:      "KIA MOHAVE",
      price:     PRICES.mohave,
      advantage: ADVANTAGES.mohave,
      credit:    CREDITS.mohave,
      imgUrl:    require("../images/cars/car-16.png")
    }
  ]
};