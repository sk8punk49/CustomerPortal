import mock from "../mock";

const premiumsDB = {
  premiumItems: [
    {
      id: 3138,
      status: "active",
      premiumId: 28,
      partNumber: "ITUNES75",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "75 iTunes Gift Card",
      retail_price: 75,
      cost_price: 75,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3137,
      status: "active",
      premiumId: 28,
      partNumber: "50 Costco Gift Card",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Costco",
      description: "50 Costco Gift Card",
      retail_price: 50,
      cost_price: 50,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3135,
      status: "active",
      premiumId: 28,
      partNumber: "TimeBox",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Lenovo",
      description: "Timebox-EVO Speaker",
      retail_price: 37,
      cost_price: 34,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3136,
      status: "active",
      premiumId: 28,
      partNumber: "Jumbo Joe",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Jumbo Joe 18 Portable Charcoal Grill",
      retail_price: 120.99,
      cost_price: 93.98,
      premium_value: 2000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3141,
      status: "active",
      premiumId: 28,
      partNumber: "ITUNES150",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "150 iTunes Gift Card",
      retail_price: 150,
      cost_price: 150,
      premium_value: 4000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3140,
      status: "active",
      premiumId: 28,
      partNumber: "AirPods",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "AirPods 2nd Generation",
      retail_price: 168,
      cost_price: 161,
      premium_value: 4000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3142,
      status: "active",
      premiumId: 28,
      partNumber: "MINIHOMEPOD",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "HOMEPOD MINI",
      retail_price: 129.95,
      cost_price: 129,
      premium_value: 4000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3139,
      status: "active",
      premiumId: 28,
      partNumber: "Luxe",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "FitBit",
      description: "Luxe FitBit",
      retail_price: 199.95,
      cost_price: 168,
      premium_value: 4000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3147,
      status: "active",
      premiumId: 28,
      partNumber: "MXH02CL/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "Apple TV 4K 64GB",
      retail_price: 250,
      cost_price: 239.99,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3254,
      status: "active",
      premiumId: 28,
      partNumber: "MX432LL/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "Beats Solo3 Wireless Headphones-Black",
      retail_price: 235,
      cost_price: 225,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3146,
      status: "active",
      premiumId: 28,
      partNumber: "CHARGE5",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "FitBit",
      description: "Charge 5 FitBit-Includes Small & Large Bands",
      retail_price: 229,
      cost_price: 181,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3143,
      status: "active",
      premiumId: 28,
      partNumber: "WES31-15110BLK",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "NLI Solutions",
      description: "Westinghouse Free Standing Infrared Heater",
      retail_price: 319.99,
      cost_price: 240,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3253,
      status: "active",
      premiumId: 28,
      partNumber: "E310",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Vitamix",
      description: "Vitamix E310",
      retail_price: 299.95,
      cost_price: 203.95,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3145,
      status: "active",
      premiumId: 28,
      partNumber: "22KETTLE",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Original Kettle Premium 22 Charcoal Grill",
      retail_price: 318,
      cost_price: 232.55,
      premium_value: 6000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3255,
      status: "active",
      premiumId: 28,
      partNumber: "HMJT2VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "HP Tango X Printer",
      retail_price: 304.45,
      cost_price: 289.95,
      premium_value: 9000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3148,
      status: "active",
      premiumId: 28,
      partNumber: "AIRPODPRO",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "MWP22AMIA-AirPod Pro",
      retail_price: 329,
      cost_price: 296,
      premium_value: 9000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3144,
      status: "active",
      premiumId: 28,
      partNumber: "BS611",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Bradley",
      description: "Bradley 4-Rack Original Smoker",
      retail_price: 399.99,
      cost_price: 288,
      premium_value: 9000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3151,
      status: "active",
      premiumId: 28,
      partNumber: "VERSA3",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "FitBit",
      description: "Versa 3 FitBit",
      retail_price: 299.95,
      cost_price: 255,
      premium_value: 9000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3149,
      status: "active",
      premiumId: 28,
      partNumber: "Q1200",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description:
        "Q1200 Series Portable Gas Grill Includes Side Tables& Thermometer",
      retail_price: 369,
      cost_price: 275.47,
      premium_value: 9000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3257,
      status: "active",
      premiumId: 28,
      partNumber: "MX3X2LL/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "Beats Studio 3 Wireless Over-Ear Headphones-Black",
      retail_price: 378,
      cost_price: 360,
      premium_value: 12000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3155,
      status: "active",
      premiumId: 28,
      partNumber: "BTDS108P",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Bradley",
      description: "Bradley 6-Rack Original Smoker-108L",
      retail_price: 599.99,
      cost_price: 352,
      premium_value: 12000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3256,
      status: "active",
      premiumId: 28,
      partNumber: "Sense",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "FitBit",
      description: "FitBit Sense",
      retail_price: 402,
      cost_price: 338,
      premium_value: 12000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3258,
      status: "active",
      premiumId: 28,
      partNumber: "PH-90202-SS",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "NLI Solutions",
      description:
        "Permasteel 1550 Watt Electric Infrared Stainless Steel Patio Heater with Table",
      retail_price: 399.99,
      cost_price: 310,
      premium_value: 12000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3152,
      status: "active",
      premiumId: 28,
      partNumber: "MK2K3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "10.2-inch iPad Wi-Fi 64gb",
      retail_price: 450,
      cost_price: 429,
      premium_value: 16000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3157,
      status: "active",
      premiumId: 28,
      partNumber: "MKMX3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description:
        "Apple Watch 6 GPS 41mm Space Grey Aluminium Case with Black Sports Band-Regular",
      retail_price: 555,
      cost_price: 529,
      premium_value: 16000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3150,
      status: "active",
      premiumId: 28,
      partNumber: "A2500",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Vitamix",
      description: "Vitamix Ascent Series Blender",
      retail_price: 549.95,
      cost_price: 424.95,
      premium_value: 16000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3156,
      status: "active",
      premiumId: 28,
      partNumber: "9010001",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Weber Traveler LP Black",
      retail_price: 549,
      cost_price: 422.65,
      premium_value: 16000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3162,
      status: "active",
      premiumId: 28,
      partNumber: "MK2K3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "10.9-inch iPad Air Wi-Fi 256gb",
      retail_price: 660,
      cost_price: 629,
      premium_value: 20000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3160,
      status: "active",
      premiumId: 28,
      partNumber: "IWATCHCELL41",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description:
        "Apple Watch 6 GPS  Cellular 41mm Space Grey Aluminium Case with Black Sports Band-Regular",
      retail_price: 678,
      cost_price: 659,
      premium_value: 20000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3159,
      status: "active",
      premiumId: 28,
      partNumber: "MK7M3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "iPad Mini Wi-Fi 64gb",
      retail_price: 675,
      cost_price: 649,
      premium_value: 20000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3161,
      status: "active",
      premiumId: 28,
      partNumber: "KD50X80J",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Sony",
      description: "Sony TV 50 Bravia LED Smart TV",
      retail_price: 899.99,
      cost_price: 689.99,
      premium_value: 20000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3166,
      status: "active",
      premiumId: 28,
      partNumber: "HT-Z9F",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Sony",
      description: "Sound Bar System-for home theater- 3.1-channel-wireless",
      retail_price: 999.99,
      cost_price: 678.32,
      premium_value: 24000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3165,
      status: "active",
      premiumId: 28,
      partNumber: "46510001",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Spirit E-310 Gas Grill",
      retail_price: 840,
      cost_price: 799.99,
      premium_value: 24000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3168,
      status: "active",
      premiumId: 28,
      partNumber: "Trampoline",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "",
      description: "17 Trampoline with Enclosure & Shooter Game",
      retail_price: 1000,
      cost_price: 850,
      premium_value: 36000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3259,
      status: "active",
      premiumId: 28,
      partNumber: "MK893VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "iPad Mini Wi-Fi  Cell 64gb",
      retail_price: 892,
      cost_price: 849,
      premium_value: 36000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3167,
      status: "active",
      premiumId: 28,
      partNumber: "MLIC3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "iPhone 13 Mini 128GB Midnight",
      retail_price: 956,
      cost_price: 911,
      premium_value: 36000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3260,
      status: "active",
      premiumId: 28,
      partNumber: "MGN93LL/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "13-inch MacBook Air M1 Chip with 8-core CPU",
      retail_price: 1268,
      cost_price: 1208,
      premium_value: 48000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3171,
      status: "active",
      premiumId: 28,
      partNumber: "MLUF3VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "iPhone 13 Pro 128GB Silver",
      retail_price: 1469,
      cost_price: 1399,
      premium_value: 48000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3169,
      status: "active",
      premiumId: 28,
      partNumber: "E35",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "SOLE",
      description: "E35 SOLE Elliptical-20 Stride-7.5 LCD-SOLE App",
      retail_price: 1699.99,
      cost_price: 1325,
      premium_value: 48000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3170,
      status: "active",
      premiumId: 28,
      partNumber: "KD65X85J",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Sony",
      description: "Sony TV 65 4K TV",
      retail_price: 1699.99,
      cost_price: 1017.99,
      premium_value: 48000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3172,
      status: "active",
      premiumId: 28,
      partNumber: "35410001",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Genesis E-335 LP Black",
      retail_price: 1799,
      cost_price: 1364.3,
      premium_value: 48000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3175,
      status: "active",
      premiumId: 28,
      partNumber: "MHR73VC/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "12.9-Inch iPad Pro Wi-Wi  Cellular 256gb-Space Grey",
      retail_price: 1899,
      cost_price: 1729,
      premium_value: 60000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3173,
      status: "active",
      premiumId: 28,
      partNumber: "XE395",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "SPIRIT",
      description: "SPIRIT XE395 Elliptical 7.5 LCD-SPIRIT App",
      retail_price: 1700,
      cost_price: 1550,
      premium_value: 60000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3174,
      status: "active",
      premiumId: 28,
      partNumber: "TOOLBOX56",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "TCA",
      description: "PRN56TC10BK- TCA 56 Top Tool Chest",
      retail_price: 0,
      cost_price: 1753.52,
      premium_value: 60000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3180,
      status: "active",
      premiumId: 28,
      partNumber: "MKGP3LL/A",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Apple",
      description: "14-Inch MacBook Pro Apple M1 Pro chip with 8-core 512gb",
      retail_price: 2999,
      cost_price: 2499,
      premium_value: 75000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3179,
      status: "active",
      premiumId: 28,
      partNumber: "PELOTON",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Peloton",
      description: "Peloton Introactive Bike including 3 Workout Programs",
      retail_price: 2950,
      cost_price: 2750,
      premium_value: 75000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3261,
      status: "active",
      premiumId: 28,
      partNumber: "XBR75X900H",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Sony",
      description: "Sony 75 Bravia LED Smart TV",
      retail_price: 3299.99,
      cost_price: 2408.99,
      premium_value: 75000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: 2916,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3178,
      status: "active",
      premiumId: 28,
      partNumber: "7170001",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Weber",
      description: "Summit S-470 Gas Grill LP Stainless Steel",
      retail_price: 3549,
      cost_price: 2763.96,
      premium_value: 75000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 2916,
      cartQty: "",
    },
    {
      id: 3183,
      status: "active",
      premiumId: 28,
      partNumber: "Daytona",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Daytona",
      description: "Daytona Trip for 1 in 2022",
      retail_price: 10000,
      cost_price: 7500,
      premium_value: 100000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3182,
      status: "active",
      premiumId: 28,
      partNumber: "Duncanby",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "LODGE",
      description: "3 Day Getaway at Duncanby Lodge",
      retail_price: 4000,
      cost_price: 4000,
      premium_value: 100000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
    {
      id: 3181,
      status: "active",
      premiumId: 28,
      partNumber: "PELOTONPLUS",
      premiumType: "lordco",
      itemChoice: "no",
      itemChoices: "",
      lineDescription: "Peloton",
      description: "Peloton Bike  The Ultimate Cardio & Strenght Experience",
      retail_price: 3295,
      cost_price: 3295,
      premium_value: 100000,
      supplierId: 0,
      createDate: "",
      createdBy_employeeId: null,
      modifiedBy_employeeId: 0,
      cartQty: "",
    },
  ],
};

mock.onGet("/api/premiums/premiumItems").reply((config) => {
  return [200, premiumsDB.premiumItems];
});
