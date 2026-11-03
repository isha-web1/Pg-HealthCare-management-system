import { Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createAdminValidationSchema, createDoctorZodSchema, createSuperAdminValidationSchema } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";


const router = Router()


router.post('/create-doctor',validateRequest(createDoctorZodSchema),userController.createDoctor)


router.post(
  "/create-admin",
  checkAuth("SUPER_ADMIN"), // Only super admin can create admin
  validateRequest(createAdminValidationSchema),
  userController.createAdmin,
);

router.post(
  "/create-super-admin",
  checkAuth("SUPER_ADMIN"),
  validateRequest(createSuperAdminValidationSchema),
  userController.createSuperAdmin,
);




export const userRoute = router;
