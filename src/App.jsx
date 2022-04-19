import { Routes, Route } from 'react-router-dom'
import RouteChange from './utils/RouteChange'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Blog from './routes/Blog'
import Contact from './routes/Contact'
import Login from './routes/Login'
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </RouteChange>
      <Footer />
    </>
  )
}

export default App
