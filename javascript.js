const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good Morning, I'm";
}
else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon, I'm";
}
else {
    greeting.innerHTML = "Good Evening, I'm";
}
const text = "Aspiring Full Stack Developer";
let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }

}

typeWriter();