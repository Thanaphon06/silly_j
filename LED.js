{
    xml: `
        <block type="led_onoff">
            <value name="pin_trig">
                <shadow type="math_number">
                    <field name="NUM">Left</field>
                </shadow>
            </value>
            <value name="onoff">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
    `
},

//-------------------------------------
{ 
    "type": "led_onoff",
    "message0": "LED pin : %1 is : %2",
    "args0":[
    {
      "type": "field_dropdown",
      "name": "pin_trig",
      "options": [
        [Blockly.Msg.LED_LIFT_Msg , "1"],
        [Blockly.Msg.LED_RIGHT_Msg , "2"]
      ]
        
    },
    {
      "type": "input_value",
      "name": "onoff",
      "check": "Number"
    }
  ], 
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  //-----------------------------------------^
  },
  Blockly.Python['led_onoff'] = function(block) {
    Blockly.Python.definitions_['from machine import Pin'] = 'from machine import Pin';
    
    var dropdown_trig = block.getFieldValue('pin_trig');
    var dropdown_onoff = Blockly.Python.valueToCode(block, 'onoff', Blockly.Python.ORDER_ATOMIC);
    code = '';;
    if(dropdown_trig == 1){
      code = `Pin(33, Pin.OUT).value(${dropdown_onoff})\n`;
    }else if(dropdown_trig == 2){
      code = `Pin(12, Pin.OUT).value(${dropdown_onoff})\n`;
    }
    return code;
  };