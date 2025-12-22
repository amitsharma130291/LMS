const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeacherSchema = new Schema(
    {
        name : {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dateEmployed: {
            type : Date,
            default :  Date.now
        },
        teacherId: {
            type: String,
            required: true,
            default: function () {
              return (
                "TEA" +
                Math.floor(100 + Math.random() * 900) +
                Date.now().toString().slice(2, 4) +
                this.name
                  .split(" ")
                  .map(name => name[0])
                  .join("")
                  .toUpperCase()
              );
            },
          },
          isWithdrawn: {
            type: Boolean,
            default : false
          },
          isSuspended:{
            type: Boolean,
            default: false
          },
          role: {
            type: String,
            default : "teacher"
          },
          subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject"
          },
          applicationStatus : {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
          },
          program : {
            type: String
          },
          classLevel: {
            type: String
          },
          academciYear: {
            type: String
          },
          examsCreated: {
            type: Schema.Types.ObjectId,
            ref: "Exam"
          },
          createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Admin"
          },
          academicTerm: {
            type: String
          }
    }, {
        timestamps : true
    }
)

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher