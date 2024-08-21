const colors = ["Wonder is the beginning of wisdom", 
"The only thing I know is that I know Nothing.", 
"What worries you, masters you.", 
"For a man to conquer himself is the first and noblest of all victories!" ]
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