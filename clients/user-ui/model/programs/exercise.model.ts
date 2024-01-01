export default class ExerciseModel {
  id: string;
  photo?: string;
  video?: string;
  name: string;
  category: string;
  effortZone: string;
  reps: string;
  series: string;
  modeOfExecution: string[];

  constructor(props: ExerciseModel) {
    this.id = props.id;
    this.photo = props.photo;
    this.video = props.video;
    this.name = props.name;
    this.category = props.category;
    this.effortZone = props.effortZone;
    this.reps = props.reps;
    this.series = props.series;
    this.modeOfExecution = props.modeOfExecution;
  }
}
