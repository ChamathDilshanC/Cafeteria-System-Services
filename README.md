# Cafeteria System - Business Services

Parent repository containing all business domain microservices.

## Services

- **user-service**: User authentication and management (Port 8081, MySQL, JWT)
- **menu-service**: Menu and food item management (Port 8082, MySQL, GCS)
- **order-service**: Order processing (Port 8083, MySQL, OpenFeign)
- **kitchen-service**: Kitchen operations (Port 8084, MongoDB)

## Architecture

This is a parent repository that contains individual services as git submodules.

## Build All Services

```bash
mvn clean install
```

## Run All Services

```bash
# Using PM2
pm2 start ecosystem.config.js

# Or build and run individually
cd user-service && mvn spring-boot:run
cd menu-service && mvn spring-boot:run
cd order-service && mvn spring-boot:run
cd kitchen-service && mvn spring-boot:run
```

## Tech Stack

- Java 25
- Spring Boot 4.0.3
- Spring Cloud 2025.1.0
- MySQL 8.0 (user, menu, order services)
- MongoDB 7.0 (kitchen service)
- Maven (Parent POM)

## Prerequisites

- Platform services running (config-server, service-registry, api-gateway)
- MySQL database
- MongoDB database

## Repository Structure

```
Cafeteria-System-Services/
├── user-service/        → Submodule
├── menu-service/        → Submodule
├── order-service/       → Submodule
├── kitchen-service/     → Submodule
├── pom.xml             → Parent POM
├── ecosystem.config.js → PM2 configuration
└── README.md
```

## Submodule Management

### Clone with submodules
```bash
git clone --recursive https://github.com/ChamathDilshanC/Cafeteria-System-Services.git
```

### Update submodules
```bash
git submodule update --remote --merge
```

---

**Part of**: [Cafeteria Management System](https://github.com/ChamathDilshanC/Cafeteria-System-Main)
