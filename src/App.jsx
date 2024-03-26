import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import KatiePic from '../public/images/katie-zaferes.png'
import cardData from '../src/data'

function App() {
  const newCard = cardData.map((card) => {
    return (
      <Card
        // openspots={card.openSpots}
        // pic={card.coverImg}
        key={card.id}
        card={card}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="flex flex-nowrap gap-5 overflow-x-auto p-10">
        {newCard}
      </section>
    </>
  )
}

export default App
