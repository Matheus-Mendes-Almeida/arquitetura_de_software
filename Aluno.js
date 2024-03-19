const Turma = require('./Turma')

class Aluno {
    constructor(nome, login, ra){
        this.nome = nome
        this.login = login
        this.ra = ra
    }
    
    turmas = [];
}

module.exports = Aluno;