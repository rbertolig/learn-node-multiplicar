//requires
const fs = require('fs');
const colors = require('colors');

let listarTablas = (base, limite) => {
    console.log('======================'.green);
    console.log(`Tabla del ${base} hasta el ${limite}`.blue);
    console.log('======================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' No es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite '${base}' No es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tablas-${base}.txt`, data, (err) => {
            if (err) resolve(err)
            else resolve(`tablas-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTablas
}