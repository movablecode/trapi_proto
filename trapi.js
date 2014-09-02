//  trapi.js

    //  Javascript API for trading

    //  Callback Prototypes


    /**
        Account Callback Event  (예수금)

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
        Position Callback Event

            @param  {string}  evt :     추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  acode :   계좌 코드, 계좌 번호
            @param  {string}  fcode :   종목 코드
            @param  {number}  qty :     잔고 수량 (음수는 매도 잔고를 뜻함, 파생의 경우)
            @param  {number}  avg :     잔고 평균가
            @param  {number}  amount :  장부 금액 (매입금액)
    */
    var on_position =  function (o) {};


    /**
        Order Callback Event

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
        Fill Callback Event

            @param  {string}  evt :     추가/삭제/갱신 여부  ('A'/'D'/'U'. Add,Delete,Update)
            @param  {string}  id :      주문번호 (trapi 내부 ID)
            @param  {string}  local_id : 주문번호 (증권사용)
            @param  {string}  fill_id : 체결번호 (증권사용)
            @param  {number}  qty :     체결 수량
            @param  {number}  price :   체결 가격
    */
    var on_fill = function (o) {};


    /**
        Signal Callback

            신호 발생시, 콜백.

            @param  {string}  id :        신호 ID
            @param  {string}  name :      신호명
            @param  {string}  fcode :     종목코드

    */
    var on_signal = function (o) {};


    /**
        사용자 정보 입력.
        사용자 별로 미리 정의된 신호가 세팅됨.

        @param {string} email : 사용자 이메일 주소

    */
    var user_login = function (o) {
        //
    };


    /**
        register trading API callbacks

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
    var register_trapi_callbacks = function (category,cb) {
        //
    };


    /**
        select signal. all events

        @param  {string}  signal_name :        신호 ID
    */
    var select_signal = function (signal_name) {
    };


    /**
        AA. all events

        @param  {string}  signal_name :        신호 ID
    */
    var aa = function (signal_name) {
    };


