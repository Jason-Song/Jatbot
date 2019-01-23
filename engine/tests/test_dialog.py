
from rasa_core.agent import Agent
from rasa_core.interpreter import RasaNLUInterpreter

interpreter = RasaNLUInterpreter('../models/current/nlu')
messages = ["Hi! you can chat in this window. Type 'stop' to end the conversation."]
agent = Agent.load('../models/dialogue', interpreter=interpreter)

a = "what's your name"
responses = agent.handle_message(a)
# for r in responses:
#     messages.append(r.get("text"))
print(responses)