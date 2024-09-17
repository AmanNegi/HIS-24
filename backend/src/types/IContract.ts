import { Document, Schema } from 'mongoose';
export interface IContract extends Document {
    farmer: Schema.Types.ObjectId;
    contractor: Schema.Types.ObjectId;
    crop: Schema.Types.ObjectId;
    area: number; // Area in acres acer
    price: number;
    quantity: number;
    contractStartDate: Date;
    contractEndDate: Date;
    contractPDF: string; // URL to the PDf
    paymentStatus: 'Pending' | 'Partially Paid' | 'Paid';
    paymentMilestones: {
        milestone1: { amount: number; paid: boolean };
        milestone2: { amount: number; paid: boolean };
        milestone3: { amount: number; paid: boolean };
    };
    cropInsurance: boolean;
    signedDate: Date;
}
