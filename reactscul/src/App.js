import './App.css'
import NoteList from './components/NotesList/notelist'
import H1Vertical from './components/h1vertical'
function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-dotted-spacing-10 bg-dotted-amber-500 bg-dotted-radius-0.5 bg-[#0A0A0A] ">
      <H1Vertical side="left" text="Note Taker" />
      <NoteList />
      <H1Vertical side="right" text="Note Taker" />
    </div>
  )
}

export default App
