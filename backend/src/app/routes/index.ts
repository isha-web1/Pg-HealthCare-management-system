import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";


const router = Router();


router.use("/specialties", SpecialtyRoute)


export const IndexRoutes = router;