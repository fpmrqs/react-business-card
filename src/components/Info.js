const Info = () => {
  return (
    <header>
      <div className="image"></div>
      <h1>Ramses The Cat</h1>
      <h3>Full-Stack Engineer</h3>
      <p>ramses@thecat.com</p>
      <div className="buttons">
        <button className="email-btn">
          <img src="./images/Mail.png" alt="Email Icon"/>
          <span>Email</span>
        </button>
        <button className="linkedin-btn">
          <img src="./images/linkedin.png" alt="Email Icon"/>
          <span>LinkedIn</span>
        </button>
      </div>
    </header>
  )
}

export default Info