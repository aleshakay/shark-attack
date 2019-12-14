import React from 'react';

import './LiveStudent.scss';
import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,

  render() {
    const { student } = this.props;
    return (
      <div className ="container">
        <div className ="card">
          <div className ="card-body">
            <h5 className ="card-title">{student.first} {student.last}</h5>
            <p className ="card-text">Is Dead{student.isDead}</p>
          </div>
        </div>
      </div>)
      }
    };
  }


export default Student;