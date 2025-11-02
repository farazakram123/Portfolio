import './mySkills.css'

const MySkills = () => {
  return (
    <section className="my-skills" id="my-skills">
      <div className="skills__container">
        {/* Skills Header */}
        <header className="skills__header">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__underline"></div>
          <p className="skills__description">
            I've worked with a range of technologies in the web development world, from frontend to
            backend and everything in between.
          </p>
        </header>

        {/* Skills Categories */}
        <div className="skills__categories">
          {/* Programming Languages */}
          <div className="skills__category">
            <div className="skills__category-header">
              <div className="skills__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
                  <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
                </svg>
              </div>
              <h3 className="skills__category-title">Programming Languages</h3>
            </div>
            <div className="skills__list">
              <div className="skills__item">C++</div>
              <div className="skills__item">JavaScript</div>
              <div className="skills__item">Python</div>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="skills__category">
            <div className="skills__category-header">
              <div className="skills__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="skills__category-title">Frontend Development</h3>
            </div>
            <div className="skills__list">
              <div className="skills__item">React</div>
              <div className="skills__item">Next.js</div>
              <div className="skills__item">HTML / CSS</div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="skills__category">
            <div className="skills__category-header">
              <div className="skills__icon">
                <svg viewBox="-6 -6 36.00 36.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2662d9"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#2662d9" strokeWidth="1.5"></path> <path d="M17 15H14.5H12" stroke="#2662d9" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M7 10L7.2344 10.1953C8.51608 11.2634 9.15693 11.7974 9.15693 12.5C9.15693 13.2026 8.51608 13.7366 7.2344 14.8047L7 15" stroke="#2662d9" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              </div>
              <h3 className="skills__category-title">Backend Development</h3>
            </div>
            <div className="skills__list">
              <div className="skills__item">Node.js</div>
              <div className="skills__item">Express.js</div>
              <div className="skills__item">REST APIs</div>
            </div>
          </div>

          {/* Database & Tools */}
          <div className="skills__category">
            <div className="skills__category-header">
              <div className="skills__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3 className="skills__category-title">Database & Tools</h3>
            </div>
            <div className="skills__list">
              <div className="skills__item">MongoDB</div>
              <div className="skills__item">MySQL</div>
              <div className="skills__item">PostgreSQL</div>
              <div className="skills__item">Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySkills
