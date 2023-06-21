"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)()); // Middleware to enable CORS
app.use(express_1.default.json()); // Middleware to parse the body of the request message
app.use(express_1.default.urlencoded({ extended: false })); // Middleware to parse the body of the request message
app.use(express_1.default.static('public')); // Middleware to serve static files
app.use('/', user_routes_1.default); // Middleware to handle routes
app.listen(PORT, () => {
    console.log('Server running on port ', PORT);
});
//# sourceMappingURL=index.js.map