import { AcidProperty } from '../types';

export const transactionDefinition = {
  textbookSummary: "A database transaction is a sequence of actions that are treated as a single unit of work. These actions should either complete entirely or take no effect at all.",
  notesSummary: "A transaction is a single logical unit of work that accesses and possibly modifies the contents of a database. Transactions access data using read and write operations.",
  importance: "Transaction management is an important part of RDBMS-oriented enterprise applications to ensure data integrity and consistency. In order to maintain consistency before and after the transaction, certain properties called ACID properties are followed.",
  transactionalSystem: "If a database operation has these ACID properties, it can be called an ACID transaction, and data storage systems that apply these operations are called transactional systems."
};

export const acidProperties: AcidProperty[] = [
  {
    letter: "A",
    name: "Atomicity",
    tagline: "All or Nothing Execution",
    definition: "If any operation is performed on the data, either it should be executed completely or should not be executed at all.",
    textbookQuote: "These actions should either complete entirely or take no effect at all.",
    example: "In a bank money transfer from Account A to Account B: debiting A and crediting B must both complete. If debit succeeds but credit fails, the transaction is rolled back completely so money is not lost.",
    iconName: "Zap"
  },
  {
    letter: "C",
    name: "Consistency",
    tagline: "Preserving Invariants & Constraints",
    definition: "Consistency guarantees that changes made within a transaction are consistent with database constraints. This includes all rules, constraints, and triggers.",
    textbookQuote: "If the data gets into an illegal state, the whole transaction fails.",
    example: "If an account balance constraint specifies that balance cannot be negative, any transaction that attempts to leave the balance below zero will be rejected.",
    iconName: "CheckCircle2"
  },
  {
    letter: "I",
    name: "Isolation",
    tagline: "Concurrent Independent Execution",
    definition: "Isolation is the property of a database where no data should affect the other one and may occur concurrently.",
    textbookQuote: "If two operations are being performed concurrently, they may not affect the value of one another until completion.",
    example: "Two ATM withdrawals happening simultaneously on the same bank account operate in isolated environments; neither sees intermediate uncommitted balances of the other.",
    iconName: "ShieldAlert"
  },
  {
    letter: "D",
    name: "Durability",
    tagline: "Permanent Persistence Post-Commit",
    definition: "Ensures that the data after the successful execution of the operation becomes permanent in the database.",
    textbookQuote: "Even in the event of a system crash, power loss, or server failure, committed data remains securely preserved.",
    example: "Once an airline booking transaction displays 'Booking Confirmed', a power cut at the server data center will not wipe out the confirmed ticket.",
    iconName: "HardDrive"
  }
];

export const transactionLifecycle = [
  { step: 1, title: "Transaction Begins", desc: "A single logical unit of work is initiated with defined read/write operations." },
  { step: 2, title: "Read & Write Ops", desc: "Data items are queried and modified in memory buffers while maintaining isolation." },
  { step: 3, title: "Constraint Validation", desc: "Database constraints, triggers, and rules are evaluated for consistency." },
  { step: 4, title: "Commit or Rollback", desc: "If all ops succeed, changes are made permanent (Durability); on error, changes abort (Atomicity)." }
];
