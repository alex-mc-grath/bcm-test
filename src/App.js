import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './screens/Home'
import { ProgressView } from './screens/ProgressView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<ProgressView />} />
      </Routes>
    </Router>
  )
}

export default App
