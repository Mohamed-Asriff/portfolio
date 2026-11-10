import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-chip about__icon' ></i>
            <h3 className="about__title">IoT Focus</h3>
            <span className="about__subtitle">5 embedded projects</span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>
    </div>
  )
}

export default Info;
