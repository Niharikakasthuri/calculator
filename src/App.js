import {Component} from 'react'
import Result from './Result'
import Keypad from './Keypad'

class App extends Component{
  state = {
    result:""
  }

  onClick = button => {
    if (button === "="){
      this.calculate()
    }
    else if (button === "C"){
      this.clear()
    }
    else if (button === "CE"){
      this.backspace()
    }
    else{
      this.setState({
        result:this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result:(eval(this.state.result) || "") + ""
      })
    } catch (error) {
      this.setState({
        result:"error"
      })
    }
  }
  clear = () => {
    this.setState({result:""})
  }
  backspace = () => {
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }
  render(){
    return(
      <div className='bg'>
        <center>
        <h1 className='heading'>Calculator</h1>
        <div className='calculator-allbg'>
        <Result result = {this.state.result}/>
        <Keypad onClick = {this.onClick}/>
        </div>
        </center>
      </div>
    )
  }
}
export default App