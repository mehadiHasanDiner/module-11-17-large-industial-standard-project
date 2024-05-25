/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // creating a schema for validation using zod
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error: any) {
    next(error);
    // গ্লোবাল ইরর হ্যান্ডালার next() নামক গাড়ি করে controller থেকে ‍ৃ app.ts এ চলে গেছে।
  }
};

export const UserController = {
  createStudent,
};
