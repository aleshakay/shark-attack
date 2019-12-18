import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';


class SharkTank extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
    SoFarSoGood: PropTypes.func,
  }

  render() {
    const { student } = this.props;
    const { SoFarSoGood } = this.props;
    const studentCards = student.map((x) => <LiveStudent key={x.id} student={x} SoFarSoGood={SoFarSoGood} />);
    return (
      <div className="SharkTank">
      {studentCards}
      </div>
    );
  }
}

export default SharkTank;
