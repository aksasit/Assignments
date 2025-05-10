const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} =  require("../db")
const router = Router();
const {z} = require("zod")




// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    // Check if the admin already exists
    Admin.findOne({
        username: username,
        password: password
    }).then(function(value) {
        if(value){
            res.json({message: "Admin already exists."})
        }
    })
    
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin Created Successfully"
    })
});

const titleSchema = z.string()
const descriptionSchema = z.string()
const imageLinkSchema = z.string()
const priceSchema = z.number().nonnegative()

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const titleResponse = titleSchema.safeParse(req.body.title)
    const descriptionResponse = descriptionSchema.safeParse(req.body.description)
    const imageLinkResponse = imageLinkSchema(req.body.imageLink)
    const priceResponse = priceSchema(req.body.price)

    if(!titleResponse.success || !descriptionResponse.success || !imageLinkResponse.success || !priceResponse.success){
        res.json({
            msg: "Enter valid input"
        })
    }

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        msg: "Course added successfully", courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })

});

module.exports = router;