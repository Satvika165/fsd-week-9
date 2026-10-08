import { MongoFeature, MongoArchitectureComponent } from '../types';

export const mongoOverview = {
  definition: "MongoDB is an open-source document-oriented NoSQL database designed for high-volume data storage and efficient processing. Instead of using tables and rows, MongoDB organizes data into collections and documents.",
  unitOfData: "Documents consisting of key-value pairs (fields) are the fundamental unit of data in MongoDB.",
  storageFormat: "MongoDB stores data internally in BSON (Binary JSON) format, which is a binary-encoded serialization of JSON documents supporting rich types and faster traversal.",
  maxDocumentSize: "16 Megabytes (16 MB) maximum size per BSON document."
};

export const mongoFeatures: MongoFeature[] = [
  {
    title: "High Performance",
    description: "Most data operations are significantly faster compared to traditional RDBMS because data is stored in contiguous document blocks without requiring multiple expensive table joins.",
    icon: "Gauge",
    notesDetail: "In-memory caching and optimized BSON serialization enable high-throughput read/write pipelines."
  },
  {
    title: "Auto Replication & High Availability",
    description: "Creates multiple copies of data across replica set members. If the primary node fails, an automatic election promotes a secondary replica to maintain uninterrupted service.",
    icon: "RefreshCw",
    notesDetail: "Data replicates itself to the previous consistent state, guaranteeing zero downtime and high availability."
  },
  {
    title: "Horizontal Scalability (Sharding)",
    description: "Distributes massive datasets across multiple physical machines using sharding. A shard key partitions data into chunks that are balanced across the cluster.",
    icon: "Layers",
    notesDetail: "Horizontal scaling (adding more machines) is far easier and more cost-effective than vertical scaling (upgrading CPU/RAM)."
  },
  {
    title: "Load Balancing",
    description: "Horizontal scaling and replica sets automatically balance incoming read and write workloads across nodes, preventing bottlenecks.",
    icon: "Scale",
    notesDetail: "Distributes client queries smoothly across cluster shards."
  },
  {
    title: "Indexing",
    description: "Every field in a MongoDB document can be indexed using primary and secondary indices, enabling lightning-fast query execution without searching every document.",
    icon: "Search",
    notesDetail: "Without indexing, MongoDB must perform a collection scan (checking every document sequentially)."
  },
  {
    title: "Aggregation Framework",
    description: "Allows complex computations on grouped data to produce computed results, functioning similarly to the SQL GROUP BY clause.",
    icon: "Cpu",
    notesDetail: "Offers 3 aggregation approaches: the Aggregation Pipeline, Map-Reduce functions, and single-purpose methods."
  },
  {
    title: "Ad Hoc Queries",
    description: "Supports ad hoc query filtering, field searches, range queries, and regular expression lookups on any document attribute.",
    icon: "FileCode",
    notesDetail: "Queries can return specific document fields and include user-defined JavaScript functions."
  },
  {
    title: "Large Media Storage",
    description: "Efficiently accommodates large media files and binary blobs exceeding the 16MB document limit using GridFS specification.",
    icon: "HardDrive",
    notesDetail: "Stores binary data chunks alongside document metadata."
  }
];

export const mongoArchitectureComponents: MongoArchitectureComponent[] = [
  {
    name: "_id",
    rdbmsEquivalent: "Primary Key",
    description: "A mandatory, unique identifier present in every MongoDB document.",
    details: "The _id field acts like a primary key. If a document is inserted without an _id field, MongoDB automatically generates a 12-byte ObjectId for it."
  },
  {
    name: "Database",
    rdbmsEquivalent: "Database (Catalog)",
    description: "A physical container holding collections of documents.",
    details: "Each database has its own set of files on the storage system. A single MongoDB server deployment can host multiple independent databases."
  },
  {
    name: "Collection",
    rdbmsEquivalent: "Table",
    description: "A grouping of MongoDB documents inside a database.",
    details: "Collections are schema-less: documents within the same collection can have differing fields and types, though they generally serve the same business domain."
  },
  {
    name: "Document",
    rdbmsEquivalent: "Row / Tuple",
    description: "The individual record stored within a collection, composed of field names and values.",
    details: "Documents are stored as BSON objects. They can contain primitive types, arrays, and nested sub-documents up to 16MB in size."
  },
  {
    name: "Field",
    rdbmsEquivalent: "Column",
    description: "A name-value pair inside a document.",
    details: "Analogous to columns in SQL. Fields in MongoDB are dynamic and do not require pre-declaration in a table schema."
  },
  {
    name: "Cursor",
    rdbmsEquivalent: "Result Set / Cursor",
    description: "A pointer to the result set of a database query.",
    details: "Clients iterate through a cursor in memory batches to retrieve query results efficiently without loading millions of rows at once."
  },
  {
    name: "JSON & BSON",
    rdbmsEquivalent: "Structured Storage / DDL",
    description: "The standard formats for representing and persisting MongoDB data.",
    details: "JSON (JavaScript Object Notation) provides human-readable text exchange; BSON (Binary JSON) provides fast binary serialization and rich data types for disk persistence."
  }
];
