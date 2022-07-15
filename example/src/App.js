import React, {useState} from 'react'
import { Text } from 'input-controls'
import { Password } from 'input-controls'
import { Date } from 'input-controls'
import { Time } from 'input-controls'
import { Email } from 'input-controls'
import { Numeric } from 'input-controls'
import { Alphanumeric} from 'input-controls'
import { Phone } from 'input-controls'
import { Checkbox } from 'input-controls'
import { Radiobutton } from 'input-controls'
import { Textarea } from 'input-controls'
import 'input-controls/dist/index.css'

const App = () => {
  const [text, setText] = useState("")
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [alphaNum, setAlphanum] = useState();
  const [ email, setEmail] = useState("");
  const [date, setDate] = useState("2022-07-13");
  const [time, setTime] = useState("00:00")
  const [isChecked, setCheckbox] = useState(false);
  const [selected, setRadioBtn] = useState("");
  const [description, setTextarea] = useState("");

  const handleText = (e) =>{
    setText(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }

  const handleNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleAlphaNum = (e) => {
    setAlphanum(e)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleCheckbox = (e) => {
    setCheckbox(e.target.value)
  }

  const handleRadioBtn = (e) => {
    setRadioBtn(e.target.value)
  }

  const handleTextArea = (e) => {
    setTextarea(e.target.value)
  }

  
  const handleForm = (e) => {
    e.preventDefault()
    alert(`${email}, ${password}`)
  }

  return (
    <div className='app'>     
      <form onSubmit={handleForm}>
      <Email label="Email"  autoFocus required value={email} onChange={handleEmail}/>
        <Password label="Password" required value={password} onChange={handlePassword}
        minLength={8} maxLength={15} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/>
        <button type="submit">Log In</button>
        
      </form>
      <div>
       <span>Textarea </span> 
      <Textarea
        label="Message"
        name ="lag"
        value={description}
        rows={5}
        maxlength={20}
        required
        onChange={handleTextArea}
      />
       <span>Checkbox </span> 
        <Checkbox
        label="English"
        name ="lag"
        value={!isChecked}
        checked={isChecked}
        required
        onChange={handleCheckbox}
        isVertical={true}
      />
       <span>Radio Button </span> 
      <Radiobutton
        label="Male"
        value="M"
        name="gender"
        checked={selected === "M"}
        onChange={handleRadioBtn}
        isVertical={true}
        required={true}
        
      />
      <Radiobutton
        label="Female"
        value="F"
        checked={selected === "F"}
        name="gender"
        onChange={handleRadioBtn}
        isVertical={true}
        required={true}
      />
        </div>      
    </div>
  )
}

export default App
