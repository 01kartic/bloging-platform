// lib/user.js
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db();
const userCollection = db.collection('users');

export async function getUser(email) {
  const user = await userCollection.findOne({ email });
  return user;
}

export async function createUser(user) {
  const result = await userCollection.insertOne(user);
  return result.insertedId;
}

export async function updateUser(id, user) {
  await userCollection.updateOne({ _id: id }, { $set: user });
}

export async function deleteUser(id) {
  await userCollection.deleteOne({ _id: id });
}