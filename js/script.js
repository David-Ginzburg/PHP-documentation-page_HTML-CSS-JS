let timer = document.querySelector('.timer');

let clock = () => {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return ('Time is: ' + hours + ':' + minutes + ':' + seconds);
};

setInterval(() => {timer.innerHTML = clock(), 60000});