import WorkoutModel from '#/model/programs/workout.model';
import NutritionModel from '#/model/programs/nutrition.model';

export default class ProgramsModel {
  id: string;
  trainerUsername: string;
  name: string;
  price: number;
  type: string;
  category: string;
  experience: string;
  workout?: WorkoutModel;
  nutrition?: NutritionModel;

  constructor(props: ProgramsModel) {
    this.id = props.id;
    this.trainerUsername = props.trainerUsername;
    this.name = props.name;
    this.price = props.price;
    this.type = props.type;
    this.category = props.category;
    this.experience = props.experience;
    this.workout = props.workout;
    this.nutrition = props.nutrition;
  }
}
