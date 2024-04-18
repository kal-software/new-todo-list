
import TaskInput from './TaskInput'
import {provider} from 'react-redux'
import { store } from './Store'

function App() {

  return (
    <>
    <provider store = {store}>
<TaskInput/>
</provider>
    </>
  )
}

export default App
