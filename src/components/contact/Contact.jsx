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

const handleSubmit - (e) => {
    e.preventDefault();

    emailjs.send()
}
  return (
    <div>
      
    </div>
  )
}

export default Contact
