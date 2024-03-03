import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have signedup' };
  }

  signin() {
    return { msg: 'I have signedin' };
  }
}
