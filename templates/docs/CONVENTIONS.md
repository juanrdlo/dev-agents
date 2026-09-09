# Convenciones del Proyecto

## 1. Archivos

### Pages

```text
UserListPage.vue
```

- PascalCase
- terminan en `Page.vue`

---

### Services

```text
userService.ts
```

Funciones:

```ts
getUser_service();
createUser_service();
```

---

### Controllers

```text
userController.ts
```

Funciones:

```ts
getUser_controller();
createUser_controller();
```

---

### Stores

```text
user-store.ts
```

- kebab-case

---

### Interfaces

```text
userInterface.ts
```

---

### Utils

```text
dateUtils.ts
```

---

## 2. Imports

✔ Correcto:

```ts
import { getUser_service } from 'src/stores/services/userService';
```

❌ Incorrecto:

```ts
../../../stores/services/userService
```

---

## 3. Stack obligatorio

- Vue (Options API)
- TypeScript
- Tailwind CSS
- Quasar

---

## 4. Reglas clave

- No CSS manual si Tailwind lo resuelve
- No lógica en Pages
- No duplicar interfaces
- No romper estructura

## 5. Convención de nombres en Interfaces

Las interfaces representan datos provenientes de APIs, Firebase o estructuras externas.

Por esta razón, **no utilizan camelCase**.

---

### Regla general

- Usar `snake_case` para propiedades de múltiples palabras
- Usar minúsculas para propiedades de una sola palabra

---

### Ejemplos correctos

```ts
interface User {
  id: string;
  name: string;
  email: string;
  installation_date: Date;
  created_at: Date;
  updated_at: Date;
}
```

---

### Ejemplos incorrectos

```ts
interface User {
  installationDate: Date; ❌
  createdAt: Date; ❌
  updatedAt: Date; ❌
}
```

---

## 6. Regla de transformación (IMPORTANTE)

Los datos en `snake_case` pertenecen a la capa de datos.

Cuando se utilicen en la aplicación, deben transformarse a `camelCase` en el Controller.

---

### Ejemplo

Datos desde Firebase / API:

```ts
{
  installation_date: Timestamp;
  created_at: Timestamp;
}
```

Transformación en Controller:

```ts
{
  installationDate: data.installation_date?.toDate(),
  createdAt: data.created_at?.toDate(),
}
```

---

## 7. Regla obligatoria

- Interfaces → `snake_case`
- Modelos usados en UI → `camelCase`
- La transformación se hace en el Controller
- Nunca mezclar formatos dentro de la misma capa

---

## 8. Error prohibido

❌ Usar `snake_case` directamente en la UI
❌ Usar `camelCase` en datos crudos de API
❌ No transformar datos en el Controller

---

## 9. Regla final

```text
Data layer → snake_case
Application layer → camelCase
```

El Controller es el único responsable de la transformación.

---

## 10. Nomenclatura de carpetas y rutas internas

Los nombres técnicos del proyecto deben escribirse en inglés. Esta regla aplica a:

- Carpetas
- Rutas internas del router
- Nombres de módulos y archivos nuevos
- Identificadores de código

Las carpetas y rutas internas deben usar minúsculas y `kebab-case` cuando haya más de una palabra.

```text
pages/manager/machines/
pages/manager/collections/
/manager/machines/:id
```

Los textos visibles para usuarios pueden permanecer en español cuando correspondan al idioma de la interfaz. No deben usarse como nombres de carpetas, rutas, módulos ni identificadores.
