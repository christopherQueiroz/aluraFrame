class MensagemView{
    constructor(elemento){

        this._elemento = elemento;

    }

    _template(model){
        return model.texto ? `<p class="alert-info">${model.texto}</p>` : '<p></p>';
    }
    debugger;
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}