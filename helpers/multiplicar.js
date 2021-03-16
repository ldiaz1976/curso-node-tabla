const fs = require('fs');
var colors = require('colors');


const crearArchivo = ( base = 5, listar, hasta) => {

    return new Promise((resolve, reject) => {
        let salida, consola = '';
    
        salida = ("===============\n")
        salida+=(`Tabla del: ${base}\n`)
        salida+=("===============\n")

        consola = ("===============\n".rainbow)
        consola+=(`${'Tabla del:'.yellow} ${colors.blue(base)}\n`)
        consola+=("===============\n".rainbow)


        for (let i = 1; i <= hasta; i++) {
            let result = base * i;
            salida += (`${base} x ${ i } = ${result}\n`);
            consola += (`${base} ${'x'.green} ${ i } ${'='.green} ${colors.yellow(result)}\n`);
        }
        if (listar) console.log(consola);

        const nombreArchivo = `tabla-${base}.txt`;
        try {
            fs.writeFileSync('./salida/'+nombreArchivo,  salida);
            resolve(nombreArchivo) 
        } catch (e) {
            err = "Error!!!!->"+e;
            reject(err)
        }
    })
  
}

module.exports = { 
    crearArchivo 
};