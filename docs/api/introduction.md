---
sidebar_position: 1
---

# API 介绍

Zap Pilot 提供了强大的 RESTful API，让开发者能够程序化地访问我们的意图驱动 DeFi 执行引擎。

## 基础信息

- **基础 URL**: `https://api.zap-pilot.io/v1`
- **认证**: Bearer Token
- **数据格式**: JSON
- **HTTPS**: 必须

## 快速开始

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.zap-pilot.io/v1/portfolios/0x1234...
```

## 端点概览

| 分类 | 描述 |
|------|------|
| 认证 | 用户认证和授权 |
| 投资组合 | 投资组合管理 |
| 交易 | 交易执行和监控 |
| 分析 | 性能分析和报告 |

更多详细的 API 文档即将推出。