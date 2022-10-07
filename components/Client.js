import clientStyle from '../styles/client.module.css';
import Image from 'next/image';
const Client = () => {
    return (
        <>
            <section className={clientStyle.client}>
            <h2 className={clientStyle.clientHeading}>Our Top Clients</h2>
                <div className={clientStyle.clientContainer}>
                    <div className={clientStyle.ourClient}>
                        <Image src="/images/dream111.png" width={100} height={70} alt="partnerImages" />
                        <Image src="/images/partner2.svg" width={150} height={150} alt="partnerImages" />
                        <Image src="/images/client3.png" width={150} height={150} alt="partnerImages" />
                    </div>
                </div>
                <div className={clientStyle.clientContainer}></div>
            </section>
        </>
    )
}

export default Client
