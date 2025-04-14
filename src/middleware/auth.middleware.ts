import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';
interface CustomRequest extends Request {
  userId?: string;
  // outros campos personalizados
}


const AuthMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error('Token não fornecido');

    const decoded = AuthService.verifyToken(token);
    console.log(decoded);
    next();
  } catch (error) {
    console.error('Erro de autenticação:', error);
    res.status(401).send({ error: 'Por favor, autentique-se' });
  }
};

export default AuthMiddleware;
