import ExerciseModel from '#/model/programs/exercise.model';

export default class WorkoutModel {
  id: string;
  photo: string;
  name: string;
  type: string;
  category: string;
  description: string;
  daysToDo: {
    dayOne: {
      name: string;
      exercises: ExerciseModel[];
    };
    dayTwo: {
      name: string;
      exercises: ExerciseModel[];
    };
    dayThree: {
      name: string;
      exercises: ExerciseModel[];
    };
    dayFour: {
      name: string;
      exercises: ExerciseModel[];
    };
    dayFive: {
      name: string;
      exercises: ExerciseModel[];
    };
    daySix: {
      name: string;
      exercises: ExerciseModel[];
    };
    daySeven: {
      name: string;
      exercises: ExerciseModel[];
    };
  };

  constructor(props: WorkoutModel) {
    this.id = props.id;
    this.photo = props.photo;
    this.name = props.name;
    this.type = props.type;
    this.category = props.category;
    this.description = props.description;
    this.daysToDo = props.daysToDo;
  }
}
