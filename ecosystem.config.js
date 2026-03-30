module.exports = {
  apps: [
    {
      name: 'cloud-sql-auth-proxy',
      script: './cloud-sql-proxy',
      args: 'cafeteria-system-chamath:asia-southeast1:cafeteria-db-instance --private-ip',
      log_file: './logs/cloud-sql-auth-proxy.log',
      instances: 1,
      autorestart: true,
    },
    {
      name: 'user-service',
      script: 'java',
      args: '-jar user-service/target/user-service-1.0.0.jar --spring.config.import=configserver:http://10.148.0.6:9000',
      log_file: './logs/user-service.log',
      instances: 2,
    },
    {
      name: 'menu-service',
      script: 'java',
      args: '-jar menu-service/target/menu-service-1.0.0.jar --spring.config.import=configserver:http://10.148.0.6:9000',
      log_file: './logs/menu-service.log',
      instances: 2,
    },
    {
      name: 'order-service',
      script: 'java',
      args: '-jar order-service/target/order-service-1.0.0.jar --spring.config.import=configserver:http://10.148.0.6:9000',
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
