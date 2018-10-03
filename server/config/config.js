//================================
//Puerto
//============================
process.env.PORT = process.env.PORT || 3000;

//================================
//Entorno
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================================
//Base de datos
//============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://diegoAA:diego958668@ds251277.mlab.com:51277/cafe';
}


process.env.URLDB = urlDB;