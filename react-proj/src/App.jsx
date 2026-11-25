
import Home from "./assets/Home";

function Player(prop) {
  return(
  <>
   <div style={{ border: "1px solid black", padding: "15px", margin: "10px", width: "250px", display: "inline-block", borderRadius: "10px" }}>
     <h1>This is player content</h1>
      <h2>Country: {prop.obj}</h2>
      <h2>Name: {prop.name}</h2>
      <h2>Team: {prop.Team}</h2>
   </div>
  </>
  )
}

function Data(prop) {
  return (
    <h2>{prop.obj}</h2>
  )
}

function Players(prop) {
  return (
    <>
      {prop.obj1.map((p) => (
        <Player
          obj="India"
          name={p.name}
          Team={p.Team}
        />
      ))}
    </>
  )
}

function App() {

  let players_data = [
    {
      name: "Virat",
      Team: "RCB"
    },
    {
      name: "Dhoni",
      Team: "CSK"
    },
    {
      name: "Hardik",
      Team: "MI"
    }
  ]

  return(
  <>
   <center>
     <h1>This is App Content</h1>

     <Home />

     <Data obj="PLAYER DETAILS" />

     <Players obj1={players_data} />

   </center>
  </>
  )
}

export default App;
