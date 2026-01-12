const contact = require("../models/contact")
const contactmodel = require("../models/contact")


const getHome = (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.error(error)
        res.render("index")
    }
}

const getAbout = (req, res) => {
    try {
        res.render("about")
    } catch (error) {
        console.log("error")
        res.render("about")
    }

}

const getContact = (req, res) => {
    try {
        res.render("contact")
    } catch (error) {
        console.log("error")
        res.render(contact)
    }

}

const getproperty = (req, res) => {
    try {
        res.render("property-list")
    } catch (error) {
        console.log(error)
        res.render("property-list")
    }
}

const getpropertyagent = (req, res) => {
    try {
        res.render("property-agent")
    }catch(error){
        res.render("property-agent")
    }
}

const getpropertytype = (req, res) => {
    try {
        res.render("property-type")
    }catch (error){
        res.render("property-type")
    }
}

const getTestimonial = (req, res) => {
    try{
        res.render("testimonial")
    }catch (error){
        res.render("testimonial")
    }
}
const getmessage = (req, res) => {
    try{
        res.render("messages")
    }catch (error){
        res.render("messages")
    }
}
const getdelete = (req, res) => {
    try{
        contactmodel.find("delete")
        res.render("messages")
    }catch (error){
        res.render("messages")
    }
}

const createContact = (req, res) => {
    try {
        res.render("contact")
    } catch (err) {
        console.log(err.details[0].message)
        res.render("contact")
    }
    const contactmodel = { contactmodel }.find()
    const { name, email, subject, message, statues, completed, date } = req.body

    contactmodel.create()({
        name: name,
        email: email,
        message: message,
        statues: statues,
        completed: completed,
        date: date
    })
}







module.exports = {
    getHome,
    getAbout,
    getContact,
    getproperty,
    getpropertyagent,
    getpropertytype,
    getTestimonial,
    createContact,
    getmessage,
    getdelete
}