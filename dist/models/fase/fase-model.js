"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.faseSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    teamID: {
        type: String
    }
});
//# sourceMappingURL=fase-model.js.map