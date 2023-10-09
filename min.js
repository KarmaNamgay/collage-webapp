recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    if(content == "Take my selfie."){
        console.log("Take my selfie.");
        speak_1();
    }
}

function speak_1(){
    var synth=window.speechSynthesis;
    var speak_data="Taking you're selfie in 5 seconds";
    var words=new SpeechSynthesisUtterance(speak_data);
    synth.speak(words);
    Webcam.attach( camera );
    setTimeout( function(){
        take_selfie();
        save()
    }, 5000);

}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 camera=document.getElementById("camera");

 function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>";
    });
}

function save(){
    var link=document.getElementById("link");
    var photo=document.getElementById("selfie_img").src;
    link.href=photo;
    link.click();
}