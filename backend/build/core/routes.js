"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./routes/auth");
var farmer_1 = require("./routes/farmer");
var contractor_1 = require("./routes/contractor");
var contract_1 = require("./routes/contract");
var search_1 = require("./routes/search");
function registerRoutes(app) {
    app.use('/api/auth', auth_1.router);
    app.use('/api/farmer', farmer_1.router);
    app.use('/api/contractor', contractor_1.router);
    app.use('/api/contract', contract_1.router);
    app.use('/api/search', search_1.router);
}
exports.default = registerRoutes;
