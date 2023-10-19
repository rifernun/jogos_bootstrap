    $(document).ready(function() {
        $('#animal2').show();
        $('#animal').hide();
        $('#opcoes').change(function() {
             if ($('#opcoes').val() == 1) {
                $('#animal2').show();
                $('#animal').hide();   
            }  else {
                $('#animal2').hide();
                $('#animal').show();
            }
        });
    });


    function enviar(){
        var selects = document.getElementsByClassName('animal-select');
        var textoOrdem = "Sua ordem de prioridades na vida é: ";
  
        var comidaPorAnimal = {
          vaca: "A CARREIRA",
          tigre: "O ORGULHO",
          ovelha: "O AMOR",
          cavalo: "A FAMÍLIA",
          porco: "O DINHEIRO"
        }
  
        for (var i = 0; i < selects.length; i++) {
          var animalSelecionado = selects[i].value;
          var comidaCorrespondente = comidaPorAnimal[animalSelecionado];
  
          textoOrdem += comidaCorrespondente;
  
          if (i < selects.length - 1) {
            textoOrdem += ", ";
          }
        }
  
        document.getElementById('resultado').textContent = textoOrdem;


        var cachorro = document.getElementById("cachorro").value;

        var gato = document.getElementById("gato").value;
        
        var rato = document.getElementById("rato").value;
        
        var café = document.getElementById("café").value;

        var mar = document.getElementById("mar").value;

        var amarelo = document.getElementById("amarelo").value;

        var laranja = document.getElementById("laranja").value;

        var vermelho = document.getElementById("vermelho").value;

        var branco = document.getElementById("branco").value;

        var verde = document.getElementById("verde").value;

        var numero = document.getElementById("numero").value;

        var semana = document.getElementById("semana").value;

        document.getElementById("resposta1").innerHTML = "\n\n\n\n\nPodemos dizer também que " + cachorro + " diz respeito a sua própria personalidade, " + gato + " descreve melhor o seu par; já o termo " + rato + " diz respeito a seus inimigos, enquanto " + café + " faz referência a como você interpreta o crush em sua vida e " + mar + " é como você enxerga sua própria vida.";
    
        document.getElementById("resposta2").innerHTML = "\n\n\nAlém disso, " + amarelo + " é alguém que você nunca esquecerá, " + laranja + " é uma pessoa que você considera um verdadeiro amigo, já " + vermelho + " é a pessoa que você ama verdadeiramente, enquanto " + branco + " é sua alma gêmea e " + verde + " é a pessoa que estará presente até o fim da vida.";

        document.getElementById("resposta3").innerHTML = "\n\n\nPense sobre o resultado deste teste um pouco, brincadeira ou não ele pode refletir bastante como você anda levando sua vida.";

        document.getElementById("resposta4").innerHTML = "\n\n\nAgora envie este teste para " + numero + " pessoas e o teu desejo se realizará até o(a) próximo(a) " + semana + ".";
    }