const { resolve, reject, Promise } = require('bluebird');
const db = require('../core/index');

module.exports.getUserDetails = (username) => {
    return new Promise((resolve, reject) => {
        db.select('*').from('exaweb_users')
        .where('username', username)
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        });
    });
};

module.exports.postUser=(data)=>{ 
    return new Promise((resolve, reject) => {
        db('exaweb_users').insert(data)
        .then(res => {
          resolve(res);
      }).catch(e => {
        reject(e);
      });
      });
}

module.exports.updateUser  = (data, sys_id) => {
    return new Promise((resolve, reject) => {
        db('exaweb_users').update(data)
        .where('sys_id', sys_id)
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        });
    });
};

module.exports.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.select('*').from('exaweb_users')
        .then(res => {
            resolve(res)
        }).catch(e => {
            reject(e);
        });
    });
};

module.exports.deleteUser = (sys_id) => {
    return new Promise((resolve, reject) => {
        db('exaweb_users').where('sys_id', sys_id)
        .del()
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        });
    });
};

// admin
module.exports.adminPostUser=(data)=>{ 
    return new Promise((resolve, reject) => {
        db('exaweb_users').insert(data)
        .then(res => {
          resolve(res);
      }).catch(e => {
        reject(e);
      });
      });
};
module.exports.adminUpdateUser  = (data, sys_id) => {
    return new Promise((resolve, reject) => {
        db('exaweb_users').update(data)
        .where('sys_id', sys_id)
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        });
    });
};

module.exports.adminGetAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.select('*').from('exaweb_users')
        .then(res => {
            resolve(res)
        }).catch(e => {
            reject(e);
        });
    });
};

module.exports.adminDeleteUser = (sys_id) => {
    return new Promise((resolve, reject) => {
        db('exaweb_users').where('sys_id', sys_id)
        .del()
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject(e);
        });
    });
};
