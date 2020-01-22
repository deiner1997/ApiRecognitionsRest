/*const app = require("../app");
let chai = require('chai');
const token = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg";
const userid = "5ce3309a7a01d918483545bb";
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
describe('/POST Crear Period', () => {
    it('it should  POST a new Period', (done) => {
        let period = {
            name: "July - December 2018",
            startdate: "2018-07-01",
            enddate: "2018-12-01",
            status: false,
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('period');
                done();
            });
    });

}); 
describe('/POST No Crear Period porque el name es vacío', () => {
    it("it should't  POST a new Period", (done) => {
        let period = {
            name: "",
            startdate: "2018-07-01",
            enddate: "2018-12-01",
            status: false
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Period porque el startdate es vacío', () => {
    it("it should't  POST a new Period", (done) => {
        let period = {
            name: "July 2018 - December 2018",
            startdate: "",
            enddate: "2018-12-01",
            status: false
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Period porque el enddate es vacío', () => {
    it("it should't  POST a new Period", (done) => {
        let period = {
            name: "July 2018 - December 2018",
            startdate: "2018-07-01",
            enddate: "",
            status: false
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Period porque el status es vacío', () => {
    it("it should't  POST a new Period", (done) => {
        let period = {
            name: "July 2018 - December 2018",
            startdate: "2018-07-01",
            enddate: "2018-12-01",
            status: ""
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Period porque el status es true y ya existe uno en true', () => {
    it("it should't  POST a new Period", (done) => {
        let period = {
            name: "July 2018 - December 2018",
            startdate: "2018-07-01",
            enddate: "2018-12-01",
            status: true
        }
        chai.request(app)
            .post('/period/')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});
describe('/PUT Actualizar Period', () => {
    it("it should  PUT a Period", (done) => {
        let period = {
            name: "July 2018 - December 2018 Prueba",
        }
        chai.request(app)
            .put('/period/5d144f66346fed2710e7165f')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('period');
                done();
            });
    });

}); 
describe('/PUT No Actualizar Period porque ya existe uno en true', () => {
    it("it should't  PUT a Period", (done) => {
        let period = {
            status: true,
        }
        chai.request(app)
            .put('/period/5d144f66346fed2710e7165f')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});  
describe('/PUT No Actualizar Period porque el id del periodo no existe', () => {
    it("it should't  PUT a Period", (done) => {
        let period = {
            name: "Prueba",
        }
        chai.request(app)
            .put('/period/5d144f66346fed2710e')
            .set({ Authorization: token,userid: userid })
            .send(period)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

});  
describe('/Get Obtiene todos los periodos de la base de datos', () => {
    it("it should  Get all Periods", (done) => {
        chai.request(app)
            .get('/periods/')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('periods');
                done();
            });
    });

}); 
describe('/Get Obtiene periodo por id', () => {
    it("it should  Get one Period", (done) => {
        chai.request(app)
            .put('/period/5d144f66346fed2710e7165f')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('period');
                done();
            });
    });

}); 
describe('/Get No Obtiene periodo porque id no existe', () => {
    it("it should't  Get  Period", (done) => {
        chai.request(app)
            .put('/period/5d144f66346fed2710e71')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');

                done();
            });
    });

}); 
/*describe('/Delete Elimina un periodo', () => {
    it("it should  Delete  Period", (done) => {
        chai.request(app)
            .delete('/period/5d1456eab5dbdd0198efe790')
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
/*describe('/Delete No Elimina un periodo porque id no existe', () => {
    it("it should't  Delete  Period", (done) => {
        chai.request(app)
            .delete('/period/5d1456eab5dbdd0198e')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

});*/