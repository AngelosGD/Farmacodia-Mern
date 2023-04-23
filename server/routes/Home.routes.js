import { Router } from "express";
import {getHome} from '../controllers/home.controllers.js'
const router = Router()

router.get('/home', getHome)

export default router