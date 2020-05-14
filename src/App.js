import React from 'react'
import logo from './logo.svg'
import './App.css'


function MyComponent(props) {
  console.log(`These are props: ${props}`)
  debugger
  return (<h1>Hello from MyComponent: {props.name}</h1>)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
