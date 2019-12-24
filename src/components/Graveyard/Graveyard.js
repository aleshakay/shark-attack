import React from 'react';
import './Graveyard.scss';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../Student/Student';


class Graveyard extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
    NoLongerSoGood: PropTypes.func,
  }

  render() {
    const { student } = this.props;
    const { NoLongerSoGood } = this.props;
    const deadStudentCards = student.map((x) => <LiveStudent key={x.id} student={x} NoLongerSoGood={NoLongerSoGood} />);
    return (
      <div className="Graveyard">
      {deadStudentCards}
      </div>
    );
  }
}

export default Graveyard;
