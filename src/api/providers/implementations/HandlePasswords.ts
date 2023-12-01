import { IHandlePassword } from "./../IHandlePassword";
import bcrypt from "bcrypt";
export class HandlePassword implements IHandlePassword {
  async hash(pass: string): Promise<string> {
    const newPassword = await bcrypt.hash(pass, 10);

    return newPassword;
  }

  async verify(hashedPass: string, pass: string): Promise<boolean> {
    const isValid = bcrypt.compare(pass, hashedPass);

    return isValid;
  }
}
