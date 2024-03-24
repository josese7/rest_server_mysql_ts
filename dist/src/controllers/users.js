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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.status(200).json({
        msg: 'Lista de usuarios',
        data: { users },
        error: false
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: 'No existe un usuario con el id = ' + id,
            data: {},
            error: false
        });
    }
    res.status(200).json({
        msg: 'getUsers',
        data: { user }
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = user_1.default.create(body);
        //User.build()
        //await user.save()
        res.status(200).json({
            msg: 'Usuario creado',
            data: { user },
            error: false
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error del servidor',
            data: {},
            error: true
        });
    }
    res.status(200).json({
        msg: 'postUsers',
        data: { body }
    });
});
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({
        msg: 'putUsers',
        data: { body, id }
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'deleteUsers',
        data: { id }
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map