import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized Login Again' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;
    next();
  } catch (error) {
    console.log('Admin Auth Error:', error.message); 
    res.status(401).json({ success: false, message: 'Not Authorized Login Again' });
  }
};

export default authAdmin;
