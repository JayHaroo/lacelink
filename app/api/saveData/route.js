import { MongoClient } from "mongodb";

export async function POST(req) {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        const { image, name, brand, description } = await req.json();

        if (!image || !name || !brand || !description) {
            return new Response(JSON.stringify({ message: "All fields are required!" }), { status: 400 });
        }

        await client.connect();
        const database = client.db("lacelink");
        const collection = database.collection("shoes");

        const newShoe = { image, name, brand, description};
        await collection.insertOne(newShoe);

        return new Response(JSON.stringify({ message: "Shoe added successfully!" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    } finally {
        await client.close();
    }
}