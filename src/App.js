
import { ContextProvider } from './components/sudoku/ContextProvider';
import Board from './components/sudoku/Board'
import Header from './components/ui/Header'
const App = () => {

  return (
    <>
      <Header/>
      <ContextProvider>
        <div className='app' >
          <Board/>
        </div>
      </ContextProvider>
    </>
  )
}

export default App;