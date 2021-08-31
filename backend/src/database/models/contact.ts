import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('contact');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ContactSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 34,
      },
      email: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ContactSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ContactSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ContactSchema.set('toJSON', {
    getters: true,
  });

  ContactSchema.set('toObject', {
    getters: true,
  });

  return database.model('contact', ContactSchema);
};
