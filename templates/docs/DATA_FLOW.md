# Flujo de Datos y Responsabilidades

## 1. Flujo oficial

```text
Page → Controller → Service → Firebase → Controller → Pinia → Page
```

---

## 2. Reglas rápidas (CRÍTICAS)

- Page nunca llama Service
- Controller siempre llama Service
- Service nunca usa Pinia
- Controller siempre muta Pinia
- Page solo lee estado

---

## 3. Service

✔ Hace:

- Consultar datos
- Enviar datos
- Usar Firebase / APIs

❌ No hace:

- Lógica de negocio
- Transformaciones complejas
- Usar Pinia
- Manejar UI

---

## 4. Controller

✔ Hace:

- Llamar Services
- Transformar datos
- Aplicar reglas
- Manejar loading
- Manejar errores
- Mutar Pinia

❌ No hace:

- Usar Firebase directamente
- Renderizar UI

---

## 5. Pinia

✔ Hace:

- Guardar estado
- Exponer datos
- Mantener loading y errores

❌ No hace:

- Consultar APIs directamente

---

## 6. Page

✔ Hace:

- Ejecutar Controller
- Leer Pinia
- Mostrar datos

❌ No hace:

- Llamar Service
- Usar Firebase
- Procesar datos

---

## 7. Errores prohibidos

❌ Page llamando Service
❌ Service modificando Pinia
❌ Controller usando Firebase
❌ Lógica de negocio en Page

---

## 8. Regla final

```text
Service   → datos
Controller → lógica
Pinia     → estado
Page      → UI
```
