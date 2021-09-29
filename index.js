Webcam.set(
    {
        width:350,
        height:300,
        Image_format:"png",
        png_quality:50
    }
);


camera = document.getElementById("cam");

Webcam.attach("#cam")


function snap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/ >'
    });
}

console.log('ml5 version:',ml5.version);


classfier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/HTe6s151x/model.json',modelLoaded)

//modelLoaded "impotant"

    function modelLoaded(){
        console.log("modelLoaded")
    }
function check(){
  img=document.getElementById("captured_image");
  classfier.classify(img,gotresult);
}

function gotresult(error,result){
    if(error){console.error(error);}

    else{
        console.log(result)
document.getElementById("result_object_name").innerHTML= result[0].label 
document.getElementById("result_object_accuracy").innerHTML= result[0].confidence
}
}
