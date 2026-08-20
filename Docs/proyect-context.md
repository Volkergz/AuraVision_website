# Contexto del Proyecto — AuraVisión

> Este archivo es la fuente de verdad para la información del proyecto.
> La landing page se alimentará de esta información (via `src/config/site.config.ts`).

---

## 1. Nombre del proyecto

**AuraVisión**

## 2. Tagline / eslogan

Cambiar los obstáculos por caminos más seguros.

## 3. Descripción general (Resumen Ejecutivo)

**AuraVisión** es un dispositivo tipo lentes inteligentes que complementa y supera
las limitaciones del bastón blanco para personas con discapacidad visual.

Mediante sensores ultrasónicos y motores vibradores, el dispositivo detecta
obstáculos a diferentes alturas y distancias, alertando al usuario a través de
retroalimentación háptica (vibración) para un desplazamiento más autónomo,
seguro y confiable.

El entregable principal es un prototipo MVP de costo accesible que integra un
software de monitoreo en tiempo real del estado del dispositivo (nivel de batería,
estado de conexión y temperatura).

## 4. Problema que resuelve

En Chile, 4,68 millones de personas adultas presentan algún grado de pérdida de visión
(30,5% de la población adulta), y 153.560 presentan ceguera total (1%)
[FUENTE: Fundación Luz, 2023, sobre datos de ENDIDE 2022 — ver sección 13].

Estas personas enfrentan barreras estructurales que afectan su autonomía,
educación, empleabilidad y participación social.

El bastón blanco, pese a ser un apoyo fundamental, tiene limitaciones
significativas para detectar obstáculos elevados y prevenir accidentes en
entornos cambiantes. No todos los obstáculos pueden ser detectados con el bastón
tradicional: hay peligros que están a la altura de la cara y del torso.

Las soluciones tecnológicas disponibles en el mercado (OrCam, eSight) tienen un
alto costo y limitada disponibilidad, lo que las hace inaccesibles para la
mayoría de la población y perpetúa la exclusión.

## 5. Solución / propuesta de valor

**Solución:** Un dispositivo en forma de lente que detecta obstáculos cercanos a
través de sensores, los cuales procesan la información y emiten una señal háptica
mediante vibración direccional reconocible por el usuario.

**Propuesta de valor:**
- AuraVisión brinda mayor seguridad, ayudando a prevenir accidentes al detectar
  obstáculos en tiempo real, complementando el uso del bastón blanco.
- Se fundamenta en información de calidad, obtenida a través de organizaciones
  como SENADIS, la biblioteca central para ciegos y la ONCE.
- El prototipo ha sido probado con usuarios reales, cuyo feedback ha permitido
  crear una solución más humana, accesible y eficiente.

## 6. Justificación

Las personas con discapacidad visual en Chile necesitan herramientas accesibles y
efectivas que fortalezcan su autonomía y seguridad en la movilidad diaria.

El proyecto responde a las limitaciones del bastón tradicional y a la falta de
dispositivos de bajo costo en el mercado, proponiendo una solución innovadora y
sostenible que contribuya a la inclusión social y a la mejora de la calidad de vida.

Se alinea con:
- Las políticas públicas de SENADIS.
- Los compromisos internacionales de la Agenda 2030 (ODS).
- El principio de accesibilidad universal.

## 7. Público objetivo y beneficiarios

**Beneficiarios directos:** las personas con discapacidad visual en Chile (4,68 millones de
personas adultas con algún grado de pérdida de visión, incluyendo 153.560 con ceguera total
[FUENTE: Fundación Luz, 2023, sobre datos de ENDIDE 2022 — ver sección 13]), de todas las edades
y contextos socioeconómicos, en particular de sectores con menor acceso económico donde las
soluciones de alto costo (OrCam, eSight) resultan inalcanzables.

**Beneficiarios directos asociados:** las personas que transitan con bastón blanco
y que hoy dependen de él para su movilidad, quienes verían complementadas y
superadas sus limitaciones actuales de detección de obstáculos elevados y
seguridad ante entornos cambiantes.

## 8. Estado actual

Prototipo MVP de costo accesible, probado con usuarios reales.

## 9. Tecnologías principales

- **Microcontrolador** Seeed Studio XIAO ESP32-S3 Sense: procesa la información de
  los sensores, ejecuta los algoritmos y controla los componentes.
- **Sensores ultrasónicos**: detección de obstáculos a diferentes alturas y distancias.
- **Motor vibrador PWM Switch DC**: retroalimentación háptica.
- **Software de visualización y monitoreo** del estado del dispositivo.

## 10. Impacto esperado

**Corto plazo:** entregar a las personas con discapacidad visual un mecanismo
confiable de detección de obstáculos a distintas alturas y distancias, reduciendo
el riesgo de incidentes y accidentes en la movilidad diaria, y fortaleciendo su
seguridad personal en entornos conocidos y desconocidos, especialmente por la
noche o en condiciones adversas.

**Mediano plazo:** mejora sustancial en la autonomía y confianza de los usuarios,
permitiendo desplazarse de forma más independiente y con menores apoyos externos.
Esto debe traducirse en una mejor participación en actividades cotidianas
(trabajo, estudios, vida social), contribuyendo a la inclusión laboral y
educativa de esta población.

**Largo plazo:** servir como base validada para una escalabilidad y producción a
mayor escala, haciendo viable que un dispositivo de apoyo a la movilidad de
calidad sea asequible para la población objetivo del país y potencialmente de la
región.

**Nivel social y normativo:** contribuir a la inclusión social y a la igualdad de
oportunidades, ayudando a reducir la brecha de exclusión generada por barreras
tecnológicas y económicas; complementar (no reemplazar) el bastón blanco,
potenciando la movilidad del usuario con una solución de bajo costo que cierra
parcialmente el vacío dejado por las tecnologías de alto valor del mercado;
alinearse con las políticas públicas de SENADIS, con los compromisos
internacionales de la Agenda 2030 y los ODS, y con el principio de accesibilidad
universal y los derechos humanos, consolidando un aporte al desarrollo social de Chile.

## 11. Mensajes clave para la landing (pitch)

**Hook:**
> ¿Sabías que más de 4,6 millones de personas adultas en Chile presentan algún grado de
> pérdida de visión, y más de 153 mil viven con ceguera total?
> [FUENTE: Fundación Luz, 2023, sobre datos de ENDIDE 2022 — ver sección 13]

**Problema:**
> Imagina navegar por la ciudad diariamente cuando el suelo es tu única guía.
> Pero hay peligros que están a la altura de tu cara y del torso. No todos los
> obstáculos pueden ser detectados con el bastón tradicional.

**Solución:**
> Como solución a esta problemática, hemos creado un dispositivo en forma de
> lente que detecta los obstáculos cercanos a través de sensores, los cuales
> procesan la información y emiten una señal háptica mediante vibración
> direccional reconocible por el usuario.

**Llamada a la Acción (CTA):**
> No podemos cambiar lo que una persona puede ver, pero sí podemos cambiar la
> forma en que enfrenta el mundo. AuraVisión busca cambiar los obstáculos por
> caminos más seguros. Hoy queremos dar ese paso junto a ustedes.

## 12. Links relevantes

- Demo / sitio web: https://aura-vision-website.vercel.app/
- Repositorio (GitHub): https://github.com/Volkergz/AuraVision_website
- Redes / otros: _(por completar)_

## 13. Referencias (formato APA)

- Fundación Luz. (2023). *Estudio sobre personas con discapacidad visual en Chile: Análisis ENDIDE 2022*. Fundación Luz. https://fundacionluz.cl/area/estudio-sobre-personas-con-discapacidad-visual-en-chile-fundacion-luz-endide-2022/
  _(4,68 millones de personas adultas con pérdida de visión, 30,5% de la población adulta; 153.560 personas adultas ciegas, 1%. Cifras derivadas del III Estudio Nacional de la Discapacidad / ENDIDE 2022.)_
- Instituto Nacional de Estadísticas. (2024). *Censo de Población y Vivienda 2024*. https://www.ine.gob.cl/
  _(847.000 personas con discapacidad visual según Censo 2024, criterio estricto del Grupo de Washington, para citar si se usa esta cifra alternativa)_