import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema for validation using zod

    const { student: studentData } = req.body;

    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // console.log({ error }, { value });

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     data: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      data: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved single student data',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
