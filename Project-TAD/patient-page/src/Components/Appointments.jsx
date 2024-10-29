import { Link } from 'react-router-dom'; 
import icon1 from '../assets/images/eva_arrow-back-fill.png';
import patientimage from '../assets/images/profile.png';
import icon2 from '../assets/images/Notification.png';
import '../Style/Appointments.css';

function Appointments() {
  return (
    <>
      <div className="full-view">
        {/* Header */}
        <div className="icon">
          <div className="icon-head">
            <Link to='/homepage'>
              <img className='return' src={icon1} alt="back" />
            </Link>
            <h2 className='app'>Appointment</h2>
          </div>

          <div className="icon-head2">
            <img src={icon2} alt="" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile2">
          <div className="first-div">
            <div className="patient-img">
              <img id='p-image' src={patientimage} alt="Profile" />
            </div>
            <div className="patient-det">
              <div className="patient-det1">
                <div className="patient-name">John Doe</div>
                <div className="patient-id">Patient ID: <span id='id-num'>266735</span></div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button id='upt-btn'>Update</button>
          </div>
        </div>

        {/* Appointment Form Section */}
        <div className="appointment-form">
          <form>
            <div className="form-group">
              <label>Symptoms/Describe your problem</label>
              <textarea placeholder="E.g Fever and persistent headache with dizziness and loss of appetite, I feel like I want to fall anytime I stand up or bend"></textarea>
            </div>

            <div className="form-group">
              <label>Date of onset/likely onset</label>
              <input type="text" placeholder="E.g it started last week Friday after I came back from work..." />
            </div>

            <div className="form-group">
              <label>Any previous treatments</label>
              <textarea placeholder="E.g I took over-the-counter drugs - paracetamol and malaria medicine complete dose"></textarea>
            </div>

            <div className="form-group">
              <label>Attach report & previous prescription</label>
              <input type="file" multiple accept="image/jpeg,image/png,application/pdf" />
            </div>

            <button type="submit" className="proceed-btn">Proceed</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Appointments;
