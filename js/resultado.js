
/**
* Declara a principal classe da API
* com todos os atributos "privados";
**/
var resultado = {
	_jogo: 0,
        contador: 0,
        quantidade: function(jogo) {
            switch(jogo) {
                case '1':
                    this.contador = 5;
                    this._jogo    = 1;
                    break;
                case '4':
                    this.contador = 4;
                    this._jogo    = 4;
                    break;
                case '3':
                    this.contador = 7;
                    this._jogo    = 3;
                    break;
                default:
                    this.contador = 3;
                    this._jogo    = 2;
            }
        },
        pontos: function(numero) {
            var obj = {
                1 : {1 : 15, 2 : 14, 3 : 13, 4 : 12, 5 : 11},
                2 : {1 : 5,  2 : 4,  3 : 3},
                3 : {1 : 20, 2 : 19, 3 : 18, 4 : 17, 5 : 16, 6 : 15, 7 : 0},
                4 : {1 : 5,  2 : 4,  3 : 3,  4 : 2},
            };
            return obj[this._jogo][numero];
        },
        formatoMoeda: function(numero) {
            numero = numero.replace(".", "");
            var tmp = numero+'';
            tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
            if( tmp.length > 6 ){
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
            }
            return tmp;
        },
        templateHeader: function(value) {
            return '<p style="font-weight: bold;font-size: 13px; font-family: verdana;">' + value + '</p>';
        },
        template: function(value) {
          return '<p id="resultado">' + value + '</p>';
        },
        insertContent: function(array) {
            
            this.quantidade(array['jogo_id']);
            
            var pontos     = this.templateHeader('PONTOS'    );
            var ganhadores = this.templateHeader('GANHADORES');
            var premio     = this.templateHeader('PR�MIO'    );
            
            for(var i = 1; i <= this.contador; i++){
                pontos     += this.template(this.pontos(i));
                ganhadores += this.template(array['ganhador_'+i]);
                premio     += this.template(this.formatoMoeda(array['rateio_'+i]));
            }
            
            document.getElementById('primeira').innerHTML = pontos;
            document.getElementById('segunda' ).innerHTML = ganhadores;
            document.getElementById('terceira').innerHTML = premio;
            
        }
};
