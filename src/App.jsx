import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import KatiePic from '../src/images/katie-zaferes.png'

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card
        pic={KatiePic}
        rating={5}
        review={6}
        country="USA"
        description="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App
