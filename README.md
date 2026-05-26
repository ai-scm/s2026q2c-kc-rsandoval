# Keycloak + Google Login + Aplicación Dummy

## Auto
- Configurar autenticación centralizada
- Integrar un proveedor externo de identidad (Google)
 Implementar una aplicación protegida mediante autenticación

---
 Tecnologías utilizadas

| Tecnología | Uso |
| Contenedorización |
| Keycloak | Gestión de identidad y acceso |
| Node.js | Backend aplicación dummy |
| Express | Framework web |
| Google OAuth2 | Autenticación externa |
| OpenID Connect | Protocolo de autenticación |

---

yecto

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
Dummy-app
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
node app.js
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

`

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
