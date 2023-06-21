import ActivityService from "../services/ActivityService";
import Person from "./Person";

export default class Activity {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    difficulty: string;
    description: string;
    participants: Person[];
    organizer: Person;
    enableEdit: boolean;
    delete: boolean;

    constructor(
        name: string, 
        startDate: Date, 
        endDate: Date, 
        enableEdit: boolean = false,
        location?: string, 
        difficulty?: string, 
        description?: string, 
        participants?: Person[], 
        organizer?: Person) {
        this.id = ActivityService.getNextId();
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.enableEdit = enableEdit;
        this.delete = false;

        if (location) {
            this.location = location;
        }

        if (difficulty) {
            this.difficulty = difficulty;
        }

        if (description) {
            this.description = description;
        }

        if (participants) {
            this.participants = participants;
        }

        if (organizer) {
            this.organizer = organizer;
        }
    }
}
