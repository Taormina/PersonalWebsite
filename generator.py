import sys

pages = ["about", "github", "resume", "contact"]

f = open("index.html", "r")
html = f.read()
f.close()

for page in pages:
	index = html.find('" id="' + page + '"')
	temp = html[:index] + " active" + html[index:]

	index = temp.find('" id="' + page + '-content"')
	temp = temp[:index] + " displayed" + temp[index:]
	f = open(page, "w")
	f.write(temp)
	f.close()

