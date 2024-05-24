// import { getGoogleAuthRequest } from "@/router/login/constants";
import { get, post } from "./ApiCaller";
const loginUrl = `/auth/login`;
const resetUrl = `/auth/reset-password`;
const validateResetUrl = `/auth/validatePasswordReset?token=`;
// let registerUrl = `/Auth/register`;
// let GooogleAuth = `/Auth/google-oauth`;
export const loginApi = {
  login: (email: string, password: string) => {
    return post(loginUrl, { email, password });
  },
  reset: (password: string, token: string) => {
    return post(resetUrl, { password, token });
  },
  validateReset: (token: string) => {
    return get(`${validateResetUrl}${token}`);
  },
  // register: (email: string, password: string) => {
  //     return post(registerUrl, { email, password });
  // },
  // googleAuth: (code: string) => {
  //     return post(GooogleAuth, getGoogleAuthRequest(code));
  // },
  // confirmOtp: (id: string, otp: string, token: string) => {
  //     return post(
  //         `/Auth/confirm-otp`,
  //         { id: id, otp: otp },
  //         {},
  //         { Authorization: token }
  //     );
  // },
};
