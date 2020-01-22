/*const app = require("../app");
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
describe('/POST Crear Location', () => {
    it('it should  POST a new Location', (done) => {
        let location = {
            name: "Heredia"
        }
        chai.request(app)
            .post('/location/')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .send(location)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('location');
                done();
            });
    });

}); 
describe('/POST No Crear Location porque el name es vacío', () => {
    it("it should't  POST a new Location", (done) => {
        let location = {
            name: ""
        }
        chai.request(app)
            .post('/location/')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .send(location)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

}); 

describe('/POST Debe obtener todos los Locations existentes', () => {
    it("it should  Get all Locations", (done) => {
            chai.request(app)
            .get('/locations/')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('locations');
                done();
            });
    });

}); 
describe('/Get Debe obtener el Location buscado', () => {
    it("it should  Get the Location", (done) => {
            chai.request(app)
            .get('/location/5ce9b5a608e6570a3ccc8121')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('location');
                done();
            });
    });

}); 
describe('/Get No Debe obtener el Location buscado porque el id no existe', () => {
    it("it should't  Get the Location", (done) => {
            chai.request(app)
            .get('/location/5ce9b5a608e6570a3ccc81')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
describe('/Put  Debe actualizar el location.', () => {
    it("it should  Put the location", (done) => {
        let location = {
            name: "Limón"
        }
            chai.request(app)
            .put('/location/5d14234cf8b1722d4003c46c')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .send(location)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('location');
                done();
            });
    });

}); 
describe('/Put No Debe actualizar el location buscado porque el id no existe', () => {
    it("it shouldn't  Put Location", (done) => {
        let catalogue = {
            name: "Extreme"
        }
            chai.request(app)
            .put('/catalogue/5cf985365d222b30985fa6')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
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
describe('/Delete No Debe eliminar el location buscado porque el id no existe', () => {
    it("it shouldn't  Delete the Location", (done) => {
            chai.request(app)
            .delete('/catalogue/5cf985365d222b30985fa6')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg`,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('error');
                done();
            });
    });

}); 
/*describe('/Delete Debe eliminar el location buscado', () => {
    it("it should Delete the location", (done) => {
            chai.request(app)
            .delete('/location/5d12aa2bd1019b3d7812bc94')
            .set({ Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjAzNjAyMTEsImV4cCI6MTU2MTU2OTgxMX0.cs4F_4eXDxFdgixou_Zb8bHcT3pqn_PjyWBIe_3-Tj0`,userid: "5ce3309a7a01d918483545bb" })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});*/