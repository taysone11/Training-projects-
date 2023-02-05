   
   setInterval(setClock,1000);

    const secondsHand  = document.querySelector('[date-second-hand');

    const minutesHand  = document.querySelector('[date-minute-hand');
    const hoursHand  = document.querySelector('[date-hour-hand');
    function setClock() {
        const date = new Date();
        let seconds = date.getSeconds() / 60;
        let minutes = (seconds + date.getMinutes()) / 60;
        let hour = (minutes + date.getHours()) / 12;

        setRotation(secondsHand, seconds)   ;
        setRotation(minutesHand, minutes);
        setRotation(hoursHand, hour );

    }

    function setRotation(el, rotationRatio) {

        el.style.setProperty('--rotation', rotationRatio * 360);
    }


setClock()