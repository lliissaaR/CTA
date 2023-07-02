import jwt from 'jsonwebtoken';


const authMiddleware = (req, res, next) => {

  const token = req.header('Authorization');                            // récupère le jeton


  if (!token) {                                                         // vérifié si un jeton a été fourni
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    
    const decoded = jwt.verify(token, 'your_secret_key');               // vérifie et décode le jeton
    
   
    req.user = decoded.user;                                             // ajoute les données décodées à l'objet de requête pour les utiliser plus tard


    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;