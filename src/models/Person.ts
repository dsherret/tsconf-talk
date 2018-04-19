import { Note } from "./Note";

export interface Person {
    personId: number;
    name: string;
    age: number;
    notes: Note[];
}
