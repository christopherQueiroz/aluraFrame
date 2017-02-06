class Mensagem{
    constructor(texto='') { //Parâmetro opcional, feito igual no c#
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}