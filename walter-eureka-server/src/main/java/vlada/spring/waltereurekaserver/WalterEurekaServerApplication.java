package vlada.spring.waltereurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class WalterEurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(WalterEurekaServerApplication.class, args);
    }

}
