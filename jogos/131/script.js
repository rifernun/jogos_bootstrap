function respostas() {

    var acertos = 0;

    var resp1 = document.formAdivinha.op1.value;
    var resp2 = document.formAdivinha.op2.value;
    var resp3 = document.formAdivinha.op3.value;
    var resp4 = document.formAdivinha.op4.value;
    var resp5 = document.formAdivinha.op5.value;

    if (resp1 == "Sim") acertos = acertos + 1;
    if (resp2 == "Sim") acertos = acertos + 2;
    if (resp3 == "Sim") acertos = acertos + 4;
    if (resp4 == "Sim") acertos = acertos + 8;
    if (resp5 == "Sim") acertos = acertos + 16;


    if (acertos > 0) {
        document.write('<div style = "font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0;box-sizing: border-box;">');
        document.write('<center><h2>O número que você pensou foi: ' + acertos + '</h2><br />');
        document.write('<br /><br />');
        document.write('<br /><br /><a href="" style ="background-color: white;font-weight: 500; width: 150px;border: 1px solid black;padding: 10px;margin: 20px auto 0;border-radius: 4px;cursor: pointer;text-align: center;text-decoration: none;">Tentar Novamente!!!</a>');

        document.write('</center> </div>');


    } else alert('Você não escolheu nenhuma carta');

}