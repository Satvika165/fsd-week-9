import { NoSqlType } from '../types';

export const nosqlOverview = {
  acronymMeaning: "NoSQL stands for 'Not Only SQL' or 'Not SQL'.",
  definition: "NoSQL is a non-relational Data Management System that provides a mechanism for storage and retrieval of data modeled in ways other than tabular relations, without requiring a fixed schema.",
  dbmsCategories: [
    { title: "RDBMS", desc: "Relational Database Management Systems (tabular, structured, fixed schema, ACID compliance)." },
    { title: "OLAP", desc: "Online Analytical Processing (multidimensional analytical processing for business intelligence)." },
    { title: "NoSQL", desc: "Not Only SQL (non-relational, schema-free, horizontally scalable, distributed data storage)." }
  ],
  whyNoSQL: [
    "Avoids expensive SQL joins and rigid schema migrations.",
    "Handles massive Big Data and real-time high-throughput applications (e.g., Twitter, Facebook, Google collecting terabytes of user data daily).",
    "Stores structured, semi-structured, unstructured, and polymorphic data seamlessly.",
    "Optimizes for developer productivity and low-cost commodity hardware rather than expensive storage constraints."
  ],
  features: [
    {
      title: "Non-relational",
      desc: "Never follows the relational model; eliminates flat fixed-column tables; works with self-contained aggregates; requires no ORM or data normalization; omits complex joins and rigid ACID overhead."
    },
    {
      title: "Schema-free",
      desc: "Databases have relaxed or zero schema definitions. Allows heterogeneous data structures to live harmoniously within the exact same collection/domain."
    },
    {
      title: "Simple API",
      desc: "Provides easy-to-use interfaces for low-level data manipulation and selection; relies on lightweight text-based HTTP REST protocols with JSON; acts as web-enabled internet-facing services."
    },
    {
      title: "Distributed Architecture",
      desc: "Executes in a cluster across multiple nodes; provides auto-scaling and automatic fail-over capabilities; trades immediate consistency for massive scalability and throughput (Eventual Consistency)."
    },
    {
      title: "Shared-Nothing Environment",
      desc: "Nodes do not share memory or disk storage, eliminating single points of failure and bottleneck contentions."
    },
    {
      title: "Low-Cost Hardware",
      desc: "Runs smoothly on clusters of affordable commodity servers instead of expensive proprietary enterprise hardware."
    }
  ],
  historyTimeline: [
    { year: "1998", event: "Carlo Strozzi coined the term 'NoSQL' for his lightweight, open-source relational database that did not use SQL." },
    { year: "2000", event: "Neo4j graph database was launched, introducing graph-based storage for connected entities." },
    { year: "2004", event: "Google launched BigTable, pioneering distributed column-family storage for planetary scale." },
    { year: "2005", event: "CouchDB document database was launched, offering JSON-based document storage with HTTP REST APIs." },
    { year: "2007", event: "Amazon released its milestone research paper on Amazon Dynamo, formalizing distributed key-value storage and eventual consistency." },
    { year: "2008", event: "Facebook open-sourced the Cassandra project, combining BigTable data models with Dynamo distribution." },
    { year: "2009", event: "The term 'NoSQL' was reintroduced by Johan Oskarsson to describe rapidly emerging distributed, non-relational databases." }
  ],
  benefits: {
    scalability: {
      title: "High Scalability (Horizontal Scaling via Sharding)",
      desc: "NoSQL databases use sharding (dividing a larger dataset into smaller parts) for horizontal scaling. Horizontal scaling means adding more standard machines to handle data load, whereas vertical scaling means adding more RAM/CPU to an existing single machine (which is expensive and hits physical limits).",
      examples: "MongoDB, Cassandra"
    },
    availability: {
      title: "High Availability (Auto-Replication)",
      desc: "Built-in auto-replication creates redundant copies of data across multiple cluster nodes. In case of any hardware or network failure, the database automatically recovers data from another node to the previous consistent state without downtime."
    }
  }
};

export const nosqlTypes: NoSqlType[] = [
  {
    id: "key-value",
    title: "Key-Value Store",
    subTitle: "Hash Table Storage",
    description: "The simplest type of NoSQL database. Every data element is stored as a key-value pair consisting of an attribute name (key) and a value, functioning like a hash table.",
    storageMechanism: "Hash table where each key is completely unique. The associated value can be a JSON object, BLOB (Binary Large Object), or string.",
    keyCharacteristics: [
      "Key is unique identifier; value is an opaque payload",
      "Extremely fast O(1) read/write lookups",
      "Like a relational table with only two columns: key and value"
    ],
    examples: ["Memcached", "Redis", "Oracle Coherence"],
    useCases: ["Shopping carts", "User session state", "User preferences & profiles", "Fast caching"]
  },
  {
    id: "column-oriented",
    title: "Column-Oriented (Column Family)",
    subTitle: "Dynamic Columnar Storage",
    description: "Stores data in tables, rows, and dynamic columns. Unlike relational tables where every row must share the exact same columns, each row here can have completely different columns.",
    storageMechanism: "Data is physically stored by column families rather than row-by-row. Reading only requested columns skips unneeded data, reducing memory consumption.",
    keyCharacteristics: [
      "Columns are of homogeneous types, enabling high data compression",
      "Ultra-fast aggregation over billions of rows",
      "Created to process very large amounts of data distributed over many machines"
    ],
    examples: ["Apache Cassandra", "DataStax", "Microsoft Azure Cosmos DB", "ScyllaDB"],
    useCases: ["Big Data Analytics", "Financial time-series", "Aggregating yearly sales totals", "High-write telemetry"]
  },
  {
    id: "graph",
    title: "Graph Database",
    subTitle: "Nodes & Edges Storage",
    description: "Stores entities as nodes and the relationships between those entities as edges. Connections are first-class citizens stored directly in the database rather than implied through joins.",
    storageMechanism: "Nodes represent entities (e.g. a person) and edges represent direct relationships (e.g. 'friends with', 'purchased'). Every node and edge carries a unique identifier and properties.",
    keyCharacteristics: [
      "Explicit first-class relationship pointers",
      "Traverses multi-hop connections without expensive relational joins",
      "Perfect for deeply interconnected data topologies"
    ],
    examples: ["Neo4j", "Amazon Neptune"],
    useCases: ["Social media follower graphs", "Fraud detection networks", "Recommendation engines", "Knowledge graphs"]
  },
  {
    id: "document-oriented",
    title: "Document-Oriented",
    subTitle: "JSON / BSON Hierarchical Storage",
    description: "Stores and retrieves data as key-value pairs where the value part is stored as a semi-structured document (JSON, BSON, or XML). Documents can be deeply nested and indexed.",
    storageMechanism: "Data objects match application domain models directly, drastically eliminating object-relational mapping (ORM) impedance mismatch. Evaluated and indexed natively by the database engine.",
    keyCharacteristics: [
      "Documents support flexible, nested hierarchical fields",
      "Specific nested elements can be indexed for lightning-fast queries",
      "No assembly/disassembly required between application code and database"
    ],
    examples: ["MongoDB", "Apache CouchDB", "Cloudant"],
    useCases: ["Content management systems", "E-commerce product catalogs", "Mobile app backends", "User profiles with nested details"]
  }
];
