module.exports = {
  apps: [
    {
      name: "user-service",
      script: "java -jar user-service/target/user-service-1.0.0.jar",
      log_file: "./logs/user-service.log",
      instances: 2
    },
    {
      name: "menu-service",
      script: "java -jar menu-service/target/menu-service-1.0.0.jar",
      log_file: "./logs/menu-service.log",
      instances: 2
    },
    {
      name: "order-service",
      script: "java -jar order-service/target/order-service-1.0.0.jar",
      log_file: "./logs/order-service.log",
      instances: 2
    },
    {
      name: "kitchen-service",
      script: "java -jar kitchen-service/target/kitchen-service-1.0.0.jar",
      log_file: "./logs/kitchen-service.log",
      instances: 2
    }
  ]
};
