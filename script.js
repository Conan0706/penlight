let currentColorIndex = 0; // 現在の色のインデックス
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'cyan']; // 色の配列

document.getElementById('penlight').addEventListener('click', function() {
    // 次の色のインデックスを計算（配列の末尾に達したら最初に戻る）
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // 新しい色を設定
    this.style.backgroundColor = colors[currentColorIndex];
});
