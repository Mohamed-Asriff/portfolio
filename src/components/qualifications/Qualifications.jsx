import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-award qualification__icon"></i>
            Certificates
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-star qualification__icon"></i>
            Interests
          </div>
        </div>

        <div className="qualification__sections">
          {/* ── Education ── */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Grade 1 to G.C.E. O/L</h3>
                <span className="qualification__subtitle">
                  T/Kinniya Central College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2008 - 12/2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">G.C.E. A/L</h3>
                <span className="qualification__subtitle">
                  T/Kinniya Central College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 06/2019 - 01/2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT Undergraduate</h3>
                <span className="qualification__subtitle">
                  Institute of Technology, University of Moratuwa
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ── Certificates & Achievements ── */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Finalist – Vertex Line Following Robotic Challenge
                </h3>
                <span className="qualification__subtitle">
                  Institute of Technology, University of Moratuwa
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Google AI Essentials Specialization (5 courses)
                </h3>
                <span className="qualification__subtitle">
                  Google / Coursera
                </span>
                <div className="qualification__calendar">
                  <a
                    href="https://coursera.org/verify/specialization/FV0E4AZCY7BE"
                    target="_blank"
                    rel="noreferrer"
                    className="qualification__verify-link"
                  >
                    <i className="uil uil-external-link-alt"></i> Verify
                  </a>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Python for Beginners
                </h3>
                <span className="qualification__subtitle">
                  Dept. of CSE, University of Moratuwa (CODL)
                </span>
                <div className="qualification__calendar">
                  <a
                    href="https://open.uom.lk/verify"
                    target="_blank"
                    rel="noreferrer"
                    className="qualification__verify-link"
                  >
                    <i className="uil uil-external-link-alt"></i> Verify (code: c5QrurFxnF)
                  </a>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ── Interests / Volunteering ── */}
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__list-content">
              <ul className="qualification__interest-list">
                <li>
                  <i className="bx bx-chip"></i>
                  Keen interest in IoT, connected devices, and embedded firmware; self-studying microcontrollers and sensor interfacing
                </li>
                <li>
                  <i className="bx bx-group"></i>
                  Project and team management experience through university group projects
                </li>
                <li>
                  <i className="bx bx-message-rounded-dots"></i>
                  Strong communication and collaborative problem-solving skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
