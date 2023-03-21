import Elements from './components/Elements'
import Gear from './assets/elements/Gear'

const App = () => {
  return (
    <>
      <Elements />
      <div style={{ bottom:'0px' , left:'0px' }}>
        <Gear
          number={ 4 }
          primaryColor='hsl(275, 100%, 12.5%)'
          primarySize={ 750 }
          zIndex={ 50 }
          otherGear={ true }
        />
        <Gear
          number={ 2 }
          primaryColor='hsl(285, 100%, 20%)'
          secondaryColor='hsl(285, 100%, 30%)'
          primarySize={ 250 }
          secondarySize={ 75 }
          position='absolute'
          gearZIndex={ 55 }
        />
      </div>
      <Gear
        number={ 1 }
        primaryColor='hsl(165, 100%, 45%)'
        secondaryColor='hsl(160, 100%, 80%)'
        primarySize={ 350 }
        secondarySize={ 150 }
        position='absolute'
        xPosition={ 475 }
        yPosition={ 201 }
        gearZIndex={ 60 }
      />
      <Gear
        number={ 3 }
        primaryColor='hsl(50, 100%, 60%)'
        secondaryColor='hsl(50, 100%, 75%)'
        primarySize={ 240 }
        secondarySize={ 70 }
        position='absolute'
        xPosition={ 628 }
        yPosition={ 9 }
        rotation={ 32 }
        gearZIndex={ 45 }
      />
      <Gear
        number={ 5 }
        primaryColor='hsl(320, 100%, 70%)'
        secondaryColor='hsl(320, 100%, 85%)'
        primarySize={ 500 }
        secondarySize={ 150 }
        position='absolute'
        xPosition={ 537 }
        yPosition={ 521 }
        gearZIndex={ 40 }
        rotation={ -6 }
      />
    </>
  )
}

export default App