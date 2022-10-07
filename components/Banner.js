import bannerStyle from '../styles/banner.module.css'
import Form from './Form'
import Image from 'next/image'
const Banner = () => {
  return (
    <>
      <main className={bannerStyle.banner} >
        <div className={bannerStyle.headingContainer}>
          <h1 className={bannerStyle.bannerHeading1}>Result-Oriented</h1>
          <h2 className={bannerStyle.bannerHeading2}>Performance Compaigns <br /> for every objects</h2>
          <div className={bannerStyle.bannerProperty}>
            <div className={bannerStyle.property}>
              <Image src="/images/bannerprop1.svg" width={50} height={50} alt="bannerproperty" />
              <p>Self-serve platform with CPI starting at INR 1</p>
            </div>
            <div className={bannerStyle.property}>
              <Image src="/images/bannerprop2.svg" width={50} height={50} alt="bannerproperty" />
              <p>Access to premium inventory and exposure to 5K+ apps</p>
            </div>
            <div className={bannerStyle.property}>
              <Image src="/images/bannerprop3.svg" width={50} height={50} alt="bannerproperty" />
              <p>Comprehensive reporting and insights into campaign performance</p>
            </div>
            <div className={bannerStyle.property}>
              <Image src="/images/bannerprop4.svg" width={50} height={50} alt="bannerproperty" />
              <p>Campaigns for every need - clicks, installs, impressions, and more</p>
            </div>
          </div>
        </div>
        <div className={bannerStyle.formContainer} id="form">
          <Form />
          <div className={bannerStyle.formController} id='formController'>
            <p>Get a Call back from us</p>
            <a href="#form">Get Started</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Banner
