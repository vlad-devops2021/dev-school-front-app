# dev-school-front-app
Frontend part of dev school application.

## Installation
### Precondition
List of required tools:
<ul>
    <li>NODE v14.15.0</li>
    <li>Yarn v1.22.11</li>
    <li>Gradle v6.7.1 or gradlew</li>
    <li>Java 8</li>
</ul>

### Build

Use gradle inside root folder for app build.

```bash
gradlew jar
```

## Deploy

By default deployable JAR file can be found in
```bash
\dev-school-front-app\devschool-front-app-server\build\libs
```

Simple deploy can be done by java jar command.
```bash
java -jar devschool-front-app-server-1.0.0.jar
```
Possible deploy flags:
```bash
-port=<port> port of application deploy
-P:ktor.backend.port=<port> port of backend application
-P:ktor.backend.host=<host> address of backend application     
-P:ktor.backend.schema=<schema> schema of backend application   
```

Address of start page is <b>/dev-ops-school/index.html</b>
