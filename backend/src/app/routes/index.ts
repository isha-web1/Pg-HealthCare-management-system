import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { userRoute } from "../module/user/user.route";
import { doctorRouter } from "../module/doctor/doctor.route";


const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoute)
router.use("/users", userRoute)
router.use("/doctors", doctorRouter)


export const IndexRoutes = router;