    import { Link } from 'react-router-dom'; // Import Link for navigation
    import icon1 from '../assets/icons/Vector.png';
    import icon2 from '../assets/icons/Vector (1).png';
    import icon3 from '../assets/icons/Group.png';
    import icon4 from '../assets/icons/Vector (2).png';
    import icon5 from '../assets/icons/Group (1).png';
    import icon6 from '../assets/icons/Vector (3).png';
    import icon7 from '../assets/icons/Vector (5).png';
    import '../Style/Nav.css';

    function NavBar() {
    return (
        <div>
        <div className="navbar">
            <h2 className='web-name'>Tell-A-Doc</h2>

            <div className="nav-options">
                <Link to="profile" className="icon">
                    <img id='icon' src={icon1} alt="Option 1" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/homepage" className="icon">
                    <img id='icon' src={icon2} alt="Option 2" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/group" className="icon">
                    <img id='icon' src={icon3} alt="Group" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/appointment" className="icon">
                    <img id='icon' src={icon4} alt="Vector 2" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/group1" className="icon">
                    <img id='icon' src={icon5} alt="Group 1" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/vector3" className="icon">
                    <img id='icon' src={icon6} alt="Vector 3" />
                </Link>
            </div>

            <div className="nav-options">
                <Link to="/payments" className="icon">
                    <img id='icon' src={icon7} alt="Vector 5" />
                </Link>
            </div>

        </div>
        </div>
    );
    }

    export default NavBar;
