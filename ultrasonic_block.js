Blockly.Python['ultra_read'] = function(block) {
    Blockly.Python.definitions_['import_ultra'] = 'import Ultrasonic';
    Blockly.Python.definitions_['import_pin_machine'] = 'from machine import Pin';
  
  
    Blockly.Python.definitions_['triger_pin'] = 'ULTRASONIC_TRIGGER_PIN = 2';
    Blockly.Python.definitions_['echo_pin'] = 'ULTRASONIC_ECHO_PIN = 15';
    
    var math_choice = block.getFieldValue('math');
    var read_number = Blockly.Python.valueToCode(block, 'read_num', Blockly.Python.ORDER_ATOMIC);
  
    code = `Ultrasonic.read(2, 15) ${math_choice} ${read_number}`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  { 
    "type": "ultra_read",
    "message0": "Ultrasonic read  %1 %2",
    "args0":[
    {
      "type": "field_dropdown",
      "name": "math",
      "options": [
        [Blockly.Msg.mt_sigh , ">="],
        [Blockly.Msg.lt_sigh , "<="],
        [Blockly.Msg.eq_sigh , "=="]
      ]
        
    },
    {
      "type": "input_value",
      "name": "read_num",
      "check": "Number"
    }
  ], 
  "output": ["Number", "Boolean"],
  "inputsInline": true,
  //"peviousStatement": null,
  //"nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
  //-----------------------------------------^
  },
  {
    xml:`    
        <block type="ultra_read">
            <value name="math">
                <shadow type="math_number">
                    <field name="NUM">>=</field>
                </shadow>
            </value>
            <value name="read_num">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>`
},