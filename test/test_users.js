const app = require("../app");
const token = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg";
const userid = "5ce3309a7a01d918483545bb";
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
/*describe('/POST Crear usuario', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest6.test",
            name: "inittest3",
            password: "1234567",
            username: "deinerunittest6",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                message = res.body.should.have.property('message');
                done();
            });
    });

}); 
*/
/*describe('/POST Crear usuario con roleId inexistente', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f1",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST Crear usuario con locationId inexistente', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc812",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST Crear usuario con areaId inexistente', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cf",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST Crear usuario con positionId inexistente', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST Crear usuario con roleId vacío', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST Crear usuario con locationId vacio', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST Crear usuario con areaId vacio', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST Crear usuario con positionId vacio', () => {
    it("it should'nt  POST a new User", (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque el email ya existe', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest2.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest3",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque el username ya existe', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest3.test",
            name: "inittest2",
            password: "1234567",
            username: "deinerunittest2",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque la contraseña es vacia', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest3.test",
            name: "inittest2",
            username: "deinerunittest3",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque el email es vacio', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            name: "inittest2",
            username: "deinerunittest3",
            password:"1234567",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque el username es vacio', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest3.test",
            username: "",
            name: "inittest2",
            password:"1234567",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe crear usuario porque la contraseña tiene menos de 7 digitos.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest3.test",
            name: "inittest2",
            password:"12345",
            roleId: "5ce9b4747a794235b4265f18",
            locationId: "5ce9b5a608e6570a3ccc8121",
            areaId: "5ce9b52a5a5d3d0484282cfa",
            positionId: "5cf97919c74dea157019332b"
        }
        chai.request(app)
            .post('/register')
            .set({ Authorization: token,userid: userid})
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); */
describe('/POST Debe Loguear el usuario correctamente con correo.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest2.test",
            password:"1234567"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('token');
                res.body.should.have.property('user');
                done();
            });
    });

}); 
describe('/POST Debe Loguear el usuario correctamente con username.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            username: "deinerunittest2",
            password:"1234567"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('token');
                res.body.should.have.property('user');
                done();
            });
    });

}); 

describe('/POST No debe loguear el usuario por mal contraseña.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest2.test",
            password:"125"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe Loguear el usuario porque el username no existe.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            username: "einerunittest2",
            password:"1234567"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST No debe Loguear el usuario porque el email no existe.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "einer@unittest2.test",
            password:"1234567"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/POST No debe Loguear el usuario porque el password es vacio.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "deiner@unittest2.test",
            password:""
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe Loguear el usuario porque el email o username es vacio.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            email: "",
            password:"1234567"
        }
        chai.request(app)
            .post('/signIn')
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
/*
describe('/Put Debe actualizar el usuario.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            name: "Deinersito"
        }
        chai.request(app)
            .put('/user/5d0ddc0a376296066c185c76')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('user');
                done();
            });
    });

}); 
describe('/Put No debe actualizar el usuario porque el userId no existe.', () => {
    it('it should  POST a new User', (done) => {
        let user = {
            name: "Deinersito"
        }
        chai.request(app)
            .put('/user/5d0ddc0a376296066c185c7')
            .set({ Authorization: token,userid: userid })
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
/*describe('/Delete Debe eliminar el usuario.', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .delete('/user/5d0f289cff92e811d06a3e43')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});
*/
/*describe('/Delete No debe eliminar el usuario porque el userId no existe.', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .delete('/user/5d0dc568533c7d28b039c7a')
            .set({ Authorization: token,userid: userid})
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/get debe obtener el usuario por id', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getuser/5d0f2808a52afb075ca00f70')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('user');
                done();
            });
    });
}); 
describe('/Get No debe obtener el usuario porque el userId no existe', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getuser/5d0f2808a52afb075ca00f7')
            .set({ Authorization: token,userid: userid})
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');

                done();
            });
    });
});
describe('/Get Debe obtener todos los usuarios', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getusers/')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('user');
                done();
            });
    });
});
describe('/Get No debe obtener todos los usuarios porque el userId admin no existe', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getusers/')
            .set({ Authorization: token,userid: "userid" })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });
});
describe('/Get No debe obtener todos los usuarios porque el userId no es admin', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getusers/')
            .set({ Authorization: token,userid: "5d0f262699cf0f098860294c" })
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/Get No debe obtener todos los usuarios porque token es inválido', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getusers/')
            .set({ Authorization: `bearer J0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9-Tj0`,userid: userid })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/Get No debe obtener todos los usuarios porque token es vacio', () => {
    it('it should  POST a new User', (done) => {
        chai.request(app)
            .get('/getusers/')
            .set({ Authorization: ``,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
*/
