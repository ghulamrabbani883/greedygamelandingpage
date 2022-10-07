import counterStyle from '../styles/counter.module.css'
const Counter = () => {
  return (
    <>
      <section className={counterStyle.counter}>
        <div className={counterStyle.counterContainer}>
            <div className={counterStyle.counterItem}>
              <h3>300+</h3>
              <p>Affiliates</p>
            </div>
            <div className={counterStyle.counterItem}>
              <h3>5K+</h3>
              <p>App Inventry</p>
            </div>
            <div className={counterStyle.counterItem}>
              <h3>1M+</h3>
              <p>App installs</p>
            </div>
            <div className={counterStyle.counterItem}>
              <h3>3K+</h3>
              <p>Active Compaigns</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Counter
