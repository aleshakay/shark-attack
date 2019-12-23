import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';
import Student from '../Student/Student';
import LivingStudents from '../../helpers/data/studentData';


class SharkTank extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const student = LivingStudents.livingStudents();
    const studentCards = student.map((x) => <Student key={x.id} student={x} />);
    return (
      <div className="SharkTank col-5">
        <h2>Shark Tank</h2>
        <div className="row mx-auto">
        {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
