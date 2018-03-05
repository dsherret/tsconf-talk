import {Person} from "./../models";
import {BaseStore} from "./BaseStore";
import {NoteStore} from "./NoteStore";

export class PersonStore extends BaseStore<Person, "personId"> {
    constructor(private readonly noteStore: NoteStore) {
        super("personId");
    }

    set(person: Person) {
        super.set(person);
        for (const note of person.notes) {
            if (note.personId != null && note.personId !== person.personId)
                throw new Error("Cannot add a note with a different personId.");
            note.personId = person.personId;
        }
        this.noteStore.replaceForPerson(person);
    }
}
