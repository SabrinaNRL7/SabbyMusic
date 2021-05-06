import React, {useState, useEffect} from 'react';
import firebase from '../../../config/Firebase';

const Dashboard = () => {
    
    const [fullName, setFullName] = useState("");
    const [course, setCourse] = useState([]);
    const [cost, setCost] = useState("");
    const [button, setButton] = useState("Save");
    const [selectedCourse, setSelectedCourse] = useState({});

    useEffect(() => {
        firebase
        .database()
        .ref("course")
        .on("value", (res) => {
            if(res.val()) {
                //Ubah menjadi array object
                const rawData = res.val();
                const courseArr = [];
                Object.keys(rawData).map(item => {
                   courseArr.push({
                       id: item,
                       ...rawData[item],
                   });
                });
                setCourse(courseArr);
        }
        });       
    }, []);

    const resetForm = () => {
        setFullName("");
        setCourse("");
        setCost("");
        setButton("Save");
        setSelectedCourse({});
    };

    const onSubmit = () => {
        const data = {
            fullName: fullName,
            course: course,
            cost: cost,
        };
        if(button === 'Save'){
            firebase.database().ref('course').push(data);
        }else{
            firebase.database().ref(`course/${selectedCourse.id}`).set(data);
        }
        resetForm();
    };

    const onUpdateData = (item) => {
        setFullName(item.fullName);
        setCourse(item.course);
        setCost(item.cost);
        setButton(item.button);
        setSelectedCourse(item.selectedCourse);
    };

    const onDeleteData = (item) => {
        firebase.database().ref(`course/${item.id}`).remove();
    };

    return (
        <div className="container mt-5">
            <h3>Dashboard</h3>
            <div className="col-6">
            <p>Full Name</p>
                <input
                className="form-control mb-3"
                placeholder="Type your full Name"
                value={fullName}
                onChange={(e) => setCourse(e.target.value)}
                />
                <p>Course Name</p>
                <input
                className="form-control mb-3"
                placeholder="Type the course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                />
                <p>Cost</p>
                <input
                className="form-control mb-3"
                placeholder="Type the cost"
                value={cost}
                onChange={(e) => setCourse(e.target.value)}
                />
                <br/>

                <button 
                className="btn btn-primary" 
                onClick={onSubmit}>{button}</button>
                {button === "Update" && (
                    <button 
                    className="btn btn-secondary" 
                    onClick={resetForm}>
                        Cancel Update
                    </button>
                )}                
            </div>

            <br/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Course</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((item) => {
                        <tr key={item.id}>
                            <td>{item.fullName}</td>
                            <td>{item.course}</td>
                            <td>{item.cost}</td>

                            <td>
                                <button
                                className="btn btn-success"
                                onClick={() => onUpdateData(item)}>Update
                                </button>

                                <button 
                                className="btn btn-danger"
                                onClick={() => onDeleteData(item)}>Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;