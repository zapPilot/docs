---
sidebar_position: 6
---

# 开发指南

本文档为开发者提供 Zap Pilot 的完整开发指南，包括环境设置、代码结构、开发流程和最佳实践。

## 开发环境设置

### 系统要求

- **Node.js**: 18.0 或更高版本
- **Python**: 3.9 或更高版本
- **Git**: 用于版本控制
- **Docker**: 用于容器化部署（可选）

### 获取代码

```bash
# 克隆主仓库
git clone https://github.com/zap-pilot/all-weather-protocol.git
cd all-weather-protocol

# 初始化所有子模块
git submodule update --init --recursive
```

### 安装依赖

#### 前端 (all-weather-frontend/)
```bash
cd all-weather-frontend
yarn install

# 启动开发服务器
yarn dev
```

#### 后端 (backend/)
```bash
cd backend
yarn install

# 设置环境变量
cp .env.example .env
# 编辑 .env 文件添加必要的配置

# 启动开发服务器
yarn dev
```

#### Python 服务
```bash
# 重新平衡引擎
cd rebalance_backend
pip install -r requirements.txt
# 或使用 Poetry
poetry install

# 启动服务
python main.py

# Index500 分析引擎
cd ../index500
poetry install
python main.py
```

#### 意图引擎 (intent-engine/)
```bash
cd intent-engine
npm install

# 设置环境变量
cp .env.example .env

# 编译 TypeScript
npm run build

# 启动服务
npm run dev
```

## 项目结构详解

### 根目录结构
```
all-weather-protocol/
├── all-weather-frontend/     # 前端应用
├── backend/                  # Node.js 后端
├── rebalance_backend/        # Python 重新平衡引擎
├── intent-engine/           # TypeScript 意图引擎
├── index500/                # Python 分析引擎
├── docs/                    # 文档（本文档网站）
├── CLAUDE.md               # 项目说明
└── README.md               # 项目总览
```

### 前端架构详解

#### 目录结构
```
all-weather-frontend/
├── pages/                   # Next.js 页面路由
│   ├── _app.tsx            # 应用入口
│   ├── index.tsx           # 首页
│   └── dashboard.tsx       # 仪表板
├── components/             # React 组件
│   ├── common/            # 通用组件
│   ├── charts/            # 图表组件
│   └── portfolio/         # 投资组合组件
├── classes/               # 核心业务逻辑类
│   ├── Vaults/           # 金库策略类
│   ├── protocols/        # DeFi 协议适配器
│   └── bridges/          # 跨链桥适配器
├── utils/                 # 工具函数
├── hooks/                 # 自定义 React Hooks
└── lib/                   # 第三方库配置
```

#### 核心类设计
```typescript
// 基础协议类
abstract class BaseProtocol {
  protected name: string;
  protected chainId: number;
  protected contractAddress: string;
  
  abstract async deposit(amount: bigint, token: string): Promise<TransactionResult>;
  abstract async withdraw(amount: bigint): Promise<TransactionResult>;
  abstract async getBalance(): Promise<bigint>;
  abstract async getAPY(): Promise<number>;
}

// 金库基类
abstract class BaseVault {
  protected strategy: string;
  protected protocols: BaseProtocol[];
  protected riskLevel: RiskLevel;
  
  abstract async executeStrategy(intent: UserIntent): Promise<ExecutionResult>;
  abstract async rebalance(): Promise<RebalanceResult>;
  abstract async getPerformance(): Promise<PerformanceMetrics>;
}

// 稳定币金库实现
class StablecoinVault extends BaseVault {
  constructor() {
    super();
    this.strategy = 'stablecoin';
    this.riskLevel = 'low';
    this.protocols = [
      new AaveProtocol(),
      new MoonwellProtocol(),
      new ConvexProtocol()
    ];
  }
  
  async executeStrategy(intent: UserIntent): Promise<ExecutionResult> {
    // 实现稳定币策略逻辑
    const allocation = await this.calculateOptimalAllocation(intent);
    return await this.executeAllocation(allocation);
  }
}
```

### 后端架构详解

#### 服务层设计
```typescript
// 控制器层
class ReportController {
  constructor(
    private reportService: ReportService,
    private emailService: EmailService,
    private discordService: DiscordService
  ) {}
  
  async generateReport(userId: string): Promise<Report> {
    const data = await this.reportService.aggregateData(userId);
    const report = await this.reportService.generateReport(data);
    
    // 发送通知
    await this.emailService.sendReport(userId, report);
    await this.discordService.notifyReport(userId, report);
    
    return report;
  }
}

// 服务层
class ReportService {
  constructor(
    private dataService: DataAggregationService,
    private templateService: TemplateService
  ) {}
  
  async generateReport(data: AggregatedData): Promise<Report> {
    const template = await this.templateService.getTemplate('performance');
    return this.templateService.render(template, data);
  }
}

// 数据访问层
class DataAggregationService {
  async aggregatePortfolioData(address: string): Promise<PortfolioData> {
    const [onChainData, defiData, priceData] = await Promise.all([
      this.fetchOnChainData(address),
      this.fetchDefiData(address),
      this.fetchPriceData()
    ]);
    
    return this.combineData(onChainData, defiData, priceData);
  }
}
```

### Python 服务架构

#### 重新平衡引擎
```python
# main.py - Flask 应用入口
from flask import Flask, request, jsonify
from services.portfolio_analyzer import PortfolioAnalyzer
from services.strategy_engine import StrategyEngine

app = Flask(__name__)

@app.route('/api/analyze', methods=['POST'])
def analyze_portfolio():
    data = request.get_json()
    analyzer = PortfolioAnalyzer()
    result = analyzer.analyze(data)
    return jsonify(result)

@app.route('/api/rebalance', methods=['POST'])
def rebalance_portfolio():
    data = request.get_json()
    strategy = StrategyEngine()
    result = strategy.execute_rebalance(data)
    return jsonify(result)
```

```python
# services/portfolio_analyzer.py
import pandas as pd
import numpy as np
from typing import Dict, List, Any

class PortfolioAnalyzer:
    def __init__(self):
        self.risk_model = RiskModel()
        self.return_calculator = ReturnCalculator()
    
    def analyze(self, portfolio_data: Dict[str, Any]) -> Dict[str, Any]:
        """分析投资组合性能"""
        df = pd.DataFrame(portfolio_data['history'])
        
        # 计算收益率
        returns = self.return_calculator.calculate_returns(df)
        
        # 风险指标
        risk_metrics = self.risk_model.calculate_risk_metrics(returns)
        
        # 性能指标
        performance = self.calculate_performance_metrics(returns)
        
        return {
            'returns': returns.to_dict(),
            'risk': risk_metrics,
            'performance': performance
        }
    
    def calculate_performance_metrics(self, returns: pd.Series) -> Dict[str, float]:
        """计算性能指标"""
        return {
            'total_return': (1 + returns).prod() - 1,
            'annualized_return': (1 + returns.mean()) ** 252 - 1,
            'volatility': returns.std() * np.sqrt(252),
            'sharpe_ratio': self.calculate_sharpe_ratio(returns),
            'max_drawdown': self.calculate_max_drawdown(returns)
        }
```

## 开发工作流

### 1. 功能开发流程

```bash
# 1. 创建功能分支
git checkout -b feature/new-vault-strategy

# 2. 开发功能
# ... 编码 ...

# 3. 运行测试
yarn test                    # 前端测试
npm run test                 # 后端测试
pytest                       # Python 测试

# 4. 代码格式化
yarn format                  # 前端格式化
npm run lint                 # 后端检查
black .                      # Python 格式化

# 5. 提交代码
git add .
git commit -m "feat: add new vault strategy"

# 6. 推送并创建 PR
git push origin feature/new-vault-strategy
```

### 2. 测试策略

#### 前端测试 (Vitest)
```typescript
// __tests__/StablecoinVault.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { StablecoinVault } from '../classes/Vaults/StablecoinVault';

describe('StablecoinVault', () => {
  it('should calculate optimal allocation correctly', async () => {
    const vault = new StablecoinVault();
    const intent = {
      amount: '1000',
      riskLevel: 'low' as const,
      duration: '1year'
    };
    
    const allocation = await vault.calculateOptimalAllocation(intent);
    
    expect(allocation.lending).toBeGreaterThan(0.4);
    expect(allocation.liquidity).toBeLessThan(0.4);
    expect(Object.values(allocation).reduce((a, b) => a + b, 0)).toBeCloseTo(1);
  });
});
```

#### 后端测试 (Jest)
```typescript
// __tests__/ReportService.test.js
const { ReportService } = require('../services/ReportService');

describe('ReportService', () => {
  let reportService;
  
  beforeEach(() => {
    reportService = new ReportService();
  });
  
  it('should generate performance report', async () => {
    const testData = {
      portfolio: { value: 10000, assets: [] },
      returns: [0.01, 0.02, -0.005]
    };
    
    const report = await reportService.generateReport(testData);
    
    expect(report).toHaveProperty('summary');
    expect(report).toHaveProperty('performance');
    expect(report.performance.totalReturn).toBeDefined();
  });
});
```

#### Python 测试 (Pytest)
```python
# tests/test_portfolio_analyzer.py
import pytest
import pandas as pd
from services.portfolio_analyzer import PortfolioAnalyzer

class TestPortfolioAnalyzer:
    def setup_method(self):
        self.analyzer = PortfolioAnalyzer()
    
    def test_analyze_portfolio(self):
        # 测试数据
        portfolio_data = {
            'history': [
                {'date': '2023-01-01', 'value': 10000},
                {'date': '2023-01-02', 'value': 10100},
                {'date': '2023-01-03', 'value': 10050}
            ]
        }
        
        result = self.analyzer.analyze(portfolio_data)
        
        assert 'returns' in result
        assert 'risk' in result
        assert 'performance' in result
        assert result['performance']['volatility'] > 0
```

### 3. 代码质量工具

#### ESLint 配置 (.eslintrc.js)
```javascript
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    'no-var': 'error'
  }
};
```

#### Python 代码质量 (pyproject.toml)
```toml
[tool.black]
line-length = 88
target-version = ['py39']

[tool.isort]
profile = "black"
multi_line_output = 3

[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py"]
addopts = "--cov=src --cov-report=html"
```

## 核心概念和模式

### 1. 意图驱动设计
```typescript
// 意图定义
interface UserIntent {
  action: 'invest' | 'withdraw' | 'rebalance';
  strategy: VaultType;
  amount: string;
  timeframe: string;
  riskTolerance: RiskLevel;
  preferences: {
    maxSlippage: number;
    gasOptimization: boolean;
    autoCompound: boolean;
  };
}

// 意图处理器
class IntentProcessor {
  async processIntent(intent: UserIntent): Promise<ExecutionPlan> {
    // 1. 验证意图
    await this.validateIntent(intent);
    
    // 2. 分析最优路径
    const path = await this.findOptimalPath(intent);
    
    // 3. 生成执行计划
    const plan = await this.generateExecutionPlan(path);
    
    // 4. 风险评估
    await this.assessRisk(plan);
    
    return plan;
  }
}
```

### 2. 插件化架构
```typescript
// 协议插件接口
interface ProtocolPlugin {
  name: string;
  version: string;
  supportedChains: number[];
  
  initialize(config: PluginConfig): Promise<void>;
  deposit(params: DepositParams): Promise<TransactionResult>;
  withdraw(params: WithdrawParams): Promise<TransactionResult>;
  getBalance(address: string): Promise<Balance>;
  getAPY(): Promise<number>;
}

// 协议注册表
class ProtocolRegistry {
  private plugins: Map<string, ProtocolPlugin> = new Map();
  
  registerPlugin(plugin: ProtocolPlugin): void {
    this.plugins.set(plugin.name, plugin);
  }
  
  getPlugin(name: string): ProtocolPlugin | undefined {
    return this.plugins.get(name);
  }
  
  getPluginsForChain(chainId: number): ProtocolPlugin[] {
    return Array.from(this.plugins.values())
      .filter(plugin => plugin.supportedChains.includes(chainId));
  }
}
```

### 3. 事件驱动架构
```typescript
// 事件系统
class EventBus {
  private listeners: Map<string, Function[]> = new Map();
  
  on(event: string, listener: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }
  
  emit(event: string, data: any): void {
    const listeners = this.listeners.get(event) || [];
    listeners.forEach(listener => listener(data));
  }
}

// 使用示例
const eventBus = new EventBus();

// 监听投资组合更新
eventBus.on('portfolio.updated', (data) => {
  console.log('Portfolio updated:', data);
  // 触发重新平衡检查
  // 更新UI
  // 发送通知
});

// 发射事件
eventBus.emit('portfolio.updated', { 
  address: '0x...', 
  newValue: 15000 
});
```

## 部署和运维

### 1. Docker 部署

#### 前端 Dockerfile
```dockerfile
# all-weather-frontend/Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

#### Python 服务 Dockerfile
```dockerfile
# rebalance_backend/Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "main:app"]
```

### 2. Docker Compose 开发环境
```yaml
# docker-compose.dev.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./all-weather-frontend
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./all-weather-frontend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    ports:
      - "3001:3001"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development

  rebalance:
    build:
      context: ./rebalance_backend
    ports:
      - "5000:5000"
    volumes:
      - ./rebalance_backend:/app
    environment:
      - FLASK_ENV=development

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  postgres:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=zap_pilot
      - POSTGRES_USER=dev
      - POSTGRES_PASSWORD=dev
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 3. 环境变量管理

#### 前端环境变量 (.env.local)
```bash
# Web3 配置
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# API 端点
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_REBALANCE_API_URL=http://localhost:5000

# 功能开关
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true

# 网络配置
NEXT_PUBLIC_DEFAULT_CHAIN_ID=1
NEXT_PUBLIC_SUPPORTED_CHAINS=1,137,42161,8453
```

#### 后端环境变量 (.env)
```bash
# 数据库配置
DATABASE_URL=postgresql://user:password@localhost:5432/zap_pilot
REDIS_URL=redis://localhost:6379

# 外部 API
DEBANK_API_KEY=your_debank_key
GOOGLE_SHEETS_CREDENTIALS=path/to/credentials.json

# 通知服务
DISCORD_WEBHOOK_URL=your_discord_webhook
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email
SMTP_PASS=your_password

# 安全配置
JWT_SECRET=your_jwt_secret
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

## 调试和故障排除

### 1. 日志配置
```typescript
// utils/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

export default logger;
```

### 2. 常见问题解决

#### 钱包连接问题
```typescript
// 钱包连接调试
const debugWalletConnection = async () => {
  try {
    // 检查浏览器支持
    if (!window.ethereum) {
      throw new Error('No wallet provider found');
    }
    
    // 检查网络
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    console.log('Current chain:', parseInt(chainId, 16));
    
    // 检查账户
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    console.log('Connected accounts:', accounts);
    
  } catch (error) {
    console.error('Wallet connection error:', error);
  }
};
```

#### 交易失败调试
```typescript
// 交易调试工具
const debugTransaction = async (txHash: string) => {
  const provider = new ethers.providers.JsonRpcProvider();
  
  try {
    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);
    
    console.log('Transaction:', tx);
    console.log('Receipt:', receipt);
    
    if (receipt.status === 0) {
      // 交易失败，获取详细信息
      const code = await provider.call(tx, tx.blockNumber);
      console.log('Failure reason:', code);
    }
  } catch (error) {
    console.error('Transaction debug error:', error);
  }
};
```

## 贡献指南

### 1. 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能添加
git commit -m "feat: add new vault strategy"

# 错误修复
git commit -m "fix: resolve transaction timeout issue"

# 文档更新
git commit -m "docs: update API documentation"

# 样式更改
git commit -m "style: fix linting issues"

# 重构
git commit -m "refactor: improve error handling"

# 测试
git commit -m "test: add unit tests for portfolio analyzer"
```

### 2. Pull Request 流程

1. **Fork 仓库**并创建功能分支
2. **编写代码**并确保通过所有测试
3. **更新文档**如有必要
4. **提交 PR**并填写详细描述
5. **代码审查**和修改建议
6. **合并代码**到主分支

### 3. 代码审查清单

- [ ] 代码符合项目风格指南
- [ ] 包含适当的测试用例
- [ ] 文档已更新
- [ ] 性能影响已考虑
- [ ] 安全性已检查
- [ ] 向后兼容性已确认

## 下一步

- 📊 [API 参考文档](./api/introduction) - 详细的 API 文档
- 🧪 测试指南 - 全面的测试策略
- 🚀 部署指南 - 生产环境部署
- 💡 [最佳实践](./guides/best-practices) - 开发最佳实践

需要帮助？
- 🐛 报告问题
- 💬 加入讨论
- 📧 联系团队