import {Note, Person} from "./../models";
import {BaseStore} from "./BaseStore";

export class NoteStore extends BaseStore<Note, "noteId"> {
    constructor() {
        super("noteId");
    }

    replaceForPerson(person: Person) {
        for (const note of this.getValues()) {
            if (note.personId === person.personId)
                this.remove(note.noteId);
            else if (note.personId != null)
                throw new Error("Person had a note with a different person's id.")
        }

        for (const note of person.notes)
            this.set(note);
    }
}
