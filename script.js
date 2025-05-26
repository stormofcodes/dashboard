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

document.addEventListener("DOMContentLoaded", () => {
    const currentDayIndex = new Date().getDay();

    const dayHeaders = document.querySelectorAll(".habit-grid .day");
    dayHeaders[currentDayIndex].classList.add("active-day");

    const checkboxes = document.querySelectorAll(".habit-grid .custom-checkbox");

    checkboxes.forEach((checkbox, index) => {
        const col = index % 7;
        if (col !== currentDayIndex) {
            checkbox.querySelector("input").disabled = true;
            checkbox.classList.add("inactive-day");
            checkbox.style.opacity = "0.4"
            checkbox.style.cursor = "default"
        }
    });
});