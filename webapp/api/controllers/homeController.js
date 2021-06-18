const homeController = {}

homeController.get = (req, res, next) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      res.status(200).send({ express: 'Hello production!!' })
    } else if (process.env.NODE_ENV === 'develop') { 
      res.status(200).send({ express: 'Hello develop!!' })
    } else res.status(200).send({ express: 'Hello! You are probably developing locally!!' })
  } catch {
    if (err) { 
      next(err)
    }
  }
}

module.exports = homeController
