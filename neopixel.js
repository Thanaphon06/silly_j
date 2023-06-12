Blockly.Python['neopixel_fill_color1'] = function(block) {
    Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';

    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
    
    

    var colour_color = block.getFieldValue('color');
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
    var red = parseInt(result[1], 16);
    var green = parseInt(result[2], 16);
    var blue = parseInt(result[3], 16);
  
    //for i in range(np.n): np[i] = (${red} ,${green}, ${blue})\nnp.write()
    var code = `for i in range(np.n): np[i] = (${red} ,${green}, ${blue})\nnp.write()`;
    return code;
  };
  {
    "type": "neopixel_fill_color1",
    "message0": "NeoPixel fill color %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#ff0000"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
//////////////////////////////////////////
  "neopixel_fill_color1",
  ////////////////////////


  Blockly.Python['neopixel_off'] = function(block) {
    Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_neopixel_neo'] = 'from neopixel import NeoPixel';
  
    Blockly.Python.definitions_['LED_PIN'] = 'LED_PIN = 4';
    Blockly.Python.definitions_['LED_COUNT'] = 'LED_COUNT = 2';   
    
    Blockly.Python.definitions_['np_neo'] = 'np = NeoPixel(Pin(LED_PIN, Pin.OUT), LED_COUNT)'; 
    
    var code = `for i in range(np.n): np[i] = (0,0,0)\nnp.write()\n`;
    return code;
  };

  {
    "type": "neopixel_off",
    "message0": "NeoPixel Off",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#27AE60",
    "tooltip": "",
    "helpUrl": ""
  },
  "neopixel_off",