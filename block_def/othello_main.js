//ブロック追加時
// Blockly.defineBlocksWithJsonArray([
//   /* ここにJSONファイルの内容をコピー */
// ]);

// mainエリア

//ループ終了条件
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "finishGame",
    "message0": "ゲームの終了条件を満たすまで",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['finishGame'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"finishGame"';
  //code += ' '+'^(result)\n';
  return code;
};

//手番の石が置ける
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "turnPut",
    "message0": "手番プレイヤーの石が置ける",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['turnPut'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"turnPut"';
  //code += ' '+'^(turnPossibility)\n';
  return code;
};

//相手の石が置ける
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "opponentPut",
    "message0": "相手プレイヤーの石が置ける",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['opponentPut'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"opponentPut"';
  //code += ' '+'^(opponentPossibility)\n';
  return code;
};


//盤面表示
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "printboard",
    "message0": "盤面表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['printboard'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"printBoard"';
  code += ' '+'^()\n';
  return code;
};

//break
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "break",
    "message0": "break",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['break'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"break"';
  code += ' '+'^()\n';
  return code;
};

//先手・後手選択
Blockly.defineBlocksWithJsonArray([

  {
    "type": "turn_select",
    "message0": "手番選択",
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.Hat['turn_select'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"turnSelect"';
  //code += '{ turnSelect();})"';旧ver
  code += ' '+'^(player)\n';
  return code;
};


Blockly.defineBlocksWithJsonArray(

  [{
    "type": "othello_put",
    "message0": "オセロ盤面 : ( %1 %2 %3 , %4 %5 %6 ) に %7 %8 %9 を置く",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board_x",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "5",
            "5"
          ],
          [
            "6",
            "6"
          ],
          [
            "7",
            "7"
          ],
          [
            "x",
            "x"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "board_y",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "5",
            "5"
          ],
          [
            "6",
            "6"
          ],
          [
            "7",
            "7"
          ],
          [
            "y",
            "y"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "color",
        "options": [
          [
            "黒",
            "BLACK"
          ],
          [
            "白",
            "WHITE"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);

Blockly.Hat['othello_put'] = function(block) {
  var dropdown_board_x = block.getFieldValue('board_x');
  var dropdown_board_y = block.getFieldValue('board_y');
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  
  let code = 'JavaScript';
  code += ' '+'"othello_put"';
  code += ' '+ dropdown_board_x +' '+ dropdown_board_y +' '+ dropdown_color;
  code += ' '+'^()\n';
  return code;
};


//オセロの初期状態配列情報
Blockly.defineBlocksWithJsonArray(
  [{
    "type": "startothello",
    "message0": "オセロ : %1 %2 %3 の初期状態",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "boardnum",
        "options": [
          [
            "4×4",
            "4"
          ],
          [
            "6×6",
            "6"
          ],
          [
            "8×8",
            "8"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 165,
    "tooltip": "中央(2×2)に並べられている情報を持つ配列",
    "helpUrl": ""
  }]
);

Blockly.Hat['startothello'] = function(block) {
  var dropdown_boardnum = block.getFieldValue('boardnum');
  let code = 'JavaScript' + ' ';
  code += '"hatStart"'+ ' ' + dropdown_boardnum;
  //code += 'num ^()';
  code += ' '+'^(redata)\n';
  return code;
};

// //指定した盤面を出力　オセロ盤面の修正が必要
// Blockly.defineBlocksWithJsonArray(
// 
//   [{
//     "type": "positionprint",
//     "message0": "盤面 : %1 を出力する %2 出力後の手番 : %3",
//     "args0": [
//       {
//         "type": "input_statement",
//         "name": "position"
//       },
//       {
//         "type": "input_dummy",
//         "align": "RIGHT"
//       },
//       {
//         "type": "field_dropdown",
//         "name": "next",
//         "options": [
//           [
//             "player",
//             "player"
//           ],
//           [
//             "CPU",
//             "CPU"
//           ]
//         ]
//       }
//     ],
//     "inputsInline": false,
//     "previousStatement": null,
//     "nextStatement": null,
//     "colour": 230,
//     "tooltip": "",
//     "helpUrl": ""
//   }]
// );
// Blockly.Hat['positionprint'] = function(block) {
//   var statements_position = Blockly.Hat.statementToCode(block, 'position');
//   var dropdown_next = block.getFieldValue('next');
//   // TODO: Assemble Hat into code variable.
//   let code = 'JavaScript' + '"' + '(function(position, color)';
//   code += '{ reflectBoard('+ statements_position +','+dropdown_next+');})"\n';
//   code += 'position color ^()'
//   return code;
// };

// //指定した盤面を出力　オセロ盤面の修正が必要
// Blockly.defineBlocksWithJsonArray(
// 
//   [{
//     "type": "positionprint2",
//     "message0": "盤面 : %1 を出力する %2",//出力後の手番 : %3
//     "args0": [
//       {
//         "type": "input_value",
//         "name": "position"
//       },
//       {
//         "type": "input_dummy",
//       }
//       // },
//       // {
//       //   "type": "field_dropdown",
//       //   "name": "next",
//       //   "options": [
//       //     [
//       //       "player",
//       //       "player"
//       //     ],
//       //     [
//       //       "CPU",
//       //       "CPU"
//       //     ]
//       //   ]
//       // }
//     ],
//     "inputsInline": false,
//     "previousStatement": null,
//     "nextStatement": null,
//     "inputsInline": true,
//     "colour": 230,
//     "tooltip": "",
//     "helpUrl": ""
//   }]
// );
// Blockly.Hat['positionprint2'] = function(block) {
//   var value_position = Blockly.Hat.statementToCode(block, 'position');
//   // TODO: Assemble Hat into code variable.
//   let code = 'JavaScript' + '"' + '(function(position)';
//   code += '{ reflectBoard('+ value_position +');})"\n';
//   code += 'position color ^()'
//   return code;
// };



//position定義　othello.jsのdataに該当
Blockly.defineBlocksWithJsonArray(

[{
  "type": "position",
  "message0": "現在の盤面",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "output": null,
  "colour": 230,
  "tooltip": "現在の盤面の状態を表す配列を返す",
  "helpUrl": ""
}]
);
Blockly.Hat['position'] = function(block) {
  let code = 'JavaScript';
  code += ' '+'"returnPosition"';
  //let code = 'JavaScript' + '"' + '(function()';
  //code += '{ returnPosition();})"\n';
  code += ' '+'^(data)\n';
  return code;
};

//playerの操作
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "turnPlayer",
    "message0": "playerの操作",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['turnPlayer'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"turnPlayer"';
  code += ' '+'^()\n';
  return code;
};

//CPUの操作
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "turnCPU",
    "message0": "CPUの操作",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['turnCPU'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"turnCPU"';
  code += ' '+'^()\n';
  return code;
};

//手番 
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "returnTurn",
    "message0": "手番",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['returnTurn'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"returnTurn"';
  //code += ' '+'^(turn)\n';
  return code;
};


//手番交代
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "turnChange",
    "message0": "手番交代",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['turnChange'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"turnChange"';
  code += ' '+'^()\n';
  return code;
};


//スキップ表示
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "skip",
    "message0": "スキップ表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['skip'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"skip"';
  code += ' '+'^()\n';
  return code;
};

//勝敗判定・表示
Blockly.defineBlocksWithJsonArray(

  [{
    "type": "showResult",
    "message0": "勝敗判定・表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['showResult'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"showResult"';
  code += ' '+'^()\n';
  return code;
};

Blockly.defineBlocksWithJsonArray(

  [{
    "type": "init",
    "message0": "初期盤面表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['init'] = function(block) {
  // TODO: Assemble Hat into code variable.
  var code = 'JavaScript';
  code += ' '+'"init"';
  code += ' '+'^()\n';
  return code;
};

Blockly.defineBlocksWithJsonArray(

  [{
    "type": "showturn",
    "message0": "手番など表示",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.Hat['showturn'] = function(block) {
  // TODO: Assemble Hat into code variable.
  let code = 'JavaScript';
  code += ' '+'"showTurn"';
  code += ' '+'^()\n';
  return code;
};