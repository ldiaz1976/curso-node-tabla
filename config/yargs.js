const argv = require('yargs')
.options({
    'b':{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
    },
    'l': {
    alias: 'listar',
    default: false,
    type: 'boolean',
    describe: 'Muestra la tabla de multiplicar en consola'
    },
    'h':{
    alias: 'hasta',
    default: 10,
    type: 'number',
    describe: 'Limite de la tabla de multiplicar'
    }   
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw(`Error: La base debe ser un numero`);
    }
    if(isNaN(argv.h)){
        throw(`Error: Limite debe ser un numero`);
    }else{
        return true;
    };
}).argv

module.exports=argv;