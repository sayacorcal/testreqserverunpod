# testreqserverunpod

to run it you must follow the next steps:
1) git clone https://github.com/sayacorcal/testreqserverunpod.git
2) cd testreqserverunpod
3) docker build -t server .
4) docker run -d --name server1 -p 3000:3000 server
