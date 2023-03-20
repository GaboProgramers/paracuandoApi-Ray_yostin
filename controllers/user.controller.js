const UsersService = require('../services/users.service')
const { errorHandler } = require('../middlewares/error.handler')
const { getPagination, getPagingData } = require('../utils/helpers')
require('dotenv').config()

const error =errorHandler()

const usersService = new UsersService()

exports.getUsers = async (req, res, next)=>{
  try {
    let query= req.query
    let {page, size} = query
    const {limit, offset} = getPagination(page,size,'10')
    query.limit = limit
    query.offset = offset

    let users= await usersService.findAndCount(query)
    const results = getPagingData(users,page,limit)
    return res.json({results: results})
  }
  
  catch (error){
    next(error)
  }
}

exports.getUserById = async (req, res, next)=>{
  try {
    let {id}=req.params
    let userId= req.user.id
    if(userId===id){
      let user = await  usersService.getUser(id)
      return res.json({results: user})
    }
  }
  catch (error){
    next(error)
  }

}
exports.getMyUser = async (req, res, next)=>{
  try {
    let {id}=req.user.id
    let {first_name, last_name, image_url, email, username, phone}= req.body
    let user= await UsersService.getUser(id,{first_name, last_name, image_url, email, username, phone})
    return res.json({results: user})
  }
  catch (error){
    next(error)
  }
  
}
exports.patchUser = async (req, res, next)=>{
  try {
    let {id}=req.user.id
    let {first_name, last_name, image_url, email, username, phone}= req.body
    let user= await UsersService.updateUser(id,{first_name, last_name, image_url, email, username, phone})
    return res.json({results: user})
  }
  catch (error){
    next(error)
  }
    
}