    function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    
    //Principais variáveis do jogo
	
    var jogo = {}
    var TECLA = { /*criando um array de teclas*/
        W: 87,  /*movimenta o helicoptero para cima*/
        S: 83,   /*movimenta o helicoptero para baixo*/
        D: 68     /*faz o helicoptero disparar */
        }
    
        jogo.pressionou = [];

        //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        }); 
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
    movefundo();
    movejogador();
	
    } // Fim da função loop()
    
    
    //Função que movimenta o fundo do jogo
	
	function movefundo() {
	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1); /* função anda 1 px para esquerda*/
        
    } // fim da função movefundo()

        function movejogador() {
	
	if (jogo.pressionou[TECLA.W]) {
		var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);
        
        if (topo<=0) {
		
            $("#jogador").css("top",topo+10);
        }
        
	
	}
	
	if (jogo.pressionou[TECLA.S]) {
		
		var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);	
        
        if (topo>=434) {	
            $("#jogador").css("top",topo-10);
                
        }
        
	}
	
	if (jogo.pressionou[TECLA.D]) {
		
		//Chama função Disparo	
	}

	} // fim da função movejogador()

    } // Fim da função start
