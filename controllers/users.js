const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const exaWebServices = require('../services/users')
const jwt = require('../helpers/jwt')

router.post('/get_token', async(req,res) => {
    let data = req.body;
    let result = await exaWebServices.getToken(data);
    if(result){
        res.json(result)
    }else{
        console.log('error')
    }
})

// user endpoint
router.post('/post_user', async(req, res) => {
    let data = req.body
    let result = await exaWebServices.postUser(data);
    if(result){
        res.sendStatus(200)
    }else{
        console.log('error')
    }
});

router.put('/update_user/:sys_id',async(req, res) => {
    let {sys_id} = req.params
    let data = req.body
    let result = await exaWebServices.updateUser(data, sys_id);
    if(result){
        res.sendStatus(200, 'updated');
    }else{
        console.log('error')
    }
});

router.get('/get_all_users',async(req, res) => {
    let result = await exaWebServices.getAllUsers();
    if(result){
        res.json(result)
    }else{
        console.log(error)
    }
});

router.delete('/delete_user/:sys_id', async(req, res) => {
    let {sys_id} = req.params
    let result = await exaWebServices.deleteUser(sys_id);
    if(result){
        res.sendStatus(200)
    }else{
        console.log('error')
    }
});

// admin endpoints
router.post('/admin/post_user', async(req, res) => {
    let data = req.body
    let result = await exaWebServices.adminPostUser(data);
    if(result){
        res.sendStatus(200)
    }else{
        console.log('error')
    }
});

router.put('/admin/update_user/:sys_id', async(req, res) => {
    let {sys_id} = req.params
    let data = req.body
    let result = await exaWebServices.adminUpdateUser(data, sys_id);
    if(result){
        res.sendStatus(200, 'updated');
    }else{
        console.log('error')
    }
});
router.get('/admin/get_all_users', async(req, res) => {
    let result = await exaWebServices.adminGetAllUsers();
    if(result){
        res.json(result)
    }else{
        console.log(error)
    }
});

router.delete('/admin/delete_user/:sys_id', async(req, res) => {
    let {sys_id} = req.params
    let result = await exaWebServices.adminDeleteUser(sys_id);
    if(result){
        res.sendStatus(200)
    }else{
        console.log('error')
    }
});


module.exports = router;