import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    }
});

const SchemaExtensive = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    tel: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: Number,
        required: true,
        unique: false
    },
    width: {
        type: Number,
        required: true,
        unique: false
    },
    height: {
        type: Number,
        required: true,
        unique: false
    },
    glass: {
        type: String,
        required: true,
        unique: false
    },
    glass2: {
        type: String,
        required: true,
        unique: false
    }
});

const SchemaHeroes = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    element: {
        type: String,
        required: true,
        unique: false
    },
    uri: {
        type: String,
        required: true,
        unique: false
    }
});

const SchemaFilters = new mongoose.Schema({
    filters: {
        type: Array,
        required: true,
        unique: false
    }
});

const lodzi  = new mongoose.model('Zamer', Schema);
const lodziExtensive  = new mongoose.model('ZamerExtensive', SchemaExtensive);

const heroes  = new mongoose.model('heroes', SchemaHeroes);
const filters  = new mongoose.model('filters', SchemaFilters);
// const filters  = new mongoose.connection('filters');

export {lodzi, lodziExtensive, heroes, filters};