import { JunitAnnotation, AssertMethod } from '../types';

export const junitFundamentals = {
  testingDef: "Testing is the process of checking an application that it is working as expected. In other words, testing is a process of verification and validation.",
  unitTestingDef: "Unit testing is the testing of an individual unit (class/method) or group of related units.",
  manualVsAutomated: [
    {
      type: "Manual Testing",
      desc: "The process of executing a test case manually without any tool support."
    },
    {
      type: "Automated Testing",
      desc: "The process of executing a test case with tool support (such as JUnit or TestNG)."
    }
  ],
  junitDef: "JUnit is an open-source unit testing framework for Java programmers. It is strictly used for unit testing. (Integration testing is typically done by TestNG).",
  testCaseDef: "A unit test case is a part of code which executes to check that another part of the code works as expected.",
  visualFeedback: "JUnit displays execution progress visually: a green bar/graph when all tests run smoothly, and turns red immediately if any test fails.",
  reasonsForUnitTesting: [
    "Find bugs early in the development phase, significantly increasing code reliability.",
    "Enables the developer to invest more time in reading the code than writing it.",
    "Makes the codebase more readable, maintainable, reliable, and bug-free.",
    "Boosts developer confidence and motivation by confirming existing code remains intact."
  ]
};

export const junitAnnotations: JunitAnnotation[] = [
  {
    annotation: "@Test",
    meaning: "Identifies and marks a method as a test method to be executed by the test runner.",
    lifecycleStage: "Test Execution",
    exampleSnippet: "@Test\npublic void testUserCreation() {\n    // test logic\n}"
  },
  {
    annotation: "@BeforeClass",
    meaning: "Specifies that the annotated static method will be executed only once, before starting all test cases in the class.",
    lifecycleStage: "Class Setup (Once)",
    exampleSnippet: "@BeforeClass\npublic static void setUpBeforeClass() {\n    // initialize expensive resources (DB connection, server)\n}"
  },
  {
    annotation: "@AfterClass",
    meaning: "Specifies that the annotated static method will be executed only once, after finishing all test cases in the class.",
    lifecycleStage: "Class Teardown (Once)",
    exampleSnippet: "@AfterClass\npublic static void tearDownAfterClass() {\n    // cleanup shared resources\n}"
  },
  {
    annotation: "@Before",
    meaning: "Specifies that the method will be invoked before each individual test case (@Test method).",
    lifecycleStage: "Pre-Test Setup (Per test)",
    exampleSnippet: "@Before\npublic void setUp() {\n    // re-initialize fresh mock data before every test\n}"
  },
  {
    annotation: "@After",
    meaning: "Specifies that the method will be invoked after each individual test case completes.",
    lifecycleStage: "Post-Test Cleanup (Per test)",
    exampleSnippet: "@After\npublic void tearDown() {\n    // reset state or delete temporary test files\n}"
  },
  {
    annotation: "@Ignore",
    meaning: "Instructs the test runner to skip/ignore the execution of the specified test case.",
    lifecycleStage: "Ignored / Skipped",
    exampleSnippet: "@Ignore\n@Test\npublic void testUnderDevelopment() {\n    // temporarily skipped during build\n}"
  }
];

export const assertMethods: AssertMethod[] = [
  {
    method: "assertTrue",
    parameters: "(boolean condition)",
    description: "Asserts that the specified boolean condition evaluates to true.",
    example: "assertTrue(userRepo.existsById(101L));"
  },
  {
    method: "assertFalse",
    parameters: "(boolean condition)",
    description: "Asserts that the specified boolean condition evaluates to false.",
    example: "assertFalse(userRepo.existsById(999L));"
  },
  {
    method: "assertNull",
    parameters: "(Object obj)",
    description: "Asserts that the specified object reference is null.",
    example: "assertNull(session.getAttribute('expiredToken'));"
  },
  {
    method: "assertNotNull",
    parameters: "(Object obj)",
    description: "Asserts that the specified object reference is not null.",
    example: "assertNotNull(userRepo.findById(902L).get());"
  },
  {
    method: "assertEquals",
    parameters: "(Object expected, Object actual)",
    description: "Asserts that two objects are equal according to their equals() implementation.",
    example: "assertEquals(\"ACTIVE\", user.getStatus());"
  },
  {
    method: "assertSame",
    parameters: "(Object expected, Object actual)",
    description: "Asserts that two object references refer to the exact same object instance in memory (== comparison).",
    example: "assertSame(cachedInstance, service.getInstance());"
  }
];

export const crudTestCode = `// SpringbootFirstAppApplicationTests.java
package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@SpringBootTest
class SpringbootFirstAppApplicationTests {

    @Autowired
    UserRepository userRepo;

    // CREATE Operation Test
    @Test
    public void testCreate() {
        User u = new User();
        u.setId(3L);
        u.setFirstname("Kavya");
        u.setLasttname("shree");
        userRepo.save(u);
        assertNotNull(userRepo.findById(902L).get());
    }

    // READ ALL Operation Test
    @Test
    public void testReadAll() {
        List<User> list = userRepo.findAll();
        assertThat(list).size().isGreaterThan(0);
    }

    // UPDATE Operation Test
    @Test
    public void testUpdate() {
        User u = userRepo.findById(902L).get();
        u.setFirstname("Murthy");
        userRepo.save(u);
        assertNotEquals("Niranjan", userRepo.findById(902L).get().getFirstname());
    }

    // DELETE Operation Test
    @Test
    public void testDelete() {
        userRepo.deleteById(852L);
        assertThat(userRepo.existsById(852L)).isFalse();
    }
}`;
