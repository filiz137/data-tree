import Vue from 'vue';

var json = Vue.extend({
    data: function () {
        return {
            arr: [
                {
                    "ID": 1,
                    "parentID": 0,
                    "Phone": "(403) 125-2552",
                    "City": "Coevorden",
                    "Name": "Grady"
                },
                {
                    "ID": 2,
                    "Phone": "(979) 486-1932",
                    "City": "Chełm",
                    "Name": "Scarlet"
                },
                {
                    "ID": 3,
                    "Phone": "(573) 685-8350",
                    "City": "Wardha",
                    "Name": "Adria"
                },
                { 
                    "ID": 4,
                    "parentID": 3,
                    "Phone": "(630) 292-9737",
                    "City": "Villers-la-Loue",
                    "Name": "Xerxes"
                },
                {
                    "ID": 5,
                    "Phone": "(755) 968-6539",
                    "City": "Gönen",
                    "Name": "Madeson"
                },
                {
                    "ID": 6,
                    "parentID": 5,
                    "Phone": "(644) 892-5485",
                    "City": "Timkur",
                    "Name": "Rae"
                },
                {
                    "ID": 7,
                    "Phone": "(896) 297-6568",
                    "City": "Louvain-la-Neuve",
                    "Name": "Celeste"
                },
                {
                    "ID": 8,
                    "parentID": 5,
                    "Phone": "(168) 452-3538",
                    "City": "Worksop",
                    "Name": "Rowan"
                },
                {
                    "ID": 9,
                    "parentID": 5,
                    "Phone": "(873) 337-9560",
                    "City": "Bad Neuenahr-Ahrweiler",
                    "Name": "Kendall"
                },
                {
                    "ID": 10,
                    "Phone": "(450) 579-0491",
                    "City": "Middelburg",
                    "Name": "Madaline"
                },
                {
                    "ID": 11,
                    "Phone": "(111) 162-2502",
                    "City": "Birecik",
                    "Name": "Chandler"
                },
                {
                    "ID": 12,
                    "parentID": 8,
                    "Phone": "(712) 483-3905",
                    "City": "Courbevoie",
                    "Name": "Craig"
                },
                {
                    "ID": 13,
                    "parentID": 8,
                    "Phone": "(872) 499-5833",
                    "City": "Cuccaro Vetere",
                    "Name": "Basia"
                },
                {
                    "ID": 14,
                    "parentID": 6,
                    "Phone": "(724) 797-0077",
                    "City": "Portree",
                    "Name": "Elmo"
                },
                {
                    "ID": 15,
                    "parentID": 5,
                    "Phone": "(366) 967-0433",
                    "City": "Dublin",
                    "Name": "Cairo"
                },
                {
                    "ID": 16,
                    "parentID": 11,
                    "Phone": "(147) 708-7321",
                    "City": "Rivière-du-Loup",
                    "Name": "Mannix"
                },
                {
                    "ID": 17,
                    "Phone": "(407) 519-9894",
                    "City": "Roubaix",
                    "Name": "Justine"
                },
                {
                    "ID": 18,
                    "parentID": 14,
                    "Phone": "(938) 793-5446",
                    "City": "Eugene",
                    "Name": "Dahlia"
                },
                {
                    "ID": 19,
                    "parentID": 5,
                    "Phone": "(425) 682-2189",
                    "City": "Salisbury",
                    "Name": "Irene"
                },
                {
                    "ID": 20,
                    "parentID": 12,
                    "Phone": "(351) 187-8200",
                    "City": "Garaguso",
                    "Name": "Trevor"
                },
                {
                    "ID": 21,
                    "Phone": "(601) 944-5214",
                    "City": "Pointe-au-Pic",
                    "Name": "Iris"
                },
                {
                    "ID": 22,
                    "parentID": 20,
                    "Phone": "(479) 532-6127",
                    "City": "Salt Lake City",
                    "Name": "Fleur"
                },
                {
                    "ID": 23,
                    "parentID": 19,
                    "Phone": "(339) 973-1695",
                    "City": "Meldert",
                    "Name": "Hayley"
                },
                {
                    "ID": 24,
                    "parentID": 11,
                    "Phone": "(946) 766-1649",
                    "City": "Corral",
                    "Name": "Baker"
                },
                {
                    "ID": 25,
                    "Phone": "(964) 413-7033",
                    "City": "Joliet",
                    "Name": "Leo"
                },
                {
                    "ID": 26,
                    "parentID": 7,
                    "Phone": "(898) 476-0059",
                    "City": "Burntisland",
                    "Name": "Rigel"
                },
                {
                    "ID": 27,
                    "parentID": 21,
                    "Phone": "(163) 267-0914",
                    "City": "Lac Ste. Anne",
                    "Name": "Scarlett"
                },
                {
                    "ID": 28,
                    "parentID": 10,
                    "Phone": "(486) 637-9167",
                    "City": "San Maurizio Canavese",
                    "Name": "Wang"
                },
                {
                    "ID": 29,
                    "parentID": 20,
                    "Phone": "(268) 646-0066",
                    "City": "Palermo",
                    "Name": "Eagan"
                },
                {
                    "ID": 30,
                    "parentID": 2,
                    "Phone": "(641) 756-7073",
                    "City": "Harrison Hot Springs",
                    "Name": "Hamilton"
                },
                {
                    "ID": 31,
                    "parentID": 26,
                    "Phone": "(820) 709-1328",
                    "City": "Ottignies",
                    "Name": "Liberty"
                },
                {
                    "ID": 32,
                    "parentID": 12,
                    "Phone": "(915) 642-4154",
                    "City": "Bihain",
                    "Name": "Noel"
                },
                {
                    "ID": 33,
                    "parentID": 27,
                    "Phone": "(137) 830-3127",
                    "City": "Kapuskasing",
                    "Name": "Aidan"
                },
                {
                    "ID": 34,
                    "parentID": 31,
                    "Phone": "(594) 856-4377",
                    "City": "Buin",
                    "Name": "Murphy"
                },
                {
                    "ID": 35,
                    "parentID": 28,
                    "Phone": "(951) 871-5461",
                    "City": "Gold Coast",
                    "Name": "Ila"
                },
                {
                    "ID": 36,
                    "parentID": 10,
                    "Phone": "(781) 305-7685",
                    "City": "Castel Maggiore",
                    "Name": "Katelyn"
                },
                {
                    "ID": 37,
                    "parentID": 10,
                    "Phone": "(716) 572-8734",
                    "City": "Chapecó",
                    "Name": "Logan"
                },
                {
                    "ID": 38,
                    "parentID": 28,
                    "Phone": "(214) 619-7252",
                    "City": "Stargard Szczeciński",
                    "Name": "Adria"
                },
                {
                    "ID": 39,
                    "parentID": 10,
                    "Phone": "(422) 223-5912",
                    "City": "Bad Vöslau",
                    "Name": "Katell"
                },
                {
                    "ID": 40,
                    "parentID": 2,
                    "Phone": "(921) 336-7339",
                    "City": "Namur",
                    "Name": "Lionel"
                },
                {
                    "ID": 41,
                    "parentID": 28,
                    "Phone": "(386) 567-5819",
                    "City": "Borchtlombeek",
                    "Name": "Erin"
                },
                {
                    "ID": 42,
                    "parentID": 8,
                    "Phone": "(308) 835-2758",
                    "City": "Alto del Carmen",
                    "Name": "Austin"
                },
                {
                    "ID": 43,
                    "parentID": 33,
                    "Phone": "(410) 695-8540",
                    "City": "Saint-Laurent",
                    "Name": "Deanna"
                },
                {
                    "ID": 44,
                    "parentID": 4,
                    "Phone": "(287) 866-8953",
                    "City": "Fiuminata",
                    "Name": "Darius"
                },
                {
                    "ID": 45,
                    "parentID": 14,
                    "Phone": "(329) 372-0345",
                    "City": "Laurencekirk",
                    "Name": "Kelsey"
                },
                {
                    "ID": 46,
                    "parentID": 12,
                    "Phone": "(566) 705-6690",
                    "City": "Lunel",
                    "Name": "Skyler"
                },
                {
                    "ID": 47,
                    "parentID": 44,
                    "Phone": "(779) 411-0381",
                    "City": "Pontedera",
                    "Name": "Harding"
                },
                {
                    "ID": 48,
                    "parentID": 18,
                    "Phone": "(393) 562-0884",
                    "City": "Widooie",
                    "Name": "Marny"
                },
                {
                    "ID": 49,
                    "parentID": 28,
                    "Phone": "(299) 937-4358",
                    "City": "Zamora",
                    "Name": "Brennan"
                },
                {
                    "ID": 50,
                    "parentID": 35,
                    "Phone": "(474) 337-2674",
                    "City": "Hazaribag",
                    "Name": "Lance"
                },
                {
                    "ID": 51,
                    "parentID": 35,
                    "Phone": "(971) 506-3185",
                    "City": "Gent",
                    "Name": "Orson"
                },
                {
                    "ID": 52,
                    "parentID": 24,
                    "Phone": "(391) 283-3953",
                    "City": "Leernes",
                    "Name": "Shana"
                },
                {
                    "ID": 53,
                    "parentID": 9,
                    "Phone": "(298) 734-9439",
                    "City": "La Pintana",
                    "Name": "Wanda"
                },
                {
                    "ID": 54,
                    "parentID": 30,
                    "Phone": "(800) 876-5942",
                    "City": "Ribnitz-Damgarten",
                    "Name": "Kelsie"
                },
                {
                    "ID": 55,
                    "parentID": 35,
                    "Phone": "(328) 828-7536",
                    "City": "Opgrimbie",
                    "Name": "Moses"
                },
                {
                    "ID": 56,
                    "parentID": 4,
                    "Phone": "(963) 719-2718",
                    "City": "Gore",
                    "Name": "Rafael"
                },
                {
                    "ID": 57,
                    "parentID": 46,
                    "Phone": "(453) 654-2849",
                    "City": "Llanelli",
                    "Name": "Carson"
                },
                {
                    "ID": 58,
                    "parentID": 3,
                    "Phone": "(464) 318-7548",
                    "City": "Curepto",
                    "Name": "Leila"
                },
                {
                    "ID": 59,
                    "parentID": 18,
                    "Phone": "(578) 378-1196",
                    "City": "Patna",
                    "Name": "Aurelia"
                },
                {
                    "ID": 60,
                    "Phone": "(397) 265-7757",
                    "City": "Ahmadpur East",
                    "Name": "Zelenia"
                },
                {
                    "ID": 61,
                    "parentID": 28,
                    "Phone": "(120) 369-4537",
                    "City": "Knokke",
                    "Name": "Sacha"
                },
                {
                    "ID": 62,
                    "parentID": 54,
                    "Phone": "(523) 159-2911",
                    "City": "Biała Podlaska",
                    "Name": "Clio"
                },
                {
                    "ID": 63,
                    "parentID": 43,
                    "Phone": "(475) 190-5102",
                    "City": "Nicoya",
                    "Name": "Nola"
                },
                {
                    "ID": 64,
                    "parentID": 31,
                    "Phone": "(444) 946-5781",
                    "City": "Sala Baganza",
                    "Name": "Roanna"
                },
                {
                    "ID": 65,
                    "parentID": 39,
                    "Phone": "(262) 323-0211",
                    "City": "Bredene",
                    "Name": "Summer"
                },
                {
                    "ID": 66,
                    "parentID": 17,
                    "Phone": "(694) 404-3275",
                    "City": "Belfort",
                    "Name": "Amery"
                },
                {
                    "ID": 67,
                    "parentID": 22,
                    "Phone": "(871) 569-3871",
                    "City": "Diyarbakır",
                    "Name": "Abra"
                },
                {
                    "ID": 68,
                    "Phone": "(807) 949-9083",
                    "City": "Villers-la-Bonne-Eau",
                    "Name": "Wyatt"
                },
                {
                    "ID": 69,
                    "Phone": "(515) 371-8783",
                    "City": "Poggiodomo",
                    "Name": "Aidan"
                },
                {
                    "ID": 70,
                    "parentID": 35,
                    "Phone": "(436) 244-1024",
                    "City": "Hatfield",
                    "Name": "Marny"
                },
                {
                    "ID": 71,
                    "parentID": 23,
                    "Phone": "(808) 719-1689",
                    "City": "Göteborg",
                    "Name": "Wynter"
                },
                {
                    "ID": 72,
                    "Phone": "(134) 258-4612",
                    "City": "Kukatpalle",
                    "Name": "Morgan"
                },
                {
                    "ID": 73,
                    "parentID": 26,
                    "Phone": "(278) 977-1716",
                    "City": "Tiel",
                    "Name": "Irene"
                },
                {
                    "ID": 74,
                    "parentID": 24,
                    "Phone": "(853) 349-5161",
                    "City": "Rapagnano",
                    "Name": "Morgan"
                },
                {
                    "ID": 75,
                    "parentID": 49,
                    "Phone": "(829) 494-7378",
                    "City": "Camiña",
                    "Name": "Phyllis"
                },
                {
                    "ID": 76,
                    "parentID": 29,
                    "Phone": "(910) 639-7203",
                    "City": "Prè-Saint-Didier",
                    "Name": "Mohammad"
                },
                {
                    "ID": 77,
                    "Phone": "(430) 230-5837",
                    "City": "Bregenz",
                    "Name": "Ethan"
                },
                {
                    "ID": 78,
                    "Phone": "(953) 595-4023",
                    "City": "Shahjahanpur",
                    "Name": "Madeline"
                },
                {
                    "ID": 79,
                    "parentID": 25,
                    "Phone": "(639) 100-6302",
                    "City": "Montemesola",
                    "Name": "Cara"
                },
                {
                    "ID": 80,
                    "Phone": "(546) 698-1207",
                    "City": "Arnhem",
                    "Name": "Quinlan"
                },
                {
                    "ID": 81,
                    "parentID": 24,
                    "Phone": "(182) 582-5900",
                    "City": "Wilmont",
                    "Name": "Dominic"
                },
                {
                    "ID": 82,
                    "parentID": 72,
                    "Phone": "(770) 741-5391",
                    "City": "San Giuliano di Puglia",
                    "Name": "Burke"
                },
                {
                    "ID": 83,
                    "parentID": 19,
                    "Phone": "(772) 321-1060",
                    "City": "Waret-l'Evque",
                    "Name": "Melanie"
                },
                {
                    "ID": 84,
                    "Phone": "(861) 753-8646",
                    "City": "Wolfsburg",
                    "Name": "Upton"
                },
                {
                    "ID": 85,
                    "parentID": 23,
                    "Phone": "(843) 182-9656",
                    "City": "Strongoli",
                    "Name": "Latifah"
                },
                {
                    "ID": 86,
                    "parentID": 64,
                    "Phone": "(341) 123-1359",
                    "City": "Laakirchen",
                    "Name": "Dacey"
                },
                {
                    "ID": 87,
                    "parentID": 30,
                    "Phone": "(500) 895-9220",
                    "City": "Piracicaba",
                    "Name": "Maya"
                },
                {
                    "ID": 88,
                    "parentID": 8,
                    "Phone": "(642) 297-3447",
                    "City": "Seborga",
                    "Name": "Quentin"
                },
                {
                    "ID": 89,
                    "parentID": 46,
                    "Phone": "(391) 696-7431",
                    "City": "São Gonçalo",
                    "Name": "Simon"
                },
                {
                    "ID": 90,
                    "parentID": 49,
                    "Phone": "(280) 896-1049",
                    "City": "Salon-de-Provence",
                    "Name": "Stewart"
                },
                {
                    "ID": 91,
                    "parentID": 10,
                    "Phone": "(647) 276-5006",
                    "City": "Follina",
                    "Name": "Thomas"
                },
                {
                    "ID": 92,
                    "parentID": 47,
                    "Phone": "(925) 263-0254",
                    "City": "Curacaví",
                    "Name": "Aristotle"
                },
                {
                    "ID": 93,
                    "parentID": 11,
                    "Phone": "(103) 458-0127",
                    "City": "Ely",
                    "Name": "Mason"
                },
                {
                    "ID": 94,
                    "parentID": 11,
                    "Phone": "(112) 941-0810",
                    "City": "Lebu",
                    "Name": "Lamar"
                },
                {
                    "ID": 95,
                    "parentID": 14,
                    "Phone": "(821) 339-0288",
                    "City": "Rastatt",
                    "Name": "Clayton"
                },
                {
                    "ID": 96,
                    "parentID": 66,
                    "Phone": "(788) 644-3560",
                    "City": "Cannole",
                    "Name": "Jessica"
                },
                {
                    "ID": 97,
                    "Phone": "(636) 383-2370",
                    "City": "St. Catharines",
                    "Name": "Maxwell"
                },
                {
                    "ID": 98,
                    "parentID": 43,
                    "Phone": "(268) 572-5059",
                    "City": "San Marcello Pistoiese",
                    "Name": "Marny"
                },
                {
                    "ID": 99,
                    "Phone": "(336) 239-7842",
                    "City": "Goderich",
                    "Name": "Byron"
                },
                {
                    "ID": 100,
                    "Phone": "(714) 477-8291",
                    "City": "St. Ives",
                    "Name": "Bryar"
                }
            ],
            result: [],
        };
    }
});

module.exports = json;
