import React from 'react'
import logo from './logo.svg'
import './App.css'


function MyComponent(props) {
  console.log(`These are props: ${props}`)
  //debugger
  return (<h1>Hello from MyComponent: {props.name}</h1>)
}

class MyClassBasedComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      name: '',
      age: '',
      country: '',
    }
  }

  // Remember to use Arrow Functions if you have problems with 'this' is not
  // defined
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleInput = (e) => {
    console.log(`Input: ${e}`)
    // Remember to set 'name' prop on your input fields.
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    // Remember to wrap your returns in a <div> if you have adjacent JSX
    // elements.
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}</h2>

        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleInput} placeholder="name" />
          <input name="age" onChange={this.handleInput} placeholder="age" />
          <input name="country" onChange={this.handleInput} placeholder="country" />
          <button onClick={this.increment}>Increment</button>
        </form>
      </div>
    )
  }

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <MyClassBasedComponent />
          <MyComponent name="Blah" somemath={1 + 3} />
          <MyComponent name="Blah">These two lines are equivalent</MyComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
