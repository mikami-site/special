/* ========================================
   パスワード設定
======================================== */

const PASSWORD = "0719";


/* ========================================
   要素取得
======================================== */

const passwordScreen =
  document.getElementById("password-screen");

const passwordForm =
  document.getElementById("password-form");

const passwordInput =
  document.getElementById("password-input");

const passwordError =
  document.getElementById("password-error");

const storyArea =
  document.getElementById("story-area");

const storyPages =
  document.querySelectorAll(".story-page");

const pageButtons =
  document.querySelectorAll("[data-page]");


/* ========================================
   パスワード入力
======================================== */

passwordForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    const enteredPassword =
      passwordInput.value;


    if (enteredPassword === PASSWORD) {

      passwordError.textContent = "";

      passwordScreen.hidden = true;

      storyArea.hidden = false;

      showPage(1);

    } else {

      passwordError.textContent =
        "パスワードが違います。";

      passwordInput.value = "";

      passwordInput.focus();

    }

  }
);


/* ========================================
   ページ切り替え
======================================== */

function showPage(pageNumber) {

  storyPages.forEach(function(page) {

    page.hidden = true;

  });


  const targetPage =
    document.getElementById(
      `page-${pageNumber}`
    );


  if (!targetPage) {
    return;
  }


  targetPage.hidden = false;


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* ========================================
   NEXT / BACK
======================================== */

pageButtons.forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      const pageNumber =
        Number(button.dataset.page);

      showPage(pageNumber);

    }
  );

});
