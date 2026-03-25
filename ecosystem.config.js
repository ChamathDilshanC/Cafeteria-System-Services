module.exports = {
  apps: [
    // auth proxy server start first
    {
      name: 'cloud-sql-auth-proxy',
      script:
        './cloud-sql-proxy mineral-balm-491310-u1:asia-southeast1:cafeteria-db-instance --private-ip',
      log_file: './logs/cloud-sql-auth-proxy.log',
      instances: 1,
    },
    {
      name: 'user-service',
      script: 'java -jar user-service/target/user-service-1.0.0.jar',
      log_file: './logs/user-service.log',
      instances: 2,
    },
    {
      name: 'menu-service',
      script: 'java -jar menu-service/target/menu-service-1.0.0.jar',
      log_file: './logs/menu-service.log',
      instances: 2,
    },
    {
      name: 'order-service',
      script: 'java -jar order-service/target/order-service-1.0.0.jar',
      log_file: './logs/order-service.log',
      instances: 2,
    },
    {
      name: 'kitchen-service',
      script: 'java -jar kitchen-service/target/kitchen-service-1.0.0.jar',
      log_file: './logs/kitchen-service.log',
      instances: 2,
    },
  ],
};
