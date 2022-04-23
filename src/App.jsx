import { Routes, Route } from 'react-router-dom'
import RouteChange from './utils/RouteChange'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Blog from './routes/Blog'
import Download from './routes/Download'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
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
          <Route path="/download" element={<Download />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteChange>
      <Footer />
    </>
  )
}

export default App
