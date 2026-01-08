# Uso de PageSpeed Insights para Auditoría y Mejora de Calidad Web

**Herramienta:** PageSpeed Insights (PSI)  
**Enlace:** https://pagespeed.web.dev/

---

## Índice

1. [Introducción](#1-introducción)  
2. [Objetivo](#2-objetivo)  
3. [Alcance](#3-alcance)  
4. [Qué es PageSpeed Insights](#4-qué-es-pagespeed-insights)  
   4.1. [Datos de campo (Field Data / CrUX)](#41-datos-de-campo-field-data--crux)  
   4.2. [Datos de laboratorio (Lab Data / Lighthouse)](#42-datos-de-laboratorio-lab-data--lighthouse)  
5. [Relación entre PSI y Lighthouse](#5-relación-entre-psi-y-lighthouse)  
6. [Categorías evaluadas](#6-categorías-evaluadas)  
7. [Métricas clave (Core Web Vitals)](#7-métricas-clave-core-web-vitals)  
   7.1. [LCP](#71-lcp--largest-contentful-paint)  
   7.2. [INP](#72-inp--interaction-to-next-paint)  
   7.3. [CLS](#73-cls--cumulative-layout-shift)  
8. [Métricas adicionales destacadas](#8-métricas-adicionales-destacadas)  
   8.1. [FCP](#81-fcp--first-contentful-paint)  
   8.2. [TTFB](#82-ttfb--time-to-first-byte)  
9. [Diagnostica problemas de rendimiento (PSI/Lighthouse - Lab)](#9-diagnostica-problemas-de-rendimiento-psilighthouse---lab)  
   9.1. [Puntuaciones por categoría](#91-puntuaciones-por-categoría)  
   9.2. [Métricas que afectan el score de Rendimiento](#92-métricas-que-afectan-el-score-de-rendimiento)  
   9.3. [Metadatos de la medición](#93-metadatos-de-la-medición)  
   9.4. [Filmstrip y capturas](#94-filmstrip-y-capturas)  
   9.5. [Oportunidades (Estadísticas)](#95-oportunidades-estadísticas)  
   9.6. [Diagnósticos](#96-diagnósticos)  
   9.7. [Auditorías aprobadas y No aplicable](#97-auditorías-aprobadas-y-no-aplicable)  
10. [Interpretación de resultados](#10-interpretación-de-resultados)  
11. [Metodología de auditoría recomendada](#11-metodología-de-auditoría-recomendada)  
12. [Limitaciones](#12-limitaciones)  
13. [Conclusión](#13-conclusión)  

---

## 1. Introducción

PageSpeed Insights (PSI) es una herramienta de Google que permite evaluar la calidad de una página web desde la perspectiva de la experiencia del usuario. Presenta métricas y recomendaciones enfocadas en **rendimiento**, **accesibilidad**, **buenas prácticas** y **SEO**, facilitando la identificación de oportunidades de mejora técnica en proyectos web.

Este documento define un estándar para usar PSI y Lighthouse como herramientas de auditoría, diagnóstico y mejora continua en iniciativas frontend.

---

## 2. Objetivo

Establecer una metodología documentada para:

- Auditar la calidad de páginas web con métricas consistentes.
- Interpretar resultados de forma uniforme (qué significa cada sección).
- Priorizar acciones de mejora por impacto en experiencia de usuario.
- Documentar hallazgos y evidencia de mejora (antes/después).

---

## 3. Alcance

Este apartado define el alcance de aplicación de esta documentación dentro de Protección, es decir, en qué contextos, proyectos y entornos se adopta el uso de PageSpeed Insights y Lighthouse como herramientas de auditoría.

Aplica a:

- Páginas públicas y privadas (con autenticación).
- Sitios multipágina y Single Page Applications (SPA).
- Entornos de desarrollo, pruebas y producción (cuando sea viable).
- Proyectos web mantenidos por el equipo frontend.

---

## 4. Qué es PageSpeed Insights

PageSpeed Insights evalúa el rendimiento de una página web a partir de su dirección en internet y genera un reporte que muestra qué tan rápido carga, qué tan estable es y cómo se comporta para los usuarios, combinando dos tipos de mediciones:

### 4.1 Datos de campo (Field Data / CrUX)

Corresponden a experiencia real de usuarios (cuando existe suficiente volumen de datos). Se caracterizan por:

- Datos agregados de usuarios reales (últimos 28 días).
- Variedad de dispositivos y condiciones de red.
- No siempre disponibles (por ejemplo, páginas con bajo tráfico o internas).

**Ejemplo de vista (Field Data / CrUX):**  
<img width="966" height="667" alt="Field Data / CrUX" src="https://github.com/user-attachments/assets/ebd7fa00-8ba1-4da5-ad9a-b0094c4d486f" />

### 4.2 Datos de laboratorio (Lab Data / Lighthouse)

Son mediciones controladas para diagnosticar y reproducir hallazgos. Se caracterizan por:

- Simulación bajo condiciones definidas (mismo dispositivo/red emulada).
- Útiles para diagnóstico técnico y validación de cambios.
- Comparables entre ejecuciones (aunque pueden variar ligeramente).

**Ejemplo de vista (Lab Data / Lighthouse):**  
<img width="978" height="583" alt="Lab Data / Lighthouse" src="https://github.com/user-attachments/assets/68124064-2d77-403c-9bd2-11b57f947d8d" />

---

## 5. Relación entre PSI y Lighthouse

- **PSI** presenta una vista consolidada y orientada a experiencia de usuario, integrando Field Data y Lab Data.
- **Lighthouse** es el motor que genera los datos de laboratorio y el detalle de auditorías.
- Lighthouse puede ejecutarse desde **Chrome DevTools**, lo que permite auditar páginas con autenticación en entornos internos.

**Recomendación de uso**
- Usar **PSI** como punto de entrada (visión general y señalización de problemas).
- Usar **Lighthouse / DevTools** para diagnóstico profundo y validación técnica.

---

## 6. Categorías evaluadas

PSI/Lighthouse agrupa auditorías en:

- **Rendimiento (Performance):** carga, respuesta y estabilidad visual.
- **Accesibilidad (Accessibility):** chequeos automáticos de a11y (no reemplaza pruebas manuales).
- **Prácticas recomendadas (Best Practices):** salud técnica, errores de consola, seguridad básica.
- **SEO:** señales técnicas básicas de optimización para buscadores.

**Ejemplo de categorías y puntajes:**  
<img width="701" height="179" alt="Scores por categoría" src="https://github.com/user-attachments/assets/634cc59f-ddd9-4a46-be79-c47f56e9515b" />

---

## 7. Métricas clave (Core Web Vitals)

Las Core Web Vitals son métricas esenciales para evaluar experiencia de usuario y se interpretan principalmente desde **Field Data (CrUX)**, usando el percentil 75.

**Ejemplo de bloque de Core Web Vitals:**  
<img width="964" height="661" alt="Core Web Vitals" src="https://github.com/user-attachments/assets/832f9aaf-96a8-4689-bce4-414a12fa6673" />

### 7.1 LCP – Largest Contentful Paint

**Qué mide**  
Tiempo hasta que se renderiza el elemento principal visible (el “contenido más grande” en el viewport). Representa cuándo el usuario percibe que “lo importante ya cargó”.

**Umbrales**
- Bueno: ≤ 2.5 s  
- Necesita mejora: 2.5 s – 4.0 s  
- Malo: > 4.0 s  

**Ejemplo de lectura en PSI:**  
<img width="945" height="220" alt="Ejemplo LCP" src="https://github.com/user-attachments/assets/4a360b61-ab65-4a58-a1b6-7b50f22e3e4a" />

### 7.2 INP – Interaction to Next Paint

**Qué mide**  
Evalúa el tiempo que transcurre desde que el usuario realiza una interacción (clic, toque o uso del teclado) hasta que la interfaz puede mostrar visualmente la respuesta a dicha acción.

**Umbrales**
- Bueno: ≤ 200 ms  
- Necesita mejora: 200 ms – 500 ms  
- Malo: > 500 ms  

**Ejemplo de lectura en PSI:**  
<img width="947" height="222" alt="Ejemplo INP" src="https://github.com/user-attachments/assets/9b7a5641-47cb-4f43-8e47-dda59c8bf1a4" />

### 7.3 CLS – Cumulative Layout Shift

**Qué mide**  
Evalúa la estabilidad visual de la página, cuantificando los movimientos inesperados de los elementos durante la carga o la interacción. El CLS se expresa como un valor numérico sin unidades, que representa el grado de inestabilidad visual percibida por el usuario.


**Umbrales**
- Bueno: ≤ 0.1  
- Necesita mejora: 0.1 – 0.25  
- Malo: > 0.25  

**Ejemplo de lectura en PSI:**  
<img width="956" height="220" alt="Ejemplo CLS" src="https://github.com/user-attachments/assets/39d48448-a6c2-4a78-a751-2533281c3a23" />

---

## 8. Métricas adicionales destacadas

Estas métricas aparecen con frecuencia en PSI. Se usan como señales de apoyo para diagnóstico y priorización.

### 8.1 FCP – First Contentful Paint

**Qué mide**  
Tiempo hasta que aparece el primer contenido visible (texto, imagen, SVG, etc.). Se interpreta como “fin de pantalla en blanco”.

**Cómo interpretarlo**
- FCP alto suele indicar bloqueo de render (CSS/JS), fuentes pesadas o payload inicial elevado.
- Es un indicador temprano (no reemplaza a LCP para contenido principal).

**Ejemplo de lectura en PSI:**  
<img width="962" height="523" alt="Ejemplo FCP" src="https://github.com/user-attachments/assets/27d3098d-124b-4573-92a4-51b418298228" />

### 8.2 TTFB – Time to First Byte

**Qué mide**  
Tiempo hasta recibir el primer byte desde el servidor. Es una señal de latencia inicial y capacidad de respuesta del backend/red/caché.

**Cómo interpretarlo**
- TTFB alto suele impactar FCP/LCP, porque retrasa el inicio de carga real.
- Apunta a acciones en infraestructura, caché o backend (más que frontend).

**Ejemplo de lectura en PSI:**  
<img width="960" height="524" alt="Ejemplo TTFB" src="https://github.com/user-attachments/assets/5cbe373f-c9b2-4a59-8dc8-9d4f47561582" />

---

## 9. Diagnostica problemas de rendimiento (PSI/Lighthouse - Lab)

Esta sección corresponde al reporte de **Lighthouse en datos de laboratorio**. Su objetivo es explicar el *porqué* de un score y convertirlo en acciones concretas.

### 9.1 Puntuaciones por categoría

PSI presenta puntajes (0–100) por categoría. Se interpretan como una señal resumida del estado actual.

**Lectura práctica**
- Puntaje bajo en **Rendimiento** suele requerir revisión de LCP/TBT/payload y recursos críticos.
- Puntaje bajo en **Accesibilidad** exige revisión semántica, etiquetas, navegación por teclado y ARIA.
- Puntaje bajo en **Best Practices** suele indicar errores de consola, aspectos de seguridad o uso incorrecto de APIs.
- Puntaje bajo en **SEO** apunta a meta-tags, indexabilidad básica y estructura.

### 9.2 Métricas que afectan el score de Rendimiento

En Rendimiento, PSI muestra métricas que determinan el score (según el modelo de Lighthouse), típicamente:

- **FCP:** primer contenido visible.
- **LCP:** contenido principal.
- **TBT:** bloqueo del hilo principal por tareas largas (indicador de carga/ejecución de JS).
- **CLS:** estabilidad visual.
- **SI (Speed Index):** velocidad de progreso visual.

PSI puede mostrar contribuciones/penalizaciones relativas (por ejemplo “+N”) asociadas a cada métrica. Su uso práctico es identificar qué métrica está degradando más el puntaje para priorizar.

**Ejemplo de bloque de métricas de Rendimiento:**  
<img width="1099" height="816" alt="Métricas Lighthouse" src="https://github.com/user-attachments/assets/50783328-5572-46e8-b19f-0a6393f8640a" />

### 9.3 Metadatos de la medición

PSI incluye información del entorno de ejecución (por ejemplo fecha, versión de Lighthouse, emulación y motor). Esta información es necesaria para comparar resultados entre ejecuciones con trazabilidad.

**Ejemplo de metadatos:**  
<img width="1096" height="376" alt="Metadatos Lighthouse" src="https://github.com/user-attachments/assets/a14b1036-f39d-42b1-82cd-43ba93885c9f" />

### 9.4 Filmstrip y capturas

El filmstrip muestra cómo se fue pintando la página en el tiempo. Se usa para entender visualmente demoras en FCP/LCP y detectar cargas tardías de componentes clave.

**Ejemplo de filmstrip:**  
<img width="1306" height="684" alt="Filmstrip" src="https://github.com/user-attachments/assets/15c9e2d9-192b-4c80-91d1-a1387cdb68e6" />

### 9.5 Oportunidades (Estadísticas)

“Oportunidades” lista recomendaciones con estimaciones de ahorro (en KiB o tiempo). Es el bloque principal para convertir diagnóstico en backlog.

**Cómo usarlo**
- Priorizar por impacto (mayor ahorro estimado) y relación con el problema principal (por ejemplo, LCP).
- Transformar cada oportunidad en una tarea con objetivo medible (bajar LCP, reducir payload, etc.).

**Ejemplo de oportunidades:**  
<img width="1013" height="801" alt="Oportunidades" src="https://github.com/user-attachments/assets/728edfee-214b-4451-8059-6f2e18b740b8" />

### 9.6 Diagnósticos

“Diagnósticos” son hallazgos técnicos complementarios. No siempre impactan el score directamente, pero mejoran rendimiento, estabilidad y mantenibilidad.

**Ejemplos comunes**
- Reducir JS/CSS no usado (tree-shaking, code splitting, lazy loading).
- Imágenes sin `width`/`height` explícitos (previene regresiones de CLS).
- Evitar payloads grandes (peso total descargado).
- Evitar tareas largas del hilo principal (reduce bloqueos).
- Evitar animaciones no compuestas (mejora fluidez).

**Ejemplo de diagnósticos:**  
<img width="1131" height="684" alt="Diagnósticos" src="https://github.com/user-attachments/assets/60db96ac-6548-48a7-91a5-d0d1061f7b38" />

### 9.7 Auditorías aprobadas y No aplicable

- **Auditorías aprobadas:** evidencia de cumplimiento y puntos fuertes del sitio.
- **No aplicable:** auditorías que no corresponden al contexto o no aplican a la página.

**Ejemplo de auditorías:**  
<img width="1132" height="867" alt="Auditorías" src="https://github.com/user-attachments/assets/ec76e023-2017-46d1-9e6d-83c114a3febc" />

---

## 10. Interpretación de resultados

Esta sección traduce métricas en hipótesis y acciones. Usar **Lab** para diagnosticar y **Field** para priorizar por impacto real.

### LCP alto
**Qué indica**: el contenido principal tarda en renderizarse.  
**Causas comunes**: imágenes/hero pesados, CSS/JS bloqueante, render dependiente de JS, redirecciones o TTFB alto.  
**Acciones típicas**: optimizar y priorizar hero, reducir bloqueo de render, mejorar priorización de recursos críticos.

### INP alto
**Qué indica**: la UI responde lento a interacciones.  
**Causas comunes**: handlers pesados, tareas largas en main thread, terceros costosos, re-renders.  
**Acciones típicas**: optimizar eventos, dividir tareas largas, revisar terceros y reducir JS.

### CLS alto
**Qué indica**: saltos de layout inesperados.  
**Causas comunes**: imágenes/iframes sin dimensiones, inserciones tardías, fuentes que alteran layout, falta de placeholders.  
**Acciones típicas**: reservar espacio, definir dimensiones/aspect-ratio, ajustar estrategia de fuentes, usar skeletons/slots.

### FCP alto
**Qué indica**: tarda en aparecer el primer contenido visible.  
**Causas comunes**: CSS/JS bloqueante, fuentes pesadas, demasiados recursos críticos, TTFB alto.  
**Acciones típicas**: reducir bloqueo (defer/async, CSS crítico), optimizar fuentes, reducir payload inicial, revisar TTFB.

### TTFB alto
**Qué indica**: respuesta inicial lenta (servidor/red/caché).  
**Causas comunes**: backend lento, caché insuficiente, redirecciones, DNS/TLS, picos de carga.  
**Acciones típicas**: CDN/caché y headers, reducir redirecciones, optimización backend, monitoreo APM.

**Regla práctica de priorización**
1. **TTFB alto** → infraestructura/backend/caché primero.  
2. **LCP alto con TTFB normal** → imágenes y recursos críticos (frontend).  
3. **FCP alto** → bloqueo de render y payload inicial.  
4. **INP alto** → rendimiento de ejecución e interacción.  
5. **CLS alto** → estabilidad visual y reserva de espacio.

---

## 11. Metodología de auditoría recomendada

1. Definir páginas críticas del flujo (entry, navegación, conversión, dashboard).
2. Ejecutar PSI en **móvil** y **desktop**.
3. Para páginas privadas (con login), ejecutar Lighthouse desde DevTools.
4. Repetir mediciones y registrar evidencia (mínimo 3 corridas por entorno cuando sea posible).
5. Analizar Field y Lab por separado y documentar el hallazgo principal.
6. Priorizar mejoras por impacto (LCP/TTFB/payload) y esfuerzo.
7. Implementar cambios y re-auditar.
8. Documentar comparativo antes/después y decisiones tomadas.

---

## 12. Limitaciones

- No todas las páginas tienen Field Data disponible (tráfico insuficiente o restricciones).
- Los resultados pueden variar entre ejecuciones por condiciones del entorno.
- PSI/Lighthouse no reemplaza pruebas funcionales, UX research ni monitoreo en producción.
- Accesibilidad requiere pruebas manuales; el score es una señal automatizada.

---

## 13. Conclusión

El uso sistemático de PageSpeed Insights y Lighthouse permite estandarizar la evaluación de calidad web y orientar el trabajo de mejora continua con métricas verificables. La metodología propuesta facilita diagnóstico, priorización y trazabilidad de resultados en iniciativas frontend.

---
