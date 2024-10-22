import  { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import patientimage from '../assets/images/profile.png';
import cart from '../assets/icons2/Cart.png';
import search from '../assets/icons2/search.png';
import icon2 from '../assets/images/Notification.png';
import doc from '../assets/images/Doc.png';
import '../Style/Homepage.css';
import rate1 from "../assets/images/rate (5).png";
import rate2 from "../assets/images/rate (1).png";
import rate3 from "../assets/images/rate (3).png";
import rate4 from "../assets/images/rate (2).png";
import rate5 from "../assets/images/rate (5).png";

function HomePge() {
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
      <div className="page-view">
        <div className="welcome-page">
          <div className="welcome-details">
            <img src={patientimage} alt="" />
            <div className="greet">
              <span className="greet2">Welcome!</span>
              <p className="greet3">John</p>
            </div>
          </div>

          <div className="welcome-details2">
            <div className="welcome-icons">
              <img src={search} alt="" />
            </div>

            <div className="welcome-icons">
              <img src={icon2} alt="" />
            </div>
            <div className="welcome-icons">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>

        <div className="banner">
          Book Your Next Appointment
          <p className="para1">Now</p>
        </div>

        <div className="banner-pic">
          <img src={doc} alt="" />
        </div>

        <div className="avail-docs">
          <h2 className='ad'>Available Doctors</h2>
          <div className="avail-docs2">
            
                <div className="avail-docs-details">
                  <div className="doc-detail2">
                  <div id='d-name'> Dr.Amos Duke</div>
                    <div id="occupation">General 
                      <div id="occupation2"> Medicine</div></div>
                                  {/* Star Rating Section */}
                  <div className="star-rating">
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
                    <Link to ="/docprof">
                        <p className='v-more'>View More</p>
                    </Link>
                  </div>



              <div className="doc-detail3">
                <img id='d-pics' src={rate1} alt="" />
              </div>
            </div>

            <div className="avail-docs-details">
                  <div className="doc-detail2">
                      <div id='d-name'> Dr.Linda
                        <div id="d-name2">Chukwu</div>                 
                      </div>
                    <div className="occupation">Gynaacologist</div>
                                  {/* Star Rating Section */}
                  <div className="star-rating">
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
                  <Link to ="/docprof">
                        <p className='v-more'>View More</p>
                    </Link>
                  </div>



              <div className="doc-detail3">
                <img id='d-pics' src={rate2} alt="" />
              </div>
            </div>

            <div className="avail-docs-details">
                  <div className="doc-detail2">
                  <div id='d-name'> Dr.Olayinka
                        <div id="d-name2">Gbadebo</div>                 
                      </div>
                    <div className="occupation">Orthopedic</div>
                                  {/* Star Rating Section */}
                  <div className="star-rating">
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
                  <Link to ="/docprof">
                        <p className='v-more'>View More</p>
                    </Link>
                  </div>



              <div className="doc-detail3">
                <img id='d-pics' src={rate3} alt="" />
              </div>
            </div>

            <div className="avail-docs-details">
                  <div className="doc-detail2">
                  <div id='d-name'> Dr.Khadijat
                        <div id="d-name2">Umar</div>                 
                      </div>
                    <div className="occupation">Dentist</div>
                                  {/* Star Rating Section */}
                  <div className="star-rating">
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
                  <Link to ="/docprof">
                        <p className='v-more'>View More</p>
                    </Link>
                  </div>



              <div className="doc-detail3">
                <img id='d-pics' src={rate4} alt="" />
              </div>
            </div>

            <div className="avail-docs-details">
                  <div className="doc-detail2">
                  <div id='d-name'> Dr.John
                        <div id="d-name2">Jude</div>                 
                      </div>
                    <div className="occupation">Neurologist</div>
                                  {/* Star Rating Section */}
                  <div className="star-rating">
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
                  <Link to ="/docprof">
                        <p className='v-more'>View More</p>
                    </Link>
                  </div>



              <div className="doc-detail3">
                <img id='d-pics' src={rate5} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomePge;
