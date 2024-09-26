import "./App.css";
import NoteList from "./components/NotesList/noteList";

function App() {
  return (
    <>
      <h1 className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded">Notatki:</h1>
      <NoteList/>
    </>
  );
}

export default App;
