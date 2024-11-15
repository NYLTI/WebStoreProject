package com.store.gateway;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.time.Duration;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class ServiceSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8010")
        .acceptHeader("application/json")
        .contentTypeHeader("application/json");

    // Scenario: Testing ProductController with spike test
    ScenarioBuilder productScenarioRampUp = scenario("Product Controller RampUp Test")
        .exec(http("Get All Products")
            .get("/v1/product/all")
            .check(status().is(200)))
        .pause(1)
        .exec(http("Add Product")
            .post("/v1/product/add")
            .body(StringBody("{\"name\": \"Test Product\", \"price\": 25.0}")).asJson()
            .check(status().is(201)))
        .pause(1);

    ScenarioBuilder productScenarioSpike = scenario("Product Controller Spike Test")
        .exec(http("Get All Products")
            .get("/v1/product/all")
            .check(status().is(200)))
        .pause(1)
        .exec(http("Add Product")
            .post("/v1/product/add")
            .body(StringBody("{\"name\": \"Test Product\", \"price\": 25.0}")).asJson()
            .check(status().is(201)))
        .pause(1);

    // Scenario: Testing ConsumerController with spike test
    ScenarioBuilder consumerScenarioRampUp = scenario("Consumer Controller RampUp Test")
        .exec(http("Initialize Registration")
            .post("/v1/consumer/initialRegistration")
            .body(StringBody("{\"username\": \"testuser\", \"password\": \"testpass\"}")).asJson()
            .check(status().is(201)))
        .pause(1)
        .exec(http("Login")
            .post("/v1/consumer/login")
            .body(StringBody("{\"username\": \"testuser\", \"password\": \"testpass\"}")).asJson()
            .check(status().is(202)))
        .pause(1)
        .exec(http("Check Email")
            .post("/v1/consumer/checkEmail")
            .body(StringBody("{\"email\": \"testuser@example.com\"}")).asJson()
            .check(status().is(200)))
        .pause(1);

    ScenarioBuilder consumerScenarioSpike = scenario("Consumer Controller Spike Test")
        .exec(http("Initialize Registration")
            .post("/v1/consumer/initialRegistration")
            .body(StringBody("{\"username\": \"testuser\", \"password\": \"testpass\"}")).asJson()
            .check(status().is(201)))
        .pause(1)
        .exec(http("Login")
            .post("/v1/consumer/login")
            .body(StringBody("{\"username\": \"testuser\", \"password\": \"testpass\"}")).asJson()
            .check(status().is(202)))
        .pause(1)
        .exec(http("Check Email")
            .post("/v1/consumer/checkEmail")
            .body(StringBody("{\"email\": \"testuser@example.com\"}")).asJson()
            .check(status().is(200)))
        .pause(1);

    // Scenario: Testing CartController with spike test
    ScenarioBuilder cartScenarioRampUp = scenario("Cart Controller RampUp Test")
        .exec(http("Get All Cart Items")
            .get("/v1/cart/all")
            .check(status().is(200)))
        .pause(1)
        .exec(http("Add Cart Item")
            .post("/v1/cart/add")
            .body(StringBody("{\"productId\": \"123\", \"quantity\": 2}")).asJson()
            .check(status().is(201)))
        .pause(1);

    ScenarioBuilder cartScenarioSpike = scenario("Cart Controller Spike Test")
        .exec(http("Get All Cart Items")
            .get("/v1/cart/all")
            .check(status().is(200)))
        .pause(1)
        .exec(http("Add Cart Item")
            .post("/v1/cart/add")
            .body(StringBody("{\"productId\": \"123\", \"quantity\": 2}")).asJson()
            .check(status().is(201)))
        .pause(1);

    {
        setUp(
            // Standard ramp-up for regular testing
            productScenarioRampUp.injectOpen(rampUsers(10).during(Duration.ofSeconds(20))),
            consumerScenarioRampUp.injectOpen(rampUsers(10).during(Duration.ofSeconds(20))),
            cartScenarioRampUp.injectOpen(rampUsers(10).during(Duration.ofSeconds(20))),

            // Spike testing - sudden high volume of users
            productScenarioSpike.injectOpen(atOnceUsers(100)).protocols(httpProtocol),
            consumerScenarioSpike.injectOpen(atOnceUsers(100)).protocols(httpProtocol),
            cartScenarioSpike.injectOpen(atOnceUsers(100)).protocols(httpProtocol)
        ).protocols(httpProtocol);
    }
}
