# Tokenomics de Zap Pilot (v2 – 2025)

## Resumen

Zap Pilot es un piloto automático de cartera en la cadena. Para los usuarios ocupados de DeFi, Zap
Pilot reduce el reequilibrio de la cartera de 30 minutos a 30 segundos, moviendo sus criptomonedas a
través de las cadenas a grupos de mayor rendimiento con un solo clic, mientras que cada token
permanece en su propia billetera.

El token $ZAP utiliza una economía de tokens basada en la recompra: sin apuestas, sin recompensas
pasivas, sin emisiones vacías, solo valor alineado con el uso real del protocolo.

## Detalles del token

| Campo                | Valor                                      |
| -------------------- | ------------------------------------------ |
| Nombre               | Zap Pilot Token                            |
| Símbolo              | $ZAP (provisional, puede cambiar de marca) |
| Límite de suministro | 100.000.000 (fijo)                         |
| Estándar             | LayerZero OFT (Omnichain)                  |
| Emisión              | A través de ThirdWeb + LayerZero           |
| Cadena principal     | Base (con Optimism, Polygon, etc.)         |

## Utilidad y filosofía de diseño

Sin apuestas, sin rendimiento controlado por el protocolo. En su lugar: cada comisión recaudada → se
utiliza para comprar $ZAP en el mercado → soporte de precios a través del uso real.

| Utilidad                                                                                    | Descripción                                                                               | Soporte de precios |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------ |
| Las comisiones del protocolo se utilizan para comprar $ZAP a través de Uniswap u otros DEX. |                                                                                           | ✅                 |
| Incentivos para el usuario                                                                  | Distribuidos a través de lanzamientos aéreos retroactivos basados en la puntuación de Zap |                    |
| Gobernanza (opcional)                                                                       | $ZAP puede utilizarse para futuras votaciones de DAO o derechos de propuesta              |                    |

## Mecanismo de recompra

| Componente                                                     | Implementación                                                                     | Fuente de fondos |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------- |
| Comisiones de zap-in a nivel de protocolo (ETH / USDC)         |                                                                                    |                  |
| Recompras automáticas o manuales en DEX (por ejemplo, Uniswap) |                                                                                    |                  |
| Manejo de tokens                                               | Quemados o redirigidos a la tesorería de la DAO                                    |                  |
| Transparencia                                                  | Informes públicos semanales del volumen de recompra (interfaz de usuario opcional) |                  |

## Asignación de tokens

| Categoría                              | % de asignación | Notas                                                                       |
| -------------------------------------- | --------------- | --------------------------------------------------------------------------- |
| Airdrop de usuario (puntuación de Zap) | 40%             | Basado en el uso, las referencias y la participación social                 |
| Equipo                                 | 20%             | 1 año de acantilado + 2 años de adquisición lineal                          |
| Socios y asesores                      | 10%             | Incluye incubadoras (1-2%), plataformas de lanzamiento (1-2%), grupo de KOL |
| Tesorería de la DAO                    | 20%             | Recompras, campañas de incentivos, gobernanza                               |
| Arranque de liquidez                   | 10%             | Siembra de LP de Uniswap/Aerodrome                                          |

Los tokens de socios/asesores se otorgan en función del tipo de contribución, generalmente
utilizando un desbloqueo lineal de 6 meses de acantilado + 12 meses, pero flexible en cada caso.

## Airdrop basado en la puntuación de Zap

| Métrica                  | Peso | Ejemplo |
| ------------------------ | ---- | ------- |
| Volumen de Zap-in        | 40%  |         |
| Frecuencia de Zap-in     | 40%  |         |
| Referencias              | 10%  |         |
| Acciones de la comunidad | 10%  |         |

La puntuación de Zap está fuera de la cadena, se rastrea a través del backend, Notion o Sheets. La
distribución del Airdrop es por etapas y está parcialmente bloqueada para evitar el dumping
instantáneo.

## Resumen de la pila tecnológica

| Función                         | Herramienta/Proveedor                              | Notas |
| ------------------------------- | -------------------------------------------------- | ----- |
| Infraestructura de intención    | Thirdweb/ZeroDev (EIP-7702 + Paymaster)            |       |
| Infraestructura de tokens       | ThirdWeb + LayerZero (OFT)                         |       |
| Script de recompra              | Node.js + Uniswap SDK o retransmisor personalizado |       |
| Seguimiento de la puntuación    | Notion / Airtable / Firebase                       |       |
| Herramientas de Airdrop         | ThirdWeb SDK / Galxe / Airdrop.so                  |       |
| LP y plataformas de lanzamiento | Uniswap / Aerodrome / IDO asociado                 |       |

## Adquisición de derechos de la plataforma de lanzamiento y de los socios

Los tokens asignados a las plataformas de lanzamiento o a los asesores siguen un programa de
adquisición de derechos lineal de 6 meses de acantilado + 12 meses. Por ejemplo, si una plataforma
de lanzamiento recibe 2.000.000 de $ZAP:

- Meses 1 a 6: 0% desbloqueado
- A partir del mes 7: se desbloquea 1/12 al mes (≈166.666 tokens al mes)
- Totalmente desbloqueado después del mes 18

Los calendarios de adquisición de derechos son flexibles y se negocian en función del valor real
aportado (por ejemplo, impulso de marketing, apoyo a la liquidez, trabajo de asesoramiento).

## Por qué funciona este modelo

| Característica                               | Beneficio                                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Sin apuestas                                 | Sin riesgo de contrato, sin dilución de rendimiento pasivo                                 |
| Basado en la recompra                        | El precio está respaldado por el uso y los ingresos reales                                 |
| Airdrop justo                                | Fomenta la participación real, no la especulación                                          |
| Diseño OFT                                   | Movimiento nativo entre cadenas a través de LayerZero                                      |
| Infraestructura de billetera EOA inteligente | Experiencia de usuario perfecta para los usuarios finales, lista para el patrocinio de gas |
