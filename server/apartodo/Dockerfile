
# 1. Java 21 이미지를 사용하여 기본 이미지 선택
FROM openjdk:21-jdk-slim

# 2. JAR 파일을 컨테이너로 복사
COPY build/libs/apartodo-0.0.1-SNAPSHOT.jar app.jar

# 3. 컨테이너가 실행될 때 실행할 명령어 정의
ENTRYPOINT ["java","-jar","/app.jar"]

# 4. Spring Boot가 사용할 포트 번호 (기본: 8080)
EXPOSE 8080
