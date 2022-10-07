import React from 'react'
import formStyle from '../styles/banner.module.css'
import { useRouter } from 'next/router'
const Form = () => {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const emailError = document.querySelector('#emailError');
    const phoneError = document.querySelector('#phoneError');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
      emailError.innerText = "Invalid Email Address"
      return;
    }
    const countryCode = phone.value.split(" ").join("").slice(0, 3)
    if (countryCode !== '+91') {
      phoneError.innerText = "Please enter a valid phone number with country code"
      return;
    }
    router.push("/api/form")
  }
  return (
    <>
      <section className={`${formStyle.form} ${formStyle.formFixed}`}>
        <form action='/api/form' method='post' onSubmit={handleSubmit}>
          <div className={formStyle.formGroup}>
            <div className={formStyle.formGroup1}>
              <div className={formStyle}>
                <label htmlFor="#name">Name</label><br />
                <input type="text" name="name" id="name" placeholder="Enter Your Full Name" />
              </div>
              <div className={formStyle}>
                <label htmlFor="#email">Email</label><br />
                <input type="text" name="email" id="email" placeholder="Enter Your Email Address" aria-describedby='#emailError' /><br />
                <p id='emailError'></p>
              </div>
            </div>
          </div>
          <div className={formStyle.formGroup}>
            <label htmlFor="#phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone Number with CountryCode" aria-describedby='#phoneError' /><br />
            <p id="phoneError"></p>
          </div>
          <div className={formStyle.formGroup}>
            <label htmlFor="#link">App/Website Link</label>
            <input type="url" name="link" id="link" placeholder="Paste your website Link You wish to monetize" /><br />
          </div>
          <div className={formStyle.formGroup}>
            <label htmlFor="#revenue">Monthly Revenue (USD) </label>
            <input type="number" name="revenue" id="revenue" placeholder="Enter Your Average Monthly Revenu in USD" /><br />
          </div>
          <input className={formStyle.inputSubmit} type="submit" value="Get Started" /><br />
        </form>
      </section>
    </>
  )
}

export default Form
