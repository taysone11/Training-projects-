

window.onload = setInterval(function() {
        let date = new Date();
    
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let actuallyDay = date.getDay()
        let date4 = date.toLocaleDateString();
        
        
        let description = 'Monday is the weekday between Sunday and Tuesday.';


        if (hours < 10) {
            hours = '0' + hours};
        if (minutes < 10) {
            minutes = '0' + minutes};
        if (seconds < 10) {
            seconds = '0' + seconds};
    
        let getTime = hours + ':' + minutes + ':' + seconds;

        switch(actuallyDay) {
            case 0:
                actuallyDay = 'Sunday';
                break
                case 1:
                    actuallyDay = 'Monday';
                    
                    break
                    case 2:
                        actuallyDay = 'Thursday';
                        break
                        case 3:
                            actuallyDay = 'Wensday';
                            break
                            case 5:
                                actuallyDay = 'Thusday';
                                break
                                case 5:
                                    actuallyDay = 'Friday';
                                    break
                                    case 6:
                                        actuallyDay = 'Saturday';
                                        break
                                    
                                                                        
        }
        document.getElementById("hr").innerHTML = hours ;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
        document.getElementById("clock").innerHTML = getTime;
            document.getElementById("day").innerHTML = actuallyDay;
               document.getElementById("date4").innerHTML = date4;
    }, 1000);



