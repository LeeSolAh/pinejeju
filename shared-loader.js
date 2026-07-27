(() => {
  const DATA_URL = "./data.json";

  try {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${DATA_URL}?v=${Date.now()}`, false);
    xhr.send(null);

    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error(`data.json 요청 실패: HTTP ${xhr.status}`);
    }

    window.SHARED_DATA = JSON.parse(xhr.responseText);
  } catch (error) {
    console.error("공유 여행 데이터 불러오기 실패:", error);
    window.SHARED_DATA = null;

    alert(
      "공유 여행 정보를 불러오지 못했습니다.\n" +
      "GitHub의 data.json 형식을 확인해 주세요."
    );
  }
})();
