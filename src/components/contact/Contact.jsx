import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_75s9lay","template_18xn1k5", {
        from_name: formData.name,
        reply_to: formData.email,
        message_html: formData.message
    }).then(function (response) {
        console.log('Email sent successfully:', response);
        // You can add additional logic here (e.g., show a success message)
      }, function (error) {
        console.log('Email failed to send:', error);
        // You can add additional error handling here
      });
    };
  return (
<form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact
