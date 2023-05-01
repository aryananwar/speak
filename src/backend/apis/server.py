from flask import Flask, request, jsonify
import speech_recognition as sr
from pydub import AudioSegment
import wave
from datetime import date
import sounddevice as sd
from scipy.io.wavfile import write
from datetime import datetime
import asyncio
import time
sd.default.dtype='int32', 'int32'


r = sr.Recognizer()
global transcript_text
app = Flask(__name__)

def transcribe(filename):
    with sr.AudioFile(filename) as source:
    # listen for the data (load audio to memory)
        audio_data = r.record(source)
        # recognize (convert from speech to text)
        text = r.recognize_google(audio_data)
        transcript_text = text
        print(text)

@app.route('/')
def main():
    return 'Welcome'

@app.route('/stt', methods=['POST'])
def stt():
    json = request.get_json()
    mp3paths = json['paths']
    transcriptions = []
    for path in [1]:
        with sr.AudioFile('try.wav') as source:
            audio = r.record(source)
            transcriptions.append(r.recognize_sphinx(audio))
    return jsonify(transcriptions)

@app.route('/record', methods=['POST'])
def record():
    global sd
    global audio
    global now
    global fs
    global start
    start = time.time()
    fs = 44100


    now = datetime.now()
    print("recording")
    audio = sd.rec(int(180*fs), samplerate = fs, channels = 2)
    sd.wait()
    return 'hi'
    #await asyncio.sleep(10)
@app.route('/stop', methods=['POST'])
def stop():
    global sd
    global audio
    global now
    global fs
    global end
    global duration
    end = time.time()
    duration = (end-start)*1000
    sd.stop()
    file_name= now.strftime("oogabooga10")
    write(file_name + ".wav", fs, audio)
    print('stopped')
    cut(file_name, duration)
    return 'hi2'

@app.route('/transcript', methods=['GET'])
def transcript():
    return len(transcript_text.split())

def cut(filename, duration):
    print(filename)
    print(duration)
    newArr = []
    time2 = 0
    done = False
    i = 0
    while not done:
        i += 1
        if (time2+60000)<duration:
            print('cutting')
            newAudio = AudioSegment.from_wav(filename + '.wav')
            newAudio = newAudio[time2:(time2+60000)]
            time2 += 60000
            newAudio.export(f'{filename}-{i}.wav')
            newArr.append(f'{filename}-{i}.wav')
        else:
            print('cutting2')
            newAudio = AudioSegment.from_wav(filename + '.wav')
            newAudio = newAudio[time2:duration]
            done = True
            newAudio.export(f'{filename}-{i}.wav')
            newArr.append(f'{filename}-{i}.wav')
            transcribe(f'{filename}-{i}.wav')
            break
    return newArr

# cut('oogabooga3.wav',200)



if __name__ == '__main__':
    app.run(debug=True)