import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(INNO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (e) {
    console.log('Connection to db failed: ' + e);
  }
};

export default connectMongo;
