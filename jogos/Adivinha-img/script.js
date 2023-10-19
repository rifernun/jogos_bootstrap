alert('Memorize uma imagem, e responda as perguntas que eu irei descobrir sua carta!');

function respostas()
{  
    var posicao=0;
    var resp1=document.formAdivinha.op1.value;
    var resp2=document.formAdivinha.op2.value;
    var resp3=document.formAdivinha.op3.value;
    var resp4=document.formAdivinha.op4.value; 
    
    if(resp1 == "Sim") posicao=posicao+1;
    if(resp2 == "Sim") posicao=posicao+2; 
    if(resp3 == "Sim") posicao=posicao+8;
    if(resp4 == "Sim") posicao=posicao+4;
    
    if(posicao>0)
    {
        document.write('<div style = "font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0;box-sizing: border-box;">');
        document.write('<center><h2>A imagem que você pensou foi: </h2><br/>');
        if(posicao ==1) document.write('<img src="imgs/1.png" style = "max-width: 50%;height: auto;"/>');
        if(posicao ==2) document.write('<img src="imgs/2.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==3) document.write('<img src="imgs/3.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==4) document.write('<img src="imgs/4.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==5) document.write('<img src="imgs/5.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==6) document.write('<img src="imgs/6.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==7) document.write('<img src="imgs/7.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==8) document.write('<img src="imgs/8.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==9) document.write('<img src="imgs/9.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==10) document.write('<img src="imgs/10.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==11) document.write('<img src="imgs/11.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==12) document.write('<img src="imgs/12.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==13) document.write('<img src="imgs/13.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==14) document.write('<img src="imgs/14.png" style = "max-width: 50%;height: auto;"/> ');
        if(posicao ==15) document.write('<img src="imgs/15.png" style = "max-width: 50%;height: auto;"/>');
        document.write('<br/></br/>');
        document.write('<br/><br/><a href="" style ="background-color: white;font-weight: 500; width: 150px;border: 1px solid black;padding: 10px;margin: 20px auto 0;border-radius: 4px;cursor: pointer;text-align: center;text-decoration: none;">Tentar Novamente!!!</a>');
        document.write('</center> </div>');
    }else alert('Você não escolheu nenhuma carta');
}