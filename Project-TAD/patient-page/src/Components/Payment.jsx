import { Link } from 'react-router-dom'; 
import icon2 from '../assets/images/Notification.png';
import cart from '../assets/icons2/Cart.png';
import icon1 from '../assets/images/eva_arrow-back-fill.png';
import card from '../assets/icons2/card.png';
import card2 from '../assets/icons2/Vector (1).png';
import reciept from '../assets/icons2/Receipt.png';
import card3 from '../assets/icons2/Vector (2).png';
import paypal from '../assets/icons2/Paypal.png';
import bt from '../assets/icons2/bt.png';
import mastercardLogo from '../assets/icons2/Mastercard.png'; 
import '../Style/Payments.css'; // Ensure correct path for CSS file

function Payment() {
  return (

    <>

          <div className="icon">
                <div className="icon-head">
                  <Link to='/homepage'>
                    <img className='return' src={icon1} alt="back" />
                  </Link>
                  <h2 className='section-title'>Payment</h2>
                </div>

                <div className="icon-head3">
                  <div className="icon-parts">
                    <img src={icon2} alt="" />
                  </div>

                  <div className="icon-parts">
                      <img src={cart} alt="" />
                  </div>
                </div>
          </div>


          <div className="card-payment">
            <div className="debit-card-main">
              <div className="debit-card">
                    <div className="debit-card-det">
                        <div className="debit-card-det1">
                          <img src={card} alt="" />
                        </div>

                        <div className="debit-card-det1">
                          Debit Card
                        </div>
                    </div>

                    <div className="debit-card-det">
                      <input type="radio" name="range" id="range" />
                    </div>
                </div>

                      {/* debit-info */}
                <div className="debit-info">
                  <h2>Debit Card Information</h2>
                  {/* share div here */}
                    <div className="dci-main">
                        <div className="dci1">
                          <img src={mastercardLogo} alt="" />
                        </div>

                        <div className="dci1">
                          <input type="text" name="txt" id="card1" placeholder='Enter the 12-digit number on your card' />
                        </div>
                    </div>
                    <div className="dci2-main">
  <div className="dci2">
    <div className="dci2-2">
      <input
        type="text"
        name="cvv"
        id="cvv"
        placeholder="CVV Number"
        className="cvv-input"
        maxLength="3"
        onInput={(e) => {
          if (e.target.value.length > 3) e.target.value = e.target.value.slice(0, 3);
        }}
      />
      <img src={card} alt="" className="cvv-icon" />
    </div>
  </div>
  <div className="dci2">
    <input type="text" name="" id="expiry" placeholder="Expiry Date" />
  </div>
</div>


                </div>

                <div className="payment-method">
                <div className="debit-card">
                    <div className="debit-card-det">
                        <div className="debit-card-det1">
                          <img src={paypal} alt="" />
                        </div>

                        <div className="debit-card-det1">
                          Debit Card
                        </div>
                    </div>

                    <div className="debit-card-det">
                      <input type="radio" name="range" id="range" />
                    </div>
                </div>
                 
                <div className="debit-card">
                    <div className="debit-card-det">
                        <div className="debit-card-det1">
                          <img src={bt} alt="" />
                        </div>

                        <div className="debit-card-det1">
                          Debit Card
                        </div>
                    </div>

                    <div className="debit-card-det">
                      <input type="radio" name="range" id="range" />
                    </div>
                </div>

                <div className="btn-2">
                  <button id='proceed' type="submit">Proceed</button>
                </div>
                </div>
            </div>

                


                    {/* Right section - Payment Summary */}
                    <div className="payment-summary">
  <div className="summary-card">
    <div className="icon-sum">
      <div className="icons-sum">
        <img src={card2} alt="" />
      </div>
      <div className="icons-sum">
        <img src={card3} alt="" />
      </div>
    </div>
    <div className="card-content">
      <div className="card-holder">John Doe</div>
      <div className="card-number">**** **** **** 3456</div>
      <div className="cn">
        <div className="cn1">
          <div className="card-expiry">06/24</div>
        </div>
        <div className="cn1">
          <img src={mastercardLogo} alt="Mastercard" className="summary-logo" />
        </div>
      </div>
    </div>
  </div>

  <div className="payment-breakdown">
    <div className="breakdown-item">
      <span className="appointt">Appointment Fee</span>
      <span>N10,000.00</span>
    </div>
    <div className="breakdown-item">
      <span  className="appointt2">Tax (5%)</span>
      <span>N500.00</span>
    </div>
    <div className="breakdown-item">
      <span className="appointt2">Platform Fee</span>
      <span>N1,000.00</span>
    </div>
    <div className="breakdown-item">
      <span className="appointt2">Discount</span>
      <span>N0.00</span>
    </div>
  </div>

  <div className="total-payment">
    <div className="tp">
    <span className="appointt2" >You have to pay</span>
    <h3 className='mb'>N11,500.00</h3>
    </div>

    <div className="tp">
      <img src={reciept} alt="" />
    </div>
  </div>
</div>

          </div>

    </>
    
  );
}

export default Payment;
