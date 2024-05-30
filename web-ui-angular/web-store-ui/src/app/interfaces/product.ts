export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    sellerId: string,
    imageURLs: string[],
    categories: string[],
    stockQuantity: number,
    _links:{
        product:{
            href: string
        },
        self:{
            href: string
        }
    }
}
