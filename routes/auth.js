const express = require("express");
const { register, activationController, login, forgotpassword, resetpassword, cr, coins, getTxn, getnum, setTxn, withdrawal} = require("../controllers/auth");

const router = express.Router();

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/activation").post(activationController)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)

router.route("/cred").post(cr);
router.route("/coins").post(coins);

router.route("/withdrawal").post(withdrawal);

router.route("/setTxn").post(setTxn);
router.route("/getTxn").get(getTxn);
router.route("/getnum").get(getnum);

module.exports = router;