import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "approved",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function(next){
  this.populate('user').populate({
    path:'doctor',
    select:'name'
  })

  next()
})

bookingSchema.pre(/^find/, function(next){
  this.populate({
    path: 'user',
    select: 'name email gender photo' // specify the fields you need
  }).populate({
    path: 'doctor',
    select: 'name' // specify the fields you need
  });

  next();
});

// bookingSchema.pre(/^find/, function(next) {
//   this.populate('doctor', 'name email photo gender') // specify the fields you need
//       .populate({
//         path: 'user',
//         select: 'name'
//       });
//   next();
// });



export default mongoose.model("Booking", bookingSchema);
