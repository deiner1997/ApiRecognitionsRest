const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const CtrolUser = require('../controllers/user');
const CtrolLocation = require('../controllers/location');
const CtrolPeriod = require('../controllers/period');
const CtrolRole = require('../controllers/role');
const CtrolArea = require('../controllers/area');
const CtrolRecognize = require('../controllers/recognize');
const CtrolRecognizeInfo = require('../controllers/recognizeInformation');
const CtrolCatalogue = require('../controllers/catalogue');
const CtrolShopping = require('../controllers/shopping')
const CtrolPosition = require('../controllers/position')
const CtrolCategory = require('../controllers/category')
const CtrolSubcategory = require('../controllers/subcategory')
const CtrolValue = require('../controllers/value')





//Users
router.post('/register',auth, isAdmin, CtrolUser.register)
router.post('/signIn', CtrolUser.signIn)
router.get('/getusers', auth, CtrolUser.getUsers)
router.get('/getusersStatus', auth, CtrolUser.getUsersStatus)
router.get('/getuser/:userId', auth, CtrolUser.getUser)
router.put('/user/:userId', auth, isAdmin, CtrolUser.updateUser)
router.put('/userStatus/:userId', auth, isAdmin, CtrolUser.updateUserStatus)
router.delete('/user/:userId', auth, isAdmin, CtrolUser.deleteUser)
//Catalogue
router.post('/catalogue/',auth, isAdmin, CtrolCatalogue.saveCatalogue)
router.get('/catalogues/', auth, isAdmin, CtrolCatalogue.getCatalogues)
router.get('/catalogue/:catalogueId/', auth, isAdmin, CtrolCatalogue.getCatalogue)
router.get('/catalogue_category_location/:category&:locationId/', auth, CtrolCatalogue.getCataloguesByCategoryandLocation)
router.put('/catalogue/:catalogueId/', auth, isAdmin, CtrolCatalogue.updateCatalogue)
router.delete('/catalogue/:catalogueId/', auth, isAdmin, CtrolCatalogue.deleteCatalogue)
//Locations
router.post('/location/', auth , isAdmin ,CtrolLocation.saveLocation);
router.get('/locations/', auth, isAdmin, CtrolLocation.getLocations);
router.get('/location/:locationId', auth, isAdmin, CtrolLocation.getLocation);
router.put('/location/:locationId', auth, isAdmin, CtrolLocation.updateLocation);
router.delete('/location/:locationId', auth, isAdmin, CtrolLocation.deleteLocation);

//Period
router.post('/period/', auth , isAdmin ,CtrolPeriod.savePeriod);
router.get("/period-actived/", auth,CtrolPeriod.getActivedPeriod);
router.get('/periods/', auth, CtrolPeriod.getPeriods);
router.get('/period/:periodId', auth, CtrolPeriod.getPeriod);
router.put('/period/:periodId', auth, isAdmin, CtrolPeriod.updatePeriod);
router.delete('/period/:periodId', auth, isAdmin, CtrolPeriod.deletePeriod);

//Role
//router.post('/role/', auth , isAdmin ,CtrolRole.saveRole);
router.get('/roles/', auth, isAdmin, CtrolRole.getRoles);
router.get('/role/:roleId', auth, isAdmin, CtrolRole.getRole);
//router.put('/role/:roleId', auth, isAdmin, CtrolRole.updateRole);
//router.delete('/role/:roleId', auth, isAdmin, CtrolRole.deleteRole);

//Positions
router.get('/positions/', auth, isAdmin, CtrolPosition.getPositions);
router.get('/position/:positionId', auth, isAdmin, CtrolPosition.getPosition);

//Area
//router.post('/area/', auth , isAdmin ,CtrolArea.saveArea);
router.get('/areas/', auth, isAdmin, CtrolArea.getAreas);
router.get('/area/:areaId', auth, isAdmin, CtrolArea.getArea);
//router.put('/area/:areaId', auth, isAdmin, CtrolArea.updateArea);
//router.delete('/area/:areaId', auth, isAdmin, CtrolArea.deleteArea);
//Recognize
router.post('/recognize/', auth ,CtrolRecognize.createRecognize );
router.get('/recognize/:recognizeId', auth, CtrolRecognize.getRecognize);
router.get('/recognizes/', auth, CtrolRecognize.getRecognizesByPeriod);
router.put('/recognize/:recognizeId', auth, isAdmin, CtrolRecognize.updateRecognize);
router.put('/recognizeinfo/:recognizeId', auth, isAdmin, CtrolRecognize.updateRecognizeInfo);
router.delete('/recognize/:recognizeId', auth, CtrolRecognize.deleteRecognize);
router.get('/approve/', auth, isAdmin, CtrolRecognize.getRecognizesByPeriodPending);

router.get('/information_created/', auth, CtrolRecognizeInfo.getRecognizesCreatedToUserId);
router.get('/recognitions_user/:userId', auth, CtrolRecognizeInfo.getRecognizesByUser);
router.get('/recognitions_period/:userId&:periodId', auth, CtrolRecognizeInfo.getRecognizesByUserPeriod);
router.get('/information_assign/', auth, CtrolRecognizeInfo.getRecognizesAssignToUserId);
router.get('/information_pending/', auth, CtrolRecognizeInfo.getRecognizesPendingToUserId);
router.get('/acomulate_table_actual_user/:userId', auth, CtrolRecognizeInfo.tableAcomulatedOneUserActualPeriod);
router.get('/acomulate_table_actual_area/:areaId', auth, isAdmin, CtrolRecognizeInfo.tableAcomulatedAllUserActualPeriod);
router.get('/acomulate_table_select_user_period/:userId&:periodId', auth, CtrolRecognizeInfo.tableAcomulatedOneUserSelectPeriod);
router.get('/acomulate_table_select_area_period/:areaId&:periodId', auth, isAdmin, CtrolRecognizeInfo.tableAcomulatedAllUserSelectPeriod);
router.get('/search_by_month/:startdate&:enddate', auth, isAdmin, CtrolRecognizeInfo.searchByMonth);
router.get('/search_by_category/:categoryId', auth, isAdmin, CtrolRecognizeInfo.searchByCategory);
router.get('/search_by_subcategory/:subcategoryId', auth, isAdmin, CtrolRecognizeInfo.searchBySubcategory);




//Shopping
router.post('/shopping/', auth ,CtrolShopping.saveShopping);
router.get('/shopping/:shoppingId', auth ,CtrolShopping.getShopping);
router.get('/shopping_user/', auth ,CtrolShopping.getShoppingsUser);    
router.get('/shoppings/', auth, isAdmin ,CtrolShopping.getShoppings);
router.put('/shopping/:shoppingId/', auth, isAdmin ,CtrolShopping.updateShopping);


router.get('/categories/', auth,CtrolCategory.getCategories);
router.get('/subcategories/', auth,CtrolSubcategory.getSubcategories);
router.get('/values/', auth,CtrolValue.getValues);








module.exports = router