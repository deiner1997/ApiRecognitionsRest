/*const app = require("../app");
const token = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg";
const userid = "5ce3309a7a01d918483545bb";
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
describe('/POST Crear Catálogo', () => {
    it('it should  POST a new Catalogue', (done) => {
        let catalogue = {
            title: "Extreme Tech",
            category: "Technology",
            locationId: "5ce9b5a608e6570a3ccc8121"
        }
        chai.request(app)
            .post('/catalogue/')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('catalogue');
                done();
            });
    });

}); 
describe('/POST No Crear Catálogo porque titulo es vacío', () => {
    it("it should't  POST a new Catalogue", (done) => {
        let catalogue = {
            title: "",
            category: "Technology",
            locationId: "5ce9b5a608e6570a3ccc8121"
        }
        chai.request(app)
            .post('/catalogue/')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Catálogo porque category es vacío', () => {
    it("it should't  POST a new Catalogue", (done) => {
        let catalogue = {
            title: "Extreme Tech",
            category: "",
            locationId: "5ce9b5a608e6570a3ccc8121"
        }
        chai.request(app)
            .post('/catalogue/')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No Crear Catálogo porque el location es vacío', () => {
    it("it should't  POST a new Catalogue", (done) => {
        let catalogue = {
            title: "Extreme Tech",
            category: "Technology",
            locationId: ""
        }
        chai.request(app)
            .post('/catalogue/')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST No debe Crear Catálogo porque el locationId no existe', () => {
    it("it should'nt  POST a new Catalogue", (done) => {
        let catalogue = {
            title: "Extreme Tech",
            category: "Technology",
            locationId: "5ce9b5a608e6570a3ccc812"
        }
        chai.request(app)
            .post('/catalogue/')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 
describe('/POST Debe obtener todos los Catálogos existentes', () => {
    it("it should  Get all Catalogues", (done) => {
            chai.request(app)
            .get('/catalogues/')
            .set({ Authorization: token,userid: userid})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('catalogues');
                done();
            });
    });

}); 
describe('/POST Debe obtener el catálogo buscado', () => {
    it("it should  Get the Catalogue", (done) => {
            chai.request(app)
            .get('/catalogue/5d12a015cf3aed21a8477ba3')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('catalogue');
                done();
            });
    });

}); 
describe('/Get No Debe obtener el catálogo buscado porque el id no existe', () => {
    it("it should't  Get the Catalogue", (done) => {
            chai.request(app)
            .get('/catalogue/5d12a015cf3aed21a8477b')
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
describe('/Put  Debe actualizar el catálogo.', () => {
    it("it should  Put the Catalogue", (done) => {
        let catalogue = {
            title: "Extreme"
        }
            chai.request(app)
            .put('/catalogue/5d12a015cf3aed21a8477ba3')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('catalogue');
                done();
            });
    });

}); 
describe('/Put No Debe actualizar el catálogo buscado porque el id no existe', () => {
    it("it shouldn't  Put Catalogue", (done) => {
        let catalogue = {
            title: "Extreme"
        }
            chai.request(app)
            .put('/catalogue/5d12a015cf3aed21a8477b')
            .set({ Authorization: token,userid: userid })
            .send(catalogue)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/Delete No Debe eliminar el catálogo buscado porque el id no existe', () => {
    it("it shouldn't  Delete the Catalogue", (done) => {
            chai.request(app)
            .delete('/catalogue/5d12a015cf3aed21a8477b')
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
/*describe('/Delete Debe eliminar el catálogo buscado', () => {
    it("it should Delete the Catalogue", (done) => {
            chai.request(app)
            .delete('/catalogue/5d12aa2bd1019b3d7812bc94')
            .set({ Authorization: token,userid: userid })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});*/