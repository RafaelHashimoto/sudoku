
import { ContextProvider } from './components/sudoku/ContextProvider';
import Board from './components/sudoku/Board'

const App = () => {

  return (
    <ContextProvider>
      <div className='app' >
        <Board/>
      </div>
    </ContextProvider>
  )
}

export default App;