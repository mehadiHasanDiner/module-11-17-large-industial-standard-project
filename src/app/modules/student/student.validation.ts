import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father Name is required'),
  fatherOccupation: z.string().nonempty('Father Occupation is required'),
  fatherContactNo: z.string().nonempty('Father Contact No is required'),
  motherName: z.string().nonempty('Mother Name is required'),
  motherOccupation: z.string().nonempty('Mother Occupation is required'),
  motherContactNo: z.string().nonempty('Mother Contact No is required'),
});

// LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Name is required'),
  occupation: z.string().nonempty('Occupation is required'),
  contactNo: z.string().nonempty('Contact No is required'),
  address: z.string().nonempty('Address is required'),
});

// Student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
      academicDepartment: z.string(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
