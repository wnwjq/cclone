6.1.

- class  이름에 띄어쓰기 있으면 안됨. 두 개의 클래스로 인식함.
  __ 이렇게 아래 줄 두 개(?)로 써줄 것.
- 그리고 column 등의 class 이름을 지을 때는 id__column 같이 써주기. 그게 어디 있는 건지 쉽게 알 수 있게끔

6.2.

- BEM=Block Element Modifier
  더 쉽게 읽히는 css?
- .btn__price {}
- BEM에서 -- 는 modifier. 
- id를 쓰는지 class를 쓰는지 헷갈리니까 그냥 다 class를 써버리자.

6.3.

- script는 항상 body 닫기 바로 전에 있어야 한다. 

6.5.

- google font에서 폰트 가져올 수 있는데, 한 폰트 안에서도 내가 안 쓸 거는 안 가져오는 것도 중요. 다 가져오면 불러올 때 시간이 많이 걸릴 수 있기 때문.

- 요소들 정 중앙 중심으로 균형있게 배치하는 법

- *.status-bar*{

    display: flex;

    */\* justify-content: space-between; \*/*

    justify-content: center;

  }

  

  *.status-bar__column*{

    width: 33%;

  }

  *.**status-bar__column**:**nth-child*(2) {

    display: flex;

    justify-content: center;

  }

  *.**status-bar__column**:**last-child*{

    display: flex;

    justify-content: flex-end;

    align-items: center;

  }

- ​      <i *class*="fa-solid fa-battery-full fa-lg"></i> 
  fa-2x  or fa-lg해주면 font awesome에서 가져온 아이콘 크기 크게할 수 있다.

6.9.

- form의 중요한 속성 2개=action, method.
- action:어떤 페이지로 데이터를 보낼지 결정. 
- method-post/get 방식 두 가지. 
  - post는 백엔드 서버에 정보를 전송. 그래서 더 안전.
  - get-보안에 취약. 따라서 패스워드 같은 거 말고 url에 포함돼도 상관없는 정보들을 보내야 함. 검색할 때 검색 키워드라거나. 
  - input name으로 돼있는 곳들에 추가된 정보들을 url에 넣어서 보냄. *friends.html?username=sss&password=222 이런 식으로*

6.10.

- nav 생성 단축키 *nav>ul>li\*4>a*
- css import한 것도 순서 다 적용되는 거임. 먼저 적용되는 것들부터 순서대로 입력할 것. 주의. 