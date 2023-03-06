import mongoose, {model, Schema} from "mongoose";
import {UserSchema} from './user.js'

let ReportSchema;
ReportSchema = await new mongoose.Schema({
    expenseFoPeriod: Number, //расход за период
    income: Number, //доход
    conversionCost: Number, //стоимость конверсии
    clicks: Number,
    marketType: String,
    placement: String,
    users: [{
        type: UserSchema,
        default: {}
    }]
})

const Report = await mongoose.model("Report", ReportSchema);

export default Report;
