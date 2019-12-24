const students = [
  {
    id: 'student1',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: true,
  },
  {
    id: 'student4',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan ',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel ',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan ',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie ',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine ',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John ',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John ',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: true,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
  },
];

const getStudents = () => students;

const livingStudents = () => {
  const liveStudent = [];
  students.forEach((student) => {
    if (student.isDead === false) {
      liveStudent.push(student);
    }
  });
  return liveStudent;
};
const dearlyBeloved = () => {
  const deadStudent = [];
  students.forEach((student) => {
    if (student.isDead === true) {
      deadStudent.push(student);
    }
  });
  return deadStudent;
};

const followTheLight = (studentId) => {
  const findTheStudent = livingStudents().find((student) => student.id === student);
  findTheStudent.isDead = true;
};

export default {
  getStudents,
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
