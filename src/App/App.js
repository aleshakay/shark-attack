import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  randomPicker = () => {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    const studentNum = Math.floor(Math.random() * students.length);
    const studentId = students[studentNum].id;
    studentData.followTheLight(studentId);
    this.setState({ students, deadStudents });
  }

  render() {
    return (
    <div className="App">
        <SharkTank student={this.state.students} randomPicker={this.randomPicker}/>
      <div className="TryThis">
        <Graveyard deadStudents={this.state.deadStudents} />
        </div>
    </div>
    );
  }
}

export default App;
