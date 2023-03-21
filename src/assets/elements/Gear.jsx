import { createUseStyles } from "react-jss"

const Gear = ({ number , primaryColor , secondaryColor , primarySize , secondarySize , position = 'relative', xPosition = 0 , yPosition = 0, rotation = 0 , gearZIndex = 1 , otherGear = false }) => {

  let secondaryZIndex = gearZIndex + 1

  const styles = new Object()

  const Position = () => (xPosition === 0 && yPosition === 0) ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    margin: 'auto'
  } : {
    bottom: `${yPosition}px`,
    left: `${xPosition}px`
  }

  styles['svg-container'] = {
    transform: `rotate(${ rotation }deg)`,

    position: position,
    ...Position(),
    zIndex: gearZIndex,

    display: 'grid',
    placeContent: 'center',

    height: `${ primarySize }px`,
    width: `${ primarySize }px`,
    
    '& div' : !otherGear ? {
      position: 'relative',
      zIndex: secondaryZIndex,

      backgroundColor: secondaryColor,

      borderRadius: '50%',
      height: `${ secondarySize }px`,
      width: `${ secondarySize }px`
    } : {}
  }

  styles[`gear${number}`] = {
    position: 'absolute',

    fill: primaryColor,

    height: `${ primarySize }px`,
    width: `${ primarySize }px`
  }

  const useStyle = createUseStyles({
    ...styles
  })

  const gear = useStyle()

  const Content = () => !otherGear ? (<div />) : (<></>)

  return (
    <div className={ gear['svg-container'] } >
      { Content() }
      <svg className={ gear[`gear${number}`] } >
        <use href={ `#gear${number}` } />
      </svg>
    </div>
  )
}

export default Gear