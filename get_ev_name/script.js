const input = document.getElementById('ev_str');
const output = document.getElementById('ev_name');
const button = document.querySelector('div button');
const ev_type = [
  'ミリコレ！',
  'THEATER TALK PARTY',
  'プラチナスターシアター',
  'プラチナスターチューン',
  'プラチナスタートラスト',
  'プラチナスターツアー',
  'プラチナスターツアービンゴ',
  'プラチナスターツインステージ',
  'プラチナスターテール',
  'プラチナスタートレジャー',
];

button.onclick = function() {
  let input_text = input.value;

  // 检查输入文本
  if (input_text === '') {
    output.style.visibility = 'visible';
    output.innerText = '输入文本为空！';
  } else {
    // 输入文本非空
    output.innerText = '文本包含以下活动类型名称：';

    let cnt = 0;
    for (var i = 0; i < ev_type.length; i++) {
      // 遍历查找是否包含对应活动类型名称
      if (input_text.indexOf(ev_type[i]) !== -1) {
        cnt += 1;

        let span = document.createElement('span');
        span.classList.add('ev_name');
        span.innerText = ev_type[i];
        output.appendChild(span);
      };
    };
    // 检查是否包含活动名
    if (cnt === 0) {
      output.style.visibility = 'visible';
      output.innerText = '文本中不含有效的活动类型名称，请检查文本';
    } else {
      output.style.visibility = 'visible';
    };
  };
}
