const jwt = require("jsonwebtoken");

const authStudent = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "jwt not found" });
    }

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifiedToken) {
      return res.status(401).json({ error: "student not authorized" });
    }

    if (verifiedToken.role !== "student") {
      return res.status(401).json({ error: "Access denied" });
    }
    req.student = verifiedToken.id;

    next();
  } catch (error) {
    res
      .status(error.status || 401)
      .json({ error: error.message || "student authorization failed" });
  }
};

module.exports = authStudent;
