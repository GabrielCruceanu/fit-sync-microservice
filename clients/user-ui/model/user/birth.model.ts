export default class BirthModel {
  date: number;
  month: number;
  year: number;

  constructor(props: BirthModel) {
    this.date = props.date;
    this.month = props.month;
    this.year = props.year;
  }
}
