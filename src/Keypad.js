import { Component } from "react"
class Keypad extends Component {
    render(){
    return(
        <div>
            <button className="keypad-brac" name = "(" onClick = {e => this.props.onClick(e.target.name)}>(</button>
            <button className="keypad-backspace" name = "CE" onClick = {e => this.props.onClick(e.target.name)}>CE</button>
            <button className="keypad-brac" name = ")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <button className="keypad-clear" name = "C" onClick={e => this.props.onClick(e.target.name)}>C</button>
            <br/>

            <button className="keypad-num" name = "1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button className="keypad-num" name = "2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button className="keypad-num" name = "3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button className="keypad-calculations" name = "+" onClick={e => this.props.onClick(e.target.name)}>+</button>
            <br/>

            <button className="keypad-num" name = "4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button className="keypad-num" name = "5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button className="keypad-num" name = "6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button className="keypad-calculations" name = "-" onClick={e => this.props.onClick(e.target.name)}>-</button>
            <br/>

            <button className="keypad-num" name = "7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button className="keypad-num" name = "8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button className="keypad-num" name = "9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button className="keypad-calculations" name = "*" onClick={e => this.props.onClick(e.target.name)}>*</button>
            <br/>

            <button className="keypad-num" name = "0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button className="keypad-num" name = "." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button className="keypad-num" name = "=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button className="keypad-calculations" name = "/" onClick={e => this.props.onClick(e.target.name)}>/</button>
        
        </div>
    )
}
}
export default Keypad