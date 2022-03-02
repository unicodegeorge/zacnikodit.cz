--> compiling user's code. <--
-*- DOCKER COMMANDS -*-

1. FIRST BUILD CONTAINER
- docker build -t zkoditcontainer
2. RUN APP IN THE CONTAINER (fix environment variables not working)
- docker run -e UID --env UID='value' -e LESSONID --env LESSONID='value' -it --rm --name my-running-app my-java-app`s
3. COPY output file to the host
- docker cp $CONTAINERAPPID:zacnikoditAppTests/$UID/$PROJECTID/ .

-*- GOOGLE RUN COMMANDS -*- 


