import { Schema, model } from 'mongoose';

export interface LoginData {
  loginId: string;
  user: string;
  email: string;
  password: string;
}

export const loginDataSchema = new Schema<LoginData>({
  loginId: { type: String, required: true },
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const LoginDataModel = model<LoginData>('LoginData', loginDataSchema);
