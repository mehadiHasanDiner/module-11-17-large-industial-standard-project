import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user does not exist');
  }

  //checking if the user is already deleted
  // const isUserDeleted = isUserExists?.isDeleted;

  // if (isUserDeleted) {
  //   throw new AppError(
  //     httpStatus.FORBIDDEN,
  //     'This user is deleted successfully',
  //   );
  // }

  //checking if the user is blocked
  // const userStatus = isUserExists?.status;

  // if (userStatus === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
  // }

  // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not match');
  }
  // Access Granted: send AccessToken, RefreshToken
  return {};
};

export const AuthService = {
  loginUser,
};
