# Keycloak + Google Login + Aplicación Dummy

## Autor

Ricardo Sandoval

---

# Descripción del proyecto

Este proyecto implementa un entorno local de autenticación y autorización utilizando Keycloak, Docker y una aplicación dummy en Node.js.

La solución incluye:

- Instalación local de Keycloak usando Docker
- Persistencia de datos mediante volúmenes
- Creación de un Realm personalizado
- Configuración de autenticación federada con Google
- Registro de una aplicación cliente
- Implementación de login usando OpenID Connect
- Aplicación dummy protegida con Keycloak

---

# Objetivos

- Comprender el funcionamiento básico de Keycloak
- Configurar autenticación centralizada
- Integrar un proveedor externo de identidad (Google)
- Implementar una aplicación protegida mediante autenticación

---

# Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Docker | Contenedorización |
| Keycloak | Gestión de identidad y acceso |
| Node.js | Backend aplicación dummy |
| Express | Framework web |
| Google OAuth2 | Autenticación externa |
| OpenID Connect | Protocolo de autenticación |

---

# Arquitectura de la solución

```text
Usuario
   │
   ▼
Aplicación Node.js
   │
   ▼
Keycloak
   │
   ▼
Google Login
```

---

# Estructura del proyecto

```text
s2026q2a-kc-rsandoval/
│
├── docker-compose.yml
├── README.md
├── keycloak_data/
│
└── app/
    ├── package.json
    ├── package-lock.json
    ├── app.js
    └── node_modules/
```

---

# Instalación y ejecución

## 1. Clonar repositorio

```bash
git clone git@github.com:ai-scm/s2026q2a-kc-rsandoval.git
```

---

## 2. Ingresar al proyecto

```bash
cd s2026q2a-kc-rsandoval
```

---

# Levantar Keycloak con Docker

## Ejecutar contenedor

```bash
docker compose up -d
```

---

## Acceder a Keycloak

```text
http://localhost:8080
```

---

## Credenciales administrador

```text
usuario: admin
password: admin123
```

---

# Configuración de Realm

## Realm creado

```text
semillero-realm
```

---

# Configuración del cliente

## Cliente

```text
hola-mundo-app
```

## Redirect URI

```text
http://localhost:3000/*
```

---

# Configuración de Google Login

## Pasos realizados

1. Creación de proyecto en Google Cloud Console
2. Configuración OAuth Consent Screen
3. Creación de credenciales OAuth Client ID
4. Configuración de Redirect URI
5. Integración del Identity Provider Google en Keycloak

---

# Redirect URI configurada en Google

```text
http://localhost:8080/realms/semillero-realm/broker/google/endpoint
```

---

# Aplicación Dummy

La aplicación fue desarrollada utilizando Node.js y Express.

La autenticación se realiza mediante Keycloak usando OpenID Connect.

Una vez autenticado el usuario, la aplicación muestra:

```text
Hola Mundo, <usuario>
```

---

# Instalación de dependencias

Ingresar a la carpeta app:

```bash
cd app
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar aplicación

```bash
npm start
```

---

# Acceder a la aplicación

```text
http://localhost:3000
```

---

# Flujo de autenticación

1. Usuario accede a la aplicación
2. Aplicación redirige a Keycloak
3. Usuario selecciona login con Google
4. Google autentica usuario
5. Keycloak recibe autenticación
6. Usuario retorna autenticado a la aplicación
7. Aplicación muestra mensaje personalizado

---

# Evidencias

## Keycloak funcionando

Agregar screenshot aquí.

---

## Realm creado

Agregar screenshot aquí.

---

## Identity Provider Google

Agregar screenshot aquí.

---

## Aplicación dummy autenticada

Agregar screenshot aquí.

---

# Problemas encontrados

## Problema

Error:

```text
npm error Missing script: "start"
```

## Solución

Se agregó el script start en package.json:

```json
"scripts": {
  "start": "node app.js"
}
```

---

# Conceptos aprendidos

- Docker
- Contenedores
- IAM
- OAuth2
- OpenID Connect
- Keycloak
- Realm
- Clients
- Identity Providers
- Federated Authentication

---

# Referencias

## Keycloak Official Documentation

https://www.keycloak.org/documentation

## Docker Documentation

https://docs.docker.com/

## Google Cloud Console

https://console.cloud.google.com/

---

# Resultado final

Se logró implementar exitosamente:

- Keycloak en local
- Persistencia mediante Docker Volumes
- Realm personalizado
- Login federado con Google
- Aplicación dummy autenticada
- Flujo Authorization Code funcionando correctamente
