const konyvek = [
{ id: 1, cim: "A Pál utcai fiúk", szerzo: "Molnár Ferenc",
kategoria: "Regény", oldalszam: 240 },
{ id: 2, cim: "Egri csillagok", szerzo: "Gárdonyi Géza",
kategoria: "Történelmi regény", oldalszam: 560 },
{ id: 3, cim: "Az arany ember", szerzo: "Jókai Mór",
kategoria: "Regény", oldalszam: 480 },
{ id: 4, cim: "Tüskevár", szerzo: "Fekete István",
kategoria: "Ifjúsági regény", oldalszam: 320 },
{ id: 5, cim: "Légy jó mindhalálig", szerzo: "Móricz Zsigmond",
kategoria: "Regény", oldalszam: 272 },
{ id: 6, cim: "Kincskereső kisködmön", szerzo: "Móra Ferenc",
kategoria: "Ifjúsági regény", oldalszam: 176 },
{ id: 7, cim: "Rab ember fiai", szerzo: "Móra Ferenc",
kategoria: "Történelmi regény", oldalszam: 224 }
];

const getKonyvek = (req, res) => {
    res.json(konyvek);
};

const getDarab = (req, res) => {
    res.json({ darab: konyvek.length });
};

const getOsszoldal = (req, res) => {
    const osszeg = konyvek.reduce((sum, konyv) => sum + konyv.oldalszam, 0);
    res.json({ osszoldal: osszeg });
};

const getKonyvById = (req, res) => {
    const id = Number(req.params.id);
    const konyv = konyvek.find(k => k.id === id);
    if(!konyv){
        return res.status(404).json({message: "A kért könyv nem található!"})
    }

    res.json(konyv);
}

const getSzerzok = (req, res) => {
    const mindSzerzo = konyvek.map(konyv => konyv.szerzo);
    const egyediSzerzok = [...new Set(mindSzerzo)];

    res.json({
        szerzok: egyediSzerzok,
        darab: egyediSzerzok.length
    });
};


module.exports = {
    getKonyvek,
    getDarab,
    getOsszoldal,
    getKonyvById,
    getSzerzok
};