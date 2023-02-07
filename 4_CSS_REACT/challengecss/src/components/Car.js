import styles from './Car.module.css'

const Car = ({car}) => {
  return (
    <div className={styles.card} style={{backgroundColor: car.color}}>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
    </div>
  )
}

export default Car