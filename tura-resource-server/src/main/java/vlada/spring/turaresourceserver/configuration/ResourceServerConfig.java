package vlada.spring.turaresourceserver.configuration;


import feign.RequestInterceptor;
import io.micrometer.core.instrument.util.IOUtils;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.security.oauth2.client.feign.OAuth2FeignRequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.DefaultOAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import java.io.IOException;



@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {


    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(accessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter accessTokenConverter() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        Resource resource = new ClassPathResource("public.txt");
        String publicKey = null;
        try {
            publicKey = IOUtils.toString(resource.getInputStream());

        } catch (final IOException e) {
            throw new RuntimeException();
        }
        converter.setVerifierKey(publicKey);
        return converter;
    }

    @Bean
    @Primary
    public DefaultTokenServices tokenServices() {
        DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setTokenStore(tokenStore());
        return defaultTokenServices;
    }


    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    @ConfigurationProperties(prefix = "security.oauth2.client")
    public ClientCredentialsResourceDetails oAuthDetails() {
        return new ClientCredentialsResourceDetails();
    }






    // OAuth2 REST-TEMPLATE CONFIG
    @Bean
    OAuth2RestTemplate oAuth2RestTemplate() {
        ResourceOwnerPasswordResourceDetails resourceDetails = new ResourceOwnerPasswordResourceDetails();
        resourceDetails.setAccessTokenUri(oAuthDetails().getAccessTokenUri());          // "http://localhost:8081/oauth/token"
        resourceDetails.setClientId(oAuthDetails().getClientId());                      // "tura-resource-client"
        resourceDetails.setClientSecret(oAuthDetails().getClientSecret());              // "tura-resource-secret"
        resourceDetails.setGrantType("password");
        resourceDetails.setUsername("admin");
        resourceDetails.setPassword("admin");
        resourceDetails.setClientAuthenticationScheme(AuthenticationScheme.header);
        return new OAuth2RestTemplate(resourceDetails);
    }




    // FEGIN CLIENT CONFIG
    @Bean
    RequestInterceptor oauth2FeignRequestInterceptor() {
        return new OAuth2FeignRequestInterceptor(new DefaultOAuth2ClientContext(), resource());
    }

    private OAuth2ProtectedResourceDetails resource() {
        ResourceOwnerPasswordResourceDetails resourceDetails = new ResourceOwnerPasswordResourceDetails();
        resourceDetails.setAccessTokenUri(oAuthDetails().getAccessTokenUri());     // "http://localhost:8081/oauth/token"
        resourceDetails.setClientId(oAuthDetails().getClientId());                 // "tura-resource-client"
        resourceDetails.setClientSecret(oAuthDetails().getClientSecret());         // "tura-resource-secret"
        resourceDetails.setGrantType("password");
        resourceDetails.setUsername("admin");
        resourceDetails.setPassword("admin");;
        return resourceDetails;
    }









}























//    @Bean
//    public OAuth2RestTemplate oAuth2RestTemplate() {
//        return new OAuth2RestTemplate(oAuthDetails());
//    }

//    @Bean
//    public RestTemplate restTemplate() {
//        return new RestTemplate(); // OAuth2RestTemplate(oAuthDetails());
//    }


//
//    public static OAuth2ClientAuthenticationProcessingFilter general(AuthorizationCodeResourceDetails client, ResourceServerProperties resourceServerProperties, String path, OAuth2ClientContext oauth2ClientContext) {
//        OAuth2ClientAuthenticationProcessingFilter oAuth2ClientAuthenticationFilter = new OAuth2ClientAuthenticationProcessingFilter(path){
//            protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
//                                                    FilterChain chain, Authentication authResult) throws IOException, ServletException {
//                super.successfulAuthentication(request, response, chain, authResult);
//                OAuth2AccessToken accessToken = restTemplate.getAccessToken();
////                log.warn(new Gson().toJson(authResult));
////                log.warn(new Gson().toJson(accessToken));
//            }
//        };
//        OAuth2RestTemplate oAuth2RestTemplate = new OAuth2RestTemplate(client, oauth2ClientContext);
//        oAuth2ClientAuthenticationFilter.setRestTemplate(oAuth2RestTemplate);
//        UserInfoTokenServices tokenServices = new UserInfoTokenServices(resourceServerProperties.getUserInfoUri(), client.getClientId());
//        tokenServices.setRestTemplate(oAuth2RestTemplate);
//        oAuth2ClientAuthenticationFilter.setTokenServices(tokenServices);
//        return oAuth2ClientAuthenticationFilter;
//    }


//
//    @Bean
//    RestTemplate restTemplate(OAuth2AuthorizedClientService clientService) {
//        return new RestTemplateBuilder()
//                .interceptors((httpRequest, bytes, execution) -> {
//                    OAuth2AuthenticationToken token = OAuth2AuthenticationToken.class.cast(
//                            SecurityContextHolder.getContext().getAuthentication());
//
//                    OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
//                            token.getAuthorizedClientRegistrationId(),
//                            token.getName());
//                    httpRequest.getHeaders().add(HttpHeaders.AUTHORIZATION, "Bearer" + client.getAccessToken().getTokenValue());
//
//                    return execution.execute(httpRequest, bytes);
//                })
//                .build();
//    }
//
//
//}



//    @Configuration
//    @ConditionalOnProperty(prefix = "security.oauth2.client", value = "grant-type", havingValue = "client_credentials")
//    public static class OAuthRestTemplateConfigurer {
//
//        @Bean
//        public OAuth2RestTemplate oauth2RestTemplate(OAuth2ProtectedResourceDetails details) {
//            OAuth2RestTemplate oAuth2RestTemplate = new OAuth2RestTemplate(details);
//
//            /* To validate if required configurations are in place during startup */
//            oAuth2RestTemplate.getAccessToken();
//            return oAuth2RestTemplate;
//        }
//    }
//
















