"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../Controller/authController");
const authrouter = (0, express_1.Router)();
authrouter.post('/register', authController_1.RegisterUser);
// authrouter.get('/home', VerifyToken, Homepage)//protected Route
exports.default = authrouter;
