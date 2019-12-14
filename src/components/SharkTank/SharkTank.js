import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';
import Student from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    Student: PropTypes.arrayOf(studentShape.studentShape),
  }
  
  render() {
    const myStudents = this.props.Student;
    const studentCards = myStudents.map((student) => <student key={student.id} student={student}/>);
    return (
      <div className="SharkTank">
      {studentCards}
      </div>
    )
  }
}

export default SharkTank;