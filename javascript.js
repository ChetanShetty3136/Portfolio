const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good Morning ";
}
else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon ";
}
else {
    greeting.innerHTML = "Good Evening ";
}
const text = "Computer Science Engineering Student Aspiring Full Stack Developer";
let index = 36;
let deleting = false;

function typeWriter() {
    const pr = document.getElementById("typing");
    if(!deleting) {
        pr.innerHTML = text.substring(36,index+1);
        index++;
        if (index === text.length) {
            deleting = true;
            setTimeout(typeWriter, 1000); 
            return;
        }
    }
    else {
        pr.innerHTML = text.substring(36,index - 1);   
        index--;
        if (index === 36) {      
        deleting = false;   
        }
    }setTimeout(typeWriter, 100); 
}
    


typeWriter();