# Uso de PageSpeed Insights para Auditoría y Mejora de Calidad Web

## 1. Introducción

PageSpeed Insights (PSI) es una herramienta de Google que permite evaluar la calidad de una página web desde la perspectiva de la experiencia del usuario. Proporciona métricas y recomendaciones enfocadas en rendimiento, accesibilidad, buenas prácticas y SEO, permitiendo identificar oportunidades de mejora técnica y funcional en aplicaciones web.

Esta documentación tiene como objetivo definir un estándar interno para el uso de PageSpeed Insights y Lighthouse como herramientas de auditoría, diagnóstico y mejora continua de los proyectos web.

---

## 2. Objetivo

Establecer una metodología documentada para:
- Auditar la calidad de páginas web mediante métricas objetivas.
- Interpretar correctamente los resultados obtenidos.
- Priorizar acciones de mejora con impacto real en la experiencia del usuario.
- Facilitar la toma de decisiones técnicas en proyectos frontend.

---

## 3. Alcance

Esta documentación aplica a:
- Páginas públicas y privadas (con autenticación).
- Aplicaciones web tradicionales y Single Page Applications (SPA).
- Entornos de producción, pruebas y desarrollo.
- Proyectos frontend desarrollados y mantenidos por el equipo.

---

## 4. ¿Qué es PageSpeed Insights?

PageSpeed Insights es una herramienta que analiza una URL y genera un reporte basado en dos tipos de datos:

### 4.1 Datos de campo (Field Data – CrUX)
- Provienen de usuarios reales de Chrome.
- Reflejan la experiencia real durante los últimos 28 días.
- Se basan en diferentes dispositivos y condiciones de red.
- No siempre están disponibles (por ejemplo, en páginas internas o con bajo tráfico).

<img width="966" height="667" alt="image" src="https://github.com/user-attachments/assets/ebd7fa00-8ba1-4da5-ad9a-b0094c4d486f" />

### 4.2 Datos de laboratorio (Lab Data – Lighthouse)
- Simulación controlada de carga en un dispositivo estándar.
- Permiten reproducir problemas de rendimiento.
- Útiles para diagnóstico técnico y validación de cambios.
- Son consistentes y repetibles.
  
<img width="978" height="583" alt="image" src="https://github.com/user-attachments/assets/68124064-2d77-403c-9bd2-11b57f947d8d" />

---

## 5. Relación entre PageSpeed Insights y Lighthouse

- PageSpeed Insights presenta resultados consolidados y orientados a experiencia de usuario.
- Lighthouse es el motor de auditoría técnica que genera los datos de laboratorio.
- Lighthouse puede ejecutarse directamente en Chrome DevTools, incluso en páginas con autenticación.

**Recomendación**:
- Usar PSI para visión general y métricas de usuarios reales.
- Usar Lighthouse para diagnóstico técnico y mejoras específicas.

---

## 6. Categorías evaluadas

PSI/Lighthouse evalúan las siguientes áreas:

- **Performance (Performance)**: velocidad de carga y respuesta.
- **Accessibility (Accesibilidad)**: buenas prácticas básicas de accesibilidad.
- **Best Practices (Prácticas recomendadas)**: calidad técnica y seguridad.
- **SEO (SEO)**: señales básicas de indexabilidad.

<img width="701" height="179" alt="image" src="https://github.com/user-attachments/assets/634cc59f-ddd9-4a46-be79-c47f56e9515b" />

---

## 7. Métricas Clave de Experiencia (Core Web Vitals)

Las Core Web Vitals son métricas esenciales definidas por Google para evaluar la experiencia de usuario. Se analizan usando el percentil 75 de los datos de campo.

<img width="964" height="661" alt="image" src="https://github.com/user-attachments/assets/832f9aaf-96a8-4689-bce4-414a12fa6673" />

### 7.1 LCP – Largest Contentful Paint
- Mide el tiempo que tarda en mostrarse el elemento principal visible.
- Representa cuándo el usuario percibe que la página “ya cargó”.

**Umbrales**
- Bueno: ≤ 2.5 s  
- Necesita mejora: 2.5 s – 4.0 s  
- Malo: > 4.0 s

Ejemplo: En este caso se puede evidenciar que el resultado es de 3,2 s, por lo que 'Necesita mejora'
<img width="945" height="220" alt="image" src="https://github.com/user-attachments/assets/4a360b61-ab65-4a58-a1b6-7b50f22e3e4a" />

### 7.2 INP – Interaction to Next Paint
- Mide la latencia de respuesta a interacciones del usuario.
- Evalúa qué tan rápido responde la página a clics, toques o teclas.

**Umbrales**
- Bueno: ≤ 200 ms  
- Necesita mejora: 200 ms – 500 ms  
- Malo: > 500 ms
  
Ejemplo: En este caso se puede evidenciar que el resultado es de 67 ms, por lo que es 'Bueno' 
<img width="947" height="222" alt="image" src="https://github.com/user-attachments/assets/9b7a5641-47cb-4f43-8e47-dda59c8bf1a4" />

### 7.3 CLS – Cumulative Layout Shift
- Mide la estabilidad visual.
- Detecta movimientos inesperados del contenido durante la carga.

**Umbrales**
- Bueno: ≤ 0.1  
- Necesita mejora: 0.1 – 0.25  
- Malo: > 0.25

Ejemplo: En este caso se puede evidenciar que el resultado es de 0.01 ms, por lo que es 'Bueno' 
<img width="956" height="220" alt="image" src="https://github.com/user-attachments/assets/39d48448-a6c2-4a78-a751-2533281c3a23" />


---

## 8. Métricas de Rendimiento (Datos de Laboratorio)

### 8.1 FCP – First Contentful Paint
- Tiempo hasta que aparece el primer contenido visible.
- Indica cuándo el usuario empieza a ver algo útil.
  
Ejemplo: En este caso se puede evidenciar que el resultado es de 2,6 s, por lo que 'Necesita mejora' 
<img width="962" height="523" alt="image" src="https://github.com/user-attachments/assets/27d3098d-124b-4573-92a4-51b418298228" />


### 8.2 TTFB – Time to First Byte
- Tiempo hasta recibir el primer byte del servidor.
- Refleja latencia de red, servidor o configuración de caché.
  
Ejemplo: En este caso se puede evidenciar que el resultado es de 0.7 s, por lo que es 'Bueno' 
  <img width="960" height="524" alt="image" src="https://github.com/user-attachments/assets/5cbe373f-c9b2-4a59-8dc8-9d4f47561582" />


---
## 9. Interpretación de Resultados

> Esta sección ayuda a traducir métricas (PSI/Lighthouse) en posibles causas y líneas de acción.
> Importante: **Field data (usuarios reales)** y **Lab data (laboratorio)** pueden diferir; usa Lab para diagnosticar y Field para priorizar por impacto real.

---

### LCP alto (Largest Contentful Paint)
**¿Qué indica?**  
El contenido principal (el elemento más grande visible) tarda en aparecer. El usuario siente que “la página no carga”.

**Causas comunes**
- Recursos principales pesados (imagen/hero, carrusel, banners).
- CSS o JS bloqueante que retrasa el render.
- Render tardío del contenido principal por dependencia de JS.
- TTFB alto o demasiadas redirecciones (cuando el servidor tarda en responder).

**Acciones típicas**
- Optimizar y priorizar el recurso “hero” (peso, formato, dimensiones, preload cuando aplique).
- Reducir bloqueo de render: CSS crítico, diferir JS no esencial, dividir bundles.
- Minimizar dependencias de red antes de pintar el contenido principal.

---

### INP alto (Interaction to Next Paint)
**¿Qué indica?**  
La interfaz responde lento cuando el usuario interactúa (clic, tap, teclado).

**Causas comunes**
- Manejo ineficiente de eventos (handlers pesados).
- Tareas largas en el hilo principal.
- Scripts de terceros que bloquean o consumen CPU.
- Renderizaciones innecesarias (re-renders costosos).

**Acciones típicas**
- Optimizar handlers, debouncing/throttling donde aplique.
- Dividir tareas largas, reducir trabajo en main thread.
- Revisar third parties, lazy-load, y reducir JS total.

---

### CLS alto (Cumulative Layout Shift)
**¿Qué indica?**  
Saltos inesperados de contenido (inestabilidad visual). Afecta lectura, clics y percepción de calidad.

**Causas comunes**
- Imágenes/iframes sin dimensiones (width/height) o sin espacio reservado.
- Contenido inyectado dinámicamente arriba del viewport (banners, avisos).
- Fuentes web que cambian métricas y “empujan” el layout.
- Componentes que aparecen tarde sin placeholders.

**Acciones típicas**
- Definir width/height o reservar espacio con CSS (aspect-ratio).
- Evitar insertar contenido arriba; si es necesario, reservar espacio.
- Mejorar estrategia de fuentes (font-display, preload selectivo, fallback coherente).

---

### FCP alto (First Contentful Paint)
**¿Qué indica?**  
Tarda en aparecer el **primer contenido visible** (texto, imagen, etc.). El usuario percibe “pantalla en blanco” por más tiempo.

**Causas comunes**
- CSS/JS bloqueante en el `<head>` que impide pintar.
- Fuentes o estilos que retrasan el render (FOIT o cargas pesadas).
- Demasiados recursos críticos (requests iniciales grandes).
- TTFB alto (respuesta inicial lenta del servidor).

**Acciones típicas**
- Reducir CSS/JS bloqueante (defer/async en scripts, CSS crítico).
- Optimizar fuentes (preconnect/preload selectivo, subsets, font-display).
- Minimizar payload inicial (imágenes/JS/CSS) y mejorar prioridad de recursos críticos.
- Revisar servidor/CDN/caché si también hay TTFB alto.

---

### TTFB alto (Time to First Byte) *(principalmente Field y también en algunas vistas)*
**¿Qué indica?**  
El navegador tarda en recibir el **primer byte** del servidor. Es una señal de latencia inicial: red/servidor/caché.

**Causas comunes**
- Procesamiento lento en backend (render, queries, servicios externos).
- Caché insuficiente (sin CDN, sin cache-control adecuado, no cachear HTML cuando aplica).
- Redirecciones, handshake TLS costoso, DNS lento.
- Sobrecarga o picos de tráfico en infraestructura.

**Acciones típicas**
- Implementar/mejorar caché (CDN, cache-control, assets con cache largo + versionado).
- Reducir redirecciones y optimizar DNS/TLS (preconnect donde aplique).
- Optimizar backend: reducir tiempos de respuesta, consultas, dependencias externas.
- Monitorear en APM y correlacionar con picos de tráfico.

---

### Cómo priorizar rápidamente
1. **TTFB alto** → revisar infraestructura/backend/CDN/caché primero (impacta todo lo demás).
2. **FCP/LCP altos** con TTFB normal → foco en frontend: recursos críticos, imágenes, CSS/JS bloqueante.
3. **CLS alto** → foco en estabilidad visual (dimensiones, placeholders, fuentes).
4. **INP alto** → foco en interacción y performance de ejecución (eventos, main thread, terceros).

---

## Reporte de Lighthouse en datos de laboratorio

Esta sección de PageSpeed Insights (PSI) corresponde al **reporte de Lighthouse en datos de laboratorio (Lab Data)**. Su propósito es **diagnosticar causas técnicas** que afectan el rendimiento (y, por extensión, experiencia de usuario), bajo condiciones simuladas y reproducibles.

> Importante: esta sección es **de laboratorio**, por lo tanto **no representa exactamente** lo que viven todos los usuarios reales. Se usa principalmente para **identificar y corregir** problemas.

---

### 1) Puntuaciones por categoría

PSI presenta puntuaciones (0–100) para cada categoría:

- **Rendimiento (Performance):** velocidad de carga, capacidad de respuesta y estabilidad visual en condiciones simuladas.
- **Accesibilidad (Accessibility):** chequeos automáticos de accesibilidad (no reemplaza pruebas manuales).
- **Prácticas recomendadas (Best Practices):** salud técnica, uso correcto de APIs, errores de consola, seguridad y calidad general.
- **SEO:** señales técnicas básicas para motores de búsqueda (no cubre todo el SEO real).

**Cómo leer la escala (general)**
- **0–49:** bajo (rojo)
- **50–89:** requiere mejoras (naranja)
- **90–100:** bueno (verde)

> Nota: PSI suele indicar que “los valores son estimaciones y pueden variar”, porque el score depende de condiciones simuladas, variaciones de ejecución y del peso de cada métrica en el cálculo.

---

### 2) Sub-métricas que afectan el score de Rendimiento

Debajo del score de **Rendimiento (Performance)**, PSI muestra las métricas que componen el puntaje (las más comunes):

- **FCP (First Contentful Paint):** cuándo aparece el **primer contenido visible** (señal de inicio de carga percibida).
- **LCP (Largest Contentful Paint):** cuándo aparece el **contenido principal** (impacta mucho la percepción de “ya cargó”).
- **TBT (Total Blocking Time):** cuánto tiempo estuvo el hilo principal “bloqueado” por tareas largas (impacta interactividad).
- **CLS (Cumulative Layout Shift):** estabilidad visual (si hay “saltos” inesperados de contenido).
- **SI (Speed Index):** rapidez con la que el contenido se va mostrando visualmente (progreso de carga).
 
PSI puede mostrar, junto a cada métrica, un valor tipo **“+N”**, que representa una contribución/penalización relativa (dependiendo del reporte). En la práctica, se usa para identificar **qué métricas están tirando el score hacia abajo** y priorizarlas.

Ejemplo de métricas:  
<img width="1099" height="816" alt="image" src="https://github.com/user-attachments/assets/50783328-5572-46e8-b19f-0a6393f8640a" />

---

### 3) Bloque “Métricas” (valores numéricos)

En “Métricas” se ven los valores medidos en esa corrida de Lighthouse. Esto sirve para:

- Comparar **antes/después** de un cambio.
- Confirmar si la mejora impactó realmente el indicador que se quería mejorar (por ejemplo, LCP).
- Entender si el problema es de carga inicial (FCP/LCP), de JS pesado (TBT) o de estabilidad visual (CLS).

---

### 4) Información del entorno de medición (metadata)

PSI también muestra información contextual de la ejecución, por ejemplo:

- **Fecha/hora de captura**
- **Versión de Lighthouse**
- **Modo de ejecución** (ej. “sesión de una sola página”, “carga inicial”)
- **Motor/navegador** (ej. HeadlessChromium)
- **Limitaciones personalizadas** (si aplica)
- **Emulación** (por ejemplo “escritorio emulado”)

Ejemplo: 
<img width="1096" height="376" alt="image" src="https://github.com/user-attachments/assets/a14b1036-f39d-42b1-82cd-43ba93885c9f" />


**Por qué esto importa**
- Ayuda a explicar variaciones entre mediciones.
- Permite reportes más confiables (misma versión, mismas condiciones).
- Da trazabilidad: “este resultado corresponde a esta configuración”.

---

### 5) Filmstrip / Capturas (screenshot timeline)

En muchos reportes aparece una tira de capturas (“Screenshot, Screenshot…”) que muestra **cómo se fue pintando la página** en el tiempo.

Ejemplo:
<img width="1306" height="684" alt="image" src="https://github.com/user-attachments/assets/15c9e2d9-192b-4c80-91d1-a1387cdb68e6" />

¿Para qué sirve?
- Identificar “pantallas en blanco” (delay en FCP).
- Confirmar si el contenido principal tarda demasiado (LCP).
- Detectar render tardío de componentes clave (carouseles, hero, banners, módulos de personalización).

---

### 6) “Estadísticas” (Oportunidades)

En “Estadísticas” PSI/Lighthouse lista oportunidades que suelen incluir:
- Una descripción (qué está pasando)
- Un **ahorro estimado** (en tiempo o en KiB)  
Ejemplo: 
<img width="1013" height="801" alt="image" src="https://github.com/user-attachments/assets/728edfee-214b-4451-8059-6f2e18b740b8" />


**Cómo interpretarlo**
- El “ahorro estimado” ayuda a priorizar, pero no es garantía exacta.
- Estas oportunidades suelen estar directamente relacionadas con:
  - Imágenes pesadas / mal servidas
  - Orden de carga subóptimo
  - Dependencias de red
  - Caché deficiente
  - Fuentes y recursos críticos

**Cómo convertirlo en acciones**
- Convertir cada oportunidad en una tarea: “Optimizar X”, “Cambiar estrategia Y”, “Reducir Z”.
- Asociar a una ruta/página y a un resultado esperado (mejorar LCP, bajar payload, etc.).

---

### 9) “Diagnósticos” (hallazgos técnicos complementarios)

Los “Diagnósticos” son alertas y sugerencias que **pueden o no** afectar el score directamente, pero ayudan a mejorar rendimiento, mantenibilidad y estabilidad.   

Ejemplo:
<img width="1131" height="684" alt="image" src="https://github.com/user-attachments/assets/60db96ac-6548-48a7-91a5-d0d1061f7b38" />

Ejemplos típicos:
- **Reducir JS/CSS no usado:** sugiere optimización de bundles (tree-shaking, code splitting, lazy loading).
- **Imágenes sin width/height explícitos:** evita problemas de layout y potenciales regresiones de CLS.
- **Evitar cargas de red grandes:** reduce el peso total descargado.
- **Evitar tareas largas del hilo principal:** reduce bloqueos y mejora responsividad.
- **Evitar animaciones no compuestas:** mejora rendimiento de animaciones y reduce jank.

**Recomendación de uso**
- Tratar “Diagnósticos” como checklist técnico.
- Priorizar primero lo que impacte directamente el cuello de botella principal (por ejemplo LCP).

---

### 10) “Auditorías aprobadas” y “No aplicable”

- **Auditorías aprobadas:** controles que el sitio ya cumple (útil para evidenciar “qué está bien”).
- **No aplicable:** auditorías que no aplican por el tipo de sitio o porque no se detectó el patrón (no es un error).

Ejemplo: 

<img width="1132" height="867" alt="image" src="https://github.com/user-attachments/assets/ec76e023-2017-46d1-9e6d-83c114a3febc" />

Esto es valioso para:
- Documentar cumplimiento
- Evitar “perseguir” recomendaciones que no aplican
- Tener trazabilidad de calidad por categoría

---

## 11. Metodología de Auditoría Recomendada

1. Definir páginas críticas del flujo de usuario.
2. Ejecutar PageSpeed Insights (mobile y desktop).
3. Ejecutar Lighthouse para páginas internas o con login.
4. Repetir mediciones y obtener un promedio.
5. Analizar métricas de campo y laboratorio por separado.
6. Priorizar mejoras según impacto.
7. Implementar cambios.
8. Re-ejecutar auditoría y documentar resultados.

---

## 13. Limitaciones

- No todas las páginas generan datos reales.
- Resultados pueden variar entre ejecuciones.
- Las métricas no reemplazan pruebas funcionales ni de UX.
- Lighthouse no sustituye auditorías de accesibilidad profundas.

---

## 14. Conclusión

El uso documentado de PageSpeed Insights y Lighthouse permite estandarizar la evaluación de calidad web, mejorar la experiencia del usuario y facilitar la toma de decisiones técnicas basadas en métricas. Esta práctica contribuye a la mejora continua, alineándose con objetivos de innovación tecnológica y excelencia en desarrollo frontend.

---
