import footerStyle from '../styles/footer.module.css'
const Footer = () => {
  return (
    <>
      <footer className={footerStyle.footer1}>
        <div className={footerStyle.footerContainer}>
          <div className={footerStyle.footerBackground}>
          </div>
          <h3>Acquire quality users, not just installs</h3>
          <p>Talk to us today and start creating mobile marketing campaigns that deliver results.</p>
        </div>
        <div className={footerStyle.footerContainer}></div>
      </footer>
      <footer className={footerStyle.footer2}>
        <p>©2022 GreedyGame, Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
