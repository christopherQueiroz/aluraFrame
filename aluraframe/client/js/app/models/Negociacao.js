class Negociacao{

    //Lembrando, o construtor só pode ser invocado usando o new antes
    constructor(data, quantidade, valor){
     debugger;
        this._data = new Date(data);
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }



    setQuantidade(qtd){
        this._quantidade = qtd;
    }

    setData(dt){
       this._data = dt;
    }

    setValor(vlr){
        this._valor = valor;
    }

}