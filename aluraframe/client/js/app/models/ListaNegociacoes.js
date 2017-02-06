class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }


    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes); //Programação defensiva. Ele retorna um novo array com a lista de negociações concatenada, evitando alterações por outros caminhos.
    }
}