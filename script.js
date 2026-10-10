/* ========================================
   パスワード設定
======================================== */

const PASSWORD = "special123";



/* ========================================
   要素取得
======================================== */

const passwordScreen =
  document.getElementById(
    "password-screen"
  );


const passwordForm =
  document.getElementById(
    "password-form"
  );


const passwordInput =
  document.getElementById(
    "password-input"
  );


const passwordError =
  document.getElementById(
    "password-error"
  );


const storyArea =
  document.getElementById(
    "story-area"
  );


const storyPages =
  document.querySelectorAll(
    ".story-page"
  );


const headerStoryTitle =
  document.getElementById(
    "header-story-title"
  );


const headerPageNumber =
  document.getElementById(
    "header-page-number"
  );


const prevPageButton =
  document.getElementById(
    "prev-page-button"
  );


const nextPageButton =
  document.getElementById(
    "next-page-button"
  );



/* ========================================
   ページ情報
======================================== */

const totalPages =
  storyPages.length;


let currentPage = 1;



/* ========================================
   パスワード認証
======================================== */

passwordForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    const enteredPassword =
      passwordInput.value;


    /* 正しいパスワード */

    if (
      enteredPassword === PASSWORD
    ) {

      passwordError.textContent =
        "";


      passwordScreen.hidden =
        true;


      storyArea.hidden =
        false;


      showPage(1);

    }


    /* 間違ったパスワード */

    else {

      passwordError.textContent =
        "パスワードが違います。";


      passwordInput.value =
        "";


      passwordInput.focus();

    }

  }
);



/* ========================================
   ページ表示
======================================== */

function showPage(pageNumber) {


  /*
    存在しないページへの
    移動を防ぐ
  */

  if (
    pageNumber < 1 ||
    pageNumber > totalPages
  ) {
    return;
  }



  /* 現在ページを更新 */

  currentPage =
    pageNumber;



  /* 全ページを非表示 */

  storyPages.forEach(
    function(page) {

      page.hidden =
        true;

    }
  );



  /* 対象ページ取得 */

  const targetPage =
    document.getElementById(
      `page-${currentPage}`
    );


  if (!targetPage) {
    return;
  }



  /* ページ表示 */

  targetPage.hidden =
    false;



  /* ========================================
     ヘッダーのタイトル変更
  ======================================== */

  headerStoryTitle.textContent =
    targetPage.dataset.title;



  /* ========================================
     ページ番号変更
  ======================================== */

  headerPageNumber.textContent =
    `${String(currentPage).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`;



  /* ========================================
     BACKボタン
  ======================================== */

  prevPageButton.disabled =
    currentPage === 1;



  /* ========================================
     NEXTボタン
  ======================================== */

  nextPageButton.disabled =
    currentPage === totalPages;



  /* ========================================
     ページ上部へ戻る
  ======================================== */

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
