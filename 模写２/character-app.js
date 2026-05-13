// character-app.js

window.addEventListener("DOMContentLoaded", () => {

  // キャラ要素
  const character = document.createElement("div");
  character.id = "floating-character";

  character.innerHTML = `
    <img src="file:///C:/Users/shiok/Downloads/%E3%82%B5%E3%83%A9%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%B3.svg">
    <div class="speech">こんにちは！</div>
  `;

  document.body.appendChild(character);

  // CSS注入
  const style = document.createElement("style");

  style.textContent = `
    #floating-character {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 9999;
      width: 120px;
      cursor: pointer;
      animation: float 2s ease-in-out infinite;
    }

    #floating-character img {
      width: 100%;
      display: block;
    }

    .speech {
      position: absolute;
      top: -50px;
      left: -20px;
      background: white;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 14px;
      box-shadow: 0 4px 10px rgba(0,0,0,.2);
      opacity: 0;
      transition: .3s;
      white-space: nowrap;
    }

    #floating-character:hover .speech {
      opacity: 1;
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `;

  document.head.appendChild(style);

  // クリックイベント
  character.addEventListener("click", () => {
    alert("おすすめはカフェラテです！");
  });

});