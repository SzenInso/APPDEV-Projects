const colors = ["green", "red", "rgba(133, 122, 200)", "f15025" ]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

// functions to change the color of the background
btn.addEventListener("click", () =>{
    //target the body from the html
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length)
}