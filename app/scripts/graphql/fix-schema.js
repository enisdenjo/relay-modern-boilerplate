const fs = require('fs');
const path = require('path');

// prepare arguments
const args = process.argv.slice(2);
let schemaPath = args[0];
if (schemaPath) {
  schemaPath = path.join(process.cwd(), schemaPath);
  main();
} else {
  console.error('`schemePath` is required!');
  process.exitCode = 1;
}

function main() {
  // read schema JSON file
  let schemaBuffer;
  try {
    schemaBuffer = fs.readFileSync(schemaPath);
  } catch (error) {
    console.error('Error loading the graphql schema!');
    console.error(error);
    process.exitCode = 1;
  }

  // parse the schema and adjust it for Relay by putting it inside `data` field.
  let schema = JSON.parse(schemaBuffer.toString());
  if (!schema.data) {
    schema = {
      data: schema,
    };
  }

  // sort schema for git commit consistency
  fs.writeFileSync(schemaPath, JSON.stringify(sortSchema(schema), null, 2));
}

// Sort JSON GraphQL schemas for commit consistency. Useful bracause we use Relay with non-deterministically auto-generated schemas.
// Copied from: https://github.com/nelson-ai/sort-graphql-schema
function sortSchema(schemaPart) {
  if (typeof schemaPart === 'object') {
    if (schemaPart === null) return schemaPart;

    if (Array.isArray(schemaPart)) {
      const strings = [];
      const objects = [];

      schemaPart.forEach((part) => {
        const type = typeof part;

        if (type === 'object') objects.push(sortSchema(part));
        else if (type === 'string') strings.push(part);
        else throw new Error(`Unknown type: ${type}`);
      });

      return strings.sort().concat(objects.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    const newObject = {};

    Object.keys(schemaPart)
      .sort()
      .forEach((key) => {
        newObject[key] = sortSchema(schemaPart[key]);
      });

    return newObject;
  }

  return schemaPart;
}
