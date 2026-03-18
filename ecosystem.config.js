module.exports = {
  apps: [
    {
      name: 'user-service',
      script: 'java',
      args: ['-jar', 'user-service/target/user-service-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8081,
        SPRING_DATASOURCE_URL: 'jdbc:mysql://localhost:3306/cafeteria_users',
        CONFIG_SERVER_URI: 'http://localhost:8888',
        EUREKA_URI: 'http://localhost:8761/eureka'
      }
    },
    {
      name: 'menu-service',
      script: 'java',
      args: ['-jar', 'menu-service/target/menu-service-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8082,
        SPRING_DATASOURCE_URL: 'jdbc:mysql://localhost:3306/cafeteria_menu',
        GCS_BUCKET_NAME: 'cafeteria-menu-images',
        CONFIG_SERVER_URI: 'http://localhost:8888',
        EUREKA_URI: 'http://localhost:8761/eureka'
      }
    },
    {
      name: 'order-service',
      script: 'java',
      args: ['-jar', 'order-service/target/order-service-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8083,
        SPRING_DATASOURCE_URL: 'jdbc:mysql://localhost:3306/cafeteria_orders',
        CONFIG_SERVER_URI: 'http://localhost:8888',
        EUREKA_URI: 'http://localhost:8761/eureka'
      }
    },
    {
      name: 'kitchen-service',
      script: 'java',
      args: ['-jar', 'kitchen-service/target/kitchen-service-1.0.0.jar'],
      cwd: './',
      env: {
        SERVER_PORT: 8084,
        MONGODB_HOST: 'localhost',
        MONGODB_PORT: 27017,
        CONFIG_SERVER_URI: 'http://localhost:8888',
        EUREKA_URI: 'http://localhost:8761/eureka'
      }
    }
  ]
};
