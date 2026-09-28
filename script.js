// Typing Effect

const text = [
"Data Analyst",
"Power BI Enthusiast",
"SQL Developer",
"Python Learner"
];

let count = 0;
let index = 0;

function type() {

    const current = text[count];

    document.getElementById("typing").textContent =
    current.substring(0,index);

    index++;

    if(index > current.length){

        count++;

        index = 0;

        if(count >= text.length){
            count = 0;
        }
    }

    setTimeout(type,120);
}

type();


// Counter Animation

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target =
        +counter.getAttribute('data-target');

        const count =
        +counter.innerText;

        const increment =
        target/100;

        if(count<target){

            counter.innerText =
            Math.ceil(count+increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target;
        }
    };

    updateCounter();

});


// Radar Chart

const ctx =
document.getElementById('skillsChart');

new Chart(ctx, {

type:'radar',

data:{

labels:[
'Python',
'SQL',
'Power BI',
'Excel',
'Git',
'Communication'
],

datasets:[{

label:'Skill Level',

data:[
80,
90,
90,
95,
75,
85
],

fill:true

}]

}

});