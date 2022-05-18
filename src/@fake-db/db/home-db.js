import mock from "../mock";

const homeDB = {
  test: [
    {
      id: 1,
      partNumber: "PH8A",
    },
    {
      id: 2,
      partNumber: "PH2",
    },
  ],

  customerDiscounts: [
    {
      id: "003",
      description: "ACCEL",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "017",
      description: "SKF BEARINGS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "039",
      description: "CARTER",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "048",
      description: "SKF SEALS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "063",
      description: "FRAM AUTOMOTIVE",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "070",
      description: "HOLLEY",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "078",
      description: "K D TOOLS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "091",
      description: "MONROE SHOCK",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "092",
      description: "MOOG CHASSIS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "093",
      description: "MOROSO",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "096",
      description: "MR GASKET",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "097",
      description: "MSD",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "0CH",
      description: "CURT HITCHES",
      discountLevel: 4,
      discount: -40,
    },
    {
      id: "0DH",
      description: "DOUGS HEADERS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "0HP",
      description: "HAWK PERFORMANCE",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "0LC",
      description: "LUK CLUTCH",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "0LF",
      description: "LUK FLYWHEEL",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "0LO",
      description: "LORDCO OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "0ML",
      description: "MOTUL LUBRICANTS",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "0PE",
      description: "PACE EDWARDS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "0SA",
      description: "STRONGARM LIFT SUPPORTS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "0SC",
      description: "POWERTEQ",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "0WF",
      description: "WAGNER FRICTION",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "0WT",
      description: "WEATHER TECH",
      discountLevel: 4,
      discount: -40,
    },
    {
      id: "101",
      description: "NGK SPARK PLUGS",
      discountLevel: 7,
      discount: 17,
    },
    {
      id: "105",
      description: "PAPCO",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "10K",
      description: "MOBIL 1 OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "11O",
      description: "NGK (NTK) OXYGEN SENSORS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "12K",
      description: "BBK PERFORMANCE",
      discountLevel: 1,
      discount: 30,
    },
    {
      id: "15U",
      description: "UNICHIP",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "164",
      description: "RAYBESTOS BRAKE HYDRAULICS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "171",
      description: "WALKER EXHAUST",
      discountLevel: 7,
      discount: 38,
    },
    {
      id: "192",
      description: "AC DELCO BATTERIES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "208",
      description: "ROL EXHAUST & GASKET",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "212",
      description: "KIMBERLY CLARK",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "21A",
      description: "RACOR FILTERS / ADP DISTRIBUTORS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "21Z",
      description: "ROTOMASTER TURBOS & MISC",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "225",
      description: "MAGNACHARGE AUTOMOTIVE BATTERIES",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "237",
      description: "AC DELCO SPARK PLUGS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "241",
      description: "TRICO WIPER BLADES",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "247",
      description: "CASTROL OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "25K",
      description: "MAGNAFLOW PERFORMANCE",
      discountLevel: 4,
      discount: -25,
    },
    {
      id: "267",
      description: "QUAKER STATE",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "26B",
      description: "BUSHWACKER",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "284",
      description: "HOOKER HEADERS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "286",
      description: "DORMAN HELP",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28A",
      description: "DORMAN AXLES",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28D",
      description: "DORMAN (RESERVED)",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28H",
      description: "DORMAN HARMONIC BALANCERS",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28M",
      description: "DORMAN MANIFOLDS",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28O",
      description: "DORMAN OIL LINES",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28U",
      description: "DORMAN REMAN CLUSTERS",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28W",
      description: "DORMAN WELDING",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "28Z",
      description: "DORMAN OE SOLUTIONS",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "296",
      description: "EDELBROCK",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "306",
      description: "ENERGY SUSPENSION",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "31M",
      description: "MCLEOD RACING",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "341",
      description: "K & N FILTERS",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "342",
      description: "K & N POWERSPORTS",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "344",
      description: "K & N HEAVY DUTY",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "34S",
      description: "SPECTRE",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "37A",
      description: "FLOWMASTER",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "400",
      description: "BALDWIN FILTER",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "417",
      description: "DEE ZEE",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "42A",
      description: "FLOW-TECH",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "461",
      description: "CENTERFORCE CLUTCHES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "46I",
      description: "WALKER STRAIGHT PIPE",
      discountLevel: 4,
      discount: -25,
    },
    {
      id: "49F",
      description: "FIRESTONE AIR BAGS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "513",
      description: "HURST",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "518",
      description: "TRANSDAPT/HAMBURGER'S",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "519",
      description: "HEDMAN STREET HEDDERS",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "51D",
      description: "DC SPORTS / DME",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "538",
      description: "FRAM HEAVY DUTY",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "53B",
      description: "CARDONE P/B BOOSTER",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53C",
      description: "CARDONE CALIPER",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "53D",
      description: "CARDONE DISTRIBUTOR",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53F",
      description: "CARDONE ABS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53K",
      description: "CARDONE REMAN SHAFTS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53M",
      description: "CARDONE MASTER CYLINDER",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53R",
      description: "CARDONE RACK & PINION",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53W",
      description: "CARDONE WATER PUMP",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "53X",
      description: "CARDONE NEW SHAFTS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "545",
      description: "PENNZOIL",
      discountLevel: 4,
      discount: -25,
    },
    {
      id: "54I",
      description: "INROBLE AUTOMOTIVE",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "54N",
      description: "CARDONE NEW WATER PUMPS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "57E",
      description: "EIBACH SPRINGS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "62M",
      description: "ANCHOR MOTOR MOUNTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "638",
      description: "NGK WIRES",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "63T",
      description: "FRAM TOUGH GUARD",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "646",
      description: "LUK CLUTCH / KING-O-MATIC",
      discountLevel: 7,
      discount: 30,
    },
    {
      id: "665",
      description: "RANCHO",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "669",
      description: "NATIONAL BEARING",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "66R",
      description: "LORDCO ROTORS",
      discountLevel: 7,
      discount: 40,
    },
    {
      id: "66X",
      description: "LORDCO EXTREME HD",
      discountLevel: 7,
      discount: 40,
    },
    {
      id: "67B",
      description: "PSC BILLING - DEBBIE SEVERN",
      discountLevel: 2,
      discount: 0,
    },
    {
      id: "67C",
      description: "AC DELCO ADV CHASSIS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "67H",
      description: "CHEVRON OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "67I",
      description: "AC DELCO TIMING BELTS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "67J",
      description: "AC DELCO PROFESSIONAL CHASSIS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "67K",
      description: "AC DELCO ADV CONTROL ARMS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "67N",
      description: "AC DELCO ADV FRICTION",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "67O",
      description: "AC DELCO OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "67T",
      description: "AC DELCO TRANS FILTERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "67V",
      description: "AC DELCO ADV ROTORS",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "67X",
      description: "AC DELCO ANTIFREEZE",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "67Y",
      description: "AC DELCO PROFESSIONAL ROTORS",
      discountLevel: 7,
      discount: 30,
    },
    {
      id: "68B",
      description: "AC DELCO NEW CALIPERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "68E",
      description: "AC DELCO ADV BRGS & SEALS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "68F",
      description: "AC DELCO BEAR/SEALS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "68N",
      description: "AC DELCO NEW ALT & STARTERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "68U",
      description: "AC DELCO WATER PUMPS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "68X",
      description: "AC DELCO ADV FILTERS EXC OIL",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "68Z",
      description: "AC DELCO BELTS/HOSES",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "69C",
      description: "AC DELCO PROFESSIONAL CALIPERS",
      discountLevel: 7,
      discount: 27,
    },
    {
      id: "69D",
      description: "AC DELCO PROFESSIONAL BRAKES",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "69F",
      description: "AC DELCO FUEL PUMPS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69J",
      description: "AC DELCO FWD PARTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69K",
      description: "AC DELCO CHEMICALS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69L",
      description: "AC DELCO LIGHTING",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69O",
      description: "AC DELCO OIL FILTERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "69P",
      description: "AC DELCO O2 SENSORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69S",
      description: "AC DELCO ALT & STARTERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69U",
      description: "AC DELCO TRANS PARTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "69W",
      description: "AC DELCO ADV OIL FILTERS",
      discountLevel: 7,
      discount: 30,
    },
    {
      id: "73B",
      description: "BULLY DOG TECHNOLOGIES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "762",
      description: "HYPERTECH",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "765",
      description: "AIRAWARE/SCHRADER-BRIDGEPORT",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "766",
      description: "MOOG U-JOINTS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "76P",
      description: "PUTCO",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "79A",
      description: "BOSCH REMAN ELECTRICAL",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "79B",
      description: "",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "79D",
      description: "BOSCH DIESEL",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "79N",
      description: "BOSCH NEW ALTERNATORS & STARTERS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "79O",
      description: "BOSCH OXY SENSORS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "804",
      description: "FOUR SEASONS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "80S",
      description: "SUSPENSION TECHNIQUES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "85A",
      description: "SPI AIR CONDITIONING",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "85F",
      description: "SPI FUEL PUMPS / SENDERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "85H",
      description: "SPI HEATER CORES",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "85M",
      description: "MIDDLETON PETROLEUM",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "85O",
      description: "SPI OIL PANS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "85R",
      description: "SPI RADIATORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "85S",
      description: "SPI GAS TANKS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "87C",
      description: "CENTRIC CALIPERS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "87P",
      description: "",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "87S",
      description: "STOPTECH",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "898",
      description: "TRAILMASTER",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "91A",
      description: "MONROE QUICK STRUT",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "91E",
      description: "MONROE ECONO-MATIC STRUTS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "91H",
      description: "MONROE HEAVY DUTY",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "92C",
      description: "MOOG COIL SPRINGS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "92T",
      description: "",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "960",
      description: "WEIAND",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "963",
      description: "RAYBESTOS FRICTION",
      discountLevel: 7,
      discount: 40,
    },
    {
      id: "97T",
      description: "TOOL CACHE",
      discountLevel: 2,
      discount: 0,
    },
    {
      id: "AAS",
      description: "AISIN ABS SENSORS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "ACB",
      description: "AC DELCO BULK OIL",
      discountLevel: 2,
      discount: 0,
    },
    {
      id: "ACD",
      description: "DELCO ADVANTAGE BATTERIES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "ACK",
      description: "AISIN CLUTCH KIT",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "ADA",
      description: "AISIN DOOR ACTUATORS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AHT",
      description: "AISIN HYDRAULIC TENSIONERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AHY",
      description: "AISIN CLUTCH HYDRAULICS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AIR",
      description: "AIR LIFT AIR SPRINGS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "AJU",
      description: "AJUSA",
      discountLevel: 7,
      discount: 10,
    },
    {
      id: "AKE",
      description: "AKEBONO BRAKE",
      discountLevel: 7,
      discount: 35,
    },
    {
      id: "ATB",
      description: "AISIN THROTTLE BODY",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "ATC",
      description: "AISIN TIMING COVERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "ATM",
      description: "AISIN TIMING BELT KITS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AVS",
      description: "AISIN VAC SWITCH VALVES",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AVT",
      description: "AISIN VARIABLE TIMING SPROCKETS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "AWP",
      description: "AISIN WATER PUMPS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "BAF",
      description: "BECK ANTIFREEZE",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BAK",
      description: "BAK INDUSTRIES",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "BBE",
      description: "BECK BEARINGS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BCA",
      description: "BECK CALIPERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BCH",
      description: "BECK CHASSIS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BCL",
      description: "BECK CLUTCH",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BCR",
      description: "BECK CONTROL ARMS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BCV",
      description: "BECK CV",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BDI",
      description: "BECK DISTRIBUTORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BDR",
      description: "BECK DRUMS & ROTORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BDZ",
      description: "BECK ZIMMERMAN DRUMS/ROTORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BEP",
      description: "BECK ENGINE PARTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFC",
      description: "BECK FAN CLUTCH",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFI",
      description: "BECK FILTERS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFJ",
      description: "BECK FUEL INJECTORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFO",
      description: "BECK FRICTION OE",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFP",
      description: "BECK FUEL PUMPS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFR",
      description: "BECK FRICTION",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BFU",
      description: "BECK FUEL",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BGA",
      description: "BECK GASKETS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BHF",
      description: "",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BHR",
      description: "BEHR TEMPERATURE CONTROL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "BHY",
      description: "BECK HYDRAULICS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BIG",
      description: "BECK IGNITION",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BIL",
      description: "BILSTEIN SHOCK ABSORBERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "BIW",
      description: "BECK IGNITION WIRES",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BMA",
      description: "",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BMT",
      description: "BECK MOUNTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BNW",
      description: "BECK NEW W/PUMP",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BOI",
      description: "BECK OIL",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BOX",
      description: "BECK O2 SENSORS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BPS",
      description: "BECK POWER STEERING",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BPV",
      description: "BECK PCV VALVES",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BSE",
      description: "BECK SEALS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BTB",
      description: "BECK TIMING BELTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BTH",
      description: "BECK THERMOSTATS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "BWS",
      description: "BORG TPMS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "CHA",
      description: "CURT HITCH ACCESSORIES",
      discountLevel: 4,
      discount: -40,
    },
    {
      id: "CRP",
      description: "CONTINENTAL BELTS",
      discountLevel: 4,
      discount: -55,
    },
    {
      id: "CSK",
      description: "CONTITECH SERPENTINE KITS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "CTP",
      description: "CONTITECH TIMING PRODUCTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "DAC",
      description: "DENSO AIR CONDITIONING",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DAM",
      description: "DENSO AIR MASS SENSORS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DCA",
      description: "DORMAN CONTROL ARMS",
      discountLevel: 4,
      discount: -50,
    },
    {
      id: "DFI",
      description: "DENSO FILTERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DFU",
      description: "DENSO FUEL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DIG",
      description: "DENSO IGNITION",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DNE",
      description: "DENSO NEW ELECTRICAL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DOR",
      description: "",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "DOX",
      description: "DENSO OXYGEN SENSORS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "DPL",
      description: "DENSO PLUGS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DRE",
      description: "DENSO REMAN ELECTRICAL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "DWI",
      description: "DENSO COIL ON PLUG BOOT KITS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "FAG",
      description: "FAG BEARINGS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "FXE",
      description: "FX EXHAUST",
      discountLevel: 4,
      discount: -43,
    },
    {
      id: "HEP",
      description: "HITACHI EMISSION PARTS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "HFJ",
      description: "HITACHI FUEL INJECTORS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "HFP",
      description: "HITACHI FUEL PUMPS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "HIC",
      description: "HITACHI IGNITION COILS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "HMA",
      description: "HITACHI MASS AIR FLOW",
      discountLevel: 7,
      discount: 10,
    },
    {
      id: "HME",
      description: "",
      discountLevel: 7,
      discount: 10,
    },
    {
      id: "HSE",
      description: "HITACHI SENSORS",
      discountLevel: 7,
      discount: 10,
    },
    {
      id: "HWP",
      description: "HITACHI WATER PUMPS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "KOY",
      description: "KOYO",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "KYB",
      description: "KYB SHOCKS AND STRUTS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "LHY",
      description: "LUK HYDRAULICS",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "LPS",
      description: "LUK POWER STEERING",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "LUO",
      description: "LUCAS OIL",
      discountLevel: 4,
      discount: -25,
    },
    {
      id: "MAN",
      description: "MANN-HUMMEL FILTERS",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "MCA",
      description: "MOOG CONTROL ARMS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "MFI",
      description: "MAHLE FILTERS",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "MLD",
      description: "MOTUL LUBRICANT DRUMS",
      discountLevel: 7,
      discount: 0,
    },
    {
      id: "MRE",
      description: "MITSUBISHI ROTATING ELECTRICAL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "MTB",
      description: "MAHLE TURBOCHARGERS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "MTH",
      description: "MAHLE THERMOSTATS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "NGC",
      description: "NEW GENERATION CLUTCHES",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "PBG",
      description: "PIERBURG",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "PFL",
      description: "PENTOSIN FLUIDS",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "PFO",
      description: "PENTOSIN OIL",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "PGP",
      description: "PAGID BRAKE PADS",
      discountLevel: 7,
      discount: 15,
    },
    {
      id: "PHI",
      description: "PHILIPS LIGHTING",
      discountLevel: 7,
      discount: 25,
    },
    {
      id: "PZB",
      description: "PENNZOIL BULK",
      discountLevel: 2,
      discount: 0,
    },
    {
      id: "QSB",
      description: "",
      discountLevel: 2,
      discount: 0,
    },
    {
      id: "RCH",
      description: "REIN COOLANT HOSES",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "RFA",
      description: "REIN FIRST AID",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "RLO",
      description: "RED LINE OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "RLS",
      description: "READYLIFT SUSPENSION",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "RMT",
      description: "REIN MOUNTS",
      discountLevel: 4,
      discount: -45,
    },
    {
      id: "ROY",
      description: "ROYAL PURPLE",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "SHL",
      description: "SHELL OIL",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "SIL",
      description: "SALERI ITALY",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "SKY",
      description: "SKYJACKER SUSPENSION",
      discountLevel: 4,
      discount: -35,
    },
    {
      id: "VIB",
      description: "VIBRANT PERFORMANCE",
      discountLevel: 4,
      discount: -30,
    },
    {
      id: "VRE",
      description: "VALEO ROTATING ELECTRICAL",
      discountLevel: 7,
      discount: 20,
    },
    {
      id: "ZIM",
      description: "ZIMMERMANN DRUMS/ROTORS",
      discountLevel: 7,
      discount: 25,
    },
  ],

  widgets: [
    {
      id: "widget1",
      ranges: {
        DY: "Yesterday",
        DT: "Today",
        DTM: "Tomorrow",
      },
      currentRange: "DT",
      data: {
        name: "Due Tasks",
        count: {
          DY: 21,
          DT: 25,
          DTM: 19,
        },
        extra: {
          name: "Completed",
          count: {
            DY: 6,
            DT: 7,
            DTM: "-",
          },
        },
      },
      detail:
        "You can show some detailed information about this widget in here.",
    },
    {
      id: "widget2",
      title: "Overdue",
      data: {
        name: "Tasks",
        count: 4,
        extra: {
          name: "Yesterday's overdue",
          count: 2,
        },
      },
      detail:
        "You can show some detailed information about this widget in here.",
    },
    {
      id: "widget3",
      title: "Issues",
      data: {
        name: "Open",
        count: 32,
        extra: {
          name: "Closed today",
          count: 0,
        },
      },
      detail:
        "You can show some detailed information about this widget in here.",
    },
    {
      id: "widget4",
      title: "Features",
      data: {
        name: "Proposals",
        count: 42,
        extra: {
          name: "Implemented",
          count: 8,
        },
      },
      detail:
        "You can show some detailed information about this widget in here.",
    },
    {
      id: "widget5",
      title: "Github Issues",
      ranges: {
        TW: "This Week",
        LW: "Last Week",
        "2W": "2 Weeks Ago",
      },
      mainChart: {
        TW: {
          series: [
            {
              name: "Issues",
              data: [42, 28, 43, 34, 20, 25, 22],
            },
            {
              name: "Closed issues",
              data: [11, 10, 8, 11, 8, 10, 17],
            },
          ],
        },
        "2W": {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          series: [
            {
              name: "Issues",
              data: [37, 32, 39, 27, 18, 24, 20],
            },
            {
              name: "Closed issues",
            },
          ],
        },
        LW: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          series: [
            {
              name: "Issues",
              data: [37, 24, 51, 31, 29, 17, 31],
            },
            {
              name: "Closed issues",
              data: [12, 8, 7, 13, 7, 6, 10],
            },
          ],
        },
        options: {
          chart: {
            height: "100%",
            type: "bar",
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "90%",
              horizontal: false,
            },
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            followCursor: true,
            theme: "dark",
            fixed: {
              enabled: false,
              position: "topRight",
              offsetX: 0,
              offsetY: 0,
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
        },
      },
      supporting: {
        created: {
          name: "CREATED",
          count: {
            "2W": 48,
            LW: 46,
            TW: 54,
          },
          chart: {
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [5, 8, 5, 6, 7, 8, 7],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [6, 3, 7, 5, 5, 4, 7],
                },
              ],
            },
            TW: {
              series: [
                {
                  name: "Created",
                  data: [3, 2, 1, 4, 8, 8, 4],
                },
              ],
            },
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
        closed: {
          name: "CLOSED",
          count: {
            "2W": 27,
            LW: 31,
            TW: 26,
          },
          chart: {
            TW: {
              series: [
                {
                  name: "Created",
                  data: [6, 3, 7, 5, 5, 4, 7],
                },
              ],
            },
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [3, 2, 1, 4, 8, 8, 4],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [6, 5, 4, 5, 7, 4, 7],
                },
              ],
            },
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
        reOpened: {
          name: "RE-OPENED",
          count: {
            "2W": 4,
            LW: 5,
            TW: 2,
          },
          chart: {
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [6, 3, 7, 5, 5, 4, 7],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [5, 7, 8, 8, 6, 4, 1],
                },
              ],
            },
            TW: {
              series: [
                {
                  name: "Created",
                  data: [3, 2, 1, 4, 8, 8, 4],
                },
              ],
            },
            TW2: [
              {
                name: "RE-OPENED",
                series: [
                  {
                    name: "Mon",
                    value: 3,
                  },
                  {
                    name: "Tue",
                    value: 2,
                  },
                  {
                    name: "Wed",
                    value: 1,
                  },
                  {
                    name: "Thu",
                    value: 4,
                  },
                  {
                    name: "Fri",
                    value: 8,
                  },
                  {
                    name: "Sat",
                    value: 8,
                  },
                  {
                    name: "Sun",
                    value: 4,
                  },
                ],
              },
            ],
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
        wontFix: {
          name: "WON'T FIX",
          count: {
            "2W": 6,
            LW: 3,
            TW: 4,
          },
          chart: {
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [5, 7, 4, 6, 5, 3, 2],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [6, 3, 7, 5, 5, 4, 7],
                },
              ],
            },
            TW: {
              series: [
                {
                  name: "Created",
                  data: [6, 5, 4, 5, 7, 4, 7],
                },
              ],
            },
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
        needsTest: {
          name: "NEEDS TEST",
          count: {
            "2W": 10,
            LW: 7,
            TW: 8,
          },
          chart: {
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [6, 5, 4, 5, 7, 4, 7],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [5, 7, 8, 8, 6, 4, 1],
                },
              ],
            },
            TW: {
              series: [
                {
                  name: "Created",
                  data: [6, 3, 7, 5, 5, 4, 7],
                },
              ],
            },
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
        fixed: {
          name: "FIXED",
          count: {
            "2W": 21,
            LW: 17,
            TW: 14,
          },
          chart: {
            "2W": {
              series: [
                {
                  name: "Created",
                  data: [5, 7, 8, 8, 6, 4, 1],
                },
              ],
            },
            LW: {
              series: [
                {
                  name: "Created",
                  data: [6, 5, 4, 5, 7, 4, 7],
                },
              ],
            },
            TW: {
              series: [
                {
                  name: "Created",
                  data: [5, 7, 4, 6, 5, 3, 2],
                },
              ],
            },
            options: {
              chart: {
                type: "area",
                height: "100%",
                sparkline: {
                  enabled: true,
                },
              },
              stroke: { width: 2 },
              grid: {
                padding: {
                  top: 10,
                  right: 0,
                  bottom: 10,
                  left: 0,
                },
              },
              fill: {
                type: "solid",
                opacity: 0.7,
              },
              tooltip: {
                followCursor: true,
                theme: "dark",
                fixed: {
                  enabled: false,
                  position: "topRight",
                  offsetX: 0,
                  offsetY: 0,
                },
              },
              xaxis: {
                categories: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
          },
        },
      },
    },
    {
      id: "widget6",
      title: "Task Distribution",
      ranges: {
        TW: "This Week",
        LW: "Last Week",
        "2W": "2 Weeks Ago",
      },
      currentRange: "TW",
      mainChart: {
        series: {
          TW: [15, 20, 38, 27],
          LW: [19, 16, 42, 23],
          "2W": [18, 17, 40, 25],
        },
        options: {
          series: [76, 67, 61],
          chart: {
            height: "100%",
            type: "polarArea",
          },
          stroke: {
            width: 1,
            colors: undefined,
          },
          fill: {
            type: "solid",
            opacity: 0.7,
          },
          legend: {
            position: "bottom",
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          labels: ["Frontend", "Backend", "API", "Issues"],
        },
      },
      footerLeft: {
        title: "Tasks Added",
        count: {
          "2W": 487,
          LW: 526,
          TW: 594,
        },
      },
      footerRight: {
        title: "Tasks Completed",
        count: {
          "2W": 193,
          LW: 260,
          TW: 287,
        },
      },
    },
    {
      id: "widget7",
      title: "Schedule",
      currentRange: "T",
      ranges: {
        T: "Today",
        TM: "Tomorrow",
      },
      schedule: {
        T: [
          {
            id: 1,
            title: "Group Meeting",
            time: "In 32 minutes",
          },
          {
            id: 2,
            title: "Coffee Break",
            time: "10:30 AM",
          },
          {
            id: 3,
            title: "Public Beta Release",
            time: "11:00 AM",
          },
          {
            id: 4,
            title: "Lunch",
            time: "12:10 PM",
          },
          {
            id: 5,
            title: "Dinner with David",
            time: "17:30 PM",
          },
          {
            id: 6,
            title: "Jane's Birthday Party",
            time: "19:30 PM",
          },
          {
            id: 7,
            title: "Overseer's Retirement Party",
            time: "21:30 PM",
          },
        ],
        TM: [
          {
            id: 1,
            title: "Marketing Meeting",
            time: "09:00 AM",
          },
          {
            id: 2,
            title: "Public Announcement",
            time: "11:00 AM",
          },
          {
            id: 3,
            title: "Lunch",
            time: "12:10 PM",
          },
          {
            id: 4,
            title: "Meeting with Beta Testers",
            time: "15:00 AM",
          },
          {
            id: 5,
            title: "Live Stream",
            time: "17:30 PM",
          },
          {
            id: 6,
            title: "Release Party",
            time: "19:30 PM",
          },
          {
            id: 7,
            title: "CEO's Party",
            time: "22:30 PM",
          },
        ],
      },
    },
    {
      id: "widget8",
      title: "Purchase Distribution",
      mainChart: {
        series: [12, 17, 28, 25, 15],
        options: {
          chart: {
            height: "100%",
            type: "pie",
          },
          stroke: {
            width: 1,
            colors: undefined,
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "bottom",
          },
          colors: ["#008FC5", "#00729e", "#005676", "#00394f", "#002b3b"],
          theme: {
            monochrome: {
              enabled: false,
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          labels: [
            "Automotive Parts",
            "Tools",
            "High Performance",
            "Chemicals",
            "Oil Products",
          ],
        },
      },
    },
    {
      id: "widget9",
      title: "Spent",
      ranges: {
        TW: "This Week",
        LW: "Last Week",
        "2W": "2 Weeks Ago",
      },
      currentRange: "TW",
      weeklySpent: {
        title: "THIS WEEK",
        count: {
          "2W": "2,682.85",
          LW: "1,445.34",
          TW: "3,630.15",
        },
        chart: {
          "2W": {
            series: [
              {
                name: "Invoices",
                data: [2, 6, 5, 4, 5, 3, 6],
              },
            ],
          },
          LW: {
            series: [
              {
                name: "Invoices",
                data: [4, 6, 2, 2, 1, 3, 4],
              },
            ],
          },
          TW: {
            series: [
              {
                name: "Invoices",
                data: [2, 6, 5, 4, 5, 3, 6],
              },
            ],
          },
          options: {
            chart: {
              type: "area",
              height: "100%",
              sparkline: {
                enabled: true,
              },
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0,
              },
            },
            fill: {
              type: "solid",
              opacity: 0.7,
            },
            tooltip: {
              followCursor: true,
              theme: "dark",
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0,
              },
            },
            xaxis: {
              categories: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
          },
        },
      },
      totalSpent: {
        title: "THIS MONTH",
        count: {
          "2W": "29,682.85",
          LW: "31,128.19",
          TW: "34,758.34",
        },
        chart: {
          "2W": {
            series: [
              {
                name: "Invoices",
                data: [3, 2, 2, 4, 7, 7, 4],
              },
            ],
          },
          LW: {
            series: [
              {
                name: "Invoices",
                data: [5, 7, 8, 8, 6, 4, 1],
              },
            ],
          },
          TW: {
            series: [
              {
                name: "Invoices",
                data: [6, 4, 7, 5, 5, 4, 7],
              },
            ],
          },
          options: {
            chart: {
              type: "area",
              height: "100%",
              sparkline: {
                enabled: true,
              },
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0,
              },
            },
            fill: {
              type: "solid",
              opacity: 0.7,
            },
            tooltip: {
              followCursor: true,
              theme: "dark",
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0,
              },
            },
            xaxis: {
              categories: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
          },
        },
      },
      remaining: {
        title: "LAST WEEK",
        count: {
          "2W": "4.317,15",
          LW: "2,871.81",
          TW: "9,241.66",
        },
        chart: {
          "2W": {
            series: [
              {
                name: "Invoices",
                data: [1, 4, 5, 7, 8, 2, 4],
                fill: true,
                backgroundColor: "#42BFF7",
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0,
              },
            ],
          },
          LW: {
            series: [
              {
                name: "Invoices",
                data: [3, 2, 1, 4, 8, 8, 4],
                fill: true,
                backgroundColor: "#42BFF7",
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0,
              },
            ],
          },
          TW: {
            series: [
              {
                name: "Invoices",
                data: [2, 4, 8, 6, 2, 5, 1],
                fill: true,
                backgroundColor: "#42BFF7",
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0,
              },
            ],
          },
          options: {
            chart: {
              type: "area",
              height: "100%",
              sparkline: {
                enabled: true,
              },
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0,
              },
            },
            fill: {
              type: "solid",
              opacity: 0.7,
            },
            tooltip: {
              followCursor: true,
              theme: "dark",
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0,
              },
            },
            xaxis: {
              categories: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
            },
          },
        },
      },
      totalBudget: {
        title: "YTD SPENT",
        count: "124.000,00",
      },
    },
    {
      id: "widget10",
      title: "Recent Transactions",
      table: {
        columns: [
          {
            id: "invoice_date",
            title: "Invoice Date",
          },
          {
            id: "invoice_number",
            title: "Invoice#",
          },
          {
            id: "invoice_time",
            title: "Time",
          },
          {
            id: "po_number",
            title: "Customer PO",
          },
          {
            id: "branch",
            title: "Branch",
          },
          {
            id: "total_amount",
            title: "Invoice Total",
          },
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: "invoice_date",
                value: "2022-04-30",
                classes: "font-semibold",
                icon: "",
              },
              {
                id: "invoice_number",
                value: "2NV029093",
                classes: "",
                icon: "",
              },
              {
                id: "invoice_time",
                value: "11:33:22",
                classes: "",
                icon: "",
              },
              {
                id: "po_number",
                value: "1",
                classes: "",
                icon: "",
              },

              {
                id: "branch",
                value: "#2 - MISSION",
                classes: "",
                icon: "",
              },
              {
                id: "total_amount",
                value: "$94.08",
                classes: "",
                icon: "",
              },
            ],
          },
          {
            id: 2,
            cells: [
              {
                id: "invoice_date",
                value: "2022-04-26",
                classes: "font-semibold",
                icon: "",
              },
              {
                id: "invoice_number",
                value: "15NV005944",
                classes: "",
                icon: "",
              },
              {
                id: "invoice_time",
                value: "17:59:22",
                classes: "",
                icon: "",
              },
              {
                id: "po_number",
                value: "CASH",
                classes: "",
                icon: "",
              },

              {
                id: "branch",
                value: "#15 - PIT MEADOWS",
                classes: "",
                icon: "",
              },
              {
                id: "total_amount",
                value: "$7.06",
                classes: "",
                icon: "",
              },
            ],
          },
          {
            id: 3,
            cells: [
              {
                id: "invoice_date",
                value: "2022-04-23",
                classes: "font-semibold",
                icon: "",
              },
              {
                id: "invoice_number",
                value: "2NV027837",
                classes: "",
                icon: "",
              },
              {
                id: "invoice_time",
                value: "12:16:02",
                classes: "",
                icon: "",
              },
              {
                id: "po_number",
                value: "0",
                classes: "",
                icon: "",
              },

              {
                id: "branch",
                value: "#2 - MISSION",
                classes: "",
                icon: "",
              },
              {
                id: "total_amount",
                value: "$77.20",
                classes: "",
                icon: "",
              },
            ],
          },
          {
            id: 4,
            cells: [
              {
                id: "invoice_date",
                value: "2022-04-10",
                classes: "font-semibold",
                icon: "",
              },
              {
                id: "invoice_number",
                value: "2CR002699",
                classes: "",
                icon: "",
              },
              {
                id: "invoice_time",
                value: "09:14:44",
                classes: "",
                icon: "",
              },
              {
                id: "po_number",
                value: "FIREBIRD",
                classes: "",
                icon: "",
              },

              {
                id: "branch",
                value: "#2 - MISSION",
                classes: "",
                icon: "",
              },
              {
                id: "total_amount",
                value: "-$53.88",
                classes: "",
                icon: "",
              },
            ],
          },
          {
            id: 5,
            cells: [
              {
                id: "invoice_date",
                value: "2022-04-09",
                classes: "font-semibold",
                icon: "",
              },
              {
                id: "invoice_number",
                value: "2NV025543",
                classes: "",
                icon: "",
              },
              {
                id: "invoice_time",
                value: "15:55:15",
                classes: "",
                icon: "",
              },
              {
                id: "po_number",
                value: "FIREBIRD",
                classes: "",
                icon: "",
              },

              {
                id: "branch",
                value: "#2 - MISSION",
                classes: "",
                icon: "",
              },
              {
                id: "total_amount",
                value: "$53.88",
                classes: "",
                icon: "",
              },
            ],
          },
        ],
      },
    },
    {
      id: "widget11",
      title: "Team Members",
      table: {
        columns: [
          {
            id: "avatar",
            title: "",
          },
          {
            id: "name",
            title: "Name",
          },
          {
            id: "position",
            title: "Position",
          },
          {
            id: "office",
            title: "Office",
          },
          {
            id: "email",
            title: "Email",
          },
          {
            id: "phone",
            title: "Phone",
          },
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/james.jpg",
              },
              {
                id: "name",
                value: "Jack Gilbert",
              },
              {
                id: "position",
                value: "Design Manager",
              },
              {
                id: "office",
                value: "Johor Bahru",
              },
              {
                id: "email",
                value: "jgilbert48@mail.com",
              },
              {
                id: "phone",
                value: "+16 298 032 7774",
              },
            ],
          },
          {
            id: 2,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/katherine.jpg",
              },
              {
                id: "name",
                value: "Kathy Anderson",
              },
              {
                id: "position",
                value: "Recruiting Manager",
              },
              {
                id: "office",
                value: "Solţānābād",
              },
              {
                id: "email",
                value: "kanderson49@mail.com.br",
              },
              {
                id: "phone",
                value: "+23 572 311 1136",
              },
            ],
          },
          {
            id: 3,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/garry.jpg",
              },
              {
                id: "name",
                value: "Gary Gonzalez",
              },
              {
                id: "position",
                value: "Speech Pathologist",
              },
              {
                id: "office",
                value: "Gangkou",
              },
              {
                id: "email",
                value: "ggonzalez4r@mail.cc",
              },
              {
                id: "phone",
                value: "+10 862 046 7916",
              },
            ],
          },
          {
            id: 4,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/andrew.jpg",
              },
              {
                id: "name",
                value: "Mark Turner",
              },
              {
                id: "position",
                value: "Recruiting Manager",
              },
              {
                id: "office",
                value: "Neftegorsk",
              },
              {
                id: "email",
                value: "mturner4a@mail.com",
              },
              {
                id: "phone",
                value: "+01 139 803 9263",
              },
            ],
          },
          {
            id: 5,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/jane.jpg",
              },
              {
                id: "name",
                value: "Kathryn Martinez",
              },
              {
                id: "position",
                value: "Director of Sales",
              },
              {
                id: "office",
                value: "Palekastro",
              },
              {
                id: "email",
                value: "kmartinez4b@mail.com",
              },
              {
                id: "phone",
                value: "+25 467 022 5393",
              },
            ],
          },
          {
            id: 6,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/alice.jpg",
              },
              {
                id: "name",
                value: "Annie Gonzales",
              },
              {
                id: "position",
                value: "Actuary",
              },
              {
                id: "office",
                value: "Candon",
              },
              {
                id: "email",
                value: "agonzales4c@mail.edu",
              },
              {
                id: "phone",
                value: "+99 891 619 7138",
              },
            ],
          },
          {
            id: 7,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/vincent.jpg",
              },
              {
                id: "name",
                value: "Howard King",
              },
              {
                id: "position",
                value: "Human Resources",
              },
              {
                id: "office",
                value: "Bergen op Zoom",
              },
              {
                id: "email",
                value: "hking4d@mail.gov",
              },
              {
                id: "phone",
                value: "+46 984 348 1409",
              },
            ],
          },
          {
            id: 8,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/joyce.jpg",
              },
              {
                id: "name",
                value: "Elizabeth Dixon",
              },
              {
                id: "position",
                value: "Electrical Engineer",
              },
              {
                id: "office",
                value: "Písečná",
              },
              {
                id: "email",
                value: "edixon4e@mail.gov",
              },
              {
                id: "phone",
                value: "+33 332 067 9063",
              },
            ],
          },
          {
            id: 9,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/danielle.jpg",
              },
              {
                id: "name",
                value: "Dorothy Morris",
              },
              {
                id: "position",
                value: "Office Assistant",
              },
              {
                id: "office",
                value: "Magsaysay",
              },
              {
                id: "email",
                value: "dmorris4f@mail.com",
              },
              {
                id: "phone",
                value: "+05 490 958 6120",
              },
            ],
          },
          {
            id: 10,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/carl.jpg",
              },
              {
                id: "name",
                value: "Mark Gonzales",
              },
              {
                id: "position",
                value: "Quality Control",
              },
              {
                id: "office",
                value: "Matsue-shi",
              },
              {
                id: "email",
                value: "mgonzales4g@mail.com",
              },
              {
                id: "phone",
                value: "+03 168 394 9935",
              },
            ],
          },
          {
            id: 11,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/profile.jpg",
              },
              {
                id: "name",
                value: "Catherine Rogers",
              },
              {
                id: "position",
                value: "Programmer Analyst",
              },
              {
                id: "office",
                value: "Kangar",
              },
              {
                id: "email",
                value: "crogers4h@mail.com",
              },
              {
                id: "phone",
                value: "+86 235 407 5373",
              },
            ],
          },
          {
            id: 12,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/garry.jpg",
              },
              {
                id: "name",
                value: "Ruth Grant",
              },
              {
                id: "position",
                value: "Community Outreach",
              },
              {
                id: "office",
                value: "Beaune",
              },
              {
                id: "email",
                value: "rgrant4i@mail.pl",
              },
              {
                id: "phone",
                value: "+36 288 083 8460",
              },
            ],
          },
          {
            id: 13,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/james.jpg",
              },
              {
                id: "name",
                value: "Phyllis Gutierrez",
              },
              {
                id: "position",
                value: "Administrative Assistant",
              },
              {
                id: "office",
                value: "Shlissel’burg",
              },
              {
                id: "email",
                value: "pgutierrez4j@mail.net",
              },
              {
                id: "phone",
                value: "+52 749 861 9304",
              },
            ],
          },
          {
            id: 14,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/alice.jpg",
              },
              {
                id: "name",
                value: "Lillian Morris",
              },
              {
                id: "position",
                value: "Media Planner",
              },
              {
                id: "office",
                value: "Berlin",
              },
              {
                id: "email",
                value: "lmorris4k@mail.de",
              },
              {
                id: "phone",
                value: "+59 695 110 3856",
              },
            ],
          },
          {
            id: 15,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/vincent.jpg",
              },
              {
                id: "name",
                value: "Jeremy Anderson",
              },
              {
                id: "position",
                value: "Systems Engineer",
              },
              {
                id: "office",
                value: "Lũng Hồ",
              },
              {
                id: "email",
                value: "janderson4l@mail.uk",
              },
              {
                id: "phone",
                value: "+40 384 115 1448",
              },
            ],
          },
          {
            id: 16,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/carl.jpg",
              },
              {
                id: "name",
                value: "Arthur Lawrence",
              },
              {
                id: "position",
                value: "Nurse Practicioner",
              },
              {
                id: "office",
                value: "Sarkanjut",
              },
              {
                id: "email",
                value: "alawrence4m@mail.com",
              },
              {
                id: "phone",
                value: "+36 631 599 7867",
              },
            ],
          },
          {
            id: 17,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/andrew.jpg",
              },
              {
                id: "name",
                value: "David Simmons",
              },
              {
                id: "position",
                value: "Social Worker",
              },
              {
                id: "office",
                value: "Ushumun",
              },
              {
                id: "email",
                value: "dsimmons4n@mail.com",
              },
              {
                id: "phone",
                value: "+01 189 681 4417",
              },
            ],
          },
          {
            id: 18,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/danielle.jpg",
              },
              {
                id: "name",
                value: "Daniel Johnston",
              },
              {
                id: "position",
                value: "Help Desk",
              },
              {
                id: "office",
                value: "São Carlos",
              },
              {
                id: "email",
                value: "djohnston4o@mail.gov",
              },
              {
                id: "phone",
                value: "+60 028 943 7919",
              },
            ],
          },
          {
            id: 19,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/joyce.jpg",
              },
              {
                id: "name",
                value: "Ann King",
              },
              {
                id: "position",
                value: "Internal Auditor",
              },
              {
                id: "office",
                value: "Liren",
              },
              {
                id: "email",
                value: "aking4p@mail.com",
              },
              {
                id: "phone",
                value: "+91 103 932 6545",
              },
            ],
          },
          {
            id: 20,
            cells: [
              {
                id: "avatar",
                value: "assets/images/avatars/james.jpg",
              },
              {
                id: "name",
                value: "Phillip Franklin",
              },
              {
                id: "position",
                value: "VP Accounting",
              },
              {
                id: "office",
                value: "Soba",
              },
              {
                id: "email",
                value: "pfranklin4q@mail.com",
              },
              {
                id: "phone",
                value: "+25 820 986 7626",
              },
            ],
          },
        ],
      },
    },
    {
      id: "weatherWidget",
      locations: {
        NewYork: {
          name: "New York",
          icon: "rainy2",
          temp: {
            C: "22",
            F: "72",
          },
          windSpeed: {
            KMH: 12,
            MPH: 7.5,
          },
          windDirection: "NW",
          rainProbability: "98%",
          next5Days: [
            {
              name: "Sunday",
              icon: "rainy",
              temp: {
                C: "21",
                F: "70",
              },
            },
            {
              name: "Monday",
              icon: "cloudy",
              temp: {
                C: "19",
                F: "66",
              },
            },
            {
              name: "Tuesday",
              icon: "windy3",
              temp: {
                C: "24",
                F: "75",
              },
            },
            {
              name: "Wednesday",
              icon: "rainy",
              temp: {
                C: "21",
                F: "70",
              },
            },
            {
              name: "Thursday",
              icon: "rainy2",
              temp: {
                C: "24",
                F: "75",
              },
            },
          ],
        },
      },
      currentLocation: "NewYork",
      tempUnit: "C",
      speedUnit: "KMH",
    },
  ],
  projects: [
    {
      id: 1,
      name: "ACME Corp. Backend App",
    },
    {
      id: 2,
      name: "ACME Corp. Frontend App",
    },
    {
      id: 3,
      name: "Creapond",
    },
    {
      id: 4,
      name: "Withinpixels",
    },
  ],
};

mock.onGet("/api/home/widgets").reply((config) => {
  return [200, homeDB.widgets];
});

mock.onGet("/api/home/projects").reply((config) => {
  return [200, homeDB.projects];
});

mock.onGet("/api/home/customerDiscounts").reply((config) => {
  return [200, homeDB.customerDiscounts];
});

mock.onGet("/api/home/test").reply((config) => {
  return [200, homeDB.test];
});
