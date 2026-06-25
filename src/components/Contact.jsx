import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section style={styles.section} id="contact">
      <h2 style={styles.heading}>Get In Touch</h2>

      <p style={styles.subtext}>
        I’m always open to discussing projects, ideas or opportunities.
      </p>

      <div style={styles.card}>
        <h3 style={styles.name}>Yuktha Devrukhkar</h3>
        <p style={styles.role}>Frontend Developer | React Enthusiast</p>

        <div style={styles.icons}>
          <a href="https://github.com/" target="_blank" style={styles.icon}>
            <FaGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" style={styles.icon}>
            <FaLinkedin />
          </a>

          <a href="mailto:example@gmail.com" style={styles.icon}>
            <FaEnvelope />
          </a>
        </div>

        <button
          style={styles.button}
          onClick={() => (window.location = "mailto:example@gmail.com")}
        >
          Say Hello 👋
        </button>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtext: {
    color: "#94a3b8",
    marginBottom: "40px",
  },
  card: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "16px",
    background: "#111827",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  name: {
    fontSize: "22px",
    marginBottom: "5px",
  },
  role: {
    color: "#94a3b8",
    marginBottom: "20px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
    marginBottom: "20px",
  },
  icon: {
    color: "white",
    transition: "0.3s",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  },
};

export default Contact;