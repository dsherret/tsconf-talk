/* barrel:ignore */
import { ObjectUtils } from "./../utils";

export class BaseStore<TValue, TKeyPropName extends keyof TValue, TKey extends TValue[TKeyPropName]= TValue[TKeyPropName]> {
    private readonly items = new Map<TKey, TValue>();

    constructor(private readonly keyPropName: TKeyPropName) {

    }

    getByKey(key: TKey) {
        return this.getCopyIfExists(this.items.get(key));
    }

    getValues() {
        return Array.from(this.items.values()).map(v => this.getCopy(v));
    }

    set(value: TValue) {
        this.items.set((value as any)[this.keyPropName], this.getCopy(value));
    }

    remove(key: TKey) {
        this.items.delete(key);
    }

    private getCopyIfExists(value: TValue | undefined) {
        if (value == null)
            return undefined;
        return this.getCopy(value);
    }

    private getCopy(value: TValue) {
        return ObjectUtils.deepClone(value);
    }
}
