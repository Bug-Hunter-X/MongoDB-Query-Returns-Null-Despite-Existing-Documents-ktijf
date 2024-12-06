```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... later in the code ...

const result = await collection.findOne(query);

if (!result) {
  // Handle the case where no document was found
  console.log('No document found');
} else {
  // Process the found document
  console.log(result);
}
```