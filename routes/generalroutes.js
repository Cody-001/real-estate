const express = require('express');
const router = express.Router();
const {
    getHome,
    getAbout,
    getContact,
    getproperty,
    getpropertyagent,
    getpropertytype,
    getTestimonial,
    createContact,
    getmessage,
    getdelete,
    get404
} = require("../controllers/generalcontroller")

router.get('/', getHome)
router.get("/404", get404)
router.get('/about', getAbout)
router.get('/contact', getContact)
router.get('/properties', getproperty)
router.get('/property-agents', getpropertyagent)
router.get('/property-type', getpropertytype)
router.get('/testimonial', getTestimonial)
router.get("/message", getmessage)
router.post("/message:id", getdelete)
router.post("/contact", createContact)



module.exports = router