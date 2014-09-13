README.md
===

trapi = TRading API.
---

트레이딩 API 원형에 대한 js 파일입니다. 실제 적용시엔 함수 바디가 모두 포함이 될거에요. 지금은 헤더 정도의 개념으로 적었습니다.

화면에서 사용자가 로그인이 완료된 상태라고 가정합니다.

따라서, trapi.js 를 이용해서 최초에 user_login 을 하셔서 신호 목록을 얻으시고,
관심있는 이벤트들을 모두 등록해주세요. (신호,계좌,잔고,주문,체결...)

한 화면에 하나의 신호를 표현하는 구조를 염두해 두었습니다.
신호를 선택해서 화면이 바뀔때마다 select_signal 을 호출하시면 됩니다.

화면 변경 사항은 모두 콜백으로 이벤트가 발생할 예정입니다.

**"샘플 화면"** 이 준비 되는대로 페이지를 (index.html) 업로드 해두겠습니다.

메일주소: sangmin.lna@gmail.com
