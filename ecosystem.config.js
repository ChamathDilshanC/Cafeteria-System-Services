module.exports = {
  apps: [
    {
      name: 'user-service',
      script: 'java',
      args: ['-jar', '-Dserver.port=0', 'user-service/target/user-service-1.0.0.jar'],
      instances: 1,
      cwd: './',
      log_file: './logs/user-service.log',
      env_production: {
        CONFIG_SERVER_URI: 'http://config.platform:9000',
        EUREKA_URI: 'http://vm-node-a.platform:8761/eureka/,http://vm-node-b.platform:8761/eureka/,http://vm-node-c.platform:8761/eureka/'
      }
    },
    {
      name: 'menu-service',
      script: 'java',
      args: ['-jar', '-Dserver.port=0', 'menu-service/target/menu-service-1.0.0.jar'],
      instances: 1,
      cwd: './',
      log_file: './logs/menu-service.log',
      env_production: {
        CONFIG_SERVER_URI: 'http://config.platform:9000',
        EUREKA_URI: 'http://vm-node-a.platform:8761/eureka/,http://vm-node-b.platform:8761/eureka/,http://vm-node-c.platform:8761/eureka/'
      }
    },
    {
      name: 'order-service',
      script: 'java',
      args: ['-jar', '-Dserver.port=0', 'order-service/target/order-service-1.0.0.jar'],
      instances: 1,
      cwd: './',
      log_file: './logs/order-service.log',
      env_production: {
        CONFIG_SERVER_URI: 'http://config.platform:9000',
        EUREKA_URI: 'http://vm-node-a.platform:8761/eureka/,http://vm-node-b.platform:8761/eureka/,http://vm-node-c.platform:8761/eureka/'
      }
    },
    {
      name: 'kitchen-service',
      script: 'java',
      args: ['-jar', '-Dserver.port=0', 'kitchen-service/target/kitchen-service-1.0.0.jar'],
      instances: 1,
      cwd: './',
      log_file: './logs/kitchen-service.log',
      env_production: {
        CONFIG_SERVER_URI: 'http://config.platform:9000',
        EUREKA_URI: 'http://vm-node-a.platform:8761/eureka/,http://vm-node-b.platform:8761/eureka/,http://vm-node-c.platform:8761/eureka/'
      }
    },
  ],
};
