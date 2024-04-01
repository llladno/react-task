import {makeAutoObservable, toJS} from "mobx";
import {Product} from "../types";

class Store {
    basket: Product[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async addProduct(product: Product) {
        console.log('add product', product)
        product.count = 1
        this.basket.push(product)
    }

    increment(id: number) {
        toJS(this.basket).forEach((item: Product, index: number) => {
            if (item.id === id) {
                if (item.count && item.count >= 1) {
                    item.count ? item.count++ : item.count = 1
                } else {
                    item.count = 1
                }
                this.basket[index] = item
            }
        })
    }

    decrement(id: number) {
        toJS(this.basket).forEach((item: Product, index: number) => {
            if (item.id === id) {
                if (item.count && item.count > 2) {
                    item.count ? item.count-- : item.count = 1
                } else {
                    item.count = 1
                }
                this.basket[index] = item
            }
        })
    }
}

export default new Store()