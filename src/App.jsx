import { useState } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Colleges from './components/sections/Colleges'
import Hero from './components/sections/Hero'
import InfoRow from './components/sections/InfoRow'
import Loader from './components/sections/Loader'
import Statement from './components/sections/Statement'
import CursorFollower from './components/ui/CursorFollower'

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Loader onOpen={setReady} />
      <Header ready={ready} />
      <Hero ready={ready} />
      <InfoRow ready={ready} />
      <Colleges ready={ready} />
      <Statement />
      <Footer />
      <CursorFollower />
    </>
  )
}
