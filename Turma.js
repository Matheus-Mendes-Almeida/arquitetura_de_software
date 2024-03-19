class Turma{
    constructor(codigo, nota){
        this.codigo = codigo
        this.nota = nota
    }

    aprovadoNota() {
        if(nota >= 6)
            return true
        else
            return false
    }
}

module.exports = Turma;