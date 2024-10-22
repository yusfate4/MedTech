import  { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import icon1 from '../assets/images/eva_arrow-back-fill.png';
import fav from '../assets/images/fav.png';
import docpic from '../assets/images/prof-pic.png';
import docicon1 from '../assets/images/icons (1).png';
import docicon2 from '../assets/images/icons (2).png';
import docicon3 from '../assets/images/icons (3).png';
import '../Style/DocProfile.css';
function DocProfile() {
    // State to track selected rating
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
  
    const handleMouseOver = (value) => {
      setHoverRating(value);
    };
  
    const handleClick = (value) => {
      setRating(value);
    };
  
    const handleMouseLeave = () => {
      setHoverRating(0);
    };
  return (
    <>
        <div className="view-page">

          <Link to='/homepage'>
          <div className="icon">
                <img src={icon1} alt="back" />
              </div>
          </Link>
          
            <div className="doc-prof">
                <div className="doc-prof-details">
                    <img src={docpic} alt="" />
                </div>



                <div className="doc-prof-details1">
  
                  <div className="doc-name">Dr.Amos Luke
                    <div className="doc-occupation">General Medicine</div>
                    <div className="star-ratings">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`star ${value <= (hoverRating || rating) ? 'filled' : ''}`}
                        onMouseOver={() => handleMouseOver(value)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(value)}
                      >
                        ☆
                      </span>
                    ))}
                  </div>

                  <div className="doc-icons">
                    <div className="doc-icon">
                      <img src={docicon1} alt="" />
                    </div>

                    <div className="doc-icon">
                      <img src={docicon2} alt="" />
                    </div>
                    
                    <div className="doc-icon">
                      <img src={docicon3} alt="" />
                    </div>
                  </div>


                  <div className="doc-exp">
                    <div className="doc-exp-details">
                      <div className="patients">500+
                        <div className="patient2">Patients</div>
                      </div>
                    </div>

                    <div className="doc-exp-details">
                    <div className="patients">3yrs+
                        <div className="patient2">Experience</div>
                      </div>
                    </div>

                    <div className="doc-exp-details">
                    <div className="patients">3.2
                        <div className="patient2">Reviews</div>
                      </div>
                    </div>
                  </div>

                  <div className="services">
                    <div className="service-details">
                    <div className="service">8,0000
                        <div className="service2">Fee</div>
                      </div>
                    </div>

                    <div className="service-details">
                    <div className="service">90 mins
                        <div className="service2">Session</div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="doc-prof-details1">
                    <div className="fav"><img src={fav} alt="" /></div>
                  </div>
                  
                </div>
            </div>

    

            <div className="Prof-main">
              
            <h2 className='profile'>Profile</h2>
            <div className="doc-prof-detail-main">
                      <div className="detail-main1">
                          Medical doctor with 3 years of experience in General Medicine and various hospital settings Adept <br /> at accurate  diagnosis and strategizing optimal treatment plans to meet individual patient needs.   <br />Demonstrates an empathetic and professional attitude, fully committed to delivering the highest  <br />standard of patient care.  Skilled in counseling patients on preventive care, encouraging positive <br />  lifestyle changes,  and  improving overall well-being.
                          Experienced in managing acute and chronic <br /> conditions,  including   hypertension, diabetes, and respiratory illnesses,  with a focus on holistic  <br />  patient care.Well-versed  in emergency care and handling critical situations under pressure,  <br /> ensuring fast, accurate  decision-making for optimal patient outcomes.
                      </div>

                      <div className="detail-main2">

                          <div className="meeting">
                              <div className="meeting-head">Book a date</div>
                              <div className="meeting-option">
                                  <div className="meeting-options">8
                                    <div className="meeting-month">Aug</div>
                                  </div>

                                  <div className="meeting-options">9
                                  <div className="meeting-month">Aug</div>
                                  </div>

                                  <div className="meeting-options">10
                                  <div className="meeting-month">Aug</div>
                                  </div>

                                  <div className="meeting-options">12
                                  <div className="meeting-month">Aug</div>
                                  </div>
                              </div>
                          </div>

                          <div className="meeting">
                            <div className="meeting-head2">Select a time</div>
                              <div className="meeting-option">
                                      <div className="meeting-options">9:00</div>

                                      <div className="meeting-options">10:30</div>

                                      <div className="meeting-options">12:00</div>

                                      <div className="meeting-options">13:30</div>
                                  </div>
                          </div>

                          <div className="booking-btn">
                            <button type="submit" id='book-btn'>Proceed to Book</button>
                          </div>
                      </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default DocProfile