import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';
import Student from '../Student/Student';
import LivingStudents from '../../helpers/data/studentData';


class SharkTank extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
    randomPicker: PropTypes.func,
  }

  randomPickerEvent = (e) => {
    const { randomPicker } = this.props;
    e.preventDefault();
    randomPicker();
  }

  render() {
    const student = LivingStudents.livingStudents();
    const studentCards = student.map((x) => <Student key={x.id} student={x} />);
    return (
      <div className="SharkTank container">
      <div><h2 className="xs=6">Shark Tank</h2></div>
        <div>
        <button className='btn btn-primary' onClick={this.randomPickerEvent}> SHARK ATTACK </button>
        </div>
        <div className="row mx-auto">
        {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
