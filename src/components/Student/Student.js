import React from 'react';
import './Student.scss';
import studentShape from '../../helpers/propz/studentShape';


class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }


  render() {
    const { student } = this.props;

    const statusOfStudent = (x) => {
      if (x.notSoGood) {
        return (
        <div className ="card-header">
          <div className ="card-body">
            <h5 className ="card-text">{student.firstName}</h5>
            <p className ="card-text">{student.lastName}</p>
            <p className ="card-text">{student.isDead}</p>
          </div>
        </div>
        );
      }
      return (<div className="card-header"> </div>);
    };

    return (
      <div className ="card">
        {statusOfStudent(student)}
        <div className ="card-body">
          <h5 className ="card-text">{student.firstName}</h5>
          <p className ="card-text">{student.lastName}</p>
          <p className ="card-text">{student.isDead}</p>
        </div>
      </div>
    );
  }
}

export default Student;
