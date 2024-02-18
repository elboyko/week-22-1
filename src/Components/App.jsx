import React from 'react'
import Card from "./Card/Card";
import '../style/App.css'
import hero from "./data.json"
function App() {
  return (
    <>
      <h1>SuperHeroes</h1>
      <div>
        {hero.map((item, index) => <Card
          key={index}
          name={item.name}
          friends={item.friends}
          alterego={item.alterego}
          url={item.url}
          occupation={item.occupation}>

        </Card>
        )})
      </div>
    </>
  )
}

export default App
