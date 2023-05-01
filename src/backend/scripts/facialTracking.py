import numpy as np
import cv2
import time

# <----- The data[] is an array with all the x and y coordinates to plot to show your general facial movements ----->

cap = cv2.VideoCapture(0)

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

data = []
start = time.time()
while True:
    ret, frame = cap.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x , y, w, h) in faces:
        # if you don't want to show the blue box just comment out or just take out line 21
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 5)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = frame[y:y+h, x:x+w]
        text = str(x) + " " + str(y)
        end = time.time()
        if end - start > 1:
            start = time.time()
            data.append({"x": x, "y": y})
            print(data)


    cv2.imshow('frame', frame)

    if cv2.waitKey(1) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()