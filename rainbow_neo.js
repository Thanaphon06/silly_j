Blockly.Python['rainbow_neo'] = function(block) {
    Blockly.Python.definitions_['import_time'] = 'from time import sleep_ms';
    Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
    
    var functionName = Blockly.Python.provideFunction_(
      `rainbow_neo`,
      [`def ` + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + `():`,
      `  for j in range(256):`,
      `        for i in range(np.n):`,
      `            WheelPos = (i * 1 + j) % 256`,   
      `            if WheelPos < 85:`,
      `                np[i] = (int(WheelPos * 3), int(255 - WheelPos * 3), 0)`,
      `            elif WheelPos < 170:`,
      `                WheelPos -= 85`,
      `                np[i] = (int(255 - WheelPos * 3), 0, int(WheelPos * 3))`,
      `            else:`,
      `                WheelPos -= 170`,
      `                np[i] = (0, int(WheelPos * 3), int(255 - WheelPos * 3))`,
      `        np.write()`,
      `        sleep_ms(5)`,]);
  
    var code = 'rainbow_neo()\n'
    //var code = `for i in range(np.n): np[i] = (${red},${green}, ${blue})\nnp.write()\n`;
    return code;
  };
  {
    "type": "rainbow_neo",
    "message0": "NeoPixel rainbow",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },


  "rainbow_neo",