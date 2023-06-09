import Utils from '../../../utils/Utils';

export default class ActivityService {
  static getByDate(activities, date) {
    const dateTime = date.getTime();

    return activities.filter(activity => {
        const startDate = Utils.removeTime(activity.startDate).getTime();
        const endDate = Utils.removeTime(activity.endDate).getTime();

        return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
    });
  }

  static hasInDate(activities, date) {
    return this.getByDate(activities, date).length > 0;
  }
}
