"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const uuid_1 = require("uuid");
const Helpers_1 = require("../Helpers");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const DatabaseHelpers_1 = require("../DatabaseHelpers");
const _db = new DatabaseHelpers_1.DatabaseHelper();
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
function RegisterUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (0, uuid_1.v4)();
            const { Name, Email, Password } = req.body;
            const { error } = Helpers_1.RegistrationSchema.validate(req.body);
            if (error) {
                return res.status(422).json(error.details[0].message);
            }
            const hashedPassword = yield bcrypt_1.default.hash(Password, 10);
            ///check if email exist
            yield _db.exec('RegisterUser', { name: Name, email: Email, password: hashedPassword });
            const token = jsonwebtoken_1.default.sign(Name, process.env.SECRETKEY, { expiresIn: '3600s' });
            return res.status(201).json({ message: 'User registered' });
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.RegisterUser = RegisterUser;
