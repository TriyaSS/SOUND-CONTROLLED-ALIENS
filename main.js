function startclassification(){
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2R5uGpdj1/model.json" , modelready);
}

function modelready(){
    console.log("modelready");
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
       console.error(error);
    }
    else{
        console.log(results);
        randomnumberR = Math.floor(Math.random()*255) +1;
        randomnumberG = Math.floor(Math.random()*255) +1;
        randomnumberB = Math.floor(Math.random()*255) +1;

        document.getElementById("result_label").innerHTML = "I CAN HEAR- " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + randomnumberR + "," + randomnumberG + "," + randomnumberB + ")";
        document.getElementById("result_confidence").innerHTML = "accuracy " + (results[0].confidence *100).toFixed(2) + "%";
        document.getElementById("result_confidence").style.color = "rgb(" + randomnumberR + "," + randomnumberG + "," + randomnumberB + ")";

        img1 = document.getElementById("alien1"); 
        img2 = document.getElementById("alien2"); 
        img3 = document.getElementById("alien3"); 
        img4 = document.getElementById("alien4"); 

        if(results[0].label == "Clap" ){
          img1.src = "aliens-01.gif";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";
        }

        else if(results[0].label == "Ringtone"){
          img1.src = "aliens-01.png";
          img2.src = "aliens-02.gif";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";
        }

        else if(results[0].label == "Clicking"){
          img1.src = "aliens-01.png";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.gif";
          img4.src = "aliens-04.png";
        }

        else {
          img1.src = "aliens-01.png";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.gif";
          img4.src = "aliens-04.gif";
        }
    }

}

