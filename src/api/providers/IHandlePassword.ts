export interface IHandlePassword {
  hash(pass: string): Promise<string>;
  verify(hashedPass: string, pass: string): Promise<boolean>;
}
