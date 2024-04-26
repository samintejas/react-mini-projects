import PropTypes from 'prop-types'

function Student(props) {

    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    );
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number
}

Student.defaultProps = {
    name: "name",
    age: 0
}


export default Student