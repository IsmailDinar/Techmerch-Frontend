export class CartItem {
   productId: number;
   quantity: number;
   constructor(id: number, q: number) {
     this.productId = id;
     this.quantity = q;
   }
}
