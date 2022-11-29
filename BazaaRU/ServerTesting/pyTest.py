import subprocess
import time

while True:
	for i in range(50):
		subprocess.call(['sh','./loginLoadTest.sh'])
	time.sleep(60)
