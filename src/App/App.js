import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <button className='btn btn-primary'>Shark</button>
        <SharkTank student={this.state.students} />
        </header>
    </div>
    );
  }
}

export default App;
