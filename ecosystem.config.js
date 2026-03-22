module.exports = {
  apps: [
    {
      name: 'user-service',
      script: 'java',
      args: ['-jar', 'user-service/target/user-service-1.0.0.jar'],
      instances: 2,
      cwd: './',
      log_file: './logs/user-service.log',
    },
    {
      name: 'menu-service',
      script: 'java',
      args: ['-jar', 'menu-service/target/menu-service-1.0.0.jar'],
      instances: 2,
      cwd: './',
      log_file: './logs/menu-service.log',
    },
    {
      name: 'order-service',
      script: 'java',
      args: ['-jar', 'order-service/target/order-service-1.0.0.jar'],
      instances: 2,
      cwd: './',
      log_file: './logs/order-service.log',
    },
    {
      name: 'kitchen-service',
      script: 'java',
      args: ['-jar', 'kitchen-service/target/kitchen-service-1.0.0.jar'],
      instances: 2,
      cwd: './',
      log_file: './logs/kitchen-service.log',
    },
  ],
};
