import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the acronym 'ACID' stand for in database transaction management?",
    options: [
      "Atomicity, Consistency, Isolation, and Durability",
      "Accuracy, Concurrency, Integrity, and Durability",
      "Atomicity, Compatibility, Isolation, and Distribution",
      "Access, Consistency, Indexing, and Durability"
    ],
    correctAnswer: 0,
    explanation: "As stated in the textbook and notes, ACID stands for Atomicity, Consistency, Isolation, and Durability, which are the four foundational properties ensuring reliable transactions.",
    topicTag: "ACID Principles"
  },
  {
    id: 2,
    question: "When spring-boot-starter-security is added to pom.xml, which class provides the initial default security configuration?",
    options: [
      "SecurityAutoConfiguration",
      "WebSecurityBootstrap",
      "DefaultAuthConfigurer",
      "SecurityInitializer"
    ],
    correctAnswer: 0,
    explanation: "Adding spring-boot-starter-security includes the SecurityAutoConfiguration class containing the initial/default security configuration.",
    topicTag: "Spring Security"
  },
  {
    id: 3,
    question: "What happens in Spring Security if a password is NOT configured in application.properties?",
    options: [
      "The application fails to start with a fatal security exception",
      "The application disables security and allows unauthenticated access",
      "A default password is randomly generated and printed in the console log",
      "The default password automatically defaults to 'password123'"
    ],
    correctAnswer: 2,
    explanation: "If you don't configure spring.security.user.password, Spring Security generates a random password at startup and prints it to the console (e.g., 'Using default security password: ...').",
    topicTag: "Spring Security"
  },
  {
    id: 4,
    question: "In JUnit testing, which annotation is executed only ONCE, before starting all test cases in the class?",
    options: [
      "@Before",
      "@BeforeClass",
      "@TestInit",
      "@AfterClass"
    ],
    correctAnswer: 1,
    explanation: "@BeforeClass is used to specify that the method will be called only once, before starting all the test cases.",
    topicTag: "JUnit Testing"
  },
  {
    id: 5,
    question: "What does the Assert class method 'assertSame(Object expected, Object actual)' verify in JUnit?",
    options: [
      "It checks if two objects have identical hash codes",
      "It checks if two objects refer to the exact same object in memory",
      "It calls .equals() to check value equivalence",
      "It verifies that neither object is null"
    ],
    correctAnswer: 1,
    explanation: "As defined in the notes, assertSame(Object expected, Object actual) asserts that two objects refer to the same object (reference equality).",
    topicTag: "JUnit Testing"
  },
  {
    id: 6,
    question: "According to the course materials, what does the term 'NoSQL' stand for?",
    options: [
      "'Non SQL' only",
      "'Not Only SQL' or 'Not SQL'",
      "'New Organized SQL'",
      "'Never Oriented SQL'"
    ],
    correctAnswer: 1,
    explanation: "The chapter notes state: NoSQL database stands for 'Not Only SQL' or 'Not SQL'.",
    topicTag: "NoSQL Fundamentals"
  },
  {
    id: 7,
    question: "Who originally coined the term 'NoSQL' in 1998 for a lightweight open-source relational database?",
    options: [
      "Johan Oskarsson",
      "Carlo Strozzi",
      "Doug Cutting",
      "Michael Stonebraker"
    ],
    correctAnswer: 1,
    explanation: "In 1998, Carlo Strozzi used the term NoSQL for his lightweight, open-source relational database that did not expose SQL.",
    topicTag: "NoSQL History"
  },
  {
    id: 8,
    question: "Which type of NoSQL database stores entities as nodes and relationships as edges with unique identifiers?",
    options: [
      "Key-value Pair Based",
      "Column-oriented Database",
      "Graph-based Database",
      "Document-oriented Database"
    ],
    correctAnswer: 2,
    explanation: "A graph database stores entities as nodes with relationships as edges. Every node and edge carries a unique identifier.",
    topicTag: "NoSQL Database Types"
  },
  {
    id: 9,
    question: "What is 'sharding' as used in NoSQL horizontal scalability?",
    options: [
      "Compressing database backup files into archives",
      "Partitioning data and placing it on multiple machines while preserving order",
      "Adding more CPU and RAM to a single existing server",
      "Encrypting sensitive user passwords before disk write"
    ],
    correctAnswer: 1,
    explanation: "NoSQL databases use sharding (dividing a larger part into smaller parts). Partitioning data and placing it on multiple machines in such a way that the order of the data is preserved is sharding.",
    topicTag: "NoSQL Scalability"
  },
  {
    id: 10,
    question: "In the CAP Theorem, what does Partition Tolerance (P) guarantee?",
    options: [
      "Zero read latency across all international clients",
      "The system continues to function even if network communication among servers is broken or partitioned",
      "Every single server maintains an identical hardware configuration",
      "Data is automatically normalized across tabular schemas"
    ],
    correctAnswer: 1,
    explanation: "Partition Tolerance means that the system should continue to function even if the communication among the servers is not stable or split into partitioned groups.",
    topicTag: "CAP Theorem"
  },
  {
    id: 11,
    question: "In the BASE distributed database model, what does the acronym stand for?",
    options: [
      "Basic Allocation, Stable State, Exact Consistency",
      "Basically Available, Soft State, Eventual Consistency",
      "Binary Access, Synchronized State, Elastic Consistency",
      "Broad Availability, Shared State, Eventual Convergence"
    ],
    correctAnswer: 1,
    explanation: "BASE stands for Basically Available, Soft state, and Eventual consistency.",
    topicTag: "BASE Model"
  },
  {
    id: 12,
    question: "What is the maximum allowed size for a single BSON document in MongoDB?",
    options: [
      "4 MB",
      "8 MB",
      "16 MB",
      "64 MB"
    ],
    correctAnswer: 2,
    explanation: "As stated in the textbook (Section 9.8.2), the maximum size of a BSON document in MongoDB is 16MB.",
    topicTag: "MongoDB Architecture"
  },
  {
    id: 13,
    question: "In MongoDB architecture, what is a 'Cursor'?",
    options: [
      "A primary key generated automatically by MongoDB",
      "A pointer to the result set of a query that clients can iterate through",
      "A graphical mouse tool inside MongoDB Compass",
      "A transaction lock placed on a collection"
    ],
    correctAnswer: 1,
    explanation: "A cursor is a pointer to the result set of a query. Clients can iterate through a cursor to retrieve results.",
    topicTag: "MongoDB Architecture"
  },
  {
    id: 14,
    question: "Which MongoDB array operator matches documents whose array contains ALL the specified values in the query condition?",
    options: [
      "$in",
      "$all",
      "$elemMatch",
      "$size"
    ],
    correctAnswer: 1,
    explanation: "$all matches arrays that contain all the specified values in the query condition, regardless of element order.",
    topicTag: "MongoDB Operators"
  },
  {
    id: 15,
    question: "In MongoDB data modeling, what is the Embedded Data Model also known as?",
    options: [
      "De-normalized data model",
      "Referenced data model",
      "Relational schema model",
      "Distributed partition model"
    ],
    correctAnswer: 0,
    explanation: "In the embedded data model, all related data is stored in a single document; it is also known as the de-normalized data model.",
    topicTag: "MongoDB Data Modeling"
  }
];
