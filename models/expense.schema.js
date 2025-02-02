const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, "Amount is Required"]
        },
        category: {
            type: String,
            required: [true, "category is Required"],
            minLength: [3, "Category must be atleast 3 characters long"],
            maxLength: [50, "Category must not exceed more than 50 characters"],
            lowercase: true,
            trim: true,
        },
        remark: {
            type: String,
            required: [true, "Remark is Required"],
            minLength: [10, "Remark must be atleast 10 characters long"],
            maxLength: [125, "Remark must not exceed more than 50 characters"],
            trim: true,
        },
        paymentmode: {
            type: String,
            required: [true, "Payment Mode is Required"],
            enum: ["Cash", "UPI", "Cheque", "Card"],
        },
    },
    {timestamps: true}
)

const ExpenseSchema = mongoose.model("expense",expenseSchema);

module.exports = ExpenseSchema







