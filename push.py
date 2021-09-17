import os
from datetime import datetime
import shutil


now = datetime.now()
date_time = now.strftime("%m/%d/%Y, %H:%M:%S")

msg = input("Enter message: ")

shutil.rmtree('android/app/build', ignore_errors=True)
shutil.rmtree('android/build', ignore_errors=True)

os.system("git add .")
os.system("""git commit -m " """+date_time+""" """+msg+""" " """)
os.system("git push origin master")
os.system("git push foresy app -f")

