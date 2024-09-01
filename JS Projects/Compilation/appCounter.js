// set initial value for our count variable; 
let count=0;
//select the value btns
const value = document.querySelector('#value') //how to change, reference the content of the text(inner html a choice fo document)
const btns = document.querySelectorAll('.btn') // use all to reference all 
//console.log(btns)
getRandomNum = () => {
    if (count > 0) {
        count = (Math.floor(Math.random() * 101)) * -1
    } else if(count < 0) {
        count =Math.floor(Math.random() * 101)
    }
    else{
        count = Math.floor(Math.random() *101)
    }
}
btns.forEach((btn) =>{
    //console.log(btn)
    btn.addEventListener('click', (e) =>{ //e parameter signifying or referencing one element from the group of buttons
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--
        }//decreases by 1
        else if (styles.contains('decrease5')){
            count -=5
        }
        else if(styles.contains('increase')){
            count++
        }//increases by 1
        else if(styles.contains('increase5')){
         count+=5
        }
        //else if(styles.containes('RandNum')){
        //    count = Math.floor(Math.random()*(100-(-100+1))) +(-100)
        //}
        else if(styles.contains('RandNum')){
            getRandomNum()
        }
        else{
            count =0
        }//when reset button is clicked it should reset to zero
        //style feedback for my count variable
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }
        value.textContent = count //not referencing the document but rather the element set
    })
})