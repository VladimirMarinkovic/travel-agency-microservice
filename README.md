# Travel Agency -  microservice

This microservices-based system consists of the following services:

* **config-server**   - service uses Spring Cloud Config Server for running configuration server in the native mode. The configuration files are placed on the classpath/shared.

* **eureka-server**   - servce uses Spring Cloud Netflix Eureka as an embedded discovery server.

* **gateway-service** - service uses Spring Cloud Netflix Zuul for running Spring Boot application that acts as a proxy/gateway.It uses Ribbon as Load Balancer.

* **auth-service**    - service uses OAuth2 and JWT to set up authorization server.It also has the ability to register new users using Spring Data JPA and MySql.

* **zaposleni-resource-server** -  REST service created with Spring Boot.Performs basic CRUD operations on **employees**. 

* **putnici-resource-server**   -  REST service created with Spring Boot.Performs basic CRUD operations on **passengers**.

* **vozaci-resource-server**    -  REST service created with Spring Boot.Performs basic CRUD operations on **drivers**.

* **tura-resource-server**      - service performs basic CRUD operations on information of **tour**. 
Uses  **Feign Client** to communicate with passengers and drivers resource servers with implementation of **Hystrix** fallback method.

* **angular-client** - client service created with Angular 8 CLI. Admin template implements user registration and authorization. Contains angular **material data table**  of registered users and employees with the ability to perform basic CRUD operations.Other functionalities are in progress.



#Images of project:
1. Microservices Architecture
![Architecture](https://github.com/VladimirMarinkovic/travel-agency-microservice/blob/master/walter-config-server-microservice/src/main/resources/images/architecture.jpg)

2. Login page
![Login](https://github.com/VladimirMarinkovic/travel-agency-microservice/blob/master/walter-config-server-microservice/src/main/resources/images/login.jpg)
username: admin   password: admin

3. Employees Data Table
![Zaposleni](https://github.com/VladimirMarinkovic/travel-agency-microservice/blob/master/walter-config-server-microservice/src/main/resources/images/zaposleni.jpg)

4. Auth Server (OAuth2 + Jwt)
![Auth](https://github.com/VladimirMarinkovic/travel-agency-microservice/blob/master/walter-config-server-microservice/src/main/resources/images/auth.jpg)

4. Tour Content
![Tura](https://github.com/VladimirMarinkovic/travel-agency-microservice/blob/master/walter-config-server-microservice/src/main/resources/images/turasadrzaj.jpg)
