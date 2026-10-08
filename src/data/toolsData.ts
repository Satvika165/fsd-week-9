export const mongoTools = [
  {
    id: "community-server",
    title: "MongoDB Community Server",
    role: "Core Database Engine",
    description: "The free, open-source, on-premise database server that stores data in BSON format and provides distributed cluster orchestration.",
    installSteps: [
      "Visit www.mongodb.com and navigate to MongoDB Community Edition.",
      "Select version, platform (e.g., Windows 64-bit 8.1+ MSI), and package.",
      "Run the downloaded installer and follow setup wizard instructions.",
      "Configures MongoDB service running locally on standard port 27017."
    ]
  },
  {
    id: "mongosh",
    title: "MongoDB Shell (mongosh)",
    role: "Interactive CLI & Node.js REPL",
    description: "The quickest way to connect, configure, query, and administrative tasks on MongoDB deployments. Functions as a full JavaScript and Node.js 16.x REPL environment.",
    installSteps: [
      "Download mongosh ZIP/MSI package from the MongoDB Download Center.",
      "Extract or install to your system, adding bin directory to PATH.",
      "Launch terminal/mongosh.exe and connect to local server.",
      "Execute interactive database commands."
    ],
    sampleCommands: [
      { cmd: "show dbs", output: "admin   40.00 KiB\nconfig  12.00 KiB\nlocal   40.00 KiB", explanation: "Displays the list of all databases existing on the server." },
      { cmd: "use jsspn", output: "switched to db jsspn", explanation: "Switches current session context to database 'jsspn' (created automatically on first insert)." },
      { cmd: "db.students.insertOne({ name: 'John', age: 20 })", output: "{ acknowledged: true, insertedId: ObjectId('...') }", explanation: "Inserts a sample document into 'students' collection." }
    ]
  },
  {
    id: "compass",
    title: "MongoDB Compass",
    role: "Official GUI Client",
    description: "An intuitive graphical interface allowing developers to visually explore, inspect, and analyze database contents without requiring prior knowledge of query syntax.",
    installSteps: [
      "Download MongoDB Compass from the Products menu on mongodb.com.",
      "Install and launch the GUI application.",
      "Connect via connection string (e.g. mongodb://localhost:27017)."
    ],
    features: [
      "Visual query builder and document viewer (JSON & Table views)",
      "Index management and query execution plan inspection",
      "Real-time server performance statistics and charts",
      "Interactive JSON schema validation rule designer"
    ]
  },
  {
    id: "atlas",
    title: "MongoDB Atlas",
    role: "Cloud Database-as-a-Service (DBaaS)",
    description: "Fully-managed cloud database platform that hosts databases across AWS, Azure, and Google Cloud, eliminating manual server configuration and maintenance.",
    features: [
      "Strong enterprise-grade end-to-end security & compliance",
      "More precise data analysis and integrated telemetry dashboards",
      "Easy elastic scalability with zero downtime",
      "24/7 technical support and automated backup recovery"
    ]
  }
];
