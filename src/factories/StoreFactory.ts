import {NoteStore, PersonStore} from "./../stores";

export class StoreFactory {
    private noteStore: NoteStore | undefined;
    private personStore: PersonStore | undefined;

    getNoteStore() {
        return this.noteStore || (this.noteStore = new NoteStore());
    }

    getPersonStore() {
        return this.personStore || (this.personStore = new PersonStore(this.getNoteStore()));
    }
}
