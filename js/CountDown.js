$(document).ready(function () {

    const countDownTimer_Day = function (id, date) {
        var _vDate = new Date(date); // 전달 받은 일자
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining_Day() {
            var now = new Date();
            var distDt = _vDate - now;

            if (distDt < 0) {
                clearInterval(timer);
                document.getElementById(id).textContent = '해당 이벤트가 종료 되었습니다!';
                return;
            }

            var days = Math.floor(distDt / _day);

            document.getElementById(id).textContent = days + '일 ';
        };

        timer = setInterval(showRemaining_Day, 1000);  
        
        function showRemaining_Hour() {
            var now = new Date();
            var distDt = _vDate - now;
            
            var hours = Math.floor((distDt % _day) / _hour);

            document.getElementById(id).textContent += hours + '시간 ';
        };

        timer = setInterval(showRemaining_Hour, 1000);
        
        function showRemaining_Min() {
            var now = new Date();
            var distDt = _vDate - now;
            
            var minutes = Math.floor((distDt % _hour) / _minute);

            document.getElementById(id).textContent += minutes + '분 ';
        };

        timer = setInterval(showRemaining_Min, 1000);   
        
        
        function showRemaining_Sec() {
            var now = new Date();
            var distDt = _vDate - now;
            
            var seconds = Math.floor((distDt % _minute) / _second);

            document.getElementById(id).textContent += seconds + '초';
        };

        timer = setInterval(showRemaining_Sec, 1000); 
    }

        
    
    var dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + 1);
   
    
    countDownTimer_Day('day', '12/17/2022');
    countDownTimer_Hour('time_hour', '12/17/2022 3:50 PM');
    countDownTimer_Min('time_min', '12/17/2022 3:50 PM');
    countDownTimer_Sec('time_sec', '12/17/2022 3:50 PM');
    



});