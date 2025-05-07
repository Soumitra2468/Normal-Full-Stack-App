import jwt from "jsonwebtoken";

const isLogin = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;
    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export default isLogin;
