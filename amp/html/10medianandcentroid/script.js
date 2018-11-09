const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"blue");
let B = new Point(600,200,15,"blue");
let C = new Point(800,100,15,"blue");

let D = new Point(100,100,10,"grey");
let E = new Point(600,200,10,"grey");
let F = new Point(800,100,10,"grey");

let S = new Point(250,250,5,"red");

let l = new LinearFunction(1,1);//line
let m = new LinearFunction(1,1);//line
let k = new LinearFunction(1,1);//line

let h = new LinearFunction(1,1);
let i = new LinearFunction(1,1);
let j = new LinearFunction(1,1);


A.drag();
B.drag();
C.drag();

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    l.letTwoPointsDefineLine(A,B);
    m.letTwoPointsDefineLine(B,C);
    k.letTwoPointsDefineLine(A,C);

    h.letTwoPointsDefineLine(A,E);
    i.letTwoPointsDefineLine(B,F);
    j.letTwoPointsDefineLine(C,D);




    D.x = (A.x + B.x) / 2;
    D.y = (A.y + B.y) / 2;

    E.x = (B.x + C.x) / 2;
    E.y = (B.y + C.y) / 2;

    F.x = (A.x + C.x) / 2;
    F.y = (A.y + C.y) / 2;




    S.x = h.intersection(i).x;
    S.y = h.intersection(i).y;

    l.draw(context);
    m.draw(context);
    k.draw(context);

   h.draw(context);
    i.draw(context);
    j.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    S.draw(context);

    D.draw(context);
    E.draw(context);
    F.draw(context);

    A.print(context, "A");
    B.print(context, "B");
    C.print(context, "C");
    S.print(context, "S");
    D.print(context, "D");
    E.print(context, "E");
    F.print(context, "F");




  }

  animate();