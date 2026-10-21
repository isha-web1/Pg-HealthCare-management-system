import { Doctor } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctors;
}



const getDoctorById = async (id : string) : Promise<Doctor | null> => {
    const doctor = await prisma.doctor.findUnique({
        where : {
            id : id
        }
    })
    return doctor;
}



const updateDoctor = async (id : string, payload : Doctor) : Promise<Doctor> => {

    const specialty = await prisma.doctor.update({
        where : {
            id : id
        },
        data : payload
    })
    return specialty
}




const deleteDoctor = async (id : string) : Promise<Doctor> => {
     
    const specialty = await prisma.doctor.delete({
        where : {
            id : id
        }
    })
    return specialty
}




export const doctorService = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}