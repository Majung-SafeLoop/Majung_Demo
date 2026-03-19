const data = {
  name: "홍길동",
  age: 79,
  address: "서울특별시 OO구 OO동",
  phone: "01012345678",
  status: "normal" // "missing"으로 바꿔서 테스트
};

// 실종 상태 표시
if (data.status === "missing") {
  const banner = document.getElementById("missingBanner");
  if (banner) banner.classList.remove("hidden");
}

// 전화 버튼
const callBtn = document.getElementById("callBtn");
if (callBtn) {
  callBtn.href = `tel:${data.phone}`;
}

// 정보 페이지 데이터
const name = document.getElementById("name");
if (name) name.innerText = `이름: ${data.name}`;

const age = document.getElementById("age");
if (age) age.innerText = `나이: ${data.age}`;

const address = document.getElementById("address");
if (address) address.innerText = `주소: ${data.address}`;

// 페이지 이동 id 없는기본 구조
const infoBtn = document.getElementById("infoBtn");
if (infoBtn) {
  infoBtn.href = "user.html";
}
