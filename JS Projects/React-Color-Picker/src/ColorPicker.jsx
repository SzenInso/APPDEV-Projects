import React,{useState} from 'react'
const randomColor = ["A","B", "C", "D", "E", "F", "0", "1","2","3","4","5","6","7","8","9"]
export const ColorPicker = () => {
    const [color, setColor] = useState('#FFFFFF')
    
    function getRandomNumber() {
        return Math.floor(Math.random()*randomColor.length)
    }
    function getRandomColor(){
        let hex ="#"
        for(let i=0; i<6; i++){
            hex+=randomColor[getRandomNumber()]
        }
        return hex
    }
    function randomColorChange(){
        setColor(getRandomColor())
    }
    function handleColorChange(event){
        setColor(event.target.value)
    }
  return (
    <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>Selected Color:{color}</p>
            </div>
            <label >Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
            <button className="randomize" onClick={randomColorChange}>Randomize</button>
        </div>
    </>
  )
}