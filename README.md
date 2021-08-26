# 자바스크립트 유튜브 1-13
## 자바스크립트 1. 자바스크립트의 역사와 현재 그리고 미래
### 자바스크립트의 역사
- 1993년 : **Mosaic Web Browser**가 시장에 등장
    - Mosaic Web Browser : 컴퓨터를 잘 모르는 사람들도 *쉽게 쓸 수 있는*  UI요소가 더해진 브라우저
    - Marc Andreseen은 대학을 졸업하고 **Netscape**라는 회사 설립, 
    - 모자이크 웹 브라우저 경험을 토대로 해 조금 더 UI요소를 더해진 **Netscape Navigator**를 시장에 내놓음
        - 이 당시 html, css로 간단하게 웹페이지를 만들 수 있었는데, 정적인 웹사이트만 가능했었음
    - Netscape Navigator는 시장에서 80%의 점유율, **급격히 성장**
    - 여기서 **동적인** 웹사이트를 만들기 위해 **Scripting 언어** 를 추가하고자 함
        - Java 언어 : 개발자들이 쓰기에는 다소 무겁고 어려운 언어라서 패스
        -  Brendan Eich를 스카우트해 기존의 Scheme 스크립트 언어의 컨셉을 유지하며 문법을 java스럽게 만들고자 함
    - 브랜든은 단시간 안에 프로토타입을 베이스로 한 유연한 언어 개발
- 1994년 : **Mocha 언어** 탄생 (추후, LiveScript로 이름 변경)
    - Netscape Navigator 안에 LiveScript를 이해하고 실행할 수 있는 LiveScript Interpreter가 포함이 되어 브라우저가 출시되게 됨
        - 웹개발자들이 이 언어를 이용해 웹페이지를 만들게 되면, 네비게이터 브라우저가 그 **언어를 이해하며 그 언어가 실행하고자 하는 것에 맞게 요소를 조작하는 것이 가능**해지게 된 것
    - 당시, 자바 언어의 인기가 치솟고 있어 이를 이용해 이름을 **JavaScript로 변경**
- 1995년 : 공식적으로 Netscape Navigator 위에 **Javascript와 Javascript를 이해할 수 있는 엔진이 포함**이 되어 출시
    - **Microsoft**는 이 성공사례를 목격하고 브라우저의 무한한 잠재성을 확인해 Netscape사에서 출시한 브라우저를 **reverse engineering**(만들어진 프로그램의 binary 코드를 분석해 소스 코드를 복원해내는 과정)하여 Javascript와 엔진의 소스코드를 복원해 베껴와 조그만 기능을 변경해 자신만의 언어인 척 만들어 **JScript**로 이름을 변경해 시장에 내놓음
- 1995년 : Microsoft가 **Internet explore**를 출시
    - 이로 인해 웹개발자들은 매우 다른 두 브라우저에서 잘 동작할 수 있는 웹사이트를 만들어야 했음 
    * ![1](https://user-images.githubusercontent.com/68580600/130824152-e29969a7-7efb-482d-90b3-1ec511f29a97.jpg)
        - 이 당시, 웹사이트에서 이런 문구들을 보는 게 자연스러웠음(*다른 브라우저에서 사이트가 잘 구현됐으니 다른 브라우저를 다운 받아라*)
        - Netscape 사는 이 사태를 막고자 **ECMA International 단체에 찾아가서 Javascript로 표준안**을 만들어보자고 제안
- 1997년 : **ECMAScript 1 language specification** 출시
    - 브라우저에서 동작하는 언어를 만들 때, 그 언어를 이해하기 위해서 변수, 함수를 어떻게 정의해야되는지에 대한 **문법적인 사항들을 잘 정리한 문서**
    - 그 뒤로 새로운 버전들이 추가적으로 나옴
        - **ECMAScript 3 in 1999**에선 새로운 *error handling에 관한 문법, 관계연산자들이 새로 추가*됨
        - **ECMAScript 4 in 2000**에선 *클래스도 넣는 등 다양한 아이디어가 제안*됨
    - 이렇게 논의되는 동안, **Internet Explorer의 점유율이 급격히 상승**
        - 사람들이 많이 쓰고있는 자신의 브라우저가 표준이라고 선언하며 더이상 **ECMAScript 표준안에 참가하지 않게 됨**
            - 이로 인해 2000년도부터 표준안 진행이 더뎌짐
- 2004년 : moz://a사의 **Firefox 브라우저** 출시
    - ECMA International 단체에 찾아가서 **ActionScript3라는 언어와 Tamarin이라는 엔진을 내세우면서 이걸로 표준안을 검토해보자고 제안**
    - 기존 브라우저에서 쓰여지고 있는 JScript, Javascript와 너무 달라 표준안을 진행하기엔 무리
    - 표준화를 앞에 두고 3사의 치열한 신경전이 벌어짐
- 2004년 : Jesse James Garrett이 **AJAX(Asynchronous JavaScript and XML)** 라는 기술 도입
    - *비동기적으로 데이터를 서버에서 받아오고, 처리할 수 있도록* 도와주는 획기적인 기술
    - 도입에도 불구하고 표준화를 앞둔 3사의 치열한 신경전은 계속 됨
    - 그동안 다른 브라우저들이 많이 나오게 되고, 개발자들은 다양한 브라우저에서 동작하는 웹페이지를 만들어야 했음
    - 이런 웹시장이 증가하고 수요가 많아짐에 따라 많은 개발자들이 웹시장으로 들어오게 됨
    - 많은 개발자들 사이에서 강력한 커뮤니티가 형성됨
    - 커뮤니티 사이에서 **JQuery, dojo, mootools와 같은 라이브러리** 들이 나오게 됨
        - 목적 : *개발자들이 더이상 여러 브라우저들의 구현사항을 신경쓰지 않게 하도록 하자*
        - > 'write less, do more'
            - 이를 강조하는 **JQuery**가 많은 사랑을 받음
        - ✔ 프로그래밍의 철학 : APIS들을 잘 작성해 구현사항이 변경되더라도 인터페이스를 사용하고있는 **사용자들의 코드는 수정하지 않도록 만드는 것이 좋음** ✔
- 2008년 : 🔴 Google의 **Chrome 브라우저** 등장
    - 진취적인 변화 속에서 웹시장을 급격하게 바꿈
    - **JIT(just-in-time compilation)** 이라는 강력한 엔진을 포함한 브라우저
        - *자바스크립트를 실행하는 속도가 매우 빠른 강력한* 엔진임
- 2008년 7월 : 모든 브라우저들이 모여 표준안을 만들기로 함
- 2009년 : ECMAScript 5 등장
- 2015년 : ECMAScript 6 
    - 우리가 흔하게 사용하고 있는 *class, arrow function, const, let, default parameter*가 이 스크립트에 정의되어 있음
- 매년마다 ECMAScript가 업데이트 됨
    - 모든 브라우저들이 ECMAScript의 표준사항을 잘 따라가고 있어 라이브러리 없이 **자바와 APIS만으로도 모든 브라우저에서 잘 동작할 수 있는 웹사이트나 웹 어플리케이션을 만들 수 있음**
    * ![2](https://user-images.githubusercontent.com/68580600/130824241-d9a3bbdd-1ec8-47e8-95f3-cb8b5aeaca62.jpg)
        - 각 브라우저마다 ECMAScript의 표준안을 따라가는 다양한 엔진들이 존재
        - **V8 엔진** : node.js, electron에서도 많이 이용되고 있고 2020년 2월부터 마이크로소프트 엣지에서도 v8을 대체해서 사용
        - **BABEL** : 개발할 땐 최신버전의 ECMAScript를 쓰고 사용자들에게 배포할 때만 javaScript transcompiler를 이용해 **ECMAScript의 최신버전을 5나 6로 변환** 해서 변환된 코드를 생산해주는 것

***
### 현재 가고있는 방향
- **SPA(single Page Application)** 이 굉장히 뜨고있는 추세
    - **하나의 페이지 안에서 데이터를 받아와 필요한 부분만 업데이트**
    - 자바 스크립트만으로도 충분히 구현이 가능하지만, SPA를 좀 더 쉽게 만들기 위해 Ngular, React, View 등이 등장
        - 이런 라이브러리를 이용해 SPA를 좀 더 쉽게 구현해낼 수 있음
- **자바스크립트**는 브라우저를 위한, 브라우저에서 *동적인 요소*를 추가하기 위해 만들어진 언어인데, ECMAScript의 활발한 표준안을 통해 강력한 V8, 자바스크립트의 엔진을 통한 **node.js**가 등장하게 됨
    -v8 자바스크립트 엔진을 이용한 *back-end*에서 서비스를 구현할 수 있도록 만들어진 것
- **react native**를 이용해 모바일 어플리케이션도 만들 수 있음
- **electron**을 이용해 데스크탑 어플리케이션을 만들 수 있음
- 자바스크립트를 배우면 이용할 수 있는 분야는 무궁무진하며, 자바스크립트의 잠재력도 무궁무진함
***
### 뜨고있는 다른 기술
- 브라우저에서 동작할 수 있는 유일한 언어는 자바스크립트였는데, 요즘 **웹어셈블리**가 등장해서 다양한 언어를 이용해 웹어플리케이션을 만들 수 있게 됨
#### 자바스크립트는 가장 많이 사용되는 언어에서 7년동안 꾸준히 1위 차지, 가장 사랑받고 있는 언어 중에선 11위, 개발자가 배우고 싶어하는 언어 2위 등으로 시장성이 뛰어남

## 자바스크립트 2. 콘솔에 출력, script async 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향

### 자바스크립트를 이용해 "Hello World"를 출력해보자

1. 평소에 사용하는 Text editor tool을 연다. (나는 sublime text 사용)
2. 앞으로 자바스크립트를 많이 이용할 것이니 따로 javascript라는 폴더를 만들어둔다.
3. 
```
console.log('hello world!');
```
라는 코드를 입력한 뒤, 폴더 안에 main.js라는 이름으로 저장한다.
만약 node.js가 깔려있다면, 폴더에 들어가 
```
node main.js
```
라는 명령어만 실행해주면 화면에 hello world!가 출력된다.
 - *node.js에는 자바스크립트 엔진이 있어서 브라우저 없이도 자바스크립트 실행이 가능함*

1. Visual Studio Code를 실행한다.
2. javascript 폴더에 들어가 index.html을 만든다
3. 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
</body>
</html>
```

<script src="main.js"></script>를 작성해 타이틀 밑에 스크립트를 넣어 src는 방금 작성한 main.js를 연결하도록 한다.
4. 우클릭하여 Open with Live Server를 눌러 브라우저로 바로 확인이 되게 한다.(확장팩 Liver Server 필요)
5. 윈도우 사용자는 *Ctrl + Shift + i*, 맥 사용자는 *Cmd + Option + i*를 눌러 브라우저의 *개발자 도구 툴*을 연다.
6. console에 우리가 작성한 hello world를 볼 수 있다.

![3](https://user-images.githubusercontent.com/68580600/130898023-0df51214-9072-45b5-8c84-10af87189718.jpg)
    - 브라우저에 **Dev Tools**를 잘 활용하면 공부할 때 유용하게 사용 가능
         - **Elements 탭** : html에서 작성한 요소들을 확인하고 검사하는 기능
         - **console 탭** : 코드에서 작성한 메시지를 확인할 수도 있고, 자바스크립트를 실행해 동적으로 요소를 검사하고 붙여넣고 지울 수 있는 기능
         - **Sources 탭** : 디버깅할 때 유용하게 사용 가능
         - **Network 탭** : 네트워크가 어떻게 발생하는지, 얼마가 많은 사이즈들의 데이터가 오고가는지 검사할 수 있는 기능

### 자바스크립트 관련 사이트
#### (www.ecma-international.org)
    - 공식적인 사이트고 문법에 관련된 것이 잘 정리되어있는데, 개발자가 보기엔 난해할 수도 있음
#### 🔴(www.developer.mozilla.org)
    - 굉장히 수많은 개발자들이 가는 사이트(html, css 배울 때도 유용)
#### (www.w3schools.com)
    - 노르웨이 한 회사가 만든 사이트라서 공식적인 사이트는 아님
    
### async vs defer
#### html에서 자바스크립트를 포함할 때 어떻게 포함하는 게 더 효율적일까?
사용자가 html을 다운 받았을 때, *브라우저는 한 줄씩 분석*하고 이를 css와 병합해 dom 요소로 변환하는 과정을 거치게 된다.

여기서 브라우저가 한 줄씩 분석하는 과정을 더 자세히 살펴보면, html을 parsing하다가 script 태그가 보이면 main.js를 다운받아야 되네라고 이해하게 된다.

이 때, 스크립트 태그를 작성할 수 있는 여러 유형이 있다.

1. head안에 script를 **아무 속성값 없이** 포함

html을 parsing하는 것을 **잠시 멈추고** 필요한 js 파일을 서버에 다운 받아서 이것을 **실행한 다음 다시 parsing을 진행**함
    - 단점 : 만약 js파일이 크고 인터넷이 느리면 사용자가 웹사이트를 보는데 많은 시간이 소요됨
    
2. **body 제일 끝 부분에 script를 추가**하는 것
브라우저가 html을 다운 받아서 parsing해서 **페이지가 준비된 다음 script를 만나 script를 fetching**(서버에서 받아오고 실행함)하게 됨
    - 페이지가 사용자들에게 js를 받기 전에도 이미 준비가 되어 **사용자가 페이지의 기본적인 html 컨텐츠를 먼저 볼 수 있음**
    - 단점 : 만약 웹사이트가 자바스크립트에 의존적이면 사용자가 정상적인 페이지를 보기 전까지는 fetching하는 시간까지 기다려야 하고 executing(실행)하는 시간도 기다려야 함
3. head 안에 script를 이용하되, **asyn**라는 속성값을 이용함
브라우저가 html을 다운받아서 parsing을 하다가 asyn을 발견하면 병렬로 main.js 파일을 다운받는 명령만 해놓고 다시 parsing을 하다가 **js 다운이 완료가 되면 그 때, parsing을 멈추고 다운된 js 파일을 실행함 실행을 다 하고나서 나머지 html을 parsing하게** 됨
    - 2번째보다 fetching이 parsing하는 동안 병렬적으로 일어나 **다운받는 시간을 절약**할 수 있음
    - 단점 : html이 parsing되기도 전에 실행되므로 만약 자바스크립트 파일에서 조작하려는 시점에 우리가 원하는 요소가 아직 정의되지 않을 수 있다.
    - parsing하는 동안 자바스크립트를 실행하기 위해 멈출 수 있으므로 사용자가 페이지를 보는데 시간이 여전히 조금 더 걸릴 수 있음
4. 🔴**defer**라는 속성값을 이용함
parsing을 하다가 defer을 발견하면 js를 다운받자고 명령만 시켜놓고 나머지 html을 끝까지 parsing하게 됨 그리고 마지막에 **parsing이 끝난 뒤 다운된 자바스크립트를 실행**하게 됨
    - html을 parsing하는 동안 필요한 자바스크립트를 다운 받아놓고 html parsing을 먼저해 사용자에게 페이지를 보여준 다음 바로 이어서 자바스크립트를 실행해서 제일 좋음
    - *asyn과 차이*
        - asyn : 다수의 스크립트를 받게 되면 정의된 순서와 상관없이 다운이 먼저 된 아이까지 실행해 순서에 의존적인 거라면 문제가 발생
        - defer : parsing하는 동안 필요한 스크립트를 다 다운 받아놓은 다음 **순서대로 실행**하므로 정의한 순서가 지켜져 원하는대로 스크립트가 실행됨
    - **가장 효율적이고 안전함**

### javascript를 이용할 때 맨 위에 'use strict';를 정의해주면 좋음
- use strict는 ECMAScript 5에 추가되어 이를 선언하게 되면 앞서 말한 비상식적인 것을 사용할 수 없게 됨
    - javascript는 굉장히 유연한 언어로 만들어졌는데, 유연해서 때로는 많이 실수할 수도 있어 위험하고 선언되지 않는 변수를 할당한다던지, 기존에 존재하는 프로토타입을 변경한다던지 비상식적인 것들은 다른 언어를 공부하고온 개발자들이 봤을 때 이해 불가

ex) 
1. use strict를 정의하지않고 선언되지 않은 a의 값을 할당했을 때

![4](https://user-images.githubusercontent.com/68580600/130899713-1dcb7be0-cc90-4e27-a57a-e66858f681c7.jpg)

브라우저에 문제될 건 없지만, 비상식적인 코드임
2. use strict를 정의하고 선언되지 않은 a의 값을 할당했을 때

![5](https://user-images.githubusercontent.com/68580600/130899793-bca96561-cbc3-4074-a3ef-b61e8ad63a43.jpg)

그대로 에러를 출력함
**strict를 정의하면 상식적인 범위 안에서 자바스크립트를 이용할 수 있게 해주고 자바스크립트 엔진이 효율적으로 더 빠르게 자바스크립트를 분석할 수 있게 해줌**
