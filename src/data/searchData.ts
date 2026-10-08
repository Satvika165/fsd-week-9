export interface SearchItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  targetSection: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    id: "search-acid-def",
    title: "ACID Principles & Transactions",
    category: "Transactions",
    snippet: "Atomicity, Consistency, Isolation, and Durability guarantees for database operations.",
    targetSection: "acid-section",
    keywords: ["acid", "transaction", "atomicity", "consistency", "isolation", "durability", "commit", "rollback", "rdbms"]
  },
  {
    id: "search-spring-security",
    title: "Securing REST APIs with Spring Security",
    category: "Security",
    snippet: "Authentication, authorization, spring-boot-starter-security, SecurityAutoConfiguration.",
    targetSection: "security-section",
    keywords: ["spring security", "authentication", "authorization", "rest api", "securityautoconfiguration", "starter", "pom.xml", "jwt", "iam", "password"]
  },
  {
    id: "search-junit",
    title: "JUnit & Unit Testing",
    category: "Testing",
    snippet: "Automated testing framework, @Test, @BeforeClass, @Before, @After, Assert class, CRUD testing.",
    targetSection: "junit-section",
    keywords: ["junit", "testing", "unit test", "manual", "automated", "assert", "asserttrue", "assertequals", "assertnotnull", "@test", "@beforeclass", "crud"]
  },
  {
    id: "search-nosql-intro",
    title: "NoSQL Database Introduction",
    category: "NoSQL",
    snippet: "Non-relational, schema-free data management systems for Big Data and horizontal scaling.",
    targetSection: "nosql-section",
    keywords: ["nosql", "non-relational", "schema-free", "big data", "carlo strozzi", "history", "benefits", "horizontal scaling", "sharding"]
  },
  {
    id: "search-nosql-types",
    title: "4 Types of NoSQL Databases",
    category: "NoSQL",
    snippet: "Key-Value, Column-Oriented, Graph, and Document-Oriented databases.",
    targetSection: "nosql-section",
    keywords: ["key-value", "column", "graph", "document", "redis", "cassandra", "neo4j", "mongodb", "hash table", "nodes", "edges"]
  },
  {
    id: "search-cap",
    title: "The CAP Theorem",
    category: "Distributed Systems",
    snippet: "Trade-offs between Consistency, Availability, and Partition Tolerance in distributed data stores.",
    targetSection: "cap-base-section",
    keywords: ["cap", "cap theorem", "consistency", "availability", "partition tolerance", "network partition", "cp", "ap", "ca"]
  },
  {
    id: "search-base",
    title: "BASE Model for Databases",
    category: "Distributed Systems",
    snippet: "Basically Available, Soft State, Eventual Consistency in modern distributed databases.",
    targetSection: "cap-base-section",
    keywords: ["base", "basically available", "soft state", "eventual consistency", "acid vs base"]
  },
  {
    id: "search-mongodb-arch",
    title: "MongoDB Architecture & Features",
    category: "MongoDB",
    snippet: "_id, Collection, Cursor, Database, Document, Fields, JSON and BSON 16MB document limit.",
    targetSection: "mongodb-section",
    keywords: ["mongodb", "_id", "collection", "cursor", "database", "document", "field", "bson", "json", "16mb", "sharding", "replica set"]
  },
  {
    id: "search-data-modeling",
    title: "MongoDB Data Modeling: Embedded vs Normalized",
    category: "MongoDB",
    snippet: "De-normalized embedded models vs referenced normalized models for employee records.",
    targetSection: "modeling-section",
    keywords: ["data modeling", "embedded", "de-normalized", "normalized", "referenced", "objectid", "employee", "personal_details"]
  },
  {
    id: "search-tools",
    title: "MongoDB Tools (mongosh, Compass, Atlas)",
    category: "MongoDB Tools",
    snippet: "Command line shell mongosh, Compass GUI, Community Server, and Atlas cloud platform.",
    targetSection: "tools-section",
    keywords: ["mongosh", "compass", "community server", "atlas", "shell", "show dbs", "use jsspn", "gui"]
  },
  {
    id: "search-datatypes",
    title: "MongoDB Data Types",
    category: "MongoDB",
    snippet: "String, Integer, Double, Boolean, Array, Object, Date, Timestamp, Null, BinData, ObjectId.",
    targetSection: "datatypes-section",
    keywords: ["datatypes", "string", "integer", "double", "boolean", "array", "object", "date", "isodate", "timestamp", "null", "bindata"]
  },
  {
    id: "search-operators",
    title: "MongoDB Query Operators",
    category: "MongoDB Operators",
    snippet: "Comparison ($eq, $gt, $in), Logical ($and, $or, $nor), Array ($all, $size, $elemMatch).",
    targetSection: "operators-section",
    keywords: ["operators", "$eq", "$gt", "$lt", "$gte", "$lte", "$in", "$ne", "$nin", "$and", "$or", "$nor", "$not", "$all", "$size", "$elemMatch"]
  },
  {
    id: "search-comparison",
    title: "MySQL vs MongoDB (10-Mark Question)",
    category: "Exam Comparison",
    snippet: "Official 10-point comparison table for December 2023, May 2024, and December 2024 exams.",
    targetSection: "comparison-section",
    keywords: ["mysql vs mongodb", "comparison", "difference", "10 marks", "exam question", "relational vs nosql"]
  },
  {
    id: "search-quiz",
    title: "Interactive MCQ Quiz (15 Questions)",
    category: "Practice",
    snippet: "Test your Week 9 knowledge with instant scoring and explanations.",
    targetSection: "quiz-section",
    keywords: ["quiz", "mcq", "test", "practice", "questions", "score"]
  },
  {
    id: "search-revision",
    title: "Quick Revision Mode",
    category: "Revision",
    snippet: "Rapid high-yield summary cards for last-minute exam preparation.",
    targetSection: "revision-section",
    keywords: ["revision", "summary", "quick revision", "notes", "key points"]
  }
];
