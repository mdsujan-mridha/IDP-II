const catchAsyncErrors = require("../midddleware/catchAsyncErrors");
const Doctor = require("../models/doctorModel");
const ApiFeatures = require("../utils/apiFeatures");
// create doctor 
exports.createDoctor = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id
    const doctor = await Doctor.create(req.body);
    res.status(201).json({
        success: true,
        doctor,

    });
});

// get all doctor 
exports.getAllDoctors = catchAsyncErrors(async(req,res,next) =>{
    const resultPerPage = 4;
    const doctorCount = await Doctor.countDocuments();
    const apiFeature = new ApiFeatures(Doctor.find(),req.query)
    .search()
    .filter();

    let doctors = await apiFeature.query;
    let filteredDoctorCount = doctors.length;
    apiFeature.pagination(resultPerPage);

    res.status(200).json({
        success:true,
        doctors,
        doctorCount,
        resultPerPage,
        filteredDoctorCount,
    });
});

// get doctor details 