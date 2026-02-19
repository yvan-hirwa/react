import Display from "./components/display"
import Keys from "./components/Keys"


function App() {

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-1">
      <div className="w-96 h-115 rounded-2xl shadow-xl">
        <Display />
        <Keys />
      </div>
    </div>
  )
}

export default App
