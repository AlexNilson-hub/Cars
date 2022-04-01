import {makeAutoObservable} from "mobx";

export default class CarStore {

    constructor() {

        this._car = []

        makeAutoObservable(this)
    }

    setPhoto(car) {
        this._car = car
    }

    get car() {
        return this._car
    }
}
