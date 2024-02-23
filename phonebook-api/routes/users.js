var express = require('express');
var router = express.Router();
const { User } = require('../models');
const path = require('path')
const fs = require('fs')

/* GET users listing. */
router.get('/phonebooks', async function (req, res, next) {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ err: error.message })
  }

});

router.post('/phonebooks', async function (req, res, next) {
  try {
    const { name, phone } = req.body
    if (!name && !phone) throw Error.message = "name and phone can't be empty"
    const phonebook = await User.create({ name, phone })
    res.status(201).json(phonebook)
  } catch (error) {
    res.status(500).json({ err: error.message })
  }
})

router.put('/phonebooks/:id', async function (req, res, next) {
  try {
    const id = req.params.id
    const { name, phone } = req.body
    if (!name && !phone) throw Error.message = "name and phone can't be empty"
    const updatedb = await User.update({ name, phone }, {
      where: { id },
      returning: true,
      plain: true
    })
    res.json(updatedb[1])
  } catch (error) {
    res.status(500).json({err: error.message})
  }
})

router.put('/phonebooks/:id/avatar', async function (req, res) {
  const id = req.params.id
  let avatar
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  avatar = req.files.avatar
  let fileName = Date.now() + '_' + avatar.name
  uploadPath = path.join(__dirname, '..', 'public', 'images', fileName);

  avatar.mv(uploadPath, async function (err) {
    if (err)
      return res.status(500).send(err);

    try {
      const profile = await User.findOne({
        where: {
          id
        }
      });
      if (profile.avatar) {
        const oldFile = path.join(__dirname, '..', 'public', 'images', profile.avatar)
        try {
          fs.unllinkSync(oldFile)
        } catch {
          const phonebook = await User.update({ avatar: fileName }, {
            where: {
              id
            },
            returning: true,
            plain: true
          })
          return res.status(201).json(phonebook[1])
        }
      }
      const phonebook = await User.update({ avatar: fileName }, {
        where: {
          id
        },
        returning: true,
        plain: true
      })
      return res.status(201).json(phonebook[1])
    } catch (error) {
      res.status(500).json(err)
    }
  })
});

router.delete('/phonebooks/:id', async function (req, res) {
  try {
    const id = req.params.id
    const updatepb = await User.destroy({
      where: {
        id
      },
      returning: true,
      plain: true
    });
    res.json(updatepb[1])
  } catch (error) {
    res.status(500).json({ err: error.message })
  }
});

module.exports = router;
