import { Routes, Route } from 'react-router-dom'
import RouteChange from './utils/RouteChange'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Help from './routes/Help'
import Contact from './routes/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <RouteChange>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouteChange>
      <Footer />
    </>
  )
}

export default App
