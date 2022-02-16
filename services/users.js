const exaWebModels = require('../models/users');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const Token = require('../helpers/jwt');

module.exports= {
    // token
    getToken: async (data) => {
        try {
            let ObjArr = []
            let getUserDetails = await exaWebModels.getUserDetails(data.username);

            let hash_password = getUserDetails[0].password

            let match = await bcrypt.compare(data.password, hash_password)

            if(match){
            let data = {
                username:getUserDetails[0].username,
                user_id:getUserDetails[0].sys_id,
                user_role: getUserDetails[0].role
            }
            let token = Token.getToken(data)
            ObjArr.push(token);
            }else{
            let message = 'Auth failed';
            ObjArr.push(message)
            }

            return ObjArr;
        } catch (error) {

            return null;
        }
    },
    // users
    postUser: async(data)=>{
        try {
            let password = bcrypt.hashSync(data.password, 10);
            data.role = "user";
            data.password = password
            console.log(data)
            let result = await exaWebModels.postUser(data);
            return result
        } catch (error) {
            return null;
        }
    },
    updateUser: async(data, sys_id) => {
        try {
            let result = await exaWebModels.updateUser(data,sys_id)
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    getAllUsers: async() => {
        try {
            let result = await exaWebModels.getAllUsers();
            return result;
        } catch (error) {
            return null;
        }
    },
    deleteUser: async(sys_id) => {
        try {
            let result = await exaWebModels.deleteUser(sys_id)
            return result;
        } catch (error) {
            return null
        }
    },
    // admin
    adminPostUser: async(data) => {
        try {
            let password = bcrypt.hashSync(data.password, 10);
            data.role = "Admin";
            data.password = password;
            let result = await exaWebModels.adminPostUser(data);
            return result;
        } catch (error) {
            return null;
        }
    },
    adminUpdateUser: async(data, sys_id) => {
        try {
            let result = await exaWebModels.adminUpdateUser(data,sys_id)
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    },
    adminGetAllUsers: async() => {
        try {
            let result = await exaWebModels.adminGetAllUsers();
            return result;
        } catch (error) {
            return null;
        }
    },
    adminDeleteUser: async(sys_id) => {
        try {
            let result = await exaWebModels.adminDeleteUser(sys_id)
            return result;
        } catch (error) {
            return null
        }
    },
}