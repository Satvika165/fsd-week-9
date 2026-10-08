export const springSecurityConcepts = {
  definition: "Spring Security is an application-level security framework which provides various security features like authentication and authorization to create secure Java Enterprise Applications.",
  purpose: "Spring Security ensures that each and every API written in the controller is authenticated before processing client requests.",
  coreAreas: [
    {
      name: "Authentication",
      desc: "The process of knowing and identifying the user that wants to access the application. Determines WHO the user is."
    },
    {
      name: "Authorization",
      desc: "The process to allow authority to perform actions in the application. It enables developers to set access controls for protected resources. Determines WHAT the user can do."
    }
  ],
  defaultBehavior: [
    "Adding spring-boot-starter-security activates SecurityAutoConfiguration containing default security rules.",
    "Authentication is enabled by default for all incoming controller endpoints.",
    "Content negotiation is automatically used to determine if HTTP Basic or formLogin should be presented.",
    "By default, the username is 'user' (or 'root' depending on configuration).",
    "A dynamic password is randomly generated on every application boot and printed to the console log: 'Using default security password: c8be15de-4488-4490-9dc6-fab3f91435c6'."
  ]
};

export const codeExamples = {
  pomXml: `<!-- pom.xml: Spring Boot Starter Security Dependency -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`,

  mainApp: `// SpringBasicSecurityApplication.java
package com.example.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class SpringBasicSecurityApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBasicSecurityApplication.class, args);
    }
}`,

  controller: `// ApplicationController.java
package com.example.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class ApplicationController {

    @GetMapping("/getmsg")
    public String greeting() {
        return "Spring Security Example";
    }
}`,

  appProperties: `# application.properties
# Custom static credentials and custom server port
spring.security.user.name=niranjan
spring.security.user.password=murthy
server.port=8090`
};

export const authFlowSteps = [
  {
    step: 1,
    title: "User Request",
    actor: "Client / Browser",
    desc: "User requests a protected REST API endpoint (e.g., http://localhost:8090/auth/getmsg) via browser, Postman, or Swagger."
  },
  {
    step: 2,
    title: "Authentication Interception",
    actor: "Spring Security Filter",
    desc: "Security filter intercepts request and challenges client with HTTP Basic or formLogin. Client provides username & password (or JWT bearer token)."
  },
  {
    step: 3,
    title: "Credential Verification",
    actor: "Security Context",
    desc: "Framework checks credentials against configured properties (e.g. niranjan/murthy) or user details store."
  },
  {
    step: 4,
    title: "Authorization & Token Validation",
    actor: "Authorization Manager",
    desc: "Validates permissions and scopes. In token-based architectures (IAM/JWT), verifies access token in Authorization header."
  },
  {
    step: 5,
    title: "Controller Execution & Response",
    actor: "Protected REST API",
    desc: "Authorized request reaches ApplicationController and returns the payload (e.g., 'Spring Security Example')."
  }
];

export const apiSecurityConcepts = {
  apiSecurityDef: "Application Programming Interface (API) security refers to the practice of preventing or mitigating attacks on APIs. APIs serve as backend infrastructure for web and mobile apps, handling sensitive data transfers.",
  apiGatewayDef: "An API Gateway is an API management tool that sits between a client and a collection of backend services. It acts as a reverse proxy to accept API calls, aggregates services to fulfill them, and returns the response."
};
