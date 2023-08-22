import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.42wwv.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("repliq").collection("products");

    if (req.method === "GET") {
      const productId = req.query.productId;

      try {
        const product = await productsCollection.findOne({
          _id: ObjectId(productId),
        });

        if (product) {
          res.send({ message: "success", status: 200, data: product });
        } else {
          res.status(404).send({ message: "Product not found", status: 404 });
        }
      } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", status: 500 });
      }
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
