//Requires
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Lista las tablas de multiplicar', opt)
    .command('crear', 'Creaun archivo con tablas de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}