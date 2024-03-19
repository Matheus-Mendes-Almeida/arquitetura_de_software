const Turma = require('./Turma');

class TurmaPresencial extends Turma{
    constructor(codigo, nota, frequencia){
        super(codigo, nota)
        this.frequencia = frequencia
    }

    aprovadoFrequencia(){
        if(this.frequencia >= 75)
            return true
        else
            return false
    }
}

module.exports = TurmaPresencial;