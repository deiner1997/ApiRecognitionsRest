/*const app = require("../app");
let chai = require('chai');
const token = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MDA0MjMsImV4cCI6MTU2MjgxMDAyM30.IlTRTR3tjQ4X6jkgTTQoAS0wF0YPTMqsQIW8Vh6mrVg";
const useridLead = "5ce3309a7a01d918483545bb";
const useridColaborator = "5d0f28da4a7efd343c95cf52";
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
describe('/POST Crear Reconocimiento categoría #1 usuario colaborador', () => {
    it('it should  POST a new Recognition category #1 colaborator user', (done) => {
        let recognize = {
            description: "Test Pruebas unit test",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "5cfaeb20d8067e1f88148756",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token, userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property("recognize");
                done();
            });
    });

});
describe('/POST No Crear Reconocimiento categoría #1 porque descripción es vacía', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "5cfaeb20d8067e1f88148756",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token, userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

});
describe('/POST No Crear Reconocimiento categoría #1 porque userAssign es vacía', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "",
            categoryId: "5cfaeb20d8067e1f88148756",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token, userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/POST No Crear Reconocimiento categoría #1 porque categoryId es vacía', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token ,userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/POST No Crear Reconocimiento categoría #1 porque periodId es vacía', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "5cfaeb20d8067e1f88148756",
            periodId: ""
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token ,userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/POST No Crear Reconocimiento categoría #1 porque el user no tiene permisos es vacía', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "5cfaeb85d8067e1f88148758",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token ,userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/POST No Crear Reconocimiento categoría #1 porque el user no tiene permisos.', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "5d0f2711962172300cf5f884",
            categoryId: "5cfaeb85d8067e1f88148758",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token ,userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});
describe('/POST No Crear Reconocimiento categoría #1 porque el user a asignar es el mismo a que lo crea.', () => {
    it("it shouldn't  POST a new Recognition category #1 colaborator user", (done) => {
        let recognize = {
            description: "Unit test recognize cat 1",
            userAssignId: "5d0f28da4a7efd343c95cf52",
            categoryId: "5cfaeb85d8067e1f88148758",
            periodId: "5d14510d33d2f6318ce927d2"
        }
        chai.request(app)
            .post('/recognize/')
            .set({ Authorization: token ,userid: useridColaborator })
            .send(recognize)
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
})*/