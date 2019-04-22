# Salesforce - Productos y Listas de Precios

Código de automatización de los casos de prueba en los componentes dentro del
alcance del proyecto, los casos de prueba están descritos en el siguiente
documento:

https://docs.google.com/spreadsheets/d/e/2PACX-1vTh2QobzTZQZxyr4AUjPF37ESYTlpJndrk851t1-v2kKznQ9gtRGwa20XgRnIjL6Pi7EQcMcQlLaVib/pubhtml

## Suites disponibles:
Se han creado suites clasificados por el tipo de prueba y otros clasificados por
la funcionalidad que evalúa, siendo estos los siguientes:

- **init:** verificación de disponibilidad del servicio.
- **login:** verificación de credenciales para autenticación.
- **products:** verificación de las funcionalidades de productos.
- **functional:** verificación de los casos de prueba funcionales.
- **acceptance:** verificación de los casos de prueba de aceptación.
- **negative:** verificación de los casos de prueba negativas.
- **domain:** verificación de los casos de prueba de dominio.

## Marcos de ejecución disponibles
También se tienes disponibles diferentes formas para la ejecución en diferentes
entornos:

- **standalone:** ejecución de las pruebas en modo local.
    ``` npm test ```
- **browserstack:** ejecución de las pruebas desde BrowserStack.
    ``` npm run browserstack ```
- **docker:** ejecución de las pruebas desde contenedores docker.
    ``` npm run docker ```

## Configuración del ambiente

    git clone https://github.com/ccaballero/salesforce_automation.git
    cd salesforce_automation/
    npm install
    cp config.dist.js config.js
    edit config.js # y editar las credenciales según el caso.

    # Ejecución Standalone
    npm test # para la ejecución en modo standalone.

    # Ejecución BrowserStack
    npm run browserstack

    # Ejecución Docker
    docker-compose up -d
    npm run docker

## Casos de Prueba y Tiempos de Ejecución
A continuación se presentan los scripts ejecutados y el tiempo que tomó su
ejecución.

| Script        | Ejecución   |
| ------------- | ----------- |
| 001.F001.js   |     45s     |
| 002.F002.js   |     58s     |
| 003.A001.js   |   1m24s     |
| 004.F003.js   |   1m09s     |
| 005.F004.js   |     59s     |
| 006.F005.js   |     55s     |
| 007.N001.js   |   1m05s     |
| 008.F006.js   |   1m31s     |
| 009.D001.js   |   1m21s     |
| 010.D002.js   |   1m28s     |
| 011.D003.js   |   1m40s     |
| 012.D004.js   |   1m02s     |
| 013.D005.js   |   1m32s     |
| 014.D006.js   |   1m38s     |
| 015.D007.js   |   1m02s     |
| 016.D008.js   |   1m18s     |
| 017.D009.js   |   2m20s     |
| 018.D010.js   |   2m        |
| 019.F007.js   |   2m46s     |
| 020.F008.js   |   2m52s     |
| 021.F009.js   |   2m49s     |
| 022.N002.js   |   1m58s     |
| 023.F010.js   |     59s     |
| 024.F011.js   |   2m04s     |
| 025.F012.js   |   1m56s     |
| 026.F013.js   |   2m11s     |
| 027.N003.js   |   2m14s     |
| 028.F014.js   |   1m57s     |
| 029.N004.js   |   2m13s     |
| 030.F015.js   |   2m04s     |
| 031.F016.js   |   2m13s     |
| 032.F017.js   |   1m28s     |
| 033.N005.js   |   1m13s     |
| 034.F018.js   |   1m53s     |
| 035.A002.js   |   2m08s     |
| 036.N006.js   |     57s     |

