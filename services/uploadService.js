var mongoose = require("mongoose");
const fileModel = require("../models/files")

class ServiceBuffer {
    
    async create (name, mimeType, size){
        try {
         return await fileModel.create({name, mimeType, size})
        } catch (error) {
            return error
        }
    }

    async update(name, mimeType, size){
        try{
            return await fileModel.updateMany({name, mimeType, size})
        }catch(error){
            return error
        }
    } 

}

module.exports = new ServiceBuffer()
