import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';
interface CustomRequest extends Request {
  userId?: string;
  // outros campos personalizados
}

interface CustomResponse extends Response {
  // campos personalizados da resposta, se houver
}

const AuthMiddleware = (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error('Token não fornecido');

    const decoded = AuthService.verifyToken(token);
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).send({ error: 'Por favor, autentique-se' });
  }
};

export default AuthMiddleware;
