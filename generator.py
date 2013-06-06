import sys

pages = ["about", "resume", "contact"]

f = open("index.html", "r")
html = f.read()
f.close()

for page in pages:
	query = ' id="' + page + '" class="nav-item"'
	index = html.find(query)

	insert = query[:-1] + ' active"'
	temp = html[:index] + insert + html[index+len(query):]

	index = temp.find('" id="' + page + '-content"')
	temp = temp[:index] + " displayed" + temp[index:]
	f = open(page, "w")
	f.write(temp)
	f.close()
