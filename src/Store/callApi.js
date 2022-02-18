import {
  faillLogin,
  startLogin,
  successLogin,
} from "../Store/reducers/user.reducer/user.reducer";
import { publicRequest } from "../axios/RequstMethod";

export const LoginReq = async (dispatch, user) => {
  try {
    dispatch(startLogin());
    const res = await publicRequest.post("/auth/login", user);
    dispatch(successLogin(res.data));
  } catch (error) {
    dispatch(faillLogin(error));
    console.log(error);
  }
};
