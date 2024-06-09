## Use the eclipse-temurin:21-jdk-alpine as the base image
#FROM eclipse-temurin:21-jdk
#
## Set the working directory in the container
#WORKDIR /app
#
## Copy the compiled JAR file into the container
#COPY target/demo52-0.0.1-SNAPSHOT.jar /app/your-application.jar
#
## Expose the port your application runs on
#EXPOSE 8000
#
## Specify the command to run your application
#CMD ["java", "-jar", "your-application.jar"]
FROM openjdk:17

VOLUME /tmp

EXPOSE 8080

COPY target/demo52-0.0.1-SNAPSHOT.jar elderhub_back.jar

ENTRYPOINT ["java","-jar","/elderhub_back.jar"]