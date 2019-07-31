let board=[
["","",""],
["","",""],
["","",""]
];
let unfilled=[];
let filled=[];
let canvas;
let player=['X','O']
let m;
let result;
let temp;
function setup()
{
result=document.getElementById("won");
canvas=createCanvas(400,400);
m=width/3;
console.log(m);
canvas.mousePressed(chance);

for(let i=0;i<3;i++)
{for(let j=0;j<3;j++)
{
if(board[j][i]=='')
{
let z=createVector(j,i)
unfilled.push(z);
}
}
}

choose=createSelect();
choose.option('X');
choose.option('O');

temp=choose.value();
choose.changed(tempchange);
}
function draw()
{
background(225);
drawboard();
drawshape();
if(unfilled.length!=9)
won();
checkDraw();
}
function chance()
{

for(let i=0;i<3;i++)
{for(let j=0;j<3;j++)
{
for(let z=0;z<unfilled.length;z++)
{
if((mouseX>m*i && mouseY>m*j && mouseX<m*(i+1) && mouseY<m*(j+1)) && i==unfilled[z].x && j==unfilled[z].y )
{
board[j][i]=temp;
change();
unfilled.splice(z,1);
}
}
}
}
}
function tempchange(){
temp=choose.value();
console.log(temp);
}

function change()
{
if(temp=='X')
{
temp='O';
console.log(temp)
}
else if(temp=='O')
{
temp='X';
}

}



function won()
{
if(check(board[0][0],board[1][1],board[2][2]))
{
 noLoop();
result.textContent='WON ' +  board[1][1];
console.log('1');
stroke(0,0,255);
strokeWeight(15);
line(0,0,width,height);
}
if(check(board[0][2],board[1][1],board[2][0]))
{
noLoop();
result.textContent='THE WINNER IS ' + board[1][1];
console.log('2');
stroke(0,0,255);
strokeWeight(15);
line(width,0,0,height);
}
for(let i=0;i<3;i++)
{if(check(board[i][0],board[i][1],board[i][2]))
{
noLoop();
result.textContent='WON '+ board[i][0];
console.log('3');
stroke(0,0,255);
strokeWeight(15);
line(0,((m*i)+(m*(i+1)))/2,height,((m*i)+(m*(i+1)))/2);

}
if(check(board[0][i],board[1][i],board[2][i]))
{
noLoop();
result.textContent='WON '+ board[0][i];
console.log('4');
stroke(0,0,255);
strokeWeight(15);
line(((m*i)+(m*(i+1)))/2,0,((m*i)+(m*(i+1)))/2,height);
}
}
}

function check(a,b,c)
{
if(a!='' && b!='' && c!='')
{if(a==b &&b==c)
return true;
}
return false;
}

function drawboard()
{
for(let i=1;i<3;i++)
{
for(let j=1;j<3;j++)
{
stroke(0);
strokeWeight(10);
line(0,m*i,width,m*i);
line(m*j,0,m*j,height);

}
}
}



function drawshape()
{
stroke(5);
for(let i=0;i<3;i++)
{
for(let j=0;j<3;j++)
{
if(player[1]==board[j][i])
{
ellipse((m/2)+m*i,(m/2)+m*j,100,100);
}
if(player[0]==board[j][i])
{
line(m*i,m*j,(i+1)*m,(j+1)*m);
line(m*(i+1),m*j,i*m,(j+1)*m);
}

}
}
}
function checkDraw(){
if(unfilled.length==0)
{fill(255,255,0);
ellipse(width/2,height/2,400,400);
textSize(40);
text('draw',width/2,height/2);
}
}


