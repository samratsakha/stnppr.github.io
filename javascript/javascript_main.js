var turn=["Stone","Paper","Scissor","Stone","Paper","Scissor","Stone","Paper","Scissor","Paper"];
var turn1;
var p1;
var p2;
var x=0,y=0;
var end=0;
var snd=document.getElementById("aud");
var snd1=document.getElementById("aud1");
var snd2=document.getElementById("aud2");
var snd3=document.getElementById("aud3");
function func1(){
    snd.play();
    turn1=Math.random()*10;
    turn1=Math.floor(turn1);
    document.getElementById("h2").innerHTML="Player 1 : "+turn[turn1];
    p1=turn[turn1];
    document.getElementById("btn2").style.visibility="visible";
    document.getElementById("btn1").style.visibility="hidden";
    document.getElementById("h23").style.visibility="hidden";
    document.getElementById("h22").style.visibility="hidden";
    if(p1=="Stone"){
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("scr").style.visibility="hidden";
        document.getElementById("ppr").style.visibility="hidden";
    }
    if(p1=="Paper"){
        document.getElementById("ppr").style.visibility="visible";
        document.getElementById("rock").style.visibility="hidden";
        document.getElementById("scr").style.visibility="hidden";
    }
    if(p1=="Scissor"){
        document.getElementById("scr").style.visibility="visible";
        document.getElementById("rock").style.visibility="hidden";
        document.getElementById("ppr").style.visibility="hidden";
    }
}
function func2(){
    snd.play();
    turn1=Math.random()*10;
    turn1=Math.floor(turn1);
    document.getElementById("h22").innerHTML="Player 2 : "+turn[turn1];
    p2=turn[turn1];
    document.getElementById("btn2").style.visibility="hidden";
    document.getElementById("btn1").style.visibility="visible";
    document.getElementById("h23").style.visibility="visible";
    document.getElementById("h22").style.visibility="visible";
    //value1 
    if(p2=="Stone"){
        document.getElementById("rock").style.visibility="visible";
        document.getElementById("scr").style.visibility="hidden";
        document.getElementById("ppr").style.visibility="hidden";
    }
    if(p2=="Paper"){
        document.getElementById("ppr").style.visibility="visible";
        document.getElementById("rock").style.visibility="hidden";
        document.getElementById("scr").style.visibility="hidden";
    }
    if(p2=="Scissor"){
        document.getElementById("scr").style.visibility="visible";
        document.getElementById("rock").style.visibility="hidden";
        document.getElementById("ppr").style.visibility="hidden";
    }
    if(p1=='Stone' && p2=='Scissor'){
        document.getElementById("h23").innerHTML="PLayer 1 gain points";
        snd1.play();
        x++;
    }
    if(p2=='Stone' && p1=='Scissor'){
        document.getElementById("h23").innerHTML="PLayer 2 gain points";
        snd3.play();
        y++;
    }
    //value2
    if(p1=='Paper' && p2=='Stone'){
        document.getElementById("h23").innerHTML="PLayer 1 gain points";
        snd1.play();
        x++;
    }
    if(p1=='Stone' && p2=='Paper'){
        document.getElementById("h23").innerHTML="PLayer 2 gain points";
        snd3.play();
        y++;
    }
    //value3
    if(p1=='Paper' && p2=='Scissor'){
        document.getElementById("h23").innerHTML="PLayer 2 gain points";
        snd3.play();
        y++;
    }
    if(p1=='Scissor' && p2=='Paper'){
        document.getElementById("h23").innerHTML="PLayer 1 gain points";
        snd1.play();
        x++;
    }
    if(p1=='Stone' && p2=='Stone'){
        document.getElementById("h23").innerHTML="No points";
        snd2.play();
    }
    if(p1=='Scissor' && p2=='Scissor'){
        document.getElementById("h23").innerHTML="No points";
        snd2.play();
    }
    if(p1=='Paper' && p2=='Paper'){
        document.getElementById("h23").innerHTML="No points";
        snd2.play();
    }
    document.getElementById("result1").innerHTML="Player 1 : "+x;
    document.getElementById("result2").innerHTML="Player 2 : "+y;
    p1=0;
    p2=0;
    if(x==10 && y<x){
        end=1;
        window.open("play1.html","_self");
    }
    if(y==10 && x<y){
        end=1;
        window.open("play2.html","_self");
    }
}

window.onbeforeunload = function(e) {
    if(end==1){
      window.location.reload(false); 
    }
    else{
        return "Are you sure";
    }
};