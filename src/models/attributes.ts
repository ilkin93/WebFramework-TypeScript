
export class Attributes<AnyType> {
    constructor(private data: AnyType) {};
    get = <K extends keyof AnyType>(key:K): AnyType[K] => {
        return this.data[key]
    }
    set(update: AnyType): void {
        Object.assign(this.data, update)
    }
    getAll(): AnyType{
        return this.data
    }
}
