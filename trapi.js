//  trapi.js

    //  Javascript API for trading

    //  Callback Prototypes


    /**
        User Signal Callback Event  (사용자 신호)

        사용자가 구독 중인 신호들의 목록을 표현하기 위함.

        @param  {string}  signals :             신호 목록 (list, array)
        @param  {string}  signals[i].id :       신호 ID
        @param  {string}  signals[i].name :     신호명
    */
    var on_user_signals = function (o) {};


    /**
        Account Callback Event  (계좌정보)

            @param  {string}  evt :       추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  acode :     계좌 코드, (계좌 번호)
            @param  {string}  name :      계좌명
            @param  {string}  alias :     계좌별칭
    */
    var on_account = function (o) {};


    /**
        Deposit Callback Event  (예수금)

            @param  {string}  evt :       추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  acode :     계좌 코드, (계좌 번호)
            @param  {number}  deposit :   전체 예수금
            @param  {number}  available : 주문가능금액
    */
    var on_deposit =  function (o) {};


    /**
        Position Callback Event (잔고정보)

            @param  {string}  evt :     추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  acode :   계좌 코드, 계좌 번호
            @param  {string}  fcode :   종목 코드
            @param  {number}  qty :     잔고 수량 (음수는 매도 잔고를 뜻함, 파생의 경우)
            @param  {number}  avg :     잔고 평균가
            @param  {number}  amount :  장부 금액 (매입금액)
    */
    var on_position =  function (o) {};


    /**
        Order Callback Event (주문정보)

            @param  {string}  evt :     추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  id :      주문번호 (trapi 내부 ID)
            @param  {string}  local_id :    주문번호 (증권사용)
            @param  {string}  acode :   계좌 코드, 계좌 번호
            @param  {string}  fcode :   종목 코드
            @param  {string}  side :    주문 방향 (1:매수, -1:매도)
            @param  {number}  qty :     주문 수량
            @param  {number}  price :   주문 가격
            @param  {number}  amount :  주문 금액
            @param  {number}  fillqty : 체결 수량
    */
    var on_order =  function (o) {};


    /**
        Fill Callback Event (체결정보)

            @param  {string}  evt :     추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  id :      주문번호 (trapi 내부 ID)
            @param  {string}  local_id : 주문번호 (증권사용)
            @param  {string}  fill_id : 체결번호 (증권사용)
            @param  {number}  qty :     체결 수량
            @param  {number}  price :   체결 가격
    */
    var on_fill = function (o) {};


    /**
        Signal Callback Event (신호정보)

            신호 발생시, 콜백.

            @param  {string}    id :        신호 ID
            @param  {string}    name :      신호명
            @param  {string}    fcode :     종목코드
            @param  {string}    side :      방향 (buy,sell)
            @param  {number}    price :     신호가격
            @param  {datetime}  time :      신호발생 일시

    */
    var on_signal = function (o) {};


    /**
        Session Status Callback Event (세션 상태 정보)

            API 세션의 상태가 변경될 때 콜백되는 이벤트

        @param {string}  id :       세션 ID
        @param {string}  name :     세션 이름
        @param {string}  status :   세션 상태
    */
    var on_session_status = function (o) {};


    /**
        최초 사용자 정보 입력.
        사용자 별로 미리 정의된 신호가 세팅됨.

        @param {string} email : 사용자 이메일 주소

    */
    var user_login = function (o) {};


    /**
        register trading API callbacks. 트레이딩 콜백 함수 등록

        이벤트 콜백 함수를 등록한다.\n
        페이지에서 가장 처음에 수행해야 할 함수.\n
        모든 이벤트는 콜백으로 호촐된다.

        @param  {string}  category - Callback Category.
                                    "account" : for Account (계좌)
                                    "deposit" : for Deposit (예수금)
                                    "position" : for Position (잔고)
                                    "order" : for Order (주문)
                                    "fill" : for Fill (체결)
                                    "signal" : for Signal (매매신호)
    */
    var register_trapi_callbacks = function (category,cb) {};


    /**
        신호 선택. 신호별 화면 구성을 변경해야 하므로...

        @param  {string}  id :        선택한 신호 ID
    */
    var select_signal = function (id) {};


    /**
        신호 설정. 신호별 작동 방식에 대한 설정.

        @param  {string}  id :        선택한 신호 ID
        @param  {string}  opt :       설정 객체. (신호마다 설정 구조가 다를 수 있으므로 신호별 구조에 맞도록 옵션을 입력한다.)
    */
    var configure_signal = function (id,opt) {};




