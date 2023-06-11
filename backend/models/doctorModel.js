const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    // write doctor schema 

    // userId: {
    //     type: String,
    //     require: true,
    // },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    // avatar: {
    //     public_id: {
    //         type: String,
    //         required: true,

    //     },
    //     url: {
    //         type: String,
    //         required: true,
    //     },
       
    // },
    address: {
        type: String,
        require: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    feePerCunsultation: {
        type: Number,
        required: true,
    },
    timings: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    }
},
    {
        timestamps: true,
    }
 
);
module.exports = mongoose.model("Doctor",doctorSchema);