// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {islogedin: true}

  isloged = () => {
    const {islogedin} = this.state
    if (islogedin) {
      this.setState(prevState => ({
        islogedin: !prevState.islogedin,
      }))
    } else {
      this.setState(prevState => ({
        islogedin: !prevState.islogedin,
      }))
    }
  }

  render() {
    const {islogedin} = this.state
    return (
      <div className="cardtop">
        <div className="card">
          {islogedin ? <h1>Please Login</h1> : <h1>Welcome User</h1>}
          {islogedin ? (
            <button type="button" onClick={this.isloged}>
              Login
            </button>
          ) : (
            <button type="button" onClick={this.isloged}>
              Logout
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Home
