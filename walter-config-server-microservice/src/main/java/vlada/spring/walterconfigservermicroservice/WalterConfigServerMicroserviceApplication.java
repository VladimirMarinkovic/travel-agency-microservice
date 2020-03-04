package vlada.spring.walterconfigservermicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class WalterConfigServerMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(WalterConfigServerMicroserviceApplication.class, args);
    }

}
