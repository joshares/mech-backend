const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

//desc Get all contacts
//@route get /api/contacts
//@access private

const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();
  res.status(200).json(clients);
});

//desc Get singe contacts
//@route get /api/contacts/:id
//@access private

const getClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  console.log(client);
  if (!client) {
    res.status(404);
    throw new Error("Client not found");
  } else {
    res.status(200).json(client);
  }
});

//desc post contacts
//@route Post /api/contacts
//@access public
const createClient = asyncHandler(async (req, res) => {
  console.log("start");
  console.log(req.body);
  if (!req.body) {
    throw new Error("no feeds");
  }
  const { name, email, address, phone, gender } = req.body;
  if (!name || !email || !address || !phone || !gender) {
    res.status(400);
    console.log(res.statusCode);
    throw new Error("all feeds are required");
  }
  const client = await Client.create({
    name,
    email,
    address,
    phone,
    gender,
  });

  res.status(201).json(client);
});

//desc update  contacts
//@route Put /api/contacts/:id
//@access public
const updateClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(404);
    throw new Error("client not found");
  }

  const updatedClient = await Client.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedClient);
});

//desc Get all contacts
//@route delete /api/contacts/:id
//@access public
const deleteClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(404);
    throw new Error("client not found");
  }

  console.log(req.user);
  await Client.deleteOne({ _id: req.params.id });
  res.status(200).json(client);
});

module.exports = {
  getClient,
  getClients,
  createClient,
  deleteClient,
  updateClient,
};
