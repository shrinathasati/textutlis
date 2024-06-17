import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("enter your text");
  // setText("new text");


  // To convert into UpperCase
  const clickedUp=()=>{
    // console.log("clicked inside given box")
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert('Converted to UpperCase','success')
  }
  
  
  // To clear
  const clickClear=()=>{
    // console.log("clicked inside given box")
    let newtext='';
    setText(newtext)
    props.showalert('Cleared successfully','success')
  }
  
  // To convert into LowerCase
  const clickedlow=()=>{
    // console.log("clicked inside given box")
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showalert('Converted to LowerCase','success')
  }
  
  // To Copy
  const clickCopy=()=>{
    
    navigator.clipboard.writeText(text);
    props.showalert('Copied to clipboard','success')
  }
  
  const change=(event)=>{
    // console.log("you have tried to change it");
    setText(event.target.value)
  }
  return (
    <>
    <div style={{color:`${props.mode==='dark'?'white':'black'}`}}>
        <h1 >{props.heading}</h1>
      
        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea className="form-control" style={{color:`${props.mode==='dark'?'white':'black'}`,backgroundColor:`${props.mode==='dark'?'#9d9191':'white'}`}} value={text} onChange={change} id="myid" rows="10"></textarea>
        </div>

        <button disabled= {text.split(" ").filter((ele)=>{return ele.length!==0}).length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={clickedUp} >Convert to uppercase</button>
        <button disabled= {text.split(" ").filter((ele)=>{return ele.length!==0}).length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={clickedlow} >Convert to lowercase</button>
        <button disabled= {text.split(" ").filter((ele)=>{return ele.length!==0}).length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={clickClear} >Clear</button>
        <button disabled= {text.split(" ").filter((ele)=>{return ele.length!==0}).length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={clickCopy} >Copy text</button>
        
        <h2>Preview</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{text.length===0?'Nothing to preview!':text}</p>
    </div>
    </>
  )
}
