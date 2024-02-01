import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))


const Saludo = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}


root.render(
<React.Fragment>
  <Saludo  text="Hola Mundo"/>
</React.Fragment>
)
