const express = require('express');
const { route } = require('express/lib/application');
const {Category} = require('../models/category');
const router = express.Router();


//create category
router.post(`/`, async(req,res)=>{
   let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color
   });
   category = await category.save();
    if(!category)
        return res.status(404).send("The category cannot be created");
    res.send(category);
});

//get all category
router.get(`/`, async(req, res)=>{
    
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({suucess:false});
    }
    res.status(200).send(categoryList);
});



module.exports = router;
