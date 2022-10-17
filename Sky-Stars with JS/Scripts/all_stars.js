export class Stars {
    get get_array_stars() {
        return this._array_stars;
    }

    set array_stars(value) {
        console.log("sett?")
        this._array_stars = value;
        console.log("value: "+value+"  "+this._array_stars)
    }

    constructor(star) {
    }
}