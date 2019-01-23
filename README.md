# Jatbot

## 软件演示【Software demonstration】：
![自动聊天效果演示【Demonstration of Automatic Chat Effect】](https://github.com/Jason-Song/readme-images/blob/master/jatbot.gif)

## 功能介绍【Function introduction】：
  自动聊天软件，支持中英文，采用最新版rasa引擎，可进行意图识别、多轮对话、动作跟踪等功能，自动引导客户消费，应答客户咨询。
  
  Automatic chat software, supporting Chinese and English, using the latest version of Rasa engine, can carry out intention recognition, multi-round dialogue, action tracking and other functions, automatically guide customers to consume, respond to customer consultation.
  
## 软件架构【Software architecture】：

```
  root
   |-bin/ 启动命令脚本【Start command script】
   |-engine/ 基于rasa引擎开发的应答引擎【Response Engine Based on rasa Engine】
   |-ui/ 基于nodejs、express的前端对话页面【Front-end Dialogue Page Based on Noejs and Express】
```
## 环境要求【Environmental requirements】：
* nodejs (8.11.1)
* express (4.16.4)
* python (3.6.2)
* tensorflow (1.10.0)
* rasa-core (0.12.3)
* rasa-core-sdk (0.12.1)
* rasa-nlu (0.13.4)

## 软件启动【Software startup】：
1. 进入项目目录，windows执行【Enter the project directory and execute Windows system commands】
    ```
    bin/start-all.bat
    ```
    linux执行【Or execute Linux system commands】
    ```
    bin/start-all.sh
    ```
2. 访问http://localhost:3001【Request http://localhost:3001】
