import React from 'react';
import './LiveStudent.scss';
import studentShape from '../../helpers/propz/studentShape';


class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  SoFarSoGoodEvent = (e) => {
    const { SoFarSoGood, student } = this.props;
    e.preventDefault();
    SoFarSoGood(student.id);
  }

  render() {
    const { student } = this.props;
    return (
      <div className ="container">
      <div className ="card">
      <div className ="card-body">
        <h5 className ="card-title">{student.firstName}</h5>
        <p className ="card-text">{student.lastName}</p>
        <p className ="card-text">{student.isDead}</p>
        <div className="btn btn-light" onClick={this.SoFarSoGoodEvent}>No So Good</div><br></br>
        </div>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
