class Product {
    constructor(id, name, description, price, stock, thumbnail) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.thumbnail = thumbnail;
    }
}

class CleaningProduct extends Product {
    constructor(id, name, description, price, stock, thumbnail, category) {
        super(id, name, description, price, stock, thumbnail);
        this.category = category;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    generateId() {
        const newId = this.nextId;
        this.nextId += 1;
        return newId;
    }

    addProduct(product) {
        product.id = this.generateId();
        this.products.push(product);
    }

    getAllProducts() {
        return this.products;
    }
}
