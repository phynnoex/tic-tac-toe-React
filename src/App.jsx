import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player InitialName= "player 1" symbol= "X"/>
          <Player InitialName= "player 2" symbol= "O"/>
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  )
}

export default App
