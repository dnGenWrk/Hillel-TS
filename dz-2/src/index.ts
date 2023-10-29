interface lecturer {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: Array<string>;
  contacts: {};
}
class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: Array<Area> = [];
  _lecturers: Array<lecturer>; // Name, surname, position, company, experience, courses, contacts

  get lecturers() {
    return this._lecturers;
  }

  addLecturer(value: lecturer): School {
    this._lecturers.push(value);
    return this;
  }

  removeLecturer(value: lecturer): School {
    this._lecturers = this._lecturers.filter((lecturer) => lecturer.surname !== value.surname);
    return this;
  }

  get areas(): Array<Area> {
    return this._areas;
  }

  addArea(value: Area): School {
    this._areas.push(value);
    return this;
  }

  removeArea(value: Area): School {
    this._areas = this._areas.filter((area) => area.name !== value.name);
    return this;
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Array<Level> = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  get levels(): Array<Level> {
    return this._levels;
  }

  addLevel(value: Level): Area {
    this._levels.push(value);
    return this;
  }

  removeLevel(value: Level): Area {
    this._levels = this._levels.filter((level) => level.name !== value.name);
    return this;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: Array<Group>;
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Array<Group> {
    return this._groups;
  }

  addGroup(value: Group): Level {
    this._groups.push(value);
    return this;
  }

  removeGroup(value: Group): Level {
    this._groups = this._groups.filter((group) => group.directionName !== value.directionName);
    return this;
  }
}

enum groupStatus {
  statusXZ_1,
  statusXZ_2,
  statusXZ_3,
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: Area;
  private _status: groupStatus;
  private _students: Array<Student> = []; // Modify the array so that it has a valid toSorted method*
  directionName: string;
  levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  showPerformance(): Array<Student> {
    const sortedStudents = [...this._students].sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }

  set status(value: groupStatus) {
    this._status = value;
  }

  addStudent(value: Student): Group {
    this._students.push(value);
    return this;
  }

  removeStudent(value: Student): Group {
    this._students = this._students.filter((student) => student.fullName !== value.fullName);
    return this;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;

  private _grades: Array<number> = []; // workName: mark
  private _visits: Array<boolean> = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  set grade(value: number) {
    this._grades.push(value);
  }

  set visit(value: boolean) {
    this._visits.push(value);
  }

  getPerformanceRating(): number {
    const gradeValues: Array<number> = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number = gradeValues.reduce((sum: number, grade: number): number => sum + grade, 0) / gradeValues.length;
    const attendancePercentage: number = (this._visits.filter((present) => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
