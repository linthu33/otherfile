const mongoose=require('mongoose');

const RadioLogyReportSchema=new mongoose.Schema({
    Pid:String,
    Name:String,
    Department:String,
    Scanners:[{
        ClinicalNote:String,
        ScannerName:String,
        Diagnosis:String,
        Date:String,
        Speciallist:String,
        HeadofDepartment:String,
        RadiologyHeadofDepartment:String,
        CommandingOfficer:String,
        ResultNote:[

        ],
        PartTableXRay:String,
        status:String,
        Link:String

    }]
});
module.exports=mongoose.model("RadioLogyReportModel",RadioLogyReportSchema)