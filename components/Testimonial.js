import Link from "next/link"
import Image from "next/image"
import testimonialStyle from '../styles/testimonial.module.css'
const Testimonial = () => {
    return (
        <>
            <section className={testimonialStyle.testimonial}>
            <h2 className={testimonialStyle.testHeading}>Hear it from Clients</h2>
                <div className={testimonialStyle.testContainer}>
                    <div className={testimonialStyle.testBox}>
                        <Image src="/images/dream111.png" width={200} height={50} alt="partnerImages" />
                        <h3>22.4 Mn minutes of branding results in 25k high-quality registrations</h3>
                        <p>The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.</p>
                        <Link href="/">
                            <a className={testimonialStyle.testButton}>Read CaseStudy</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
