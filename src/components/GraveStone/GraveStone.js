import React from 'react';
import './GraveStone.scss';
import studentShape from '../../helpers/propz/studentShape';
import DepartedStudents from '../../helpers/data/studentData';

class GraveStone extends React.Component {
  static propTypes = {
    deadStudents: studentShape.studentShape,
  }

  render() {
    const deadStudent = DepartedStudents.dearlyBeloved();
    return (
      <div className="card col-md-4">
      <div className="card-body">
        <p className="card-title">{deadStudent.firstName}</p>
        <p className="card-title">{deadStudent.lastName}</p>
      </div>
    </div>
    );
  }
}

export default GraveStone;
