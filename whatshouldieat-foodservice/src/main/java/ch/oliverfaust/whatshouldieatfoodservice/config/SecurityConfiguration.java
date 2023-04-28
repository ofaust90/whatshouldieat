package ch.oliverfaust.whatshouldieatfoodservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
   
   @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http
                .authorizeHttpRequests(authorize -> authorize
                    //public without token
                    .requestMatchers("/fooditem").permitAll()
                    // only with valid token
                    .requestMatchers("/user/**")
                    .authenticated()
                    //.hasAuthority("SCOPE_message:read")
                 //   .anyRequest().authenticated()
                )
               // .oauth2ResourceServer(oauth2 -> oauth2
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt
                );
            return http.build();
    
    }
}