import { z } from 'zod';

// UserName schema
const createUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Guardian schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father Name is required'),
  fatherOccupation: z.string().nonempty('Father Occupation is required'),
  fatherContactNo: z.string().nonempty('Father Contact No is required'),
  motherName: z.string().nonempty('Mother Name is required'),
  motherOccupation: z.string().nonempty('Mother Occupation is required'),
  motherContactNo: z.string().nonempty('Mother Contact No is required'),
});

// LocalGuardian schema
const createLocalGuardianValidationSchema = z.object({
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
      name: createUserNameValidationSchema,
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
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1).optional(),
});

// Guardian schema
const updateGuardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father Name is required').optional(),
  fatherOccupation: z
    .string()
    .nonempty('Father Occupation is required')
    .optional(),
  fatherContactNo: z
    .string()
    .nonempty('Father Contact No is required')
    .optional(),
  motherName: z.string().nonempty('Mother Name is required').optional(),
  motherOccupation: z
    .string()
    .nonempty('Mother Occupation is required')
    .optional(),
  motherContactNo: z
    .string()
    .nonempty('Mother Contact No is required')
    .optional(),
});

// LocalGuardian schema
const updateLocalGuardianValidationSchema = z.object({
  name: z.string().nonempty('Name is required').optional(),
  occupation: z.string().nonempty('Occupation is required').optional(),
  contactNo: z.string().nonempty('Contact No is required').optional(),
  address: z.string().nonempty('Address is required').optional(),
});

// Student schema
export const updateStudentValidationSchema = z.object({
  body: z
    .object({
      student: z
        .object({
          name: updateUserNameValidationSchema.optional(),
          gender: z.enum(['male', 'female', 'other']).optional(),
          dateOfBirth: z.string().optional(),
          email: z.string().email().optional(),
          contactNo: z.string().min(1).optional(),
          emergencyContactNo: z.string().min(1).optional(),
          bloodGroup: z
            .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
            .optional(),
          presentAddress: z.string().min(1).optional(),
          permanentAddress: z.string().min(1).optional(),
          guardian: updateGuardianValidationSchema.optional(),
          localGuardian: updateLocalGuardianValidationSchema.optional(),
          admissionSemester: z.string().optional(),
          profileImg: z.string().optional(),
          academicDepartment: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
