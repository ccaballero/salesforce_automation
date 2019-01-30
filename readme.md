# Salesforce - Productos y Listas de Precios

Código de automatización de los casos de prueba en los componentes dentro del alcance del proyecto.

https://docs.google.com/spreadsheets/d/e/2PACX-1vTh2QobzTZQZxyr4AUjPF37ESYTlpJndrk851t1-v2kKznQ9gtRGwa20XgRnIjL6Pi7EQcMcQlLaVib/pubhtml

## Suites disponibles:

- **init:** verificación de disponibilidad del servicio.
- **login:** verificación de credenciales para autenticación.
- **products:** verificación de las funcionalidades de productos.
- **functional:** verificación de los casos de prueba funcionales.
- **acceptance:** verificación de los casos de prueba de aceptación.
- **negative:** verificación de los casos de prueba negativas.
- **domain:** verificación de los casos de prueba de dominio.

## Marcos de ejecución disponibles

- **standalone:** ejecución de las pruebas en modo local.
    ``` npm test ```
- **browserstack:** ejecución de las pruebas desde BrowserStack.
    ``` npm run browserstack ```
- **docker:** ejecución de las pruebas desde contenedores docker.
    ``` npm run docker ```

## Configuración del ambiente

    git clone https://github.com/DiplomadoControlCalidad01/sfdc-wdio-tests-01.git
    cd sfdc-wdio-tests-01/
    npm install
    cp test/config.dist.js test/config.js
    edit test/config.js # y editar las credenciales segun el caso.
    
    # Ejecución Standalone
    npm test # para la ejecución en modo standalone.
    
    # Ejecución BrowserStack
    npm run browserstack
    
    # Ejecución Docker
    docker-compose up -d
    npm run docker

