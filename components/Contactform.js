import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className={styles.contactContainer}>
        <h2 className={styles.divTitle}>Get in Touch</h2>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com" target="_blank" class="icon-link"><i class="fab fa-linkedin"></i></a>
          <a href="https://facebook.com" target="_blank" class="icon-link"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" class="icon-link"><i class="fab fa-instagram"></i></a>
        </div>
        <div className={styles.contactFormContainer}>
            <h2 className={styles.formTitle}>Contact Us</h2>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.row}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                </div>
                <div className={styles.row}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                </div>
                <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                />
                <button type="submit" className={styles.submitButton}>
                Inquire Now
                </button>
            </form>
        </div>
    </div>
  );
}