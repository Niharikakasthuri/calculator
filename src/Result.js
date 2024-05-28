import { Component } from "react"
class Result extends Component  {
    render(){
    const {result} = this.props
    return(
        <div className="result-space">
            <center>
            <p>{result}</p>
            </center>
        </div>
    )
}
}
export default Result