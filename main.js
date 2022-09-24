const button = document.querySelector("button")
const container = document.getElementById("container")
const input = document.querySelector("input")
const form = document.querySelector("form")


form.addEventListener("submit", (eo) => {
    eo.preventDefault()
    const task = `<div class="task">
    <span class="icon-star-full icon"></span>
    <p class="fuck">${input.value}</p>
    <div>
      <span class="icon-bin icon"></span>
      <!-- <span class="icon-heart"></span> -->
      <span class="icon-evil2 icon"></span>
    </div>
  </div>`

    container.innerHTML += task;

    input.value = ""
})


container.addEventListener("click", (eo) => {


    switch (eo.target.className) {
        case "icon-bin icon":
            eo.target.parentElement.parentElement.remove();
            break;
        case "icon-evil2 icon":
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart"></span>`


            eo.target.parentElement.parentElement.getElementsByClassName("fuck")[0].classList.add("finish");;
            eo.target.parentElement.innerHTML += heart;
            break;
        case "icon-heart":
            eo.target.parentElement.parentElement.getElementsByClassName("fuck")[0].classList.remove("finish");;


            eo.target.classList.add("dn");
            const evil = `<span class="icon-evil2 icon"></span>`
            eo.target.parentElement.innerHTML += evil;
            break;
        case "icon-star-full icon":
            eo.target.classList.add("orange");
            container.prepend(eo.target.parentElement)
            break;
        case "icon-star-full icon orange":
            eo.target.classList.remove("orange");
            container.append(eo.target.parentElement)
            break;

        default:console.log("tizmok ya sidi");
            break;
    }
})