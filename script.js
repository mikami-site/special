/* ========================================
   パスワード設定
======================================== */

const PASSWORD = "special123";


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


const headerStoryTitle =
  document.getElementById("header-story-title");

const headerPageNumber =
  document.getElementById("header-page-number");

const prevPageButton =
  document.getElementById("prev-page-button");

const nextPageButton =
  document.getElementById("next-page-button");


/* ========================================
   ページ設定
======================================== */

const totalPages =
  storyPages.length;

let currentPage = 1;


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
   ページ表示
======================================== */

function showPage(pageNumber) {

  if (
    pageNumber < 1 ||
    pageNumber > totalPages
  ) {
    return;
  }


  currentPage = pageNumber;


  storyPages.forEach(function(page) {

    page.hidden = true;

  });


  const targetPage =
    document.getElementById(
      `page-${currentPage}`
    );


  if (!targetPage) {
    return;
  }


  targetPage.hidden = false;


  /* タイトル変更 */

  headerStoryTitle.textContent =
    targetPage.dataset.title;


  /* ページ番号変更 */

  headerPageNumber.textContent =
    `${String(currentPage).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`;


  /* ボタン状態変更 */

  prevPageButton.disabled =
    currentPage === 1;

  nextPageButton.disabled =
    currentPage === totalPages;


  /* ページ上部に戻る */

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* ========================================
   BACK
======================================== */

prevPageButton.addEventListener(
  "click",
  function() {

    showPage(
      currentPage - 1
    );

  }
);


/* ========================================
   NEXT
======================================== */

nextPageButton.addEventListener(
  "click",
  function() {

    showPage(
      currentPage + 1
    );

  }
);
