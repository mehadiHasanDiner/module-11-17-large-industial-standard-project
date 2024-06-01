import express from 'express';
import { UserController } from './user.controllers';
import { updateStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(updateStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
