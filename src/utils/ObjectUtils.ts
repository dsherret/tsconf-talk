/**
 * Object utilities.
 */
export class ObjectUtils {
    private constructor() {
    }

    /**
     * Deep clones an object.
     * @param obj - Object to deep clone.
     */
    static deepClone<T>(obj: T) {
        return JSON.parse(JSON.stringify(obj)) as T;
    }
}
