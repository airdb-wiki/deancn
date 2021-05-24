# 腾讯云 Serverless

讨论区： https://github.com/serverless/serverless-tencent/discussions


## 安装

```bash
npm install -g serverless
```

## 环境配置

1. serverless 配置文件 `.env`
```
# tencent serverless config
STAGE=test

SERVERLESS_PLATFORM_VENDOR=tencent
GLOBAL_ACCELERATOR_NA=true
TENCENT_APP_ID=xxx
TENCENT_SECRET_ID=XXX
TENCENT_SECRET_KEY=XXX
TENCENT_REGION=ap-shanghai
```

2. serverless.yaml 配置文件

Ref: https://github.com/serverless-components/tencent-scf/blob/master/docs/configure.md.

Demo: [https://github.com/airdb/scf-go]

## 部署

```bash
sls deploy --stage test
```

## 查看日志

```bash
sls logs --tail --stage test
```
