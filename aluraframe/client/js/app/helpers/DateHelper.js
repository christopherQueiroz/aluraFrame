class DateHelper{
    
    //Como os métodos são estáticos, podem ser chamados sem ser uma instância do objeto. Logo, a classe não deve ser instanciada.
    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static textoParaData(texto){
       if(!(/\d{4}-\d{2}-\d{2}/.test(texto)))
          throw new Error("Deve estar no formato aaaa-mm-dd");


       return new Date(...texto.split('-').map((item, index) => item - index % 2)); 
                   //Uso da função map que serve para mapear o array. 
                    //O primeiro parâmetro é o item do array e o segundo é o seu indice no array.
                     //Arrow function permite que eliminemos o termo funcion. É como uma lambda expression.
                    //O mod 2 vai servir pra verificarmos se o indice é o 1. Como temos que fazer um decremento no indice 1, o mod 2 de 1 é 1, então será o indice 1 -1.
                     
                     //A função tb pode ficar assim: map((item, index)=>item - index % 2 ) omitindo as chaves, já que estão em uma linha só, e o return, já que é uma saída unica
                     //Mas vou deixar do modo mais verboso pra não me confundir depois
                    

    }

      
    static dataParaTexto(data){
            
            return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`; //Para fazer interpolação de variáveis em strings coloque a string entre crases e use ${variavel}
    }
}