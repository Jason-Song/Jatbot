# Jatbot

## 基本介绍：
  自动聊天软件，支持中英文，采用最新版rasa引擎，可进行意图识别、多轮对话、动作跟踪等功能，自动引导客户消费，应答客户咨询。

## 软件架构：

```
  root
   |-bin/ 启动命令脚本
   |-engine/ 基于rasa引擎开发的应答引擎
   |-ui/ 基于nodejs、express的前端对话页面
```
## 环境要求：
* python (3.6.2)
* tensorflow (1.10.0)
* rasa-core (0.12.3)
* rasa-core-sdk (0.12.1)
* rasa-nlu (0.13.4)

## 软件启动：
1. 进入项目目录，windows执行
  ```
  bin/start-all.bat
  ```
  linux执行
  ```
  bin/start-all.sh
  ```
2. 访问http://localhost:3001