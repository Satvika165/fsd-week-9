import { RevisionCard } from '../types';

export const quickRevisionCards: RevisionCard[] = [
  {
    id: "rev-acid",
    category: "Transactions",
    title: "ACID Principles",
    keyPoints: [
      "Transaction: A single logical unit of work that accesses and modifies database data.",
      "Atomicity: 'All or nothing' execution. Completes entirely or aborts without partial effects.",
      "Consistency: Enforces database constraints, rules, and triggers before and after transactions.",
      "Isolation: Concurrent operations execute independently without intermediate cross-effects.",
      "Durability: Committed data becomes permanent even if system power or servers crash."
    ],
    quickSummary: "ACID ensures strict data integrity and reliability for traditional RDBMS enterprise applications."
  },
  {
    id: "rev-security",
    category: "Security",
    title: "Spring Security Core Points",
    keyPoints: [
      "Starter Dependency: spring-boot-starter-security activates SecurityAutoConfiguration.",
      "Authentication: Verifies user identity ('WHO you are'). Default user is 'user' or 'root'.",
      "Authorization: Enforces permissions and resource access controls ('WHAT you can do').",
      "Dynamic Password: Generated on each application start and logged to console.",
      "Custom Static Credentials: Configured in application.properties via spring.security.user.name and spring.security.user.password.",
      "API Security: Protects endpoints against attacks; API Gateway acts as reverse proxy."
    ],
    quickSummary: "Provides application-level security, securing every controller API endpoint by default."
  },
  {
    id: "rev-junit",
    category: "Testing",
    title: "JUnit Testing Essentials",
    keyPoints: [
      "Verification & Validation: Testing confirms code functions as expected.",
      "Automated Testing: Tool-assisted test case execution; JUnit is strictly for unit testing.",
      "Visual Bar: Green for pass, Red for failure.",
      "Annotations: @Test (test method), @BeforeClass / @AfterClass (runs once), @Before / @After (runs per test), @Ignore (skip).",
      "Assert Methods: assertTrue, assertFalse, assertNull, assertNotNull, assertEquals, assertSame."
    ],
    quickSummary: "Catches bugs early, boosts developer motivation, and makes code more readable and reliable."
  },
  {
    id: "rev-nosql",
    category: "Databases",
    title: "NoSQL & The 4 Database Types",
    keyPoints: [
      "Definition: 'Not Only SQL' or 'Not SQL'. Non-relational, schema-free, avoids joins, easy to scale.",
      "Key-Value: Hash table storage (Redis, Memcached); e.g., shopping carts, sessions.",
      "Column-Oriented: Dynamic column storage (Cassandra, ScyllaDB); e.g., big data analytics.",
      "Graph: Nodes & Edges first-class relationships (Neo4j, Neptune); e.g., social graphs.",
      "Document: JSON/BSON hierarchical records (MongoDB, CouchDB); e.g., product catalogs.",
      "Benefits: High Scalability (Sharding = horizontal scaling) and High Availability (Auto-replication)."
    ],
    quickSummary: "Built for Big Data, horizontal scaling across commodity hardware, and developer agility."
  },
  {
    id: "rev-cap-base",
    category: "Distributed Systems",
    title: "CAP Theorem & BASE Model",
    keyPoints: [
      "CAP Theorem: Networked shared-data systems can only guarantee 2 of 3: Consistency, Availability, Partition Tolerance.",
      "Network Partitions: Inevitable in distributed systems; systems must pick CP or AP.",
      "Basically Available (BA): Spreads and replicates data to ensure continuous availability.",
      "Soft State (S): System state may change over time without input due to background sync.",
      "Eventual Consistency (E): System converges to consistency over time; reads available meanwhile."
    ],
    quickSummary: "The guiding distributed principles powering modern scalable NoSQL architectures."
  },
  {
    id: "rev-mongodb",
    category: "MongoDB",
    title: "MongoDB Architecture & Features",
    keyPoints: [
      "Hierarchy: Server -> Database -> Collection (Tables) -> Document (Rows) -> Fields (Columns).",
      "_id Field: Unique primary key mandatory in every document; auto-generates 12-byte ObjectId.",
      "BSON: Binary JSON storage format; maximum document size is 16MB.",
      "Cursor: Pointer to query result set iterated in memory batches.",
      "Data Models: Embedded (de-normalized, nested single doc) vs Normalized (referenced via ObjectId).",
      "Tools: MongoDB Community Server, mongosh CLI (show dbs, use db), Compass GUI, Atlas Cloud."
    ],
    quickSummary: "Document-oriented NoSQL engine offering indexing, sharding, replication, and high performance."
  },
  {
    id: "rev-operators",
    category: "MongoDB",
    title: "Essential MongoDB Operators",
    keyPoints: [
      "Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in (any match), $nin (no match).",
      "Logical: $and (all true), $or (at least one true), $nor (none true), $not (negates condition).",
      "Array: $all (contains all specified elements), $size (exact length), $elemMatch (element condition).",
      "Data Types: String, Integer, Double, Boolean, Array, Object, Date, Timestamp, Null, BinData."
    ],
    quickSummary: "Rich query operators power expressive, flexible document queries without SQL syntax."
  }
];
