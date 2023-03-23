const ProfilesService = require('../services/profiles.service')

const profileServices = new ProfilesService()

const isUserAdmin = async (request, response, next) => {
  try {
    let { id } = request.user // --> Usamos Passport para hacer esto
    //     Passport también aplicó un middleware!

    await profileServices.isAdminOr403(id)
    // verifica si existe relación de user - rol
    // si no existe, 403 --> Status de error común para permisos

    return next()    // Si todo bien, le permite pasar a la siguiente función
    // El controlador por ejemplo
  } catch (error) {
    next(error)
  }
}

const protectAccountOwner = async (request, response, next) => {
  try {
    const { id } = request.user // ID del usuario autenticado
    const { id: profileId } = request.params // ID del perfil que se está modificando

    if (id !== profileId) {
      return response.status(403).json({ error: 'Esta no es tu cuenta' })
    }

    return next()
  } catch (error) {
    next(error)
  }
}



module.exports = {
  isUserAdmin,
  protectAccountOwner
}