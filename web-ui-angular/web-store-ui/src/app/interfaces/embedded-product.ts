import { Product } from './product';
export interface EmbeddedProduct {
    _embedded:{
        product:Product[],
    },
}

