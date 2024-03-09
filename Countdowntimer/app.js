const endDate = "5 March 2024 10:06:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

let clock=()=> {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    function redirect()
    {
    window.location.href = "./index1.html";
    }

    if (diff <0)
    {
        redirect();
    };
    inputs[0].value = Math.floor(diff / 3600 / 24);

     inputs[1].value = Math.floor(diff / 3600) % 24;
    
     inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
};
clock();


setInterval(
    () => {
        clock()
    },
    1000
)