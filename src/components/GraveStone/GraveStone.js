import React from 'react';
import './GraveStone.scss';
import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    deadStudent: studentShape.studentShape,
  }

  render() {
    const { deadStudent } = this.props;
    return (
      <div className="card death col-md-4">
      <div className="card-body">
        <p className="card-title">{deadStudent.firstName}</p>
        <p className="card-title">{deadStudent.lastName}</p>
      </div>
    </div>
    );
  }
}

export default GraveStone;
