```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... later in the code ...

const result = await collection.findOne(query);

if (!result) {
  // Handle the case where no document was found  
  // Check if the collection exists
  const collections = await client.db().listCollections().toArray();
  const collectionExists = collections.some(coll => coll.name === 'yourCollectionName');
  if (!collectionExists){
    console.log('Collection does not exist');
  } else {
    // Log the query for debugging
    console.log('Query:', JSON.stringify(query));
    // Check the data in the collection
    const documents = await collection.find({}).toArray();
    console.log('Documents:', JSON.stringify(documents, null, 2)); 
    console.log('No document found matching the query criteria.');
  }
} else {
  // Process the found document
  console.log(result);
}
```