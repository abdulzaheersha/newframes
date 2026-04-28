"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal(0.1);
  const infoRef = useScrollReveal(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.header} ref={headerRef}>
          <span className="label">[ 10 ] — Get in Touch</span>
          <h2 className={`heading-lg ${styles.heading}`}>
            Let&apos;s <span className={styles.accent}>Connect</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "550px" }}>
            Ready to transform your workspace? Reach out and let&apos;s discuss
            your vision. Our advisory team is here to help.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact form */}
          <div ref={formRef}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Your Name</label>
                <input
                  type="text"
                  className={styles.fieldInput}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="John Doe"
                />
                <div className={styles.fieldLine} />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email Address</label>
                <input
                  type="email"
                  className={styles.fieldInput}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="john@company.com"
                />
                <div className={styles.fieldLine} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Company</label>
              <input
                type="text"
                className={styles.fieldInput}
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your Company"
              />
              <div className={styles.fieldLine} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                placeholder="Tell us about your project..."
                rows={4}
              />
              <div className={styles.fieldLine} />
            </div>
            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={submitted}
            >
              <span>{submitted ? "Message Sent ✓" : "Send Message"}</span>
            </button>
          </form>
          </div>

          {/* Contact info */}
          <div className={styles.info} ref={infoRef}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h4 className={styles.infoTitle}>Office Location</h4>
                <p className={styles.infoText}>
                  109, Lumbini Avenue, Gachibowli,
                  <br />
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>✉️</div>
              <div>
                <h4 className={styles.infoTitle}>Email Us</h4>
                <a href="mailto:info@framesnspaces.com" className={styles.infoLink}>
                  info@framesnspaces.com
                </a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h4 className={styles.infoTitle}>Call Us</h4>
                <a href="tel:+918919296590" className={styles.infoLink}>
                  +91-89192 96590
                </a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕐</div>
              <div>
                <h4 className={styles.infoTitle}>Working Hours</h4>
                <p className={styles.infoText}>
                  Monday — Friday
                  <br />
                  9:00 AM — 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
