import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Components/Card'


const root = ReactDOM.createRoot(document.getElementById('root'))


const Saludo = (props) => {
  return (
    <button> {props.text} </button>
  )
}


root.render(
  <>
    <Saludo text='Botonzo' />
    <Card />
  </>
)
