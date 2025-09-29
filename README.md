# 🐾 Backend - Administrador de Pacientes Veterinaria  

Este repositorio corresponde al **backend** del administrador de pacientes de veterinaria.  
Se encarga de manejar la API REST, autenticación, confirmación de cuentas, recuperación de contraseñas y conexión con la base de datos.  

## 🚀 Tecnologías utilizadas  
- Node.js + Express  
- MongoDB Atlas  
- JWT (JSON Web Tokens)  
- Nodemailer + Mailtrap (para envío de emails de prueba)  
- Render (deploy del backend)  
- Postman (pruebas de la API)  

## 📌 Funcionalidades principales  
- Registro de usuarios con confirmación por email  
- Autenticación con JWT  
- Recuperación y cambio de contraseña mediante enlace enviado al email  
- CRUD de pacientes (crear, listar, editar, eliminar)  
- Gestión de perfil (editar datos, cambiar contraseña)  

## 📂 Rutas principales  

### Área pública  
```js
POST    /api/usuarios         → Registrar usuario  
GET     /api/usuarios/confirmar/:token → Confirmar cuenta  
POST    /api/usuarios/login   → Autenticar usuario  
POST    /api/usuarios/olvide-password → Solicitar recuperación  
GET     /api/usuarios/olvide-password/:token → Comprobar token  
POST    /api/usuarios/olvide-password/:token → Guardar nueva contraseña
```

### Área privada (requiere JWT)
```js
GET     /api/usuarios/perfil           → Obtener perfil  
PUT     /api/usuarios/perfil/:id       → Actualizar perfil  
PUT     /api/usuarios/actualizar-password → Cambiar contraseña  
```

### Pacientes (requiere JWT)
```js
POST    /api/pacientes      → Agregar paciente  
GET     /api/pacientes      → Listar pacientes  
GET     /api/pacientes/:id  → Obtener paciente por ID  
PUT     /api/pacientes/:id  → Editar paciente  
DELETE  /api/pacientes/:id  → Eliminar paciente  
