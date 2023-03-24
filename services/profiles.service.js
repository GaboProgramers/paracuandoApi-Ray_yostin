const models = require('../database/models')
const { Op } = require('sequelize')
const { CustomError } = require('../utils/helpers')

class ProfilesService {

  constructor() {
  }

  //Return Instance if we do not converted to json (or raw:true)
  async getProfileOr404(id) {
    let profile = await models.Profiles.findByPk(id, { raw: true })
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found')
    return profile
  }

  //Return not an Instance raw:true | we also can converted to Json instead
  async getProfile(id) {
    let profile = await models.Profiles.findByPk(id)
    if (!profile) throw new CustomError('Not found Profile', 404, 'Not Found')
    return profile
  }

  async findProfileByUserID(user_id) {
    let profile = await models.Profiles.findOne({ where: { user_id } }, { raw: true })
    if (!profile) throw new CustomError('Not found profile', 404, 'Not Found')
    return profile
  }

  async isAdminOr403(id) {
    let profile = await models.Profiles.findOne({
      where: {
        user_id: id,
        role_id: 2,
      }
    }, { raw: true })

    if (!profile) throw new CustomError('You are not an administrator', 403, 'Permission Denied')

    return true
  }
  // lo que no entiendo es que creo que necesitariamos un where: {role_id: 1 o 2 ya que esta en numeros los roles xd} ya

  async isAdmin(id) {
    let profile = await models.Profiles.findOne({
      where: {
        user_id: id,
        role_id: 2,
      }
    }, { raw: true })

    if (!profile) return false

    return true
  }
}

module.exports = ProfilesService