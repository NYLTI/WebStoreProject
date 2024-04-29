package com.store.gateway;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}
	
	@Bean
	RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("cr", rs -> rs.path("/v1/consumer/**")
						.uri("lb://ms-consumer"))
				.route("pr", rs -> rs.path("/v1/product/**")
						.uri("lb://ms-product"))
				.route("pr", rs -> rs.path("/v1/cart/**")
						.uri("lb://ms-cart"))
				.build();
	}

}
