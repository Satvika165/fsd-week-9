import { MongoOperator } from '../types';

export const operatorCategoriesSummary = [
  { name: "Comparison", desc: "Compare values in documents (e.g., equality, greater than, set membership)." },
  { name: "Logical", desc: "Filter and combine multiple conditions with boolean logic (AND, OR, NOR, NOT)." },
  { name: "Array", desc: "Query array fields based on element values, array length, or multi-field element matches." },
  { name: "Element", desc: "Query based on field presence ($exists) or BSON data type ($type)." },
  { name: "Evaluation", desc: "Perform regex pattern matching, text search, or JavaScript expression execution." },
  { name: "Geospatial", desc: "Query location coordinates and spatial geometries ($geoWithin, $near)." },
  { name: "Bitwise", desc: "Perform bitwise comparison operations on integer fields." },
  { name: "Comments", desc: "Attach debugging comments to queries to aid profiling ($comment)." }
];

export const mongoOperatorsList: MongoOperator[] = [
  // COMPARISON OPERATORS
  {
    operator: "$eq",
    category: "comparison",
    meaning: "Matches values that are equal to the given value.",
    syntax: "{ <field>: { $eq: <value> } }",
    exampleQuery: "db.products.find({ product_price: { $eq: 49999.99 } })",
    description: "Matches documents where the value of a field equals the specified value. Equivalent to simple { field: value }."
  },
  {
    operator: "$gt",
    category: "comparison",
    meaning: "Matches if values are greater than the given value.",
    syntax: "{ <field>: { $gt: <value> } }",
    exampleQuery: "db.products.find({ product_price: { $gt: 20000 } })",
    description: "Returns all documents where the field's numeric or date value is strictly greater than the target argument."
  },
  {
    operator: "$lt",
    category: "comparison",
    meaning: "Matches if values are less than the given value.",
    syntax: "{ <field>: { $lt: <value> } }",
    exampleQuery: "db.products.find({ product_price: { $lt: 50000 } })",
    description: "Selects documents where the field value is strictly less than the specified threshold."
  },
  {
    operator: "$gte",
    category: "comparison",
    meaning: "Matches if values are greater than or equal to the given value.",
    syntax: "{ <field>: { $gte: <value> } }",
    exampleQuery: "db.products.find({ product_price: { $gte: 49999.99 } })",
    description: "Returns documents whose field value is greater than or equal to the comparison value."
  },
  {
    operator: "$lte",
    category: "comparison",
    meaning: "Matches if values are less than or equal to the given value.",
    syntax: "{ <field>: { $lte: <value> } }",
    exampleQuery: "db.products.find({ 'product_dimensions.product_height': { $lte: 60 } })",
    description: "Selects documents whose field value is less than or equal to the target value."
  },
  {
    operator: "$in",
    category: "comparison",
    meaning: "Matches any of the values in an array.",
    syntax: "{ <field>: { $in: [<value1>, <value2>, ...] } }",
    exampleQuery: "db.products.find({ product_name: { $in: ['TV', 'Laptop', 'Tablet'] } })",
    description: "Selects documents where the field's value matches ANY element in the specified array list."
  },
  {
    operator: "$ne",
    category: "comparison",
    meaning: "Matches values that are not equal to the given value.",
    syntax: "{ <field>: { $ne: <value> } }",
    exampleQuery: "db.products.find({ product_availability: { $ne: false } })",
    description: "Returns documents where the value of a field is not equal to the specified value (also includes documents where field is missing)."
  },
  {
    operator: "$nin",
    category: "comparison",
    meaning: "Matches none of the values specified in an array.",
    syntax: "{ <field>: { $nin: [<value1>, <value2>, ...] } }",
    exampleQuery: "db.products.find({ product_name: { $nin: ['Radio', 'Microwave'] } })",
    description: "Selects documents where the field value does not equal any value in the specified array list."
  },

  // LOGICAL OPERATORS
  {
    operator: "$and",
    category: "logical",
    meaning: "Joins two or more queries with a logical AND and returns the documents that match all conditions.",
    syntax: "{ $and: [ { <expression1> }, { <expression2> } ] }",
    exampleQuery: "db.products.find({ $and: [ { product_price: { $gt: 10000 } }, { product_availability: true } ] })",
    description: "Performs logical AND conjunction on an array of query clauses, returning documents that satisfy every clause."
  },
  {
    operator: "$or",
    category: "logical",
    meaning: "Joins two or more queries with a logical OR and returns documents that match either query.",
    syntax: "{ $or: [ { <expression1> }, { <expression2> } ] }",
    exampleQuery: "db.products.find({ $or: [ { product_name: 'TV' }, { product_price: { $lt: 5000 } } ] })",
    description: "Performs logical OR disjunction on an array of clauses; returns documents that satisfy at least one condition."
  },
  {
    operator: "$nor",
    category: "logical",
    meaning: "The opposite of the OR operator. Joins two or more queries and returns documents that do not match the given conditions.",
    syntax: "{ $nor: [ { <expression1> }, { <expression2> } ] }",
    exampleQuery: "db.products.find({ $nor: [ { product_price: { $gt: 50000 } }, { product_availability: false } ] })",
    description: "Performs logical NOR; selects documents that fail to match every single query expression in the array."
  },
  {
    operator: "$not",
    category: "logical",
    meaning: "Returns the documents that do not match the given query expression.",
    syntax: "{ <field>: { $not: { <operator-expression> } } }",
    exampleQuery: "db.products.find({ product_price: { $not: { $gt: 30000 } } })",
    description: "Inverts the effect of a query expression, returning documents that do not match the clause (including documents lacking the field)."
  },

  // ARRAY OPERATORS
  {
    operator: "$all",
    category: "array",
    meaning: "Matches arrays that contain all the specified values in the query condition.",
    syntax: "{ <field>: { $all: [ <value1>, <value2>, ... ] } }",
    exampleQuery: "db.products.find({ product_feature: { $all: ['HD', '10wt'] } })",
    description: "Selects documents where the array field contains all elements specified in the query array, regardless of element ordering."
  },
  {
    operator: "$size",
    category: "array",
    meaning: "Matches the documents if the array size is equal to the specified size in a query.",
    syntax: "{ <field>: { $size: <number> } }",
    exampleQuery: "db.products.find({ product_feature: { $size: 2 } })",
    description: "Matches any document where the array field contains exactly the specified number of elements."
  },
  {
    operator: "$elemMatch",
    category: "array",
    meaning: "Matches documents that match specified $elemMatch conditions within each array element.",
    syntax: "{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }",
    exampleQuery: "db.scores.find({ results: { $elemMatch: { product_score: { $gte: 80 }, verified: true } } })",
    description: "Matches documents containing an array field with at least one element that satisfies all the specified query criteria."
  }
];
