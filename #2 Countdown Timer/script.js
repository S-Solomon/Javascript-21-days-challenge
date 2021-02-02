(() => {
    // เริ่มเขียนโค้ด
    const SECOND = 1000; // 1 sec = 1000 millisecond
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;


    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const UnixTimeLeft = newYear - now;

        // console.log(UnixTimeLeft);
        setElementInnerText('days', Math.floor(UnixTimeLeft / DAY));
        setElementInnerText('hours', Math.floor(UnixTimeLeft % DAY / HOUR));
        setElementInnerText('minutes', Math.floor(UnixTimeLeft % HOUR / MINUTE));
        setElementInnerText('seconds', Math.floor(UnixTimeLeft % MINUTE / SECOND));
    }


    function run() {
        countDown();
        setInterval(countDown, SECOND);
    }
    run();

})();