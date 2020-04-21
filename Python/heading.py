def heading_generator(title, type):
  return f'<h{type}>{title}</h{type}>'

print(heading_generator('Greetings', 3))
