const products = [
    {
        productid: "YBYMornMask7",
        name: "YBY Morning Mask (7PCS)",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
        info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/YBYMorningMask(7pcs).png",
        price: "210",
    },
    {
        productid: "YBYMornMask30",
        name: "YBY Morning Mask (30pcs)",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
        info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/YBYMorningMask(30pcs).png",
        price: "730",
    },
    {
        productid: "YBYNightMask7",
        name: "YBY Night Mask (7pcs)",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
        info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/YBYNightMask(7pcs).png",
        price: "210",
    },
    {
        productid: "YBYNightMask30",
        name: "YBY Night Mask (30pcs)s",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
        info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/YBYNightMask(30pcs).png",
        price: "730",
    },
    {
        productid: "YBYCleanGel",
        name: "YBY Cleansing Gel",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "An extra-ordinary facial mask that provides essential moisture,protects skin from external stimuli,and has deep cleansing formula.",
        info: "You Be You contains natural ingredients that makes it excellent for daily use.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/b2.jpg",
        price: "404",
    },
    {
        productid: "PuccuRed",
        name: "PUCCU Lipstick Beyond Red",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "\"A red beyond red\" that will allowyou to discover a new you thatgoes beyond your current self.",
        info: "A true moisturizing lip serum that perfects your natural lips.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/beyondred.png",
        price: "635",
    },
    {
        productid: "PuccuBerry",
        name: "PUCCU Lipstick Berry Flamingo",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "A deep pink that exudes\"dignified confidence\" and isloved throughout the ages.",
        info: "A true moisturizing lip serum that perfects your natural lips.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/berryflamingo.png",
        price: "635",
    },
    {
        productid: "PuccuOrange",
        name: "PUCCU Lipstick Sparky Blood Orange",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "A coral that has the juiciness ofearly summer, yetstill shines brightly in reality.",
        info: "A true moisturizing lip serum that perfects your natural lips.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/b2.jpg",
        price: "635",
    },
    {
        productid: "PuccuPiggy",
        name: "PUCCU Lipstick Princess Piggy",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "Captivating nude colors foran \"irresistible charm\".",
        info: "A true moisturizing lip serum that perfects your natural lips.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/princesspiggy.png",
        price: "635",
    },
    {
        productid: "FomToner",
        name: "FOM Toner",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
        info: "lorem ipsum",
        usage: "lorem ipsum",
        imgsrc: "/images/b2.jpg",
        price: "799",
    },
    {
        productid: "FomAqua",
        name: "FOM Aqua Serum",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
        info: "lorem ipsum",
        usage: "lorem ipsum",
        imgsrc: "/images/b2.jpg",
        price: "1299",
    },
    {
        productid: "FomCream",
        name: "FOM Cream",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        usage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgsrc: "/images/ibeauty1.png",
        price: "1699",
    },
    {
        productid: "ClinCera",
        name: "Clinience Ceramide",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
        info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/clinienceVitC.png",
        price: "3499",
    },
    {
        productid: "ClinCyto",
        name: "Clinience Cytokines",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
        info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/cliniencecytokines.png",
        price: "11499",
    },
    {
        productid: "ClinNmn",
        name: "Clinience NMN",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
        info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
        usage: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
        imgsrc: "/images/cliniencenmn.png",
        price: "",
    },
    {
        productid: "Dermashot",
        name: "Dermashot",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        usage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgsrc: "/images/ibeauty1.png",
        price: "7600",
    },
    {
        productid: "PureExom",
        name: "Pure Exom",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        usage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgsrc: "/images/ibeauty1.png",
        price: "7125",
    },
    {
        productid: "StemSai",
        name: "Stem Sai",
        category: "ibeauty",
        subcategories: "ageless",
        description: "",
        info: "",
        usage: "",
        imgsrc: "/images/stemsaiserum.png",
        price: "",
    },
    {
        productid: "FomPack",
        name: "FOM Pack",
        category: "ibeauty",
        subcategories: "ageless",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        usage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgsrc: "/images/ibeauty1.png",
        price: "2800",
    },
    {
        productid: "YbyClenGel",
        name: "YBY Cleansing Gel*",
        category: "ibeauty",
        subcategories: "ifresh",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        usage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgsrc: "/images/ibeauty1.png",
        price: "700",
    },

    {
        productid: "AplhaHT",
        name: "Aplha-HT",
        category: "jtech",
        subcategories: "alpha",
        description: "Alpha-HT is committed to transforming the way we power our world. By integrating a-HT technology, our air coolers provide a sustainable, cost-effective solution for a more comfortable and ecofriendly future, while reducing your energy consumption.",
        info: "By installing this device in the copper (UID) pipe of the ventilation system, power consumption can be reduced by 15% to 35%. Should be installed in the liquid pipeline between the condensation unit and the expansion valve.",
        usage: "To be discussed with a representative of Inspire Next Global Inc.",
        imgsrc: "/images/alpha-ht.png",
        price: "To be discussed with a representative of Inspire Next Global Inc.",
    },
    {
        productid: "Desknet",
        name: "Desknet's NEO",
        category: "jtech",
        subcategories: "desknet",
        description: "Desknet's NEO is a cloud-based groupware popular in Japan, offering businesses a customizable platform for collaboration, communication, and workflow management.",
        info: "Offers features such as file sharing, virtual meetings, task management, approval processes, calendar integration, and internal communication.",
        usage: "To be discussed with a representative of Inspire Next Global Inc.",
        imgsrc: "/images/Desknet'sNEO.png",
        price: "To be discussed with a representative of Inspire Next Global Inc.",
    },
    {
        productid: "Sqrc",
        name: "SQRC® (Security QR Code)",
        category: "jtech",
        subcategories: "A single QR Code can store both public and private data, with the private data accessible only through a specialized reader equipped with a cryptographic key, ensuring secure data protection. Since SQRC visually resembles a standard QR Code, it helps prevent forgery and tampering.",
        description: "A single code carries two types of data: public and private. Public data is accessible to anyone with a standard QR Code reader, while private data is encrypted and can only be accessed by a specialized reader equipped with a cryptographic key.",
        info: "A single code carries two types of data: public and private. Public data is accessible to anyone with a standard QR Code reader, while private data is encrypted and can only be accessed by a specialized reader equipped with a cryptographic key.",
        usage: "To be discussed with a representative of Inspire Next Global Inc.",
        imgsrc: "/images/SecurityQRCode.png",
        price: "To be discussed with a representative of Inspire Next Global Inc.",
    },
];

export default products;
