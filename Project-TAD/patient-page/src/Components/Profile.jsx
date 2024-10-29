import '../Style/Profile.css';
import icon1 from '../assets/images/eva_arrow-back-fill.png';
import icon2 from '../assets/images/Notification.png';
import patientimage from '../assets/images/profile.png';
import bt from '../assets/icons2/Temp.png';
import bp from '../assets/icons2/Blood pressure.png';
import hr from '../assets/icons2/Group1.png';
import { useState } from 'react';

function Profile() {
    const [isHovered, setIsHovered] = useState(false); // State for hover effect
    const [image, setImage] = useState(patientimage); // State for profile image

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set the new image URL
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="profile-whole">
                    <div className="icons">
                        <div className="icon-options">
                            <img src={icon1} alt="" />
                            <div className="word">Profile</div>
                        </div>

                        <div className="icon-options">
                            <img src={icon2} alt="" />
                        </div>
                    </div>

                    {/* Profile section */}
                    <div className="profile-details">
                        <div 
                            className="profile-details1"
                            onMouseEnter={() => setIsHovered(true)} // Set hover to true
                            onMouseLeave={() => setIsHovered(false)} // Set hover to false
                        >
                            <img 
                                id='p-image' 
                                src={image} // Use state for image source
                                alt="Profile"
                                onClick={() => document.getElementById('file-input').click()} // Click handler to open file dialog
                            />
                            {isHovered && <div className="change-photo-label" onClick={() => document.getElementById('file-input').click()}>Edit</div>} {/* Show label on hover */}
                            <input 
                                id="file-input" 
                                type="file" 
                                accept=".jpg, .jpeg, .png" // Restrict to JPEG and PNG files
                                style={{ display: 'none' }} // Hide input
                                onChange={handleImageChange} 
                            />
                            <div className="patient-name">John Doe</div>
                            <div className="patient-id">Patient ID: <span id='id-num'>266735</span></div>
                            <button className='update-btn'>Update</button>
                        </div>

                        <br />
                        <br />

                        <div className="profile-more-details">
                            <div className="profile-detail2">
                                <div className="profile-sub-details">Gender: <span id='sub-gender'>Male</span></div>
                                <div className="profile-sub-details">DOB: <span id='sub-DOB'>29/04/1968</span></div>
                                <div className="profile-sub-details">Occupation: <span id='sub-occupation'>Mechanical Engineer</span></div>
                            </div>

                            <div className="profile-detail3">
                                <div className="profile-sub-details">Phone No: <span id='sub-phone'>0703 314 0031</span></div>
                                <div className="profile-sub-details">Email Address: <span id='sub-mail'>johndoe234@gmail.com</span></div>
                            </div>

                            <div className="profile-detail4">
                                <div className="profile-sub-details">Home Address: <span id='sub-adress'>Block 114,Flat 6, Association avenue, Ikeja, Lagos</span></div>
                            </div>

                            <div className="profile-detail5">
                                <div className="profile-sub-details">Emergency Contact Name: <span id='sub-EMN'>Mary Joe</span></div>
                                <div className="profile-sub-details">Relationship: <span id='sub-relationship'>Wife</span></div>
                            </div>

                            <div className="profile-detail6">
                                <div className="profile-sub-details">Phone No: <span id='sub-phone'>0703 314 0031</span></div>
                                <div className="profile-sub-details">Home Address: <span id='sub-adress'>Block 114,Flat 6, Association avenue, Ikeja, Lagos</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-stage2">
    <div className="health-info">
        <h2 className='hi'>Health Information</h2>
        <div className="profile-sub-details">Weight: <span id='sub-weight'>62kg</span></div>
        <div className="profile-sub-details">Height: <span id='sub-height'>1.78m</span></div>
        <div className="profile-sub-details">BMI: <span id='sub-BMI'>19.57</span></div>
        <div className="profile-sub-details">Blood Group: <span id='sub-BG'>O+</span></div>
        <div className="profile-sub-details">Blood Type: <span id='sub-BT'>AA</span></div>
        <div className="profile-sub-details">Allergies: <span id='sub-allrg'>Milk , Penicilin</span></div>
        <div className="profile-sub-details">Diseases: <span id='sub-diseases'>Diabetics ,Hypertension</span></div>
        <div className="profile-sub-details">Diet restriction: <span id='sub-diet'>26</span></div>
        <div className="profile-sub-details">Current Medications: <span id='sub-med'>insulin 1-lu,<p id='sub-med'>Bisprolol 25mg</p></span></div>
        <div className="profile-sub-details">Infectios Disease: <span id='sub-ID'>Nill</span></div>
        <div className="profile-sub-details">Mental Health Condition: <span id='sub-MHC'>Nill</span></div>
    </div>

    <div className="stage-option">
        <div className="vital-signs">
            <h2 className='vi'>Vital Signs</h2>
            <div className="vt-icon">
                <div className="vt-icons">
                    <img id='vi-icon' src={bt} alt="Body Temp" />
                    <div className="temp">Body Temp</div>
                    <div id="temp-rate">37.3</div>
                </div>
                
                <div className="vt-icons">
                    <img id='vi-icon' src={hr} alt="Heart Rate" />
                    <div className="h-rate">Heart Rate</div>
                    <div id="heart-rate">73b/m</div>
                </div>

                <div className="vt-icons">
                    <img id='vi-icon' src={bp} alt="Blood Pressure" />
                    <div className="bp">Blood Pressure</div>
                    <div id="b-pressure">165/100mmHg</div>
                </div>
            </div>
        </div>

        <div className="test">
            <h2 className='tst'>Test</h2>
        </div>
    </div>
</div>

{/* Prescription section */}
<div className="prescription-section">
    <div className="prescription-header">
        <h3>Prescription</h3>
        <button type="submit" className="add-button">+ Add</button>
    </div>
    
    <table className="prescription-table">
        <thead>
            <tr>
                <th>Drugs</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Duration</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Insulin</td>
                <td>10iu</td>
                <td>Nocte</td>
                <td>2 months</td>
                <td>12/07/24</td>
            </tr>
            <tr>
                <td>Bisoprolol</td>
                <td>25mg</td>
                <td>Mane</td>
                <td>3 months</td>
                <td>01/07/24</td>
            </tr>

            
        </tbody>
    </table>
</div>


            </div>
            
        </>
    );
}

export default Profile;
