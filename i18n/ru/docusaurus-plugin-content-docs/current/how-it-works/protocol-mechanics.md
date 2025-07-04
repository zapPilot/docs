---
sidebar_position: 4
---

# Механики Протокола

Zap Pilot функционирует как сложная некастодиальная алгоритмическая система распределения активов.
Вот как работают механики нашего протокола под капотом.

## Архитектура Системы

### Некастодиальный Дизайн

Zap Pilot построен на фундаментальном принципе: **вы всегда контролируете свои средства**.

- **Без кастодии**: Мы никогда не храним ваши активы
- **Прямое взаимодействие с протоколами**: Ваш кошелек взаимодействует напрямую с DeFi протоколами
- **Прозрачное исполнение**: Все операции выполняются on-chain и поддаются аудиту
- **Аварийные выходы**: Вы можете вывести средства напрямую из протоколов при необходимости

## Логика Vault

### Тематическая Структура Vault

Каждый vault представляет конкретную инвестиционную стратегию с курируемыми DeFi протоколами:

#### **Компоненты Vault**

- **Определение стратегии**: Четкий инвестиционный тезис и целевое распределение
- **Белый список протоколов**: Проверенные, аудированные протоколы, соответствующие нашим стандартам
  безопасности
- **Параметры риска**: Максимальные лимиты распределения на протокол
- **Правила ребалансировки**: Условия, которые запускают корректировки портфеля

#### **Динамическая Система Взвешивания**

Протоколы внутри каждого vault взвешиваются на основе:

```
Вес Протокола = Базовый Вес × Множитель Производительности × Корректировка Риска
```

**Факторы Базового Веса:**

- Total Value Locked (TVL) - минимум $300k для стратегий стейблкоинов
- История аудитов и оценка безопасности
- Историческая стабильность доходности
- Глубина ликвидности

**Множитель Производительности:**

- Недавняя производительность доходности vs бенчмарки
- Консистентность доходности во времени
- Здоровье управления протокола

**Корректировка Риска:**

- Оценка риска смарт-контрактов
- Концентрация токенов управления
- Возраст протокола и период боевого тестирования

### Поток Исполнения Стратегии

1. **Депозит Пользователя** → Кошелек Account Abstraction получает средства
2. **Маршрутизация Vault** → Средства направляются в соответствующий тематический vault
3. **Распределение Протоколов** → Активы распределяются по курируемым протоколам
4. **Непрерывный Мониторинг** → Отслеживание производительности и рисков в реальном времени
5. **Триггеры Ребалансировки** → Квартальные предложения или алерты на основе пороговых значений

## Стратегия Kelly Allocation

### Математическая Основа

Мы используем **Kelly Criterion** для определения оптимальных размеров позиций, максимизируя
долгосрочный геометрический рост при управлении рисками.

#### **Формула Kelly**

```
Оптимальный Вес = (Ожидаемая Доходность - Безрисковая Ставка) / Дисперсия
```

#### **Multi-Asset Kelly Allocation**

Для портфелей с несколькими активами:

```
W* = Σ⁻¹ × (μ - rf × 1)
```

Где:

- **W\*** = Вектор оптимальных весов
- **Σ⁻¹** = Обратная ковариационная матрица доходностей
- **μ** = Вектор ожидаемой доходности
- **rf** = Безрисковая ставка
- **1** = Вектор единиц

### Практическая Реализация

#### **Kelly с Корректировкой на Риск**

Мы модифицируем классическую формулу Kelly для учета:

- **Лимиты максимальной просадки** (15% для консервативного, 30% для агрессивного)
- **Ограничения корреляции** (макс. 60% в коррелирующих активах)
- **Требования ликвидности** (поддерживать 10% в ликвидных позициях)

#### **Динамические Триггеры Ребалансировки**

Ребалансировка происходит когда:

- **Дрейф распределения** > 5% от целевых весов
- **Метрики риска** превышают предопределенные пороги
- **Новые возможности** с значительно лучшими доходностями с поправкой на риск появляются
- **Квартальные обзоры** независимо от дрейфа (настраивается пользователем)

## Интеграция Account Abstraction

### Архитектура Кошелька

#### **Функции Smart Wallet**

- **Транзакции без газа** через мета-транзакции
- **Пакетные операции** для эффективности газа
- **Ключи сессий** для автоматизированных стратегий
- **Поддержка мультиподписи** для институциональных пользователей

#### **Преимущества Пользовательского Опыта**

**Для Новичков:**

- Не нужно держать ETH для газа на нескольких цепочках
- Сложные операции одним кликом
- Опции социального восстановления

**Для Продвинутых Пользователей:**

- Программируемая логика транзакций
- Разрешения на автоматическую ребалансировку
- Пользовательские контроли расходов

### Пакетирование Транзакций

Несколько операций объединенных в одну транзакцию:

```
Пакетная Транзакция = [
  approve(token, amount),
  deposit(vault, amount),
  distribute(protocols[], weights[]),
  track(performance_metrics)
]
```

## Фреймворк Управления Рисками

### Защитные Меры Уровня Протокола

#### **Автоматизированный Мониторинг Рисков**

- **Пороги TVL**: Минимальные требования ликвидности
- **Обнаружение аномалий доходности**: Флагование необычно высоких/низких доходностей
- **Оценка риска управления**: Мониторинг изменений протокола
- **Мониторинг смарт-контрактов**: Отслеживание событий обновления

#### **Ограничения Диверсификации**

- **Максимальное распределение одного протокола**: 30% для консервативного, 50% для агрессивного
- **Диверсификация типов активов**: Не более 70% в одном классе активов
- **Диверсификация цепочек**: Распределение риска по нескольким сетям

### Контроли Уровня Пользователя

#### **Настройки Толерантности к Риску**

- **Консервативный**: Низкая волатильность, только стабильные протоколы
- **Умеренный**: Сбалансированный риск/вознаграждение, установленные протоколы
- **Агрессивный**: Высокая толерантность к риску, включая новые протоколы

#### **Процедуры Чрезвычайных Ситуаций**

- **Немедленный вывод**: Прямое взаимодействие с протоколами
- **Режим избегания риска**: Автоматическое перемещение в более безопасные активы во время кризиса
- **Автоматические выключатели**: Остановка автоматизированных действий во время экстремальной
  волатильности

## Механики Ребалансировки

### Условия Запуска

#### **Ребалансировка на Основе Порогов**

- Дрейф распределения превышает цель на 5%
- Метрики риска прорывают предопределенные лимиты
- Возможности доходности с преимуществом >2% появляются

#### **Ребалансировка на Основе Времени**

- **Еженедельно**: Для активных стратегий (опционально, высокие затраты)
- **Ежемесячно**: Стандартная частота (рекомендуется)
- **Ежеквартально**: Низкозатратный подход через предложения по email

### Процесс Исполнения

1. **Фаза Анализа**
   - Вычислить текущие vs целевые распределения
   - Оценить затраты газа vs выгоды ребалансировки
   - Идентифицировать оптимальные пути исполнения

2. **Одобрение Пользователя**
   - Представить предложение ребалансировки
   - Показать предполагаемые затраты и выгоды
   - Разрешить ручной обзор и модификацию

3. **Фаза Исполнения**
   - Пакетные транзакции для эффективности газа
   - Исполнить через несколько цепочек при необходимости
   - Обновить отслеживание и аналитику

## Атрибуция Производительности

### Аналитика в Реальном Времени

Отслеживать вклады производительности от:

- **Выбор протоколов**: Какие протоколы приводили доходности
- **Тайминг распределения**: Влияние решений ребалансировки
- **Оптимизация цепочек**: Выгоды кросс-чейн стратегий
- **Управление затратами**: Эффективность газа и оптимизация комиссий

### Сравнение с Бенчмарками

Сравнить производительность стратегии против:

- **Рыночные индексы**: Bitcoin, Ethereum, DeFi индекс
- **Традиционные финансы**: S&P 500, индексы облигаций
- **DeFi бенчмарки**: Доходности специфичные для протоколов
- **Метрики с поправкой на риск**: Коэффициент Шарпа, Коэффициент Сортино

---

Понимание этих механик помогает вам принимать обоснованные решения о вашей DeFi стратегии. Наша
система справляется со сложностью, сохраняя за вами контроль.

👉 **[Исследовать Стратегии →](../strategies)** 👉
**[Посмотреть Детали Безопасности →](../security)**
