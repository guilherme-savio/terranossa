import Utils from '../../../utils/Utils';
import Activity from '../models/Activity';

export default class ActivityService {
  static lastId: number = 0;
  
  static getNextId(): number {
    this.lastId = this.lastId + 1;
    return this.lastId;
  }

  static getByDate(activities: Activity[], date: Date) {
    const dateTime = date.getTime();

    return activities.filter(activity => {
        const startDate = Utils.removeTime(activity.startDate).getTime();
        const endDate = Utils.removeTime(activity.endDate).getTime();

        return (startDate === dateTime || endDate === dateTime || (startDate < dateTime && endDate > dateTime))
    });
  }

  static hasInDate(activities: Activity[], date: Date) {
    return this.getByDate(activities, date).length > 0;
  }

  static getToUpdate(activities: Activity[], dayActivities: Activity[]) {
    const updated = dayActivities.filter(activity => activity?.name !== '' && !activity?.delete);

    activities.map((activity) => {
      if (!dayActivities.some(a => a.id === activity.id)) {
        updated.push(activity);
      } 
    });

    return updated;
  }
}
