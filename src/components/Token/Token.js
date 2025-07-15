
import { SignJWT } from 'jose';

export const generateJwtToken = async (email) => {
  
  // converts a string into a Uint8Array
  const secret = new TextEncoder().encode('frontend_secret'); 

  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);//it is async and return promise

  return token;
};
