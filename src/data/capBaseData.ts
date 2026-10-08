import { CapPillar, BasePillar } from '../types';

export const capTheoremDefinition = {
  overview: "The CAP theorem (originally introduced as the CAP principle) is a belief from theoretical computer science about distributed data stores. It claims that in the event of a network failure on a distributed database, it is possible to provide either consistency or availability—but not both.",
  tradeoffLaw: "A networked shared-data system can only strongly support two of the three properties simultaneously: Consistency, Availability, or Partition Tolerance (CP, AP, or CA)."
};

export const capPillars: CapPillar[] = [
  {
    key: 'C',
    title: "Consistency",
    meaning: "All clients see the exact same data at the same time, regardless of which node they connect to.",
    inCapContext: "Once data is successfully written, any subsequent read request across any node returns that most recent write. Refers to sequential consistency (a very strong consistency model).",
    realWorldExample: "After an e-commerce order status updates to 'Shipped', every user and admin immediately views 'Shipped' across all distributed nodes."
  },
  {
    key: 'A',
    title: "Availability",
    meaning: "The database is always responsive to incoming read and write requests without downtime.",
    inCapContext: "Every non-failing node must return a valid response (not an error or timeout) for every read and write request in a reasonable amount of time. The keyword is 'every'.",
    realWorldExample: "A search engine or social media feed responds instantly to query requests even if some backend cluster nodes are slow or partitioned."
  },
  {
    key: 'P',
    title: "Partition Tolerance",
    meaning: "The system continues to function smoothly despite arbitrary packet loss or network communication splits between servers.",
    inCapContext: "Servers can be partitioned into multiple disjoint groups that cannot communicate with each other. If part of the database is partitioned, unaffected parts continue operating, and the system gracefully recovers once the partition heals.",
    realWorldExample: "A fiber cut splits a data center in Europe from one in the US; the system keeps running independently rather than crashing completely."
  }
];

export const capCombinations = [
  {
    pair: "CP (Consistency + Partition Tolerance)",
    description: "System prioritizes strict consistency. If a network partition occurs, partitioned nodes refuse to serve stale reads or conflicting writes until the partition heals.",
    examples: "MongoDB, Google BigTable, Apache HBase",
    bestFor: "Financial transactions, inventory reservations, critical records"
  },
  {
    pair: "AP (Availability + Partition Tolerance)",
    description: "System prioritizes 100% uptime and responsiveness. During network splits, all nodes accept reads and writes, achieving consistency eventually.",
    examples: "Apache Cassandra, CouchDB, Amazon Dynamo",
    bestFor: "Social media feeds, telemetry, shopping carts, analytics collection"
  },
  {
    pair: "CA (Consistency + Availability)",
    description: "System guarantees both consistency and availability, but cannot tolerate network partitions. Generally only achievable on a single physical node or perfectly connected local network.",
    examples: "Traditional RDBMS (MySQL, PostgreSQL, Oracle) on a single server",
    bestFor: "Centralized enterprise applications without distributed clustering"
  }
];

export const baseModelPillars: BasePillar[] = [
  {
    letter: "BA",
    name: "Basically Available",
    description: "Ensures availability of data by spreading and replicating it across nodes of the database cluster. The database is responsive all the time as per CAP theorem, even during partial node failures.",
    textbookMeaning: "Instead of enforcing rigid locking for immediate consistency, the system stays online and available for reads and writes."
  },
  {
    letter: "S",
    name: "Soft State",
    description: "System state may change over time, even without direct user input, due to background replication and node synchronization.",
    textbookMeaning: "The BASE model delegates the responsibility of handling intermediate state changes from the database engine to the developers."
  },
  {
    letter: "E",
    name: "Eventual Consistency",
    description: "The system guarantees that if no new updates are made, all replicas will eventually converge to the same consistent value.",
    textbookMeaning: "BASE does not obligate immediate consistency, but that does not mean it never achieves it. Until it does, reads are still possible (even if slightly delayed)."
  }
];

export const acidVsBaseComparison = [
  { feature: "Primary Focus", acid: "Strict data integrity & consistency", base: "High availability & massive scalability" },
  { feature: "Consistency Model", acid: "Immediate sequential consistency", base: "Eventual consistency over time" },
  { feature: "Schema Model", acid: "Fixed, rigid, predefined schema", base: "Flexible, dynamic, schema-free" },
  { feature: "Scaling Strategy", acid: "Vertical scaling (bigger hardware)", base: "Horizontal scaling (sharding across clusters)" },
  { feature: "Transaction Model", acid: "Pessimistic locking, ACID guarantees", base: "Optimistic, soft-state replication" },
  { feature: "Representative DBs", acid: "MySQL, PostgreSQL, Oracle", base: "MongoDB, Cassandra, DynamoDB" }
];
