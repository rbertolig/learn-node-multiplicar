const { crearArchivo, listarTablas } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let base = argv.base;
//if (!argv.base) base = argv.b

let limite = argv.limite;
//if (!argv.limite) limite = argv.l

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTablas(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log('El archivo', colors.green(archivo), 'ha sido creado!'))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`comando '${comando}' no reconocido`);
}