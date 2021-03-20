const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// this works
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
     include: [{ model: Product }]
     })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// this works
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findAll({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// this works
router.post('/', async (req, res) => {
  //create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// this works
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      },
    );
    res.status(200).json(tagData);
  } catch (err) {
      console.log(err)
  }
});


// this works
router.delete('/:id', async (req, res) => {
  // delete one tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' })
      return;
  } res.status(200).json(tagData);
} catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
