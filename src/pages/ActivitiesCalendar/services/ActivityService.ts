import Utils from '../../../utils/Utils';

export default class ActivityService {
  static lastId: number = 0;
  
  static getNextId(): number {
    this.lastId = this.lastId + 1;
    return this.lastId;
  }

  static getByDate(activities: any[], date: Date) {
    const dateTime = date.getTime();

    return activities.filter(activity => {
        const startDate = Utils.removeTime(activity.startDate).getTime();
        const endDate = Utils.removeTime(activity.endDate).getTime();

        return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
    });
  }

  static hasInDate(activities: any[], date: Date) {
    return this.getByDate(activities, date).length > 0;
  }
}
