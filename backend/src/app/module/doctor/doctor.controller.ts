import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { doctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";


const getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {

        const result = await doctorService.getAllDoctors();

        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctors fetched successfully",
            data: result,
        })
    }
)




const getDoctorById = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await doctorService.getDoctorById(id as string);
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: 'single Doctor fetched successfully',
            data: result
        });
    }
)


const updateDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const payload = req.body;
        const result = await doctorService.updateDoctor(id as string, payload);
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: 'Doctor updated successfully',
            data: result
        });
    }
)






const deleteDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await doctorService.deleteDoctor(id as string);
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: 'Doctor deleted successfully',
            data: result
        });
    }
)




export const doctorController = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}