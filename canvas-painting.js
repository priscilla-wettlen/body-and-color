// @ts-nocheck


/* ----- setup ------ */

// sets up a bodystream with configuration object
const bodies = new BodyStream ({
    posenet: posenet,
    architecture: modelArchitecture.MobileNetV1, 
    detectionType: detectionType.singleBody, 
    videoElement: document.getElementById('video'), 
    samplingRate: 250})
  
let body

bodies.addEventListener('bodiesDetected', (e) => {
  body = e.detail.bodies.getBodyAt(0)
  const distance = Math.round(body.getDistanceBetweenBodyParts(bodyParts.leftWrist, bodyParts.rightWrist))
  body.getDistanceBetweenBodyParts(bodyParts.leftWrist, bodyParts.rightWrist)
})

// get elements
//let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");





// draw the video, nose and eyes into the canvas
function drawCameraIntoCanvas() {
  

  // draw the video element into the canvas
  //ctx.drawImage(video, 0, 0, video.width, video.height);
  
  
  
if (body) {
  
   const leftWrist = body.getBodyPart(bodyParts.leftWrist)
  const rightWrist = body.getBodyPart(bodyParts.rightWrist)
  const nose = body.getBodyPart(bodyParts.nose)
  const leftEye = body.getBodyPart(bodyParts.leftEye)
  const rightEye = body.getBodyPart(bodyParts.rightEye)
  const leftShoulder = body.getBodyPart(bodyParts.leftShoulder)
  const rightShoulder = body.getBodyPart(bodyParts.rightShoulder)
  const leftElbow = body.getBodyPart(bodyParts.leftElbow)
  const rightElbow = body.getBodyPart(bodyParts.rightElbow)
  const leftHip = body.getBodyPart(bodyParts.leftHip)
  const rightHip = body.getBodyPart(bodyParts.rightHip)
  const leftKnee = body.getBodyPart(bodyParts.leftKnee)
  const rightKnee = body.getBodyPart(bodyParts.rightKnee)
  const leftAnkle = body.getBodyPart(bodyParts.leftAnkle)
  const rightAnkle = body.getBodyPart(bodyParts.rightAnkle)



      //draw nose
      //ctx.beginPath();
      //ctx.arc(nose.position.x, nose.position.y, 100, 0, 2 * Math.PI);
      //ctx.fillStyle = 'red'
      //ctx.fill()

      
      var b1= leftWrist.speed.absoluteSpeed / 2;
      var b2= rightWrist.speed.absoluteSpeed / 2;
      var b0= nose.speed.absoluteSpeed / 2;
      var b3= rightEye.speed.absoluteSpeed / 2;
      var b4= leftEye.speed.absoluteSpeed / 2;
      var b5= rightElbow.speed.absoluteSpeed / 2;
      var b6= leftElbow.speed.absoluteSpeed / 2;
      var b7= rightShoulder.speed.absoluteSpeed / 2;
      var b8= leftShoulder.speed.absoluteSpeed / 2;
      var b9= rightHip.speed.absoluteSpeed / 2;
      var b10= leftHip.speed.absoluteSpeed / 2;
      var b11= rightKnee.speed.absoluteSpeed / 2;
      var b12= leftKnee.speed.absoluteSpeed / 2;
      var b13= rightAnkle.speed.absoluteSpeed / 2;
      var b14= leftAnkle.speed.absoluteSpeed / 2;

      var average = (b0+b1+b2+b3+b4+b5+b6+b7+b8+b9+b10+b11+b12)/13;

      

      const fillstyle = average; 

      ctx.clearRect(0,0,canvas2.width,canvas2.height);

      switch (true) {

        case (average < 10):
  
          ctx.globalAlpha = 1;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()
        case ((average >=10) && (average < 50 )):
          ctx.globalAlpha = 0.5;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()

          case ((average >=50) && (average < 100 )):
          ctx.globalAlpha = 0.25;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()

          case ((average >=100) && (average < 150 )):
          ctx.globalAlpha = 0.125;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()

          case ((average >=150) && (average < 200 )):
          ctx.globalAlpha = 0.0625;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()

          case (average >200):
          ctx.globalAlpha = 0.03125;
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "#00003d"
          ctx.fill()
        
   

      }
      /*if (average <1) {


      }
      else if((average > 1 < 3) {

      }
      if(average >3 <5) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#FFD5E8"
        ctx.fill()
      }
      else if(average >5 <7) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#FFC848"
        ctx.fill()
      }
      if(average >7) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#FFA145"
        ctx.fill()
      } */
      

      console.log(average);

      

    



    

  

    
      
  }
  if (body) {
  
    const leftWrist = body.getBodyPart(bodyParts.leftWrist)
   const rightWrist = body.getBodyPart(bodyParts.rightWrist)
   const nose = body.getBodyPart(bodyParts.nose)
   const leftEye = body.getBodyPart(bodyParts.leftEye)
   const rightEye = body.getBodyPart(bodyParts.rightEye)
   const leftShoulder = body.getBodyPart(bodyParts.leftShoulder)
   const rightShoulder = body.getBodyPart(bodyParts.rightShoulder)
   const leftElbow = body.getBodyPart(bodyParts.leftElbow)
   const rightElbow = body.getBodyPart(bodyParts.rightElbow)
   const leftHip = body.getBodyPart(bodyParts.leftHip)
   const rightHip = body.getBodyPart(bodyParts.rightHip)
   const leftKnee = body.getBodyPart(bodyParts.leftKnee)
   const rightKnee = body.getBodyPart(bodyParts.rightKnee)
   const leftAnkle = body.getBodyPart(bodyParts.leftAnkle)
   const rightAnkle = body.getBodyPart(bodyParts.rightAnkle)
 
 
 
   
   
   ctx2.clearRect(0,0,canvas2.width,canvas2.height);
   ctx2.lineWidth = 2;
   ctx2.beginPath();
   ctx2.moveTo(leftShoulder.position.x, leftShoulder.position.y);
   ctx2.lineTo(rightShoulder.position.x, rightShoulder.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   
   ctx2.beginPath();
   ctx2.moveTo(leftShoulder.position.x, leftShoulder.position.y);
   ctx2.lineTo(leftElbow.position.x, leftElbow.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(rightShoulder.position.x, rightShoulder.position.y);
   ctx2.lineTo(rightElbow.position.x, rightElbow.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
    ctx2.arc(nose.position.x, nose.position.y, 3, 0, 2 * Math.PI);
    ctx2.fillStyle = 'blue'
    ctx2.fill()

   ctx2.beginPath();
   ctx2.moveTo(leftElbow.position.x, leftElbow.position.y);
   ctx2.lineTo(leftWrist.position.x, leftWrist.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(rightElbow.position.x, rightElbow.position.y);
   ctx2.lineTo(rightWrist.position.x, rightWrist.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(leftShoulder.position.x, leftShoulder.position.y);
   ctx2.lineTo(leftHip.position.x, leftHip.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(rightShoulder.position.x, rightShoulder.position.y);
   ctx2.lineTo(rightHip.position.x, rightHip.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(leftHip.position.x, leftHip.position.y);
   ctx2.lineTo(rightHip.position.x, rightHip.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(leftHip.position.x, leftHip.position.y);
   ctx2.lineTo(leftKnee.position.x, leftKnee.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   ctx2.beginPath();
   ctx2.moveTo(rightHip.position.x, rightHip.position.y);
   ctx2.lineTo(rightKnee.position.x, rightKnee.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();

   
   
   ctx2.beginPath();
    ctx2.arc(nose.position.x, nose.position.y, 3, 0, 2 * Math.PI);
    ctx2.fillStyle = 'blue'
    ctx2.fill()

   
   /*ctx2.beginPath();
   ctx2.moveTo(rightEye.position.x, rightEye.position.y);
   ctx2.lineTo(leftEye.position.x, leftEye.position.y);
   ctx2.strokeStyle = "blue";
   ctx2.stroke();*/

  }



  requestAnimationFrame(drawCameraIntoCanvas)
  
}




/* ----- run ------ */

// start body detecting 
bodies.start()
// draw video and body parts into canvas continously 
drawCameraIntoCanvas();


/* painting
function draw() {
    if (body) {
        // draw circle for left and right wrist
        //const leftWrist = body.getBodyPart(bodyParts.leftWrist)
       //const rightWrist = body.getBodyPart(bodyParts.rightWrist)
       const nose = body.getBodyPart(bodyParts.nose)

    ctx2.beginPath();
      ctx2.arc(nose.position.x, nose.position.y, 10, 0, 2 * Math.PI);
      ctx2.fillStyle = 'blue'
      ctx2.fill()
}
requestAnimationFrame(draw)
}
bodies.start()

draw();*/


/*let x=800;
let y=600;
let dx=5;
let dy=5;



function init()
{
  setInterval(draw,10);
}

function draw()
{
ctx2.clearRect(x,y, 800,600);
  ctx2.beginPath();
  ctx2.fillStyle="blue";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx2.arc(x, y, 20, 0, 2 * Math.PI, true);
  //ctx2.closePath();
  ctx2.fill();
  x+=dx;
  y+=dy;

  if( x<0 || x>800) dx=-dx; 
if( y<0 || y>600) dy=-dy; 
x+=dx; 
y+=dy;
}*/
