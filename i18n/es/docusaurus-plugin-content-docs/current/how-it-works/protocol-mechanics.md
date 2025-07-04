---
sidebar_position: 4
---

# Mecánicas del Protocolo

Zap Pilot opera como un sofisticado sistema algorítmico de asignación de activos no custodial. Aquí
explicamos cómo funcionan nuestras mecánicas de protocolo bajo el capó.

## Arquitectura del Sistema

### Diseño No Custodial

Zap Pilot está construido sobre un principio fundamental: **usted siempre controla sus fondos**.

- **Sin custodia**: Nunca mantenemos sus activos
- **Interacción directa con protocolos**: Su billetera interactúa directamente con protocolos DeFi
- **Ejecución transparente**: Todas las operaciones están on-chain y son auditables
- **Salidas de emergencia**: Puede retirar directamente de los protocolos si es necesario

## Lógica de Vault

### Estructura de Vault Temática

Cada vault representa una estrategia de inversión específica con protocolos DeFi curados:

#### **Componentes del Vault**

- **Definición de estrategia**: Tesis de inversión clara y asignación objetivo
- **Lista blanca de protocolos**: Protocolos verificados y auditados que cumplen nuestros estándares
  de seguridad
- **Parámetros de riesgo**: Límites máximos de asignación por protocolo
- **Reglas de rebalanceo**: Condiciones que desencadenan ajustes de cartera

#### **Sistema de Ponderación Dinámico**

Los protocolos dentro de cada vault se ponderan basándose en:

```
Peso del Protocolo = Peso Base × Multiplicador de Rendimiento × Ajuste de Riesgo
```

**Factores de Peso Base:**

- Total Value Locked (TVL) - mínimo $300k para estrategias de stablecoins
- Historial de auditoría y puntuación de seguridad
- Estabilidad histórica del rendimiento
- Profundidad de liquidez

**Multiplicador de Rendimiento:**

- Rendimiento reciente vs. benchmarks
- Consistencia del rendimiento a lo largo del tiempo
- Salud de la gobernanza del protocolo

**Ajuste de Riesgo:**

- Evaluación de riesgo de contratos inteligentes
- Concentración de tokens de gobernanza
- Edad del protocolo y período de prueba de batalla

### Flujo de Ejecución de Estrategia

1. **Depósito del Usuario** → La billetera de Account Abstraction recibe fondos
2. **Enrutamiento del Vault** → Los fondos se dirigen al vault temático apropiado
3. **Distribución de Protocolos** → Los activos se asignan a protocolos curados
4. **Monitoreo Continuo** → Seguimiento de rendimiento y riesgo en tiempo real
5. **Activadores de Rebalanceo** → Sugerencias trimestrales o alertas basadas en umbrales

## Estrategia de Asignación Kelly

### Fundamento Matemático

Utilizamos el **Kelly Criterion** para determinar tamaños óptimos de posición, maximizando el
crecimiento geométrico a largo plazo mientras gestionamos el riesgo.

#### **Fórmula de Kelly**

```
Peso Óptimo = (Rendimiento Esperado - Tasa Libre de Riesgo) / Varianza
```

#### **Asignación Kelly Multi-Activo**

Para carteras con múltiples activos:

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Donde:

- **W\*** = Vector de peso óptimo
- **Σ⁻¹** = Matriz de covarianza inversa de rendimientos
- **μ** = Vector de rendimiento esperado
- **rf** = Tasa libre de riesgo
- **1** = Vector de unos

### Implementación Práctica

#### **Kelly Ajustado por Riesgo**

Modificamos la fórmula clásica de Kelly para considerar:

- **Límites de drawdown máximo** (15% para conservador, 30% para agresivo)
- **Restricciones de correlación** (máx. 60% en activos correlacionados)
- **Requisitos de liquidez** (mantener 10% en posiciones líquidas)

#### **Activadores de Rebalanceo Dinámicos**

El rebalanceo ocurre cuando:

- **Deriva de asignación** > 5% de los pesos objetivo
- **Métricas de riesgo** exceden umbrales predefinidos
- **Nuevas oportunidades** con rendimientos ajustados por riesgo significativamente mejores emergen
- **Revisiones trimestrales** independientemente de la deriva (configurable por usuario)

## Integración de Account Abstraction

### Arquitectura de Billetera

#### **Características de Smart Wallet**

- **Transacciones sin gas** a través de meta-transacciones
- **Operaciones en lote** para eficiencia de gas
- **Claves de sesión** para estrategias automatizadas
- **Soporte multi-firma** para usuarios institucionales

#### **Beneficios de Experiencia del Usuario**

**Para Principiantes:**

- No necesita mantener ETH para gas en múltiples cadenas
- Operaciones complejas de un clic
- Opciones de recuperación social

**Para Usuarios Avanzados:**

- Lógica de transacción programable
- Permisos de rebalanceo automatizado
- Controles de gasto personalizados

### Agrupación de Transacciones

Múltiples operaciones combinadas en una sola transacción:

```
Transacción en Lote = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Marco de Gestión de Riesgos

### Salvaguardas a Nivel de Protocolo

#### **Monitoreo Automatizado de Riesgos**

- **Umbrales de TVL**: Requisitos mínimos de liquidez
- **Detección de anomalías de rendimiento**: Marcar rendimientos inusualmente altos/bajos
- **Evaluación de riesgo de gobernanza**: Monitorear cambios de protocolo
- **Monitoreo de contratos inteligentes**: Rastrear eventos de actualización

#### **Restricciones de Diversificación**

- **Asignación máxima de protocolo único**: 30% para conservador, 50% para agresivo
- **Diversificación por tipo de activo**: No más del 70% en una sola clase de activo
- **Diversificación de cadena**: Distribuir riesgo entre múltiples redes

### Controles a Nivel de Usuario

#### **Configuraciones de Tolerancia al Riesgo**

- **Conservador**: Menor volatilidad, solo protocolos estables
- **Moderado**: Riesgo/recompensa equilibrado, protocolos establecidos
- **Agresivo**: Mayor tolerancia al riesgo, incluyendo protocolos más nuevos

#### **Procedimientos de Emergencia**

- **Retiro inmediato**: Interacción directa con protocolos
- **Modo de aversión al riesgo**: Movimiento automático a activos más seguros durante crisis
- **Interruptores de circuito**: Detener acciones automatizadas durante volatilidad extrema

## Mecánicas de Rebalanceo

### Condiciones de Activación

#### **Rebalanceo Basado en Umbrales**

- La deriva de asignación excede el objetivo en 5%
- Las métricas de riesgo rompen límites predefinidos
- Oportunidades de rendimiento con >2% de ventaja emergen

#### **Rebalanceo Basado en Tiempo**

- **Semanal**: Para estrategias activas (opcional, costos más altos)
- **Mensual**: Frecuencia estándar (recomendado)
- **Trimestral**: Enfoque de bajo costo vía sugerencias por email

### Proceso de Ejecución

1. **Fase de Análisis**
   - Calcular asignaciones actuales vs objetivo
   - Evaluar costos de gas vs beneficios de rebalanceo
   - Identificar rutas de ejecución óptimas

2. **Aprobación del Usuario**
   - Presentar propuesta de rebalanceo
   - Mostrar costos estimados y beneficios
   - Permitir revisión manual y modificación

3. **Fase de Ejecución**
   - Transacciones en lote para eficiencia de gas
   - Ejecutar a través de múltiples cadenas si es necesario
   - Actualizar seguimiento y analítica

## Atribución de Rendimiento

### Analítica en Tiempo Real

Rastrear contribuciones de rendimiento de:

- **Selección de protocolos**: Qué protocolos impulsaron rendimientos
- **Timing de asignación**: Impacto de decisiones de rebalanceo
- **Optimización de cadena**: Beneficios de estrategias cross-chain
- **Gestión de costos**: Eficiencia de gas y optimización de comisiones

### Comparación de Benchmarks

Comparar rendimiento de estrategia contra:

- **Índices de mercado**: Bitcoin, Ethereum, índice DeFi
- **Finanzas tradicionales**: S&P 500, índices de bonos
- **Benchmarks DeFi**: Rendimientos específicos de protocolos
- **Métricas ajustadas por riesgo**: Ratio de Sharpe, Ratio de Sortino

---

Entender estas mecánicas le ayuda a tomar decisiones informadas sobre su estrategia DeFi. Nuestro
sistema maneja la complejidad mientras usted mantiene el control.

👉 **[Explorar Estrategias →](../strategies)** 👉 **[Ver Detalles de Seguridad →](../security)**
