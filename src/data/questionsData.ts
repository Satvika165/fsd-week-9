import { ImportantQuestion } from '../types';

export const importantQuestionsList: ImportantQuestion[] = [
  {
    id: "exam-1",
    type: "exam",
    title: "Compare the databases MySQL and MongoDB",
    marks: 10,
    examAppearance: "DECEMBER 2023 / MAY 2024 / DECEMBER 2024 (10 MARKS)",
    question: "Compare the databases MySQL and MongoDB across their architectural, operational, and data modeling characteristics.",
    solutionSummary: "A comprehensive 10-point comparison highlighting Relational vs NoSQL, Structured vs Unstructured data, Tables/Rows vs JSON documents, Schema constraints, Joins, Query languages, Scalability, and Failure recovery.",
    detailedAnswer: `1. Database Type: MySQL is a Relational Database (RDBMS); MongoDB is a NoSQL document-oriented database.
2. Data Suitability: MySQL is suitable for structured data with clear schema; MongoDB is suitable for unstructured / semi-structured data.
3. Representation: MySQL represents data as tables, rows, and columns; MongoDB represents data as JSON/BSON documents in collections.
4. Schema Requirement: MySQL requires explicit pre-defined tables and column declarations; MongoDB has dynamic schemas with no need to declare schemas beforehand.
5. Joins: MySQL allows relational JOIN operations; MongoDB does not natively rely on joins (relies on embedding and references).
6. Query Language: MySQL utilizes Structured Query Language (SQL); MongoDB query language is JavaScript/JSON-based.
7. Scalability & Suitability: MySQL is suitable when starting small databases that don't scale much; MongoDB is suitable for high availability with auto data recovery.
8. Failure Recovery: MySQL provides no built-in auto failure recovery; MongoDB supports automatic replica set failure recovery.
9. Speed & Performance: MySQL is slower due to join operations and disk I/O; MongoDB is faster due to contiguous document storage and memory caching.
10. Dataset Scale: MySQL works better for smaller structured datasets; MongoDB works better for massive horizontal scale.`
  },
  {
    id: "exam-2",
    type: "exam",
    title: "Secure REST APIs with Spring Security",
    marks: 10,
    examAppearance: "SEPTEMBER 2023 / JULY 2024 (10 MARKS)",
    question: "Demonstrate with simple code how to secure REST APIs with Spring Security.",
    solutionSummary: "Add spring-boot-starter-security to pom.xml, enable security with @EnableWebSecurity on main application, create a secured controller with @GetMapping, and configure static credentials in application.properties.",
    detailedAnswer: `Step 1: Add Starter Dependency in pom.xml:
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

Step 2: Create Main Application Class:
@SpringBootApplication
@EnableWebSecurity
public class SpringBasicSecurityApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBasicSecurityApplication.class, args);
    }
}

Step 3: Create Controller with REST Endpoint:
@RestController
@RequestMapping("/auth")
public class ApplicationController {
    @GetMapping("/getmsg")
    public String greeting() {
        return "Spring Security Example";
    }
}

Step 4: Configure Credentials in application.properties:
spring.security.user.name=niranjan
spring.security.user.password=murthy
server.port=8090

When accessing http://localhost:8090/auth/getmsg, Spring Security prompts for authentication before allowing access.`
  },
  {
    id: "short-1",
    type: "short",
    title: "What is a Transaction and what are ACID properties?",
    question: "Define a database transaction and concisely list the four ACID properties.",
    solutionSummary: "A transaction is a single logical unit of work that accesses and modifies database data. ACID stands for Atomicity, Consistency, Isolation, and Durability.",
    detailedAnswer: `A database transaction is a sequence of actions treated as a single logical unit of work that accesses and modifies data using read/write operations.

The ACID properties are:
1. Atomicity: Operations either complete entirely or do not execute at all ('all-or-nothing').
2. Consistency: Ensures changes satisfy all database constraints, triggers, and rules.
3. Isolation: Concurrent transactions execute without interfering with one another.
4. Durability: Once committed, updates become permanent and survive system crashes.`
  },
  {
    id: "short-2",
    type: "short",
    title: "Key JUnit Annotations",
    question: "Explain the purpose of @Test, @BeforeClass, @Before, and @Ignore annotations in JUnit.",
    solutionSummary: "Lifecycle hooks controlling when test methods execute: @Test defines a test method, @BeforeClass runs once per class, @Before runs before each test, and @Ignore skips execution.",
    detailedAnswer: `@Test: Marks a method as an executable test case.
@BeforeClass: Executes once before any test methods in the test class are executed (must be static).
@Before: Executes before each test case to initialize fresh testing state.
@After: Executes after each test case for cleanup.
@AfterClass: Executes once after all test methods finish.
@Ignore: Skips the test case during the test run.`
  },
  {
    id: "short-3",
    type: "short",
    title: "State the CAP Theorem and BASE Model",
    question: "State the CAP Theorem and explain what BASE stands for in distributed databases.",
    solutionSummary: "CAP states a distributed database can only strongly support 2 of 3: Consistency, Availability, Partition Tolerance. BASE stands for Basically Available, Soft State, Eventual Consistency.",
    detailedAnswer: `The CAP Theorem states that in the event of a network failure on a distributed database, it is possible to provide either consistency or availability—but not both (network partitions are inevitable).

The BASE Model stands for:
- Basically Available (BA): Spreads and replicates data to maintain uptime.
- Soft State (S): System state may change over time without user input.
- Eventual Consistency (E): Replicas converge to consistent values over time.`
  },
  {
    id: "long-1",
    type: "long",
    title: "Explain the 4 Types of NoSQL Databases",
    question: "Describe the four categories of NoSQL databases with their characteristics, examples, and use cases.",
    solutionSummary: "Key-Value (hash tables), Column-Oriented (dynamic columns), Graph (nodes & edges), and Document-Oriented (JSON/BSON documents).",
    detailedAnswer: `1. Key-Value Stores: Data stored as key-value pairs in a hash table with unique keys. Examples: Redis, Memcached. Use cases: Session caching, shopping carts, user preferences.
2. Column-Oriented: Stores data in tables, rows, and dynamic columns. Reduces memory overhead by reading only requested columns. Examples: Cassandra, ScyllaDB, Cosmos DB. Use cases: Big data analytics, telemetry.
3. Graph Databases: Stores entities as nodes and connections as edges (first-class citizens). Examples: Neo4j, Amazon Neptune. Use cases: Social networks, fraud detection, recommendation engines.
4. Document-Oriented: Stores data as semi-structured JSON/BSON/XML documents. Hierarchical nesting matches application domain objects. Examples: MongoDB, CouchDB. Use cases: E-commerce, catalogs, content systems.`
  },
  {
    id: "long-2",
    type: "long",
    title: "MongoDB Data Modeling: Embedded vs Normalized",
    question: "Compare the Embedded Data Model and the Normalized Data Model in MongoDB. When should you use each?",
    solutionSummary: "Embedded nests related data inside a single document for atomic reads; Normalized uses reference IDs to link separate collection documents.",
    detailedAnswer: `Embedded Data Model (De-normalized):
- Related data is stored inside the parent document (e.g., Personal_details and Address embedded in Employee).
- Advantages: Fast reads in a single query; avoids joins; atomic document updates.
- Best for: 1:1 or 1:bounded-few relationships, frequently co-queried data.

Normalized Data Model (Referenced):
- Related documents reside in separate collections and are linked via reference IDs (e.g. empDocID).
- When to use:
  1. When embedding causes severe data duplication that outweighs read speed benefits.
  2. To model complex Many-to-Many relationships.
  3. To model large or unbounded hierarchical datasets.`
  },
  {
    id: "practical-1",
    type: "practical",
    title: "CRUD Unit Testing with Spring Boot & JUnit",
    question: "Write a Spring Boot test class using JUnit and Assert methods to test Create, Read, Update, and Delete operations.",
    solutionSummary: "Annotations @SpringBootTest, @Autowired UserRepository, with testCreate, testReadAll, testUpdate, and testDelete methods using assertNotNull, assertThat, assertNotEquals.",
    detailedAnswer: `@SpringBootTest
class SpringbootFirstAppApplicationTests {
    @Autowired
    UserRepository userRepo;

    @Test
    public void testCreate() {
        User u = new User();
        u.setId(3L);
        u.setFirstname("Kavya");
        u.setLasttname("shree");
        userRepo.save(u);
        assertNotNull(userRepo.findById(902L).get());
    }

    @Test
    public void testReadAll() {
        List<User> list = userRepo.findAll();
        assertThat(list).size().isGreaterThan(0);
    }

    @Test
    public void testUpdate() {
        User u = userRepo.findById(902L).get();
        u.setFirstname("Murthy");
        userRepo.save(u);
        assertNotEquals("Niranjan", userRepo.findById(902L).get().getFirstname());
    }

    @Test
    public void testDelete() {
        userRepo.deleteById(852L);
        assertThat(userRepo.existsById(852L)).isFalse();
    }
}`
  }
];
