"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lists = void 0;
const express_1 = require("express");
exports.lists = (0, express_1.Router)();
exports.lists.get('/', (req, res) => {
    res.send('hey');
});
