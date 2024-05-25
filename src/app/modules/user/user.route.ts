import express from 'express';
import { UserController } from './user.controllers';

const router=express.Router();

router.post('/create-student', UserController.createStudent)

export const UserRoutes = router