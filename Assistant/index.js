let btn=document.querySelector("#btn");
let content=document.querySelector("#content")
let voice=document.querySelector('#voice')


function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US"
    
    window.speechSynthesis.speak(text_speak)
}



function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Rishabh")
    }
    else if (hours>12 && hours < 3){
        speak("Good afternoon Rishabh")
    }else{
        speak("Good Evening Rishabh")
    }
}
//window.addEventListener('load',()=>{
   /// wishMe()
//})


let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
     let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())


}
btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})


function takeCommand(message){
    voice.style.display="none"
     btn.style.display="flex"
     if(message.includes("hello")|| message.includes("hey")){
         speak("hello Rishabh ,what can i help you?")
     }
     else if(message.includes("who are you")){
        speak("i am virtual assistant created by rishabh mishra.")

     }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
     }
     else if(message.includes("open linkedin")){
        speak("opening linkedin...")
        window.open("https://www.linkedin.com/","_blank")
     }
     else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank")
     }
     else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
     }
     else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")}
        else if(message.includes("open google")){
            speak("opening sp...")
            window.open("https://www.google.com/","_blank")}
            else if (message.includes("open calculator")) {
                speak("Opening calculator...");
                window.open("calculator://"); }
                else if (message.includes("open whatsapp")) {
                    speak("Opening WhatsApp...");
                    window.open("https://web.whatsapp.com/","_blank");

                }
                  
              
              
                else if (message.includes("time")) {
                    let time = new Date().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true
                    });
                    speak(time);
                  }
                  else if (message.includes("date")) {
                    let date = new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "short"
                    });
                    speak(date);
                  }
                  
            else{
                let finalText="this is what i found on internet regarding" + message.replace("Jarvish","") || message.replace("Jarvish","")
                speak(finalText)
                window.open(`https://www.google.com/search?q=${message.replace("Jarvish","")}`,"_blank")}
    }