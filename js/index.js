let seeMore = document.querySelector(".seeMore");
let hiddenSection = document.querySelector("#hiddenSection");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let agent = Array.from(document.querySelectorAll(".inner"))
var currentIndex = -1;


seeMore.addEventListener("click", () => {
    hiddenSection.classList.toggle("d-none");
    hiddenSection.classList.contains("d-none") ? seeMore.innerHTML = "...See More" : seeMore.innerHTML = "...See Less"
})


for (let i = 0; i < agent.length; i++) {
    agent[i].addEventListener("click", () => {

        for (let i = 0; i < agent.length; i++) {
            agent[i].classList.remove("bg-success");
        }
        agent[i].classList.add("bg-success");
        currentIndex = i
    })
}
// >>>>>>>>>>>>>>>NextBtn>>>>>>>>>>>>
function next() {
    currentIndex++;
    if (currentIndex == agent.length) {
        currentIndex = 0;
    }
    for (let i = 0; i < agent.length; i++) {
        agent[i].classList.remove("bg-success")
    }
    agent[currentIndex].classList.add("bg-success")

};
nextBtn.addEventListener("click", next)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// >>>>>>>>>>>>>>>>>>prevBtn>>>>>>>>>>>>>>>>>
function prev() {
    currentIndex == -1 ? currentIndex = agent.length - 1 : currentIndex--
    if (currentIndex == -1) {
        currentIndex = agent.length - 1;
    }
    for (let i = 0; i < agent.length; i++) {
        agent[i].classList.remove("bg-success")
    }
    agent[currentIndex].classList.add("bg-success")

}
prevBtn.addEventListener("click", prev)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



