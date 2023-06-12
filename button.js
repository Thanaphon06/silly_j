{
    xml:`
        <block type = "button">
            <value name = "pin">
                <shadow type = "math_number">
                    <field name = "NUM">Button_A</field>
                </shadow>
            </value>
        </block>
    `
},
//////////////////////
{
    
},
///////////////////////
{
    xml:`
        <block type = "buttonA_toggle">
            <value name = "pin">
                <shadow type = "math_number">
                    <field name = "NUM">Button_A</field>
                </shadow>
            </value>
        </block>
    `
},
/////////////////
{
    xml:`
        <block type = "buttonB_toggle">
            <value name = "pin">
                <shadow type = "math_number">
                    <fied name = "NUM">Button_B</fied>
                </shadow>
            </value>
        </block>
    `
}
////////////////////////
Blockly.Python['button'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
  
  
  
  
    //button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)
    
    var dropdown_button = block.getFieldValue('pin');
    
    
    code = '';;
    if(dropdown_button == 18){
      code = `button_a.value() == 1`;
    }else if(dropdown_button == 5){
      code = `button_b.value() == 1`;
    }
    return [code, Blockly.Python.ORDER_NONE];
  };
  //////////////////////////////
  Blockly.Python['buttonA_toggle'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    //Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    //Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
   //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
    
   Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
    //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
    Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
    
    Blockly.Python.definitions_['button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_a.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
    
    code = 'toggle_state';
    return [code, Blockly.Python.ORDER_NONE];
  };
  ////////////////////////////////////////////
  Blockly.Python['buttonB_toggle'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    //Blockly.Python.definitions_['buttonA_pin = 18'] = 'buttonA_pin = 18';
    Blockly.Python.definitions_['buttonB_pin = 5'] = 'buttonB_pin = 5';
    
    //Blockly.Python.definitions_['button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)'] = 'button_a = Pin(buttonA_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)'] = 'button_b = Pin(buttonB_pin, Pin.IN, Pin.PULL_UP)';
    Blockly.Python.definitions_['toggle_state = False'] = 'toggle_state = False';
   //Blockly.Python.definitions_['toggleb_state = False'] = 'toggleb_state = False';
    
   Blockly.Python.definitions_['def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state'] = 'def toggle_pin():\n    global toggle_state\n    toggle_state = not toggle_state';
    //Blockly.Python.definitions_['if button_b.value() == 1 : \n toggleb_state = not toggleb_state'] = 'if button_b.value() == 1: \n toggleb_state = not toggleb_state';
    Blockly.Python.definitions_['def toggle_interrupt_handler(pin):\n     if pin.value() == 0:\n        toggle_pin()'] = 'def toggle_interrupt_handler(pin):\n    if pin.value() == 0:\n        toggle_pin()';
    
    Blockly.Python.definitions_['button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)'] = 'button_b.irq(trigger=Pin.IRQ_FALLING, handler=toggle_interrupt_handler)\n';
    
    code = 'toggle_state';
    return [code, Blockly.Python.ORDER_NONE];
  };
  {
    "type":"button",
    "message0": "Button: %1 is put",
    "args0":[
      {
        "type" : "field_dropdown",
        "name" : "pin",
        "options" : [
          [
            Blockly.Msg.buttonA_Msg , "18"
          ],
          [
            Blockly.Msg.buttonB_Msg , "5"
          ]
        ]
      }
    ],
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  
  },
  {
    "type":"buttonA_toggle",
    "message0": "Switch: %1 is on ",
    "args0":[
      {
        "type" : "field_dropdown",
        "name" : "pin",
        "options" : [
          [
            Blockly.Msg.buttonA_Msg , "18"
          ]
        ]
      }
    ],
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  },
  {
    "type":"buttonB_toggle",
    "message0": "Switch: %1 is on ",
    "args0":[
      {
        "type" : "field_dropdown",
        "name" : "pin",
        "options" : [
          [
            Blockly.Msg.buttonB_Msg , "5"
          ]
        ]
      }
    ],
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  },///////////////////////////////////////////