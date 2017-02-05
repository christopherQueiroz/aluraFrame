class NegociacaoController{

 constructor(){
        //Criação do constructor para manter os dados como propriedades, evitando percorrer o DOM a cada requisição
        //Os dados são mantidos quando a instância do objeto é feita, e com o disparo do evento onsubmit chamamos apenas
        //o método adiciona().

        let $ = document.querySelector.bind(document); //Passa querySelector para a variável "dolar", mantendo a associação com "document" através do bind

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
 }

    adiciona(event){
        event.preventDefault();
        
        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
        
        console.log(negociacao);

        this._listaNegociacoes.adiciona(negociacao);
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
        
    }

    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = '0.0';
        this._inputData.focus();

    }
}