const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      // This will retrieve every Category's associated Product data. In SQL, this would be a JOIN function
      include: [{ model: Product }],
    });
    // Return WORKING
    res.status(200).json(categoryData);
  } catch (err) {
    // Return NOT WORKING
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id, 
      },
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: `No data matching this id.` });
      // STOP code HERE!
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    // The `create` method will do as it implies
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    // Destroy Category based on its...
    const categoryData = await Category.destroy({
      // ...ID!
      where: {
        id: req.params.id,
      },
    });

  // IF categoryData does NOT include the correct input (correct id)...
  if (!categoryData) {
    // Return status 400 error w/message...
    res.status(400).json({ message: `No data matching this id.`});
    return;
  }
    // ...ELSE return the categoryData (it worked!)
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// ^ DONE ^