import cv2
import time
import threading
from gaze_tracking import GazeTracking


data = []


gaze = GazeTracking()
webcam = cv2.VideoCapture(0)

start = time.time()

x = ''
i = 0

while True:
    # We get a new frame from the webcam
    _, frame = webcam.read()

    # We send this frame to GazeTracking to analyze it
    gaze.refresh(frame)

    frame = gaze.annotated_frame()
    text = ""


    if gaze.is_blinking():
        text = "Blinking"
    elif gaze.is_right():
        text = "right"
    elif gaze.is_left():
        text = "left"
    elif gaze.is_center():
        text = "center"

    #cv2.putText(frame, text, (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)

    left_pupil = gaze.pupil_left_coords()
    right_pupil = gaze.pupil_right_coords()

    if text == "right" or text == "left":
        cv2.putText(frame, " Look Forward! ", (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 1)
    #cv2.putText(frame, "Left pupil:  " + str(left_pupil), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)
    #cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

    cv2.imshow("Demo", frame)

    if cv2.waitKey(1) == 80:
        break
    
webcam.release()
cv2.destroyAllWindows()
