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
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);

 }

    adiciona(event){
        event.preventDefault();    
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
      //  this._mensagem.texto = "esquema feito com sucesso";
        this._mensagemView.update(this._mensagem);
        console.log(this._mensagem);

        console.log(this._listaNegociacoes)
        this._limparFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    _limparFormulario(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = "0.0";
        this._inputData.focus();
    }
}