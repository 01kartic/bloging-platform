// app/api/users/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db();
const userCollection = db.collection('users');

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (email) {
    const user = await userCollection.findOne({ email });
    return user 
      ? NextResponse.json(user) 
      : NextResponse.json({ error: 'User   not found' }, { status: 404 });
  }

  const users = await userCollection.find().toArray();
  return NextResponse.json(users)
}

export async function POST(request) {
  const { email, name, token, picture } = await request.json();

  if (!email || !name || !token || !picture) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const existingUser   = await userCollection.findOne({ email });

  if (existingUser  ) {
    await userCollection.updateOne({ email }, { $set: { name, token, picture } });
  } else {
    await userCollection.insertOne({ email, name, token, picture });
  }

  return NextResponse.json({ message: 'User   created successfully' });
}

export async function PUT(request) {
  const { email, name, token, picture } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const user = await userCollection.findOne({ email });

  if (user) {
    await userCollection.updateOne({ email }, { $set: { name, token, picture } });
  } else {
    return NextResponse.json({ error: 'User   not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'User   updated successfully' });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  await userCollection.deleteOne({ email });

  return NextResponse.json({ message: 'User   deleted successfully' });
}