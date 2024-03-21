# SENA_Virtual_Waiter

# Tu Mesero Virtual

## EVIDENCIAS:

- [x] GA7-220501096-AA4-EV03 Componente frontend del proyecto formativo y proyectos de clase (listas de chequeo)

---

## APRENDIZ

William Alfonso Cortés Romero

---

**PROGRAMA:** TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SOFTWARE  
**FICHA:** 2627092 ANTES 2627093  
**SERVICIO NACIONAL DE APRENDIZAJE-SENA**  
**CENTRO DE FORMACIÓN COMERCIO Y TURISMO**  
**REGIONAL-QUINDÍO**  
**Año:** 2024

---

## Descripción del Proyecto

Este proyecto forma parte del Tecnólogo en Análisis y Desarrollo de Software del SENA. El proyecto "Tu Mesero Virtual" está diseñado para facilitar el proceso de solicitud de pedidos en un restaurante a través de un software que permite a los meseros tomar y gestionar pedidos de manera eficiente.

1. **Clonar el Repositorio:**
   Clona el repositorio desde GitHub en tu máquina local utilizando el siguiente comando:

```
git clone https://github.com/WilliamCortes/SENA_Virtual_Waiter.git
```

**Configurar la Base de Datos:**
Asegúrate de tener una base de datos PostgreSQL en ejecución.
Para ello debes configurar el archivo .env tomando como ejemplo el archivo **" .env.example "**

## Estructura del Proyecto

El proyecto está dividido en dos carpetas principales:

- ## **api**:

Esta carpeta contiene el servidor desarrollado con Nest.js. Nest.js es un framework de desarrollo de aplicaciones web en Node.js que utiliza TypeScript. Se eligió Nest.js debido a su enfoque modular, su arquitectura escalable y su soporte integrado para TypeScript, lo que permite un desarrollo más estructurado y mantenible.

## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript repositorio de inicio.

## Instalación

Para instalar las dependencias del proyecto, hay que ingresar a las carpta **" /api "** y ejecutar el siguiente comando en la terminal:

```bash
$ npm install
```

Esto instalará todas las dependencias definidas en el archivo package.json, incluyendo Nest y otras librerías necesarias.

## Ejecutando la aplicación back-end

Para ejecutar la aplicación en modo desarrollo, se utiliza el siguiente comando:

```bash
#desarrollo
$ npm run start

```

Abra [http://localhost:3000/api](http://localhost:3000/api) con su navegador para ver el resultado.

## Pruebas

El proyecto contiene configuración y ejemplos para poder ejecutar pruebas unitarias, de integración y obtener cobertura de código:

Para ejecutar las pruebas unitarias:

```bash
# pruebas unitarias
$ npm run test
```

---

- ## **app**:

Esta carpeta contiene la aplicación cliente construida con Next.js. Next.js es un framework de React que ofrece renderización del lado del servidor, enrutamiento simple y eficiente, y una amplia gama de herramientas para el desarrollo web moderno. Se eligió Next.js debido a su rendimiento, su facilidad de uso y su capacidad para crear aplicaciones web rápidas y eficientes.

Este es un proyecto [Next.js](https://nextjs.org/) arrancado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instalación

Para instalar las dependencias del proyecto, hay que ingresar a las carpta **" /app "** y ejecutar el siguiente comando en la terminal:

```bash
$ npm install
```

Esto instalará todas las dependencias definidas en el archivo package.json, incluyendo Next y otras librerías necesarias.

## Ejecutando la aplicación front-end

Primero, ejecuta el servidor de desarrollo:

```bash
#desarrollo
npm run dev
```

Abra [http://localhost:3001](http://localhost:3001) en su navegador para ver el resultado.

---

## Funcionalidades Principales

- **Gestión de Pedidos**: Permite a los meseros tomar y gestionar pedidos de los clientes de manera eficiente.
- **Gestión de Inventario**: Proporciona información en tiempo real sobre el inventario del restaurante, lo que permite ofrecer productos disponibles y evitar pedidos de productos agotados.

- **Alertas de Pedido Preparado**: Envía alertas al mesero cuando un pedido está listo para ser servido, lo que agiliza el proceso de entrega de pedidos a los clientes.

- **Generación de Facturas**: Permite generar facturas para los clientes, lo que facilita el proceso de pago en caja.

- **Generación de Reportes**: Permite generar reportes de ventas por mesa, por mesero, etc., lo que proporciona información valiosa para la gestión del restaurante.

Este proyecto ofrece una solución completa para la gestión de pedidos en un restaurante, mejorando la eficiencia y la experiencia del cliente.

### Repositorio: https://github.com/WilliamCortes/SENA_Virtual_Waiter

```

```
