# Arquitectura de Archivos

## 1. Propósito

Define la estructura oficial del proyecto.

Debe respetarse en todo el código.

---

## 2. Estructura principal

```text
src/
├── assets/
├── boot/
├── css/
├── i18n/

├── pages/
│   ├── manager/
│   │   ├── dashboard/
│   │   ├── users/
│   │   └── settings/
│   └── LoginPage.vue

├── router/
│   ├── middlewares/
│   ├── index.ts
│   └── routes.ts

└── stores/
    ├── controllers/
    ├── services/
    ├── interfaces/
    ├── utils/
    └── stores de Pinia
```

---

## 3. Regla clave

```text
Toda la lógica vive en: src/stores/
```

---

## 4. Organización por entidad

Ejemplo:

```text
pages/manager/users/
stores/controllers/userController.ts
stores/services/userService.ts
stores/interfaces/userInterface.ts
stores/user-store.ts
```

---

## 5. Escalabilidad

Cuando crezca el proyecto:

```text
stores/
├── controllers/users/
├── services/users/
├── interfaces/users/
```

---

## 6. Regla final

```text
No crear lógica fuera de stores/
No duplicar estructuras
Mantener correspondencia por entidad
```
