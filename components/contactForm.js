import React from 'react';




const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container">
      <h2 className="form-container">Contact Form</h2>
      <form>
        <div className="form-container">
          <label className="form-label"  htmlFor="name">
            Name
          </label>
          <input className="form-control" placeholder='Please enter your name...' type="text" id="name" required />
        </div>
        <div className="form-container">
          <label className="form-label"  htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder='Please enter your email address...'  type="email" id="email" required />
        </div>
        <div className="form-container1">
          <label className="form-label1"  htmlFor="message">
            Message
          </label>
          <textarea className="form-control1" placeholder='Send us a message!...' id="message" required />
        </div>
        <button className="btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm