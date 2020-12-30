//Cronômetro

const clock = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timer = 0;
let seconds;

document.addEventListener('click',function(e){
    if(e.target.className === 'iniciar'){
        iniciarTimer();
    }else if(e.target.className === 'pausar'){
        pausarTimer();
    }else if(e.target.className === 'zerar'){
        zerarTimer();
    }
})

iniciarTimer = () =>{
    seconds = setInterval(function(){
        timer++;
        clock.innerHTML = getSecondsFromHours(timer);
    },1000)

    clock.classList.remove('red');
}

pausarTimer = () => { 
    const clear = clearInterval(seconds);
    clock.classList.add('red');
    return clear;
}

zerarTimer = () => {
    clearInterval(seconds);
    clock.innerHTML = '00:00:00';
    clock.classList.remove('red');
    timer = 0;
}


getSecondsFromHours = (seconds)   => {
    let data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR',{
        timeZone:'GMT'
    });
}

