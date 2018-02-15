/*
===
KNN Image Classifier Demo
===
*/

let knn;
let video;

var train1,train2, ispeaking;
train1 = false;
train2 = false;
ispeaking = false;


function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'en-US';
 
    u.onend = function () {
        if (callback) {
            callback();
        }
    };
 
    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };
 
    speechSynthesis.speak(u);
}


function preload() {
  // Initialize the KNN method.
  knn = new ml5.KNNImageClassifier(modelLoaded, 2, 1);
}

function setup() {
  createCanvas(320, 240).parent('canvasContainer');
  video = createCapture(VIDEO);
  background(0);
  video.size(227, 227);
 // video.hide();

  // Train buttons
  buttonA = select('#buttonA');
  buttonA.mousePressed(() => {
   		train1 = true;
  });

  buttonB = select('#buttonB');
  buttonB.mousePressed(() => {
     train2 = true;
  });

  // Reset buttons
  resetBtnA = select('#resetA');
  resetBtnA.mousePressed(() => {
    clearClass(1);
    updateExampleCounts();
  });

  resetBtnB = select('#resetB');
  resetBtnB.mousePressed(() => {
    clearClass(2);
    updateExampleCounts();
  });

  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(predict);
}

function draw() {
  background(0);
  translate(width,0); // move to far corner
  scale(-1.0,1.0);    // flip x-axis backwards
  image(video, 0, 0, width, height);

  if(train1 && mouseIsPressed){
  		train(1);
  }else{ train1 = false;}

  if(train2 && mouseIsPressed){
  		train(2);
  }else{ train2 = false;}

}

// A function to be called when the model has been loaded
function modelLoaded() {
  select('#loading').html('Model loaded!');
}

// Train the Classifier on a frame from the video.
function train(category) {
  let msg;
  if (category == 1) {
    msg = 'Green';
  } else if (category == 2) {
    msg = 'Blue';
  }
  
	//select('#training').html(msg);
	knn.addImage(video.elt, category);
 	updateExampleCounts();
}

// Predict the current frame.
function predict() {
  knn.predict(video.elt, gotResults);
}

// Show the results
function gotResults(results) {
  let msg;

  if (results.classIndex == 1) {
    msg = 'Green';
    if(!ispeaking){
   		 speak($("#textA").val());
   		 ispeaking = true;
    }
  } else if (results.classIndex == 2) {
    msg = 'Blue';
    if(ispeaking){
  	   speak($("#textB").val());
  	   ispeaking = false;
    }
  }
  select('#result').html(msg);

  // Update confidence
  select('#confidenceA').html(results.confidences[1]);
  $("#barA").width(results.confidences[1] *100 + "%");
  select('#confidenceB').html(results.confidences[2]);
  $("#barB").width(results.confidences[2] *100 + "%");

  setTimeout(() => predict(), 50);
}

// Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}

// Update the example count for each class
function updateExampleCounts() {
  let counts = knn.getClassExampleCount();
  select('#exampleA').html(counts[1]);
  select('#exampleB').html(counts[2]);
}


