import PropTypes from 'prop-types'
import MyImage from './Keyboard1.jpg';
export default function Keyboards(props){ 
    return(
        <div className="person">
            <img src={MyImage} alt="keyboard-picture" className="keyboard-picture" />
            <h2><strong>Specifications: </strong></h2>
            <p>     ●<strong>{props.name}</strong>Cherry MX Red (Mechanical) </p>
            <p>     ●<strong>Key Layout:</strong>Full-size (104 keys) </p>
            <p>     ●<strong>Backlighting:</strong>Wired (USB 2.0) </p>
            <p>     ●<strong>Connectivity:</strong>RGB with customizable colors </p>
            <p>     ●<strong>Dimensions:</strong>440 mm x 135 mm x 35 mm </p>
            <p>     ●<strong>Weight:</strong> 1.2 kg</p>
            <p>     ●<strong>Cable Length:</strong> 1.8 meters</p>
            <p>     ●<strong>Additional Features:</strong> Anti-ghosting, N-key rollover, dedicated media controls</p>
            <p></p>
            <h2>In the Box</h2>
            <ul>
                <li>KB-X1000 Keyboard</li>
                <li>USB Cable</li>
                <li>User Manual</li>
                <li>Keycap Removal Tool</li>
                <li>Warranty Card</li>
                <li></li>
            </ul>
            <h2>Key Features:</h2>
            <ul>
                <li>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.</li>
                <li>Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.</li>
                <li>Programmable Keys: Assign macros and custom functions to any key with the included software.</li>
                <li>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.</li>
                <li>Dedicated Media Controls: Easily control music and videos with dedicated media keys.</li>
            </ul>
            <h2>Setup Instructions</h2>
            <ul>
                <h3>Unboxing:</h3>
                <li>Carefully remove the keyboard and accessories from the box.</li>
            </ul>
            <ul>
                <h3>Connecting the Keyboard:</h3>
                <li>Plug the USB cable into an available USB port on your computer.</li>
                <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
            </ul>
            <ul>
                <h3>Software Installation (Optional):</h3>
                <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                <li>Follow the on-screen instructions to install the software.</li>
            </ul>
            <ul>
                <h3>Keycap Removal and Replacement:</h3>
                <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
            </ul>
            <h2>Using The Keyboard</h2>
            <ul>
                <h3>Basic Typing:</h3>
                <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
            </ul>

        </div>
    )
}
Keyboards.defaultProps = {
    name:"Guest",
    food:"Unknown",
    isHealthy: false,
    age: 0,
    course: "Unknown",
    university: "Uknown"
}
Keyboards.PropTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number,
    course: PropTypes.string,
    university: PropTypes.string
}