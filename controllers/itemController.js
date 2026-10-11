// Temporary in-memory data
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];
let nextId = 3;

// GET /api/items
exports.getItems = (req, res) => {
  res.json(items);
};

// GET /api/items/:id
exports.getItemById = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
};

// POST /api/items
exports.createItem = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  const newItem = { id: nextId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

// PUT /api/items/:id
exports.updateItem = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  item.name = name;
  res.json(item);
};

// DELETE /api/items/:id
exports.deleteItem = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  const deleted = items.splice(index, 1);
  res.json({ message: 'Item deleted', item: deleted[0] });
};