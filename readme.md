# Salesforce - Productos y Listas de Precios

Código de automatización de los casos de prueba en los componentes dentro del
alcance del proyecto, los casos de prueba estan descritos en el siguiente
documento:

https://docs.google.com/spreadsheets/d/e/2PACX-1vTh2QobzTZQZxyr4AUjPF37ESYTlpJndrk851t1-v2kKznQ9gtRGwa20XgRnIjL6Pi7EQcMcQlLaVib/pubhtml

## Suites disponibles:
Se han creado suites clasificados por el tipo de prueba y otros clasificados por
la funcionalidad que evalua, siendo estos los siguientes:

- **init:** verificación de disponibilidad del servicio.
- **login:** verificación de credenciales para autenticación.
- **products:** verificación de las funcionalidades de productos.
- **functional:** verificación de los casos de prueba funcionales.
- **acceptance:** verificación de los casos de prueba de aceptación.
- **negative:** verificación de los casos de prueba negativas.
- **domain:** verificación de los casos de prueba de dominio.

## Marcos de ejecución disponibles
Tambien se tienes disponibles diferentes formas para la ejecución en diferentes
entornos:

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

## Casos de Prueba y Tiempos de Ejecución
A continuación se presentan los scripts ejecutados y el tiempo que tomo su
ejecución.

    products/new.functional.js
      ✓ F002 - Clic en el botón «Nuevo», lanza el formulario de creación de producto
      ✓ F003 - Producto es registrado con los valores obligatorios establecidos después de accionado el botón «Guardar y nuevo»
      ✓ F004 - Formulario «Crear Producto» se cierra al accionar el botón «Cancelar»
      ✓ F005 - Formulario «Crear Producto» se cierra al accionar el botón «Cerrar esta ventana (X)»
      ✓ F006 - Mensaje «Se creó Producto "<Nombre de Producto>"» se muestra después de registrado un producto
    
    5 passing (2m, 29s)

    products/new.start.js
      ✓ F001 - Iniciador de Aplicación de salesforce muestra el enlace a «Productos»
    
    1 passing (46s)

    products/new.functional.js
      ✓ F002 - Clic en el botón «Nuevo», lanza el formulario de creación de producto
      ✓ F003 - Producto es registrado con los valores obligatorios establecidos después de accionado el botón «Guardar y nuevo»
      ✓ F004 - Formulario «Crear Producto» se cierra al accionar el botón «Cancelar»
      ✓ F005 - Formulario «Crear Producto» se cierra al accionar el botón «Cerrar esta ventana (X)»
      ✓ F006 - Mensaje «Se creó Producto "<Nombre de Producto>"» se muestra después de registrado un producto
    
    5 passing (2m, 38s)

    products/new.acceptance.js
      ✓ A001 - Producto es registrado con los valores obligatorios establecidos después de accionado el botón «Guardar»
    
    1 passing (1m, 8s)

    products/new.negative.js
      ✓ N001 - Clic en el botón «Guardar» para un formulario vacío envía el mensaje «Revise los errores de esta página»
    
    1 passing (57s)

    products/new.domain.js
      ✓ D001 - Formulario «Crear Producto» no realiza el registro, cuando el campo «Nombre del producto» tiene 0 caracteres
      ✓ D002 - Formulario «Crear Producto» realiza el registro, cuando el campo «Nombre del producto» tiene 1 carácter
      ✓ D003 - Formulario «Crear Producto» realiza el registro, cuando el campo «Nombre del producto» tiene 255 caracteres
      ✓ D004 - Formulario «Crear Producto» no realiza el registro, cuando el campo «Nombre del producto» tiene 256 caracteres
      ✓ D005 - Formulario «Crear Producto» realiza el registro, cuando el campo «Código del producto» tiene 0 caracteres
      ✓ D006 - Formulario «Crear Producto» realiza el registro, cuando el campo «Código del producto» tiene 255 caracteres
      ✓ D007 - Formulario «Crear Producto» no realiza el registro, cuando el campo «Código del producto» tiene 256 caracteres
      ✓ D008 - Formulario «Crear Producto» realiza el registro, cuando el campo «Descripción del producto» tiene 0 caracteres
      ✓ D009 - Formulario «Crear Producto» realiza el registro, cuando el campo «Descripción del producto» tiene 4000 caracteres
      ✓ D010 - Formulario «Crear Producto» no realiza el registro, cuando el campo «Descripción del producto» tiene 4001 caracteres
    
    10 passing (7m, 57s)

