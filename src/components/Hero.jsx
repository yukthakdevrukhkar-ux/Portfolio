import React from "react";

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <p style={styles.small}>👋 Hi, I'm</p>

      <h1 style={styles.title}>
        Yuktha Devrukhkar
      </h1>

      <h3 style={styles.subtitle}>
        Frontend Developer | React.js Enthusiast
      </h3>

      <p style={styles.desc}>
        I build modern, responsive and user-friendly web applications
        using React and JavaScript.
      </p>

      <div style={styles.buttons}>
        <a href="#projects" style={styles.btnPrimary}>View Projects</a>
        <a href="#contact" style={styles.btnSecondary}>Contact Me</a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
    padding: "20px",
  },
  small: {
    color: "#94a3b8",
  },
  title: {
    fontSize: "40px",
    margin: "10px 0",
  },
  subtitle: {
    color: "#60a5fa",
    marginBottom: "10px",
  },
  desc: {
    maxWidth: "500px",
    color: "#94a3b8",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  btnPrimary: {
    padding: "10px 20px",
    background: "#3b82f6",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
  },
  btnSecondary: {
    padding: "10px 20px",
    border: "1px solid white",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

export default Hero;