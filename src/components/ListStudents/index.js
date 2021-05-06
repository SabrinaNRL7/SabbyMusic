import {Component} from 'react';

class ListStudents extends Component {

    state = {
        subTitle: "Welcome",
    };

    handleChange = () => {
        this.setState({ subTitle: "Welcome To Sabby Music"});
    };

    componentDidMount() {
        console.log("Did Mount run");
    }

    componentDidUpdate() {
        console.log("Did Update run");
    }

    componentWillUnmount() {
        console.log("Will Unmount run");
    }

    render() {
        console.log("render run");
        const {title, students} = this.props;

    return (
        <div>

            <h3>{title}</h3>
            <p>{this.state.subTitle}</p>

            <ul>
                {students.map(student => {return <li>{student.name}</li>;})}
            </ul>

            <button onClick={this.handleChange}>Change Subtitle</button>
        </div>
    )
    }
}

export default ListStudents;