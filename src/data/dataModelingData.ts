export const dataModelingOverview = {
  definition: "Data in MongoDB has a flexible, dynamic schema. Documents in the same collection do not need to possess the same fields or schema. MongoDB provides two primary patterns for structuring data relationships: the Embedded Data Model and the Normalized Data Model.",
  decisionRule: "Choose between embedding and referencing based on access patterns, document size limits (16MB), and whether data is frequently read together or modified independently."
};

export const embeddedModelData = {
  title: "Embedded Data Model (De-normalized)",
  description: "In this model, all related data is nested inside a single document. It is also known as the de-normalized data model.",
  advantages: [
    "Single-query reads: Retrieve the entire entity and its related details in one atomic disk operation.",
    "Eliminates SQL joins completely, providing blazing-fast read performance.",
    "Atomic updates to parent and sub-documents within the single document boundary."
  ],
  tradeoffs: [
    "Can increase document size toward the 16MB BSON limit if arrays grow unboundedly.",
    "Can lead to data duplication if the same sub-entity is embedded across multiple parent records."
  ],
  codeSnippet: `{
  "_id": "<ObjectId101>",
  "Emp_ID": "10025AE336",
  "Personal_details": {
    "First_Name": "Radhika",
    "Last_Name": "Sharma",
    "Date_Of_Birth": "1995-09-26"
  },
  "Address": {
    "city": "Mysore"
  }
}`
};

export const normalizedModelData = {
  title: "Normalized Data Model (Referenced)",
  description: "In this model, related data is stored in separate collections and linked together using reference fields (such as foreign ObjectIds).",
  whenToUse: [
    "When embedding would result in severe data duplication that outweighs read performance advantages.",
    "To represent complex Many-to-Many (N:N) relationships.",
    "To model large, deeply recursive, or unbounded hierarchical datasets."
  ],
  advantages: [
    "Prevents duplicate data; update an entity once in its dedicated collection.",
    "Keeps individual document sizes well under the 16MB limit.",
    "Supports granular queries focused strictly on sub-entities."
  ],
  tradeoffs: [
    "Requires multiple application queries or $lookup aggregation stages to assemble full data.",
    "Cannot guarantee multi-document atomicity across collections without distributed transactions."
  ],
  codeSnippets: [
    {
      collection: "Employee",
      code: `// Collection: Employee
{
  "_id": "<ObjectId101>",
  "Emp_ID": "10025AE336"
}`
    },
    {
      collection: "Personal_details",
      code: `// Collection: Personal_details
{
  "_id": "<ObjectId102>",
  "empDocID": "ObjectId101",
  "First_Name": "Radhika",
  "Date_Of_Birth": "1995-09-26"
}`
    },
    {
      collection: "Address",
      code: `// Collection: Address
{
  "_id": "<ObjectId103>",
  "empDocID": "ObjectId101",
  "city": "Mysore"
}`
    }
  ]
};
