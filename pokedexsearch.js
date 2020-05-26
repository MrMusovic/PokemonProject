var searchbox = document.getElementById("search");
var searchbutton = document.getElementById("searchbutton");
var name = document.getElementById("pokeName");


function clickButton() {
    var searchbox = document.getElementById("search");
    var name = document.getElementById("pokeName");
    var number = document.getElementById("number");
    var pokemonImage = document.getElementById("pokemonImage");
    var type = document.getElementById("types");
    var statTotal = document.getElementById("statTotal");
    var statHP = document.getElementById("statHP");
    var statAttack = document.getElementById("statAttack");
    var statDefense = document.getElementById("statDefense");
    var statSpAttack = document.getElementById("statSpAttack");
    var statSpDefense = document.getElementById("statSpDefense");
    var results = [];
    var resultinfo = [];
    var database = `#,Name,Type 1,Type 2,Total,HP,Attack,Defense,Sp. Atk,Sp. Def,Speed,Generation,Legendary
001,Bulbasaur,Grass,Poison,318,45,49,49,65,65,45,1,False
002,Ivysaur,Grass,Poison,405,60,62,63,80,80,60,1,False
003,Venusaur,Grass,Poison,525,80,82,83,100,100,80,1,False
004,Charmander,Fire,,309,39,52,43,60,50,65,1,False
005,Charmeleon,Fire,,405,58,64,58,80,65,80,1,False
006,Charizard,Fire,Flying,534,78,84,78,109,85,100,1,False
007,Squirtle,Water,,314,44,48,65,50,64,43,1,False
008,Wartortle,Water,,405,59,63,80,65,80,58,1,False
009,Blastoise,Water,,530,79,83,100,85,105,78,1,False
010,Caterpie,Bug,,195,45,30,35,20,20,45,1,False
011,Metapod,Bug,,205,50,20,55,25,25,30,1,False
012,Butterfree,Bug,Flying,395,60,45,50,90,80,70,1,False
013,Weedle,Bug,Poison,195,40,35,30,20,20,50,1,False
014,Kakuna,Bug,Poison,205,45,25,50,25,25,35,1,False
015,Beedrill,Bug,Poison,395,65,90,40,45,80,75,1,False
016,Pidgey,Normal,Flying,251,40,45,40,35,35,56,1,False
017,Pidgeotto,Normal,Flying,349,63,60,55,50,50,71,1,False
018,Pidgeot,Normal,Flying,479,83,80,75,70,70,101,1,False
019,Rattata,Normal,,253,30,56,35,25,35,72,1,False
020,Raticate,Normal,,413,55,81,60,50,70,97,1,False
021,Spearow,Normal,Flying,262,40,60,30,31,31,70,1,False
022,Fearow,Normal,Flying,442,65,90,65,61,61,100,1,False
023,Ekans,Poison,,288,35,60,44,40,54,55,1,False
024,Arbok,Poison,,438,60,85,69,65,79,80,1,False
025,Pikachu,Electric,,320,35,55,40,50,50,90,1,False
026,Raichu,Electric,,485,60,90,55,90,80,110,1,False
027,Sandshrew,Ground,,300,50,75,85,20,30,40,1,False
028,Sandslash,Ground,,450,75,100,110,45,55,65,1,False
029,Nidoran ♀,Poison,,275,55,47,52,40,40,41,1,False
030,Nidorina,Poison,,365,70,62,67,55,55,56,1,False
031,Nidoqueen,Poison,Ground,505,90,92,87,75,85,76,1,False
032,Nidoran ♂,Poison,,273,46,57,40,40,40,50,1,False
033,Nidorino,Poison,,365,61,72,57,55,55,65,1,False
034,Nidoking,Poison,Ground,505,81,102,77,85,75,85,1,False
035,Clefairy,Fairy,,323,70,45,48,60,65,35,1,False
036,Clefable,Fairy,,483,95,70,73,95,90,60,1,False
037,Vulpix,Fire,,299,38,41,40,50,65,65,1,False
038,Ninetales,Fire,,505,73,76,75,81,100,100,1,False
039,Jigglypuff,Normal,Fairy,270,115,45,20,45,25,20,1,False
040,Wigglytuff,Normal,Fairy,435,140,70,45,85,50,45,1,False
041,Zubat,Poison,Flying,245,40,45,35,30,40,55,1,False
042,Golbat,Poison,Flying,455,75,80,70,65,75,90,1,False
043,Oddish,Grass,Poison,320,45,50,55,75,65,30,1,False
044,Gloom,Grass,Poison,395,60,65,70,85,75,40,1,False
045,Vileplume,Grass,Poison,490,75,80,85,110,90,50,1,False
046,Paras,Bug,Grass,285,35,70,55,45,55,25,1,False
047,Parasect,Bug,Grass,405,60,95,80,60,80,30,1,False
048,Venonat,Bug,Poison,305,60,55,50,40,55,45,1,False
049,Venomoth,Bug,Poison,450,70,65,60,90,75,90,1,False
050,Diglett,Ground,,265,10,55,25,35,45,95,1,False
051,Dugtrio,Ground,,405,35,80,50,50,70,120,1,False
052,Meowth,Normal,,290,40,45,35,40,40,90,1,False
053,Persian,Normal,,440,65,70,60,65,65,115,1,False
054,Psyduck,Water,,320,50,52,48,65,50,55,1,False
055,Golduck,Water,,500,80,82,78,95,80,85,1,False
056,Mankey,Fighting,,305,40,80,35,35,45,70,1,False
057,Primeape,Fighting,,455,65,105,60,60,70,95,1,False
058,Growlithe,Fire,,350,55,70,45,70,50,60,1,False
059,Arcanine,Fire,,555,90,110,80,100,80,95,1,False
060,Poliwag,Water,,300,40,50,40,40,40,90,1,False
061,Poliwhirl,Water,,385,65,65,65,50,50,90,1,False
062,Poliwrath,Water,Fighting,510,90,95,95,70,90,70,1,False
063,Abra,Psychic,,310,25,20,15,105,55,90,1,False
064,Kadabra,Psychic,,400,40,35,30,120,70,105,1,False
065,Alakazam,Psychic,,500,55,50,45,135,95,120,1,False
066,Machop,Fighting,,305,70,80,50,35,35,35,1,False
067,Machoke,Fighting,,405,80,100,70,50,60,45,1,False
068,Machamp,Fighting,,505,90,130,80,65,85,55,1,False
069,Bellsprout,Grass,Poison,300,50,75,35,70,30,40,1,False
070,Weepinbell,Grass,Poison,390,65,90,50,85,45,55,1,False
071,Victreebel,Grass,Poison,490,80,105,65,100,70,70,1,False
072,Tentacool,Water,Poison,335,40,40,35,50,100,70,1,False
073,Tentacruel,Water,Poison,515,80,70,65,80,120,100,1,False
074,Geodude,Rock,Ground,300,40,80,100,30,30,20,1,False
075,Graveler,Rock,Ground,390,55,95,115,45,45,35,1,False
076,Golem,Rock,Ground,495,80,120,130,55,65,45,1,False
077,Ponyta,Fire,,410,50,85,55,65,65,90,1,False
078,Rapidash,Fire,,500,65,100,70,80,80,105,1,False
079,Slowpoke,Water,Psychic,315,90,65,65,40,40,15,1,False
080,Slowbro,Water,Psychic,490,95,75,110,100,80,30,1,False
081,Magnemite,Electric,Steel,325,25,35,70,95,55,45,1,False
082,Magneton,Electric,Steel,465,50,60,95,120,70,70,1,False
083,Farfetch'd,Normal,Flying,352,52,65,55,58,62,60,1,False
084,Doduo,Normal,Flying,310,35,85,45,35,35,75,1,False
085,Dodrio,Normal,Flying,460,60,110,70,60,60,100,1,False
086,Seel,Water,,325,65,45,55,45,70,45,1,False
087,Dewgong,Water,Ice,475,90,70,80,70,95,70,1,False
088,Grimer,Poison,,325,80,80,50,40,50,25,1,False
089,Muk,Poison,,500,105,105,75,65,100,50,1,False
090,Shellder,Water,,305,30,65,100,45,25,40,1,False
091,Cloyster,Water,Ice,525,50,95,180,85,45,70,1,False
092,Gastly,Ghost,Poison,310,30,35,30,100,35,80,1,False
093,Haunter,Ghost,Poison,405,45,50,45,115,55,95,1,False
094,Gengar,Ghost,Poison,500,60,65,60,130,75,110,1,False
095,Onix,Rock,Ground,385,35,45,160,30,45,70,1,False
096,Drowzee,Psychic,,328,60,48,45,43,90,42,1,False
097,Hypno,Psychic,,483,85,73,70,73,115,67,1,False
098,Krabby,Water,,325,30,105,90,25,25,50,1,False
099,Kingler,Water,,475,55,130,115,50,50,75,1,False
100,Voltorb,Electric,,330,40,30,50,55,55,100,1,False
101,Electrode,Electric,,480,60,50,70,80,80,140,1,False
102,Exeggcute,Grass,Psychic,325,60,40,80,60,45,40,1,False
103,Exeggutor,Grass,Psychic,520,95,95,85,125,65,55,1,False
104,Cubone,Ground,,320,50,50,95,40,50,35,1,False
105,Marowak,Ground,,425,60,80,110,50,80,45,1,False
106,Hitmonlee,Fighting,,455,50,120,53,35,110,87,1,False
107,Hitmonchan,Fighting,,455,50,105,79,35,110,76,1,False
108,Lickitung,Normal,,385,90,55,75,60,75,30,1,False
109,Koffing,Poison,,340,40,65,95,60,45,35,1,False
110,Weezing,Poison,,490,65,90,120,85,70,60,1,False
111,Rhyhorn,Ground,Rock,345,80,85,95,30,30,25,1,False
112,Rhydon,Ground,Rock,485,105,130,120,45,45,40,1,False
113,Chansey,Normal,,450,250,5,5,35,105,50,1,False
114,Tangela,Grass,,435,65,55,115,100,40,60,1,False
115,Kangaskhan,Normal,,490,105,95,80,40,80,90,1,False
116,Horsea,Water,,295,30,40,70,70,25,60,1,False
117,Seadra,Water,,440,55,65,95,95,45,85,1,False
118,Goldeen,Water,,320,45,67,60,35,50,63,1,False
119,Seaking,Water,,450,80,92,65,65,80,68,1,False
120,Staryu,Water,,340,30,45,55,70,55,85,1,False
121,Starmie,Water,Psychic,520,60,75,85,100,85,115,1,False
122,Mr. Mime,Psychic,Fairy,460,40,45,65,100,120,90,1,False
123,Scyther,Bug,Flying,500,70,110,80,55,80,105,1,False
124,Jynx,Ice,Psychic,455,65,50,35,115,95,95,1,False
125,Electabuzz,Electric,,490,65,83,57,95,85,105,1,False
126,Magmar,Fire,,495,65,95,57,100,85,93,1,False
127,Pinsir,Bug,,500,65,125,100,55,70,85,1,False
128,Tauros,Normal,,490,75,100,95,40,70,110,1,False
129,Magikarp,Water,,200,20,10,55,15,20,80,1,False
130,Gyarados,Water,Flying,540,95,125,79,60,100,81,1,False
131,Lapras,Water,Ice,535,130,85,80,85,95,60,1,False
132,Ditto,Normal,,288,48,48,48,48,48,48,1,False
133,Eevee,Normal,,325,55,55,50,45,65,55,1,False
134,Vaporeon,Water,,525,130,65,60,110,95,65,1,False
135,Jolteon,Electric,,525,65,65,60,110,95,130,1,False
136,Flareon,Fire,,525,65,130,60,95,110,65,1,False
137,Porygon,Normal,,395,65,60,70,85,75,40,1,False
138,Omanyte,Rock,Water,355,35,40,100,90,55,35,1,False
139,Omastar,Rock,Water,495,70,60,125,115,70,55,1,False
140,Kabuto,Rock,Water,355,30,80,90,55,45,55,1,False
141,Kabutops,Rock,Water,495,60,115,105,65,70,80,1,False
142,Aerodactyl,Rock,Flying,515,80,105,65,60,75,130,1,False
143,Snorlax,Normal,,540,160,110,65,65,110,30,1,False
144,Articuno,Ice,Flying,580,90,85,100,95,125,85,1,True
145,Zapdos,Electric,Flying,580,90,90,85,125,90,100,1,True
146,Moltres,Fire,Flying,580,90,100,90,125,85,90,1,True
147,Dratini,Dragon,,300,41,64,45,50,50,50,1,False
148,Dragonair,Dragon,,420,61,84,65,70,70,70,1,False
149,Dragonite,Dragon,Flying,600,91,134,95,100,100,80,1,False
150,Mewtwo,Psychic,,680,106,110,90,154,90,130,1,True
151,Mew,Psychic,,600,100,100,100,100,100,100,1,False
152,Chikorita,Grass,,318,45,49,65,49,65,45,2,False
153,Bayleef,Grass,,405,60,62,80,63,80,60,2,False
154,Meganium,Grass,,525,80,82,100,83,100,80,2,False
155,Cyndaquil,Fire,,309,39,52,43,60,50,65,2,False
156,Quilava,Fire,,405,58,64,58,80,65,80,2,False
157,Typhlosion,Fire,,534,78,84,78,109,85,100,2,False
158,Totodile,Water,,314,50,65,64,44,48,43,2,False
159,Croconaw,Water,,405,65,80,80,59,63,58,2,False
160,Feraligatr,Water,,530,85,105,100,79,83,78,2,False
161,Sentret,Normal,,215,35,46,34,35,45,20,2,False
162,Furret,Normal,,415,85,76,64,45,55,90,2,False
163,Hoothoot,Normal,Flying,262,60,30,30,36,56,50,2,False
164,Noctowl,Normal,Flying,442,100,50,50,76,96,70,2,False
165,Ledyba,Bug,Flying,265,40,20,30,40,80,55,2,False
166,Ledian,Bug,Flying,390,55,35,50,55,110,85,2,False
167,Spinarak,Bug,Poison,250,40,60,40,40,40,30,2,False
168,Ariados,Bug,Poison,390,70,90,70,60,60,40,2,False
169,Crobat,Poison,Flying,535,85,90,80,70,80,130,2,False
170,Chinchou,Water,Electric,330,75,38,38,56,56,67,2,False
171,Lanturn,Water,Electric,460,125,58,58,76,76,67,2,False
172,Pichu,Electric,,205,20,40,15,35,35,60,2,False
173,Cleffa,Fairy,,218,50,25,28,45,55,15,2,False
174,Igglybuff,Normal,Fairy,210,90,30,15,40,20,15,2,False
175,Togepi,Fairy,,245,35,20,65,40,65,20,2,False
176,Togetic,Fairy,Flying,405,55,40,85,80,105,40,2,False
177,Natu,Psychic,Flying,320,40,50,45,70,45,70,2,False
178,Xatu,Psychic,Flying,470,65,75,70,95,70,95,2,False
179,Mareep,Electric,,280,55,40,40,65,45,35,2,False
180,Flaaffy,Electric,,365,70,55,55,80,60,45,2,False
181,Ampharos,Electric,,510,90,75,85,115,90,55,2,False
182,Bellossom,Grass,,490,75,80,95,90,100,50,2,False
183,Marill,Water,Fairy,250,70,20,50,20,50,40,2,False
184,Azumarill,Water,Fairy,420,100,50,80,60,80,50,2,False
185,Sudowoodo,Rock,,410,70,100,115,30,65,30,2,False
186,Politoed,Water,,500,90,75,75,90,100,70,2,False
187,Hoppip,Grass,Flying,250,35,35,40,35,55,50,2,False
188,Skiploom,Grass,Flying,340,55,45,50,45,65,80,2,False
189,Jumpluff,Grass,Flying,460,75,55,70,55,95,110,2,False
190,Aipom,Normal,,360,55,70,55,40,55,85,2,False
191,Sunkern,Grass,,180,30,30,30,30,30,30,2,False
192,Sunflora,Grass,,425,75,75,55,105,85,30,2,False
193,Yanma,Bug,Flying,390,65,65,45,75,45,95,2,False
194,Wooper,Water,Ground,210,55,45,45,25,25,15,2,False
195,Quagsire,Water,Ground,430,95,85,85,65,65,35,2,False
196,Espeon,Psychic,,525,65,65,60,130,95,110,2,False
197,Umbreon,Dark,,525,95,65,110,60,130,65,2,False
198,Murkrow,Dark,Flying,405,60,85,42,85,42,91,2,False
199,Slowking,Water,Psychic,490,95,75,80,100,110,30,2,False
200,Misdreavus,Ghost,,435,60,60,60,85,85,85,2,False
201,Unown,Psychic,,336,48,72,48,72,48,48,2,False
202,Wobbuffet,Psychic,,405,190,33,58,33,58,33,2,False
203,Girafarig,Normal,Psychic,455,70,80,65,90,65,85,2,False
204,Pineco,Bug,,290,50,65,90,35,35,15,2,False
205,Forretress,Bug,Steel,465,75,90,140,60,60,40,2,False
206,Dunsparce,Normal,,415,100,70,70,65,65,45,2,False
207,Gligar,Ground,Flying,430,65,75,105,35,65,85,2,False
208,Steelix,Steel,Ground,510,75,85,200,55,65,30,2,False
209,Snubbull,Fairy,,300,60,80,50,40,40,30,2,False
210,Granbull,Fairy,,450,90,120,75,60,60,45,2,False
211,Qwilfish,Water,Poison,430,65,95,75,55,55,85,2,False
212,Scizor,Bug,Steel,500,70,130,100,55,80,65,2,False
213,Shuckle,Bug,Rock,505,20,10,230,10,230,5,2,False
214,Heracross,Bug,Fighting,500,80,125,75,40,95,85,2,False
215,Sneasel,Dark,Ice,430,55,95,55,35,75,115,2,False
216,Teddiursa,Normal,,330,60,80,50,50,50,40,2,False
217,Ursaring,Normal,,500,90,130,75,75,75,55,2,False
218,Slugma,Fire,,250,40,40,40,70,40,20,2,False
219,Magcargo,Fire,Rock,410,50,50,120,80,80,30,2,False
220,Swinub,Ice,Ground,250,50,50,40,30,30,50,2,False
221,Piloswine,Ice,Ground,450,100,100,80,60,60,50,2,False
222,Corsola,Water,Rock,380,55,55,85,65,85,35,2,False
223,Remoraid,Water,,300,35,65,35,65,35,65,2,False
224,Octillery,Water,,480,75,105,75,105,75,45,2,False
225,Delibird,Ice,Flying,330,45,55,45,65,45,75,2,False
226,Mantine,Water,Flying,465,65,40,70,80,140,70,2,False
227,Skarmory,Steel,Flying,465,65,80,140,40,70,70,2,False
228,Houndour,Dark,Fire,330,45,60,30,80,50,65,2,False
229,Houndoom,Dark,Fire,500,75,90,50,110,80,95,2,False
230,Kingdra,Water,Dragon,540,75,95,95,95,95,85,2,False
231,Phanpy,Ground,,330,90,60,60,40,40,40,2,False
232,Donphan,Ground,,500,90,120,120,60,60,50,2,False
233,Porygon2,Normal,,515,85,80,90,105,95,60,2,False
234,Stantler,Normal,,465,73,95,62,85,65,85,2,False
235,Smeargle,Normal,,250,55,20,35,20,45,75,2,False
236,Tyrogue,Fighting,,210,35,35,35,35,35,35,2,False
237,Hitmontop,Fighting,,455,50,95,95,35,110,70,2,False
238,Smoochum,Ice,Psychic,305,45,30,15,85,65,65,2,False
239,Elekid,Electric,,360,45,63,37,65,55,95,2,False
240,Magby,Fire,,365,45,75,37,70,55,83,2,False
241,Miltank,Normal,,490,95,80,105,40,70,100,2,False
242,Blissey,Normal,,540,255,10,10,75,135,55,2,False
243,Raikou,Electric,,580,90,85,75,115,100,115,2,True
244,Entei,Fire,,580,115,115,85,90,75,100,2,True
245,Suicune,Water,,580,100,75,115,90,115,85,2,True
246,Larvitar,Rock,Ground,300,50,64,50,45,50,41,2,False
247,Pupitar,Rock,Ground,410,70,84,70,65,70,51,2,False
248,Tyranitar,Rock,Dark,600,100,134,110,95,100,61,2,False
249,Lugia,Psychic,Flying,680,106,90,130,90,154,110,2,True
250,Ho-oh,Fire,Flying,680,106,130,90,110,154,90,2,True
251,Celebi,Psychic,Grass,600,100,100,100,100,100,100,2,False
252,Treecko,Grass,,310,40,45,35,65,55,70,3,False
253,Grovyle,Grass,,405,50,65,45,85,65,95,3,False
254,Sceptile,Grass,,530,70,85,65,105,85,120,3,False
255,Torchic,Fire,,310,45,60,40,70,50,45,3,False
256,Combusken,Fire,Fighting,405,60,85,60,85,60,55,3,False
257,Blaziken,Fire,Fighting,530,80,120,70,110,70,80,3,False
258,Mudkip,Water,,310,50,70,50,50,50,40,3,False
259,Marshtomp,Water,Ground,405,70,85,70,60,70,50,3,False
260,Swampert,Water,Ground,535,100,110,90,85,90,60,3,False
261,Poochyena,Dark,,220,35,55,35,30,30,35,3,False
262,Mightyena,Dark,,420,70,90,70,60,60,70,3,False
263,Zigzagoon,Normal,,240,38,30,41,30,41,60,3,False
264,Linoone,Normal,,420,78,70,61,50,61,100,3,False
265,Wurmple,Bug,,195,45,45,35,20,30,20,3,False
266,Silcoon,Bug,,205,50,35,55,25,25,15,3,False
267,Beautifly,Bug,Flying,395,60,70,50,100,50,65,3,False
268,Cascoon,Bug,,205,50,35,55,25,25,15,3,False
269,Dustox,Bug,Poison,385,60,50,70,50,90,65,3,False
270,Lotad,Water,Grass,220,40,30,30,40,50,30,3,False
271,Lombre,Water,Grass,340,60,50,50,60,70,50,3,False
272,Ludicolo,Water,Grass,480,80,70,70,90,100,70,3,False
273,Seedot,Grass,,220,40,40,50,30,30,30,3,False
274,Nuzleaf,Grass,Dark,340,70,70,40,60,40,60,3,False
275,Shiftry,Grass,Dark,480,90,100,60,90,60,80,3,False
276,Taillow,Normal,Flying,270,40,55,30,30,30,85,3,False
277,Swellow,Normal,Flying,430,60,85,60,50,50,125,3,False
278,Wingull,Water,Flying,270,40,30,30,55,30,85,3,False
279,Pelipper,Water,Flying,430,60,50,100,85,70,65,3,False
280,Ralts,Psychic,Fairy,198,28,25,25,45,35,40,3,False
281,Kirlia,Psychic,Fairy,278,38,35,35,65,55,50,3,False
282,Gardevoir,Psychic,Fairy,518,68,65,65,125,115,80,3,False
283,Surskit,Bug,Water,269,40,30,32,50,52,65,3,False
284,Masquerain,Bug,Flying,414,70,60,62,80,82,60,3,False
285,Shroomish,Grass,,295,60,40,60,40,60,35,3,False
286,Breloom,Grass,Fighting,460,60,130,80,60,60,70,3,False
287,Slakoth,Normal,,280,60,60,60,35,35,30,3,False
288,Vigoroth,Normal,,440,80,80,80,55,55,90,3,False
289,Slaking,Normal,,670,150,160,100,95,65,100,3,False
290,Nincada,Bug,Ground,266,31,45,90,30,30,40,3,False
291,Ninjask,Bug,Flying,456,61,90,45,50,50,160,3,False
292,Shedinja,Bug,Ghost,236,1,90,45,30,30,40,3,False
293,Whismur,Normal,,240,64,51,23,51,23,28,3,False
294,Loudred,Normal,,360,84,71,43,71,43,48,3,False
295,Exploud,Normal,,490,104,91,63,91,73,68,3,False
296,Makuhita,Fighting,,237,72,60,30,20,30,25,3,False
297,Hariyama,Fighting,,474,144,120,60,40,60,50,3,False
298,Azurill,Normal,Fairy,190,50,20,40,20,40,20,3,False
299,Nosepass,Rock,,375,30,45,135,45,90,30,3,False
300,Skitty,Normal,,260,50,45,45,35,35,50,3,False
301,Delcatty,Normal,,380,70,65,65,55,55,70,3,False
302,Sableye,Dark,Ghost,380,50,75,75,65,65,50,3,False
303,Mawile,Steel,Fairy,380,50,85,85,55,55,50,3,False
304,Aron,Steel,Rock,330,50,70,100,40,40,30,3,False
305,Lairon,Steel,Rock,430,60,90,140,50,50,40,3,False
306,Aggron,Steel,Rock,530,70,110,180,60,60,50,3,False
307,Meditite,Fighting,Psychic,280,30,40,55,40,55,60,3,False
308,Medicham,Fighting,Psychic,410,60,60,75,60,75,80,3,False
309,Electrike,Electric,,295,40,45,40,65,40,65,3,False
310,Manectric,Electric,,475,70,75,60,105,60,105,3,False
311,Plusle,Electric,,405,60,50,40,85,75,95,3,False
312,Minun,Electric,,405,60,40,50,75,85,95,3,False
313,Volbeat,Bug,,400,65,73,55,47,75,85,3,False
314,Illumise,Bug,,400,65,47,55,73,75,85,3,False
315,Roselia,Grass,Poison,400,50,60,45,100,80,65,3,False
316,Gulpin,Poison,,302,70,43,53,43,53,40,3,False
317,Swalot,Poison,,467,100,73,83,73,83,55,3,False
318,Carvanha,Water,Dark,305,45,90,20,65,20,65,3,False
319,Sharpedo,Water,Dark,460,70,120,40,95,40,95,3,False
320,Wailmer,Water,,400,130,70,35,70,35,60,3,False
321,Wailord,Water,,500,170,90,45,90,45,60,3,False
322,Numel,Fire,Ground,305,60,60,40,65,45,35,3,False
323,Camerupt,Fire,Ground,460,70,100,70,105,75,40,3,False
324,Torkoal,Fire,,470,70,85,140,85,70,20,3,False
325,Spoink,Psychic,,330,60,25,35,70,80,60,3,False
326,Grumpig,Psychic,,470,80,45,65,90,110,80,3,False
327,Spinda,Normal,,360,60,60,60,60,60,60,3,False
328,Trapinch,Ground,,290,45,100,45,45,45,10,3,False
329,Vibrava,Ground,Dragon,340,50,70,50,50,50,70,3,False
330,Flygon,Ground,Dragon,520,80,100,80,80,80,100,3,False
331,Cacnea,Grass,,335,50,85,40,85,40,35,3,False
332,Cacturne,Grass,Dark,475,70,115,60,115,60,55,3,False
333,Swablu,Normal,Flying,310,45,40,60,40,75,50,3,False
334,Altaria,Dragon,Flying,490,75,70,90,70,105,80,3,False
335,Zangoose,Normal,,458,73,115,60,60,60,90,3,False
336,Seviper,Poison,,458,73,100,60,100,60,65,3,False
337,Lunatone,Rock,Psychic,440,70,55,65,95,85,70,3,False
338,Solrock,Rock,Psychic,440,70,95,85,55,65,70,3,False
339,Barboach,Water,Ground,288,50,48,43,46,41,60,3,False
340,Whiscash,Water,Ground,468,110,78,73,76,71,60,3,False
341,Corphish,Water,,308,43,80,65,50,35,35,3,False
342,Crawdaunt,Water,Dark,468,63,120,85,90,55,55,3,False
343,Baltoy,Ground,Psychic,300,40,40,55,40,70,55,3,False
344,Claydol,Ground,Psychic,500,60,70,105,70,120,75,3,False
345,Lileep,Rock,Grass,355,66,41,77,61,87,23,3,False
346,Cradily,Rock,Grass,495,86,81,97,81,107,43,3,False
347,Anorith,Rock,Bug,355,45,95,50,40,50,75,3,False
348,Armaldo,Rock,Bug,495,75,125,100,70,80,45,3,False
349,Feebas,Water,,200,20,15,20,10,55,80,3,False
350,Milotic,Water,,540,95,60,79,100,125,81,3,False
351,Castform,Normal,,420,70,70,70,70,70,70,3,False
352,Kecleon,Normal,,440,60,90,70,60,120,40,3,False
353,Shuppet,Ghost,,295,44,75,35,63,33,45,3,False
354,Banette,Ghost,,455,64,115,65,83,63,65,3,False
355,Duskull,Ghost,,295,20,40,90,30,90,25,3,False
356,Dusclops,Ghost,,455,40,70,130,60,130,25,3,False
357,Tropius,Grass,Flying,460,99,68,83,72,87,51,3,False
358,Chimecho,Psychic,,425,65,50,70,95,80,65,3,False
359,Absol,Dark,,465,65,130,60,75,60,75,3,False
360,Wynaut,Psychic,,260,95,23,48,23,48,23,3,False
361,Snorunt,Ice,,300,50,50,50,50,50,50,3,False
362,Glalie,Ice,,480,80,80,80,80,80,80,3,False
363,Spheal,Ice,Water,290,70,40,50,55,50,25,3,False
364,Sealeo,Ice,Water,410,90,60,70,75,70,45,3,False
365,Walrein,Ice,Water,530,110,80,90,95,90,65,3,False
366,Clamperl,Water,,345,35,64,85,74,55,32,3,False
367,Huntail,Water,,485,55,104,105,94,75,52,3,False
368,Gorebyss,Water,,485,55,84,105,114,75,52,3,False
369,Relicanth,Water,Rock,485,100,90,130,45,65,55,3,False
370,Luvdisc,Water,,330,43,30,55,40,65,97,3,False
371,Bagon,Dragon,,300,45,75,60,40,30,50,3,False
372,Shelgon,Dragon,,420,65,95,100,60,50,50,3,False
373,Salamence,Dragon,Flying,600,95,135,80,110,80,100,3,False
374,Beldum,Steel,Psychic,300,40,55,80,35,60,30,3,False
375,Metang,Steel,Psychic,420,60,75,100,55,80,50,3,False
376,Metagross,Steel,Psychic,600,80,135,130,95,90,70,3,False
377,Regirock,Rock,,580,80,100,200,50,100,50,3,True
378,Regice,Ice,,580,80,50,100,100,200,50,3,True
379,Registeel,Steel,,580,80,75,150,75,150,50,3,True
380,Latias,Dragon,Psychic,600,80,80,90,110,130,110,3,True
381,Latios,Dragon,Psychic,600,80,90,80,130,110,110,3,True
382,Kyogre,Water,,670,100,100,90,150,140,90,3,True
383,Groudon,Ground,,670,100,150,140,100,90,90,3,True
384,Rayquaza,Dragon,Flying,680,105,150,90,150,90,95,3,True
385,Jirachi,Steel,Psychic,600,100,100,100,100,100,100,3,True
386,DeoxysNormal Forme,Psychic,,600,50,150,50,150,50,150,3,True
386,DeoxysAttack Forme,Psychic,,600,50,180,20,180,20,150,3,True
386,DeoxysDefense Forme,Psychic,,600,50,70,160,70,160,90,3,True
386,DeoxysSpeed Forme,Psychic,,600,50,95,90,95,90,180,3,True
387,Turtwig,Grass,,318,55,68,64,45,55,31,4,False
388,Grotle,Grass,,405,75,89,85,55,65,36,4,False
389,Torterra,Grass,Ground,525,95,109,105,75,85,56,4,False
390,Chimchar,Fire,,309,44,58,44,58,44,61,4,False
391,Monferno,Fire,Fighting,405,64,78,52,78,52,81,4,False
392,Infernape,Fire,Fighting,534,76,104,71,104,71,108,4,False
393,Piplup,Water,,314,53,51,53,61,56,40,4,False
394,Prinplup,Water,,405,64,66,68,81,76,50,4,False
395,Empoleon,Water,Steel,530,84,86,88,111,101,60,4,False
396,Starly,Normal,Flying,245,40,55,30,30,30,60,4,False
397,Staravia,Normal,Flying,340,55,75,50,40,40,80,4,False
398,Staraptor,Normal,Flying,485,85,120,70,50,60,100,4,False
399,Bidoof,Normal,,250,59,45,40,35,40,31,4,False
400,Bibarel,Normal,Water,410,79,85,60,55,60,71,4,False
401,Kricketot,Bug,,194,37,25,41,25,41,25,4,False
402,Kricketune,Bug,,384,77,85,51,55,51,65,4,False
403,Shinx,Electric,,263,45,65,34,40,34,45,4,False
404,Luxio,Electric,,363,60,85,49,60,49,60,4,False
405,Luxray,Electric,,523,80,120,79,95,79,70,4,False
406,Budew,Grass,Poison,280,40,30,35,50,70,55,4,False
407,Roserade,Grass,Poison,515,60,70,65,125,105,90,4,False
408,Cranidos,Rock,,350,67,125,40,30,30,58,4,False
409,Rampardos,Rock,,495,97,165,60,65,50,58,4,False
410,Shieldon,Rock,Steel,350,30,42,118,42,88,30,4,False
411,Bastiodon,Rock,Steel,495,60,52,168,47,138,30,4,False
412,Burmy,Bug,,224,40,29,45,29,45,36,4,False
413,WormadamPlant Cloak,Bug,Grass,424,60,59,85,79,105,36,4,False
413,WormadamSandy Cloak,Bug,Ground,424,60,79,105,59,85,36,4,False
413,WormadamTrash Cloak,Bug,Steel,424,60,69,95,69,95,36,4,False
414,Mothim,Bug,Flying,424,70,94,50,94,50,66,4,False
415,Combee,Bug,Flying,244,30,30,42,30,42,70,4,False
416,Vespiquen,Bug,Flying,474,70,80,102,80,102,40,4,False
417,Pachirisu,Electric,,405,60,45,70,45,90,95,4,False
418,Buizel,Water,,330,55,65,35,60,30,85,4,False
419,Floatzel,Water,,495,85,105,55,85,50,115,4,False
420,Cherubi,Grass,,275,45,35,45,62,53,35,4,False
421,Cherrim,Grass,,450,70,60,70,87,78,85,4,False
422,Shellos,Water,,325,76,48,48,57,62,34,4,False
423,Gastrodon,Water,Ground,475,111,83,68,92,82,39,4,False
424,Ambipom,Normal,,482,75,100,66,60,66,115,4,False
425,Drifloon,Ghost,Flying,348,90,50,34,60,44,70,4,False
426,Drifblim,Ghost,Flying,498,150,80,44,90,54,80,4,False
427,Buneary,Normal,,350,55,66,44,44,56,85,4,False
428,Lopunny,Normal,,480,65,76,84,54,96,105,4,False
429,Mismagius,Ghost,,495,60,60,60,105,105,105,4,False
430,Honchkrow,Dark,Flying,505,100,125,52,105,52,71,4,False
431,Glameow,Normal,,310,49,55,42,42,37,85,4,False
432,Purugly,Normal,,452,71,82,64,64,59,112,4,False
433,Chingling,Psychic,,285,45,30,50,65,50,45,4,False
434,Stunky,Poison,Dark,329,63,63,47,41,41,74,4,False
435,Skuntank,Poison,Dark,479,103,93,67,71,61,84,4,False
436,Bronzor,Steel,Psychic,300,57,24,86,24,86,23,4,False
437,Bronzong,Steel,Psychic,500,67,89,116,79,116,33,4,False
438,Bonsly,Rock,,290,50,80,95,10,45,10,4,False
439,Mime Jr.,Psychic,Fairy,310,20,25,45,70,90,60,4,False
440,Happiny,Normal,,220,100,5,5,15,65,30,4,False
441,Chatot,Normal,Flying,411,76,65,45,92,42,91,4,False
442,Spiritomb,Ghost,Dark,485,50,92,108,92,108,35,4,False
443,Gible,Dragon,Ground,300,58,70,45,40,45,42,4,False
444,Gabite,Dragon,Ground,410,68,90,65,50,55,82,4,False
445,Garchomp,Dragon,Ground,600,108,130,95,80,85,102,4,False
446,Munchlax,Normal,,390,135,85,40,40,85,5,4,False
447,Riolu,Fighting,,285,40,70,40,35,40,60,4,False
448,Lucario,Fighting,Steel,525,70,110,70,115,70,90,4,False
449,Hippopotas,Ground,,330,68,72,78,38,42,32,4,False
450,Hippowdon,Ground,,525,108,112,118,68,72,47,4,False
451,Skorupi,Poison,Bug,330,40,50,90,30,55,65,4,False
452,Drapion,Poison,Dark,500,70,90,110,60,75,95,4,False
453,Croagunk,Poison,Fighting,300,48,61,40,61,40,50,4,False
454,Toxicroak,Poison,Fighting,490,83,106,65,86,65,85,4,False
455,Carnivine,Grass,,454,74,100,72,90,72,46,4,False
456,Finneon,Water,,330,49,49,56,49,61,66,4,False
457,Lumineon,Water,,460,69,69,76,69,86,91,4,False
458,Mantyke,Water,Flying,345,45,20,50,60,120,50,4,False
459,Snover,Grass,Ice,334,60,62,50,62,60,40,4,False
460,Abomasnow,Grass,Ice,494,90,92,75,92,85,60,4,False
461,Weavile,Dark,Ice,510,70,120,65,45,85,125,4,False
462,Magnezone,Electric,Steel,535,70,70,115,130,90,60,4,False
463,Lickilicky,Normal,,515,110,85,95,80,95,50,4,False
464,Rhyperior,Ground,Rock,535,115,140,130,55,55,40,4,False
465,Tangrowth,Grass,,535,100,100,125,110,50,50,4,False
466,Electivire,Electric,,540,75,123,67,95,85,95,4,False
467,Magmortar,Fire,,540,75,95,67,125,95,83,4,False
468,Togekiss,Fairy,Flying,545,85,50,95,120,115,80,4,False
469,Yanmega,Bug,Flying,515,86,76,86,116,56,95,4,False
470,Leafeon,Grass,,525,65,110,130,60,65,95,4,False
471,Glaceon,Ice,,525,65,60,110,130,95,65,4,False
472,Gliscor,Ground,Flying,510,75,95,125,45,75,95,4,False
473,Mamoswine,Ice,Ground,530,110,130,80,70,60,80,4,False
474,Porygon-Z,Normal,,535,85,80,70,135,75,90,4,False
475,Gallade,Psychic,Fighting,518,68,125,65,65,115,80,4,False
476,Probopass,Rock,Steel,525,60,55,145,75,150,40,4,False
477,Dusknoir,Ghost,,525,45,100,135,65,135,45,4,False
478,Froslass,Ice,Ghost,480,70,80,70,80,70,110,4,False
479,Rotom,Electric,Ghost,440,50,50,77,95,77,91,4,False
479,Rotom Heat,Electric,Fire,520,50,65,107,105,107,86,4,False
479,Rotom Wash,Electric,Water,520,50,65,107,105,107,86,4,False
479,Rotom Frost,Electric,Ice,520,50,65,107,105,107,86,4,False
479,Rotom Fan,Electric,Flying,520,50,65,107,105,107,86,4,False
479,Rotom Mow,Electric,Grass,520,50,65,107,105,107,86,4,False
480,Uxie,Psychic,,580,75,75,130,75,130,95,4,True
481,Mesprit,Psychic,,580,80,105,105,105,105,80,4,True
482,Azelf,Psychic,,580,75,125,70,125,70,115,4,True
483,Dialga,Steel,Dragon,680,100,120,120,150,100,90,4,True
484,Palkia,Water,Dragon,680,90,120,100,150,120,100,4,True
485,Heatran,Fire,Steel,600,91,90,106,130,106,77,4,True
486,Regigigas,Normal,,670,110,160,110,80,110,100,4,True
487,GiratinaAltered Forme,Ghost,Dragon,680,150,100,120,100,120,90,4,True
487,GiratinaOrigin Forme,Ghost,Dragon,680,150,120,100,120,100,90,4,True
488,Cresselia,Psychic,,600,120,70,120,75,130,85,4,False
489,Phione,Water,,480,80,80,80,80,80,80,4,False
490,Manaphy,Water,,600,100,100,100,100,100,100,4,False
491,Darkrai,Dark,,600,70,90,90,135,90,125,4,True
492,Shaymin Land,Grass,,600,100,100,100,100,100,100,4,True
492,Shaymin Sky,Grass,Flying,600,100,103,75,120,75,127,4,True
493,Arceus,Normal,,720,120,120,120,120,120,120,4,True`.split('\n')
    for (i=0; i<database.length; i++) {
        linetoread = database[i].split(',')
        if (linetoread[1].toLowerCase().indexOf(searchbox.value.toLowerCase()) != -1) {
            results.push(linetoread[1])
            resultinfo.push(linetoread)
        }
    }
    switch (results.length) {
        case 0:
            name.textContent = "Not found"
            number.textContent = "#N/A"
            pokemonImage.src = "images/POKEMON/blank.ico";
            pokemonImage.style = "background-color:#33334d;border: 4px solid #52527a;"
            type.textContent = "...";
            statTotal.textContent = "...";
            statHP.textContent = "...";
            statAttack.textContent = "...";
            statDefense.textContent = "...";
            statSpAttack.textContent = "...";
            statSpDefense.textContent = "...";
            break;
        case 1:
            name.textContent = results
            number.textContent = "#" + resultinfo[0][0]
            pokemonImage.src = "images/POKEMON/"+resultinfo[0][0]+" "+results+".ico";
            statTotal.textContent = resultinfo[0][4];
            statHP.textContent = resultinfo[0][5];
            statAttack.textContent = resultinfo[0][6];
            statDefense.textContent = resultinfo[0][7];
            statSpAttack.textContent = resultinfo[0][8];
            statSpDefense.textContent = resultinfo[0][9];
            if (resultinfo[0][3] === "") {
                type.textContent = resultinfo[0][2];
            } else {
                type.textContent = resultinfo[0][2] + ", " + resultinfo[0][3];
            }
            if (resultinfo[0][12] == "False") {
                pokemonImage.style = "background-color:#33334d;border: 4px solid #52527a;"
            } else {
                pokemonImage.style = "background-color:#666600;border: 4px solid #999900;"
            }
            break;
        default:
            if (results.length < 5) {
                name.textContent = results.join(', ');
                number.textContent = "#..."
                pokemonImage.src = "images/POKEMON/blank.ico";
                pokemonImage.style = "background-color:#33334d;border: 4px solid #52527a;"
                type.textContent = "..."
                statTotal.textContent = "...";
                statHP.textContent = "...";
                statAttack.textContent = "...";
                statDefense.textContent = "...";
                statSpAttack.textContent = "...";
                statSpDefense.textContent = "...";
            } else {
                name.textContent = results.length + " results"
                number.textContent = "#..."
                pokemonImage.src = "images/POKEMON/blank.ico";
                pokemonImage.style = "background-color:#33334d;border: 4px solid #52527a;"
                type.textContent = "..."
                statTotal.textContent = "...";
                statHP.textContent = "...";
                statAttack.textContent = "...";
                statDefense.textContent = "...";
                statSpAttack.textContent = "...";
                statSpDefense.textContent = "...";
            }

    }
}

searchbutton.onclick = clickButton;