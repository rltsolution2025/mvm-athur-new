require('dotenv').config();

const adminUsername = process.env.ADMIN_USERNAME;

const adminPassword = process.env.ADMIN_PASSWORD;

/* =====================================
ADMIN LOGIN
===================================== */

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    /* ==========================
       VALIDATION
    ========================== */

    if (!username || !password) {
      return res.status(400).json({
        success: false,

        message: 'Username and Password are required',
      });
    }

    /* ==========================
       CHECK USERNAME
    ========================== */

    if (username !== adminUsername) {
      return res.status(401).json({
        success: false,

        message: 'Invalid Username',
      });
    }

    /* ==========================
       CHECK PASSWORD
    ========================== */

    if (password !== adminPassword) {
      return res.status(401).json({
        success: false,

        message: 'Invalid Password',
      });
    }

    /* ==========================
       SUCCESS LOGIN
    ========================== */

    return res.status(200).json({
      success: true,

      message: 'Login Successful',

      admin: {
        username: adminUsername,
      },
    });
  } catch (error) {
    console.error('Admin Login Error:', error);

    return res.status(500).json({
      success: false,

      message: 'Internal Server Error',
    });
  }
};

module.exports = {
  loginAdmin,
};
