export class Order {
   orderId: number;
   orderShippingAddress: string;
   orderCreationDate: Date;
   orderUpdateDate: Date;
   orderClientId: string;
   orderEtaDate: Date;
   orderAmount = 0;
   orderStatus = 'pending';
   orderReference: string;
   orderProducts: string;
   constructor() {}
}
