#include <Adafruit_NeoPixel.h>

#define LED_PIN 6
#define LED_COUNT 50

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_BRG + NEO_KHZ800);

const byte numChars = 100;
char receivedChars[numChars];
boolean newData = false;

void setup() {
    Serial.begin(9600);
    strip.begin();
    strip.show();
    strip.setBrightness(50);
}

void loop() {
    recvChars();
    showNewData();
}

void recvChars() {
    static byte index = 0;
    static boolean recvInProgress = false;
    char startMark = '<';
    char endMark = '>';
    char rc;

    while (Serial.available() > 0 && newData == false) {
        rc = Serial.read();
        if (recvInProgress == true) {
            if (rc != endMark) {
                receivedChars[index] = rc;
                index++;
                if (index >= numChars) {
                    index = numChars - 1;
                }
            } else {
                receivedChars[index] = '\0';
                recvInProgress = false;
                index = 0;
                newData = true;
            }
        } else if (rc == startMark) {
            recvInProgress = true;
        }
    }
}

void showNewData() {
    if (newData == true) {
        char * colors = strtok(receivedChars, ";");
        int r = atoi(colors);
        colors = strtok(NULL, ",");
        int g = atoi(colors);
        colors = strtok(NULL, ",");
        int b = atoi(colors);
        for (int i = 0; i < strip.numPixels(); i++) {
            strip.setPixelColor(i, strip.Color(r, g, b));
        }
        strip.show();
        newData = false;
    }
}
