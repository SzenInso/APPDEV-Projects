import PropTypes from 'prop-types'
import MyImage from '../Eren.png'
export default function Profile(props){ //props-to pass information to functional components; usually arguments or parameters
    return(
        <div className="person">
            <img src={MyImage} alt="person-logo" className="person-picture" />
            <p>Hi I am <strong>{props.name}</strong> and I am studying at <strong>{props.university}!</strong> </p>
            <p>My favorite food is {(props.food).toUpperCase()}. </p>
            <p><strong>{props.name}</strong> is {props.age} years old!</p>
            <p>I am taking on the program of <strong>{props.course}</strong>. I am already a sophomore.</p>
        </div>
    )
}
Profile.defaultProps = {
    name:"Guest",
    food:"Unknown",
    isHealthy: false,
    age: 0,
    course: "Unknown",
    university: "Uknown"
}
Profile.PropTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealthy: PropTypes.bool,
    age: PropTypes.number,
    course: PropTypes.string,
    university: PropTypes.string
}