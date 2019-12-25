import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import GraveStone from '../GraveStone/GraveStone';
import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const studentCards = deadStudents.map((deadStudent) => <GraveStone key={deadStudent.id} deadStudent={deadStudent} />);
    return (
      <div className="Graveyard container">
        <div><h2 className="xs=6">Graveyard</h2></div>
        <div className="row mx-auto">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default Graveyard;
