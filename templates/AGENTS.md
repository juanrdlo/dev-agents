# AGENTS.md

## Stack

Antes de programar, revisar `package.json`.

Stack esperado:

- Vue 3 Options API
- TypeScript
- Quasar
- Tailwind CSS 3
- Axios
- Firebase
- Pinia

No asumir versiones.
No actualizar ni instalar dependencias sin autorización.

---

## Reglas críticas

- Usar Options API exclusivamente.
- No usar `<script setup>`.
- No usar Composition API.
- Usar `defineComponent`.
- Evitar `any`.

Flujo obligatorio:

`Page → Controller → Service → Firebase/API → Controller → Pinia → Page`

Responsabilidades:

- Page → UI
- Controller → lógica y transformación
- Service → datos e integraciones
- Pinia → estado

Nunca:

- Page → Service
- Page → Firebase/API
- Controller → Firebase
- Service → Pinia

---

## Documentación

Leer según la tarea:

- Flujo y responsabilidades: `docs/DATA_FLOW.md`
- Estructura del proyecto: `docs/ARCHITECTURE.md`
- Naming y convenciones: `docs/CONVENTIONS.md`

UI/UX:

- `.agents/skills/ui-designer/SKILL.md`

No cargar documentos que no sean relevantes para la tarea.

---

## UI

Prioridad:

1. Componentes Quasar
2. Props/slots de Quasar
3. Tailwind
4. CSS manual solo si es necesario

---

## Workflow

Antes:

1. Revisar `package.json`.
2. Revisar estructura existente.
3. Buscar patrón similar.
4. Leer documentación relevante.

Después:

1. Validar TypeScript.
2. Ejecutar scripts reales de lint/tests.
3. Limpiar imports.
4. Verificar arquitectura.
5. Resumir cambios.