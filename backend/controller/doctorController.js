const catchAsyncErrors = require("../midddleware/catchAsyncErrors");
const Doctor = require("../models/doctorModel");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/apiFeatures");
const Appointment = require("../models/appointmentModel");
const moment = require("moment");
const User = require("../models/userModel");
const { json } = require("body-parser");
// create doctor 
exports.createDoctor = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.user.id
  const doctor = await Doctor.create(req.body);
  res.status(201).json({
    success: true,
    doctor,

  });
});

// get all doctor 
exports.getAllDoctors = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 3;
  const doctorsCount = await Doctor.countDocuments();


  const apiFeature = new ApiFeatures(Doctor.find(), req.query)
    .search()
    .filter();

  let doctors = await apiFeature.query;
  let filteredDoctorsCount = doctors.length;
  apiFeature.pagination(resultPerPage);

  doctors = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    doctors,
    doctorsCount,
    resultPerPage,
    filteredDoctorsCount,
  });

});

// get doctor details 

exports.getAllDoctorDetails = catchAsyncErrors(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    return next(new ErrorHandler("Doctor not found", 400))
  }
  res.status(200).json({
    success: true,
    doctor,
  })
});

// delete doctor 
exports.deleteDoctor = catchAsyncErrors(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    return next(new ErrorHandler("Doctor not found", 400))
  }
  await doctor.remove();
  res.status(200).json({
    success: true,
    message: "Doctor deleted",
  })

});

// doctor appointment 
exports.doctorAppointment = catchAsyncErrors(async (req, res, next) => {
  try {

    const doctor = await Doctor.findOne({ userId: req.body.userId });
    const appointments = await Appointment.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      success: true,
      message: "Doctor Appointment fetch successfully",
      data: appointments,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in doctor Appointments"
    })

  }
})

// update status 
exports.updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await Appointment.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await User.findOne({ _id: appointments.userId });
    // const notification = user.notification;
    // notification.push({
    //   type: "status-updated",
    //   message: `your appointment has been updated ${status}`,
    //   onCLickPath: "/doctor-appointments",
    // });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};
//   exports.createDoctor = catchAsyncErrors(async (req, res, next) => {
//     // req.body.user = req.user.id
//     const doctor = await Doctor.create(req.body);
//     res.status(201).json({
//         success: true,
//         doctor,

//     });
// });
//   appointment booking 
exports.appointmentBooking = async (req, res) => {
  try {
    req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
    req.body.time = moment(req.body.time, "HH:mm").toISOString();
    req.body.status = "pending";
    const newAppointment = await Appointment.create(req.body);

    // user.notifcation.push({
    //   type: "New-appointment-request",
    //   message: `A nEw Appointment Request from ${req.body.userInfo.name}`,
    //   onCLickPath: "/user/appointments",
    // });

    res.status(200).send({
      success: true,
      newAppointment,
      message: "Appointment Book successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Booking Appointment",
    });
  }
};

//   user appointment 
exports.myAppointment = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find({ userId: req.user?._id });
  res.status(200).json({
    success: true,
    appointments,
  })
});

// get all appointment by admin 
exports.getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  })
})
exports.getAllDoctorAdmin = catchAsyncErrors(async(req,res,next) =>{
   const allDoctors = await Doctor.find();
   res.status(200).json({
    success:true,
    allDoctors,
   })
})