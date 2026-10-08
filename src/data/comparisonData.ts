import { ComparisonRow } from '../types';

export const mysqlVsMongodb10Marks: ComparisonRow[] = [
  {
    attribute: "1. Database Model",
    mysql: "It is a relational database (RDBMS).",
    mongodb: "It is a NoSQL (document-oriented) database."
  },
  {
    attribute: "2. Data Suitability",
    mysql: "Suitable for structured data with clear, rigid schema.",
    mongodb: "Suitable for semi-structured and unstructured data."
  },
  {
    attribute: "3. Data Representation",
    mysql: "Represents data as flat tables, rows, and columns.",
    mongodb: "Represents data as JSON/BSON documents in collections."
  },
  {
    attribute: "4. Schema Declaration",
    mysql: "Must explicitly specify tables and column data types beforehand.",
    mongodb: "No need to declare the schema; schemas are dynamic."
  },
  {
    attribute: "5. Joins Support",
    mysql: "Allows complex relational JOIN operations across tables.",
    mongodb: "Doesn't natively rely on joins; embeds data or uses references."
  },
  {
    attribute: "6. Query Language",
    mysql: "Utilizes Structured Query Language (SQL).",
    mongodb: "Query language is JavaScript-based (JSON syntax)."
  },
  {
    attribute: "7. Scalability & Availability",
    mysql: "More suitable when you are just starting a database that doesn't scale much.",
    mongodb: "More suitable when you need high availability of data with auto data recovery."
  },
  {
    attribute: "8. Failure Recovery",
    mysql: "There is no built-in automatic failure recovery.",
    mongodb: "It supports built-in auto failure recovery via replica sets."
  },
  {
    attribute: "9. Performance & Speed",
    mysql: "It is slower due to join operations and disk I/O.",
    mongodb: "It is faster than MySQL due to in-memory caching and document locality."
  },
  {
    attribute: "10. Dataset Size",
    mysql: "Works better for smaller, strictly structured datasets.",
    mongodb: "Works better for larger datasets requiring massive horizontal scaling."
  }
];

export const rdbmsVsMongodbCore: ComparisonRow[] = [
  {
    attribute: "Data Architecture",
    mysql: "Relational database based on tables and rows.",
    mongodb: "Non-relational, document-oriented database."
  },
  {
    attribute: "Hierarchical Data",
    mysql: "Not naturally suitable for hierarchical data (requires multiple joined tables).",
    mongodb: "Perfectly suitable for hierarchical and nested data storage."
  },
  {
    attribute: "Schema Definition",
    mysql: "Has a predefined, static schema with rigid types.",
    mongodb: "Has a dynamic, schema-less structure per collection."
  },
  {
    attribute: "Guiding Paradigm",
    mysql: "Centers around ACID properties (Atomicity, Consistency, Isolation, Durability).",
    mongodb: "Centers around the CAP theorem and BASE model."
  },
  {
    attribute: "Execution Performance",
    mysql: "Slower for complex relationships across normalized tables.",
    mongodb: "Much faster due to document self-containment and sharding."
  }
];
