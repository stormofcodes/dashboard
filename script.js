const updateDate = () => {
    const now = new Date();
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
                      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    const weekday = weekdayNames[now.getDay()];
    const date = now.getDate();
    const month = monthNames[now.getMonth()];

    document.querySelector(".weekday").textContent = weekday;
    document.querySelector(".date").textContent = date;
    document.querySelector(".month").textContent = month;
}

const startMidnightWatcher = () => {
    const now = new Date();
    const millisUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    setTimeout(() => {
        updateDate();
        startMidnightWatcher();
    }, millisUntilMidnight);
};

updateDate();
startMidnightWatcher();