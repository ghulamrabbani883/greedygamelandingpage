import Image from "next/image"
import partnerStyle from '../styles/partner.module.css'
const Partner = () => {
  return (
    <>
      <section className={partnerStyle.partner}>
      <h2 className={partnerStyle.partnerHeading}> Our Top Partners</h2>
        <div className={partnerStyle.partnerContainer}>
          <div className={partnerStyle.ourPartners}>
            <Image src="/images/partner1.svg" width={150} height={150} alt="partnerImages" />
            <Image src="/images/partner2.svg" width={150} height={150} alt="partnerImages" />
            <Image src="/images/partner3.svg" width={150} height={150} alt="partnerImages" />
            <Image src="/images/partner4.svg" width={150} height={150} alt="partnerImages" />
            <Image src="/images/partner5.png" width={150} height={150} alt="partnerImages" />
            <Image src="/images/partner6.png" width={150} height={150} alt="partnerImages" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner
