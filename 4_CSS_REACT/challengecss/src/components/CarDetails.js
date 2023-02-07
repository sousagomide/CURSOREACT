import styles from './CarDetails.module.css'

const CarDetails = ({list}) => {
  return (
    <div>
        {list.map((carName) => (
            <p key={carName.id} className={carName.id % 2 === 0 ? styles.evenName :  styles.oddName}>{carName.name}</p>
        ))}
    </div>
  )
}

export default CarDetails