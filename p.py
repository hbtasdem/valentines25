dir = __path__("/Desktop/01.01")
files = dir.iterdir()

for file in files:
    open(file, "r")