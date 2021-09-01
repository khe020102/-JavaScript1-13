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
         
***
### 자바스크립트 관련 사이트

#### (www.ecma-international.org)
    - 공식적인 사이트고 문법에 관련된 것이 잘 정리되어있는데, 개발자가 보기엔 난해할 수도 있음
#### 🔴(www.developer.mozilla.org)
    - 굉장히 수많은 개발자들이 가는 사이트(html, css 배울 때도 유용)
#### (www.w3schools.com)
    - 노르웨이 한 회사가 만든 사이트라서 공식적인 사이트는 아님
***    
### async vs defer

#### html에서 자바스크립트를 포함할 때 어떻게 포함하는 게 더 효율적일까?
사용자가 html을 다운 받았을 때, *브라우저는 한 줄씩 분석*하고 이를 css와 병합해 dom 요소로 변환하는 과정을 거치게 된다.

여기서 브라우저가 한 줄씩 분석하는 과정을 더 자세히 살펴보면, html을 parsing하다가 script 태그가 보이면 main.js를 다운받아야 되네라고 이해하게 된다.

이 때, 스크립트 태그를 작성할 수 있는 여러 유형이 있다.

1. head안에 script를 **아무 속성값 없이** 포함

- html을 parsing하는 것을 **잠시 멈추고** 필요한 js 파일을 서버에 다운 받아서 이것을 **실행한 다음 다시 parsing을 진행**함
    - 단점 : 만약 js파일이 크고 인터넷이 느리면 사용자가 웹사이트를 보는데 많은 시간이 소요됨
    
2. **body 제일 끝 부분에 script를 추가**하는 것

- 브라우저가 html을 다운 받아서 parsing해서 **페이지가 준비된 다음 script를 만나 script를 fetching**(서버에서 받아오고 실행함)하게 됨
    - 페이지가 사용자들에게 js를 받기 전에도 이미 준비가 되어 **사용자가 페이지의 기본적인 html 컨텐츠를 먼저 볼 수 있음**
    - 단점 : 만약 웹사이트가 자바스크립트에 의존적이면 사용자가 정상적인 페이지를 보기 전까지는 fetching하는 시간까지 기다려야 하고 executing(실행)하는 시간도 기다려야 함
    
3. head 안에 script를 이용하되, **asyn**라는 속성값을 이용함

- 브라우저가 html을 다운받아서 parsing을 하다가 asyn을 발견하면 병렬로 main.js 파일을 다운받는 명령만 해놓고 다시 parsing을 하다가 **js 다운이 완료가 되면 그 때, parsing을 멈추고 다운된 js 파일을 실행함 실행을 다 하고나서 나머지 html을 parsing하게** 됨
    - 2번째보다 fetching이 parsing하는 동안 병렬적으로 일어나 **다운받는 시간을 절약**할 수 있음
    - 단점 : html이 parsing되기도 전에 실행되므로 만약 자바스크립트 파일에서 조작하려는 시점에 우리가 원하는 요소가 아직 정의되지 않을 수 있다.
    - parsing하는 동안 자바스크립트를 실행하기 위해 멈출 수 있으므로 사용자가 페이지를 보는데 시간이 여전히 조금 더 걸릴 수 있음

4. 🔴**defer**라는 속성값을 이용함

- parsing을 하다가 defer을 발견하면 js를 다운받자고 명령만 시켜놓고 나머지 html을 끝까지 parsing하게 됨 그리고 마지막에 **parsing이 끝난 뒤 다운된 자바스크립트를 실행**하게 됨
- html을 parsing하는 동안 필요한 자바스크립트를 다운 받아놓고 html parsing을 먼저해 사용자에게 페이지를 보여준 다음 바로 이어서 자바스크립트를 실행해서 제일 좋음
- *asyn과 차이*
    - **asyn** : 다수의 스크립트를 받게 되면 정의된 **순서와 상관없이** 다운이 먼저 된 아이까지 실행해 순서에 의존적인 거라면 문제가 발생
    - **defer** : parsing하는 동안 필요한 스크립트를 다 다운 받아놓은 다음 **순서대로 실행**하므로 정의한 순서가 지켜져 원하는대로 스크립트가 실행됨
- **가장 효율적이고 안전함**
    
***
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


## 자바스크립트 3. 데이터타입, data types, let vs var, hoisting

### Variable(변수 : 변경될 수 있는 값)

자바스크립트에서 변수를 만들기 위해 **let** 이라는 키워드를 이용 (ES6에서 추가된 언어)

```
'use strict'; 

let name = 'ellie'; // let 키워드를 이용해 name이라는 변수를 선언함과 동시해 ellie라는 변수의 값을 할당
console.log(name); // name(ellie) 출력
name = 'hello'; // name이라는 변수에 hello라는 값을 다시 할당
console.log(name); name(hello) 출력
```
결과

![0827 6](https://user-images.githubusercontent.com/68580600/131058273-66174996-690f-4228-9166-4913c0924f21.jpg)

- 어플리케이션을 할당하면 어플리케이션마다 쓸 수 있는 메모리가 할당되어짐
- 메모리는 텅 빈 박스인데 어플리케이션마다 쓸 수 있는 박스의 개수가 제한적으로 할당되어짐
- let이라는 키워드를 이용해 name이라는 변수를 정의하게 되면 한 가지의 박스를 가리킬 수 있는 포인터가 생기게 되는 것
- name이라는 변수가 가리키고 있는 메모리에 ellie라는 값을 저장할 수 있음
- 추후에 name이 가리키고 있는 곳에 다른 값을 넣어서 저장할 수 있음

***

### Block scope
괄호(블럭)를 이용해 코드를 블럭 안에 작성하게 되면 블럭 밖에서는 블럭 안에 있는 내용을 볼 수 없게 되는 것
- console.log를 이용해 블럭 밖에서 name이라는 변수에 접근하면 아무 값도 출력되지 않음
```
 'use strict'; 

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);

```
결과

![0827 7](https://user-images.githubusercontent.com/68580600/131058881-f34dfec6-5a05-47db-b114-b9814fd67376.jpg)

- 반대로 블럭을 쓰지 않고 파일 안에다 바로 정의해서 쓰는 변수들을 global scope이라고 부름
- global한 아이들은 어느 곳에서나 접근 가능해 블럭 밖에서 불러도 출력 가능

```
'use strict'; 

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
```

결과
![0827 8](https://user-images.githubusercontent.com/68580600/131059116-c0ff54c9-89cc-420d-b771-a0d43ff3eebe.jpg)

global한 변수들은 어플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어 있어 최소한으로 쓰는 것이 좋음

가능하면 class나 함수 등에서 필요한 곳에서만 정의하는 것이 좋음

***

### let과 var
함수를 선언할 때 지금은 let을 쓰지만 옛날엔 var를 사용했음
* var를 쓰면 안되는 이유? * 
대부분의 프로그래밍 언어에선 변수를 선언하고 나서 값을 할당하는 게 정상적임
1. var를 사용하면 선언도 하기 전에 값을 할당하고, 값을 할당하기 전에도 출력 가능
- var hoisting : 어디 선언했느냐 상관없이 항상 제일 위로 선언을 끌어올려주는 것
```
console.log(age);
age = 4;
console.log(age);
var age;
```
![0827 10](https://user-images.githubusercontent.com/68580600/131060638-0d7e90e3-3d21-4e57-85d2-234044ebb392.jpg)
변수는 정의되어있지만 값이 정해지지 않다는 undefined라고 출력
값을 할당한 뒤에 출력한다면 4라고 출력

let을 이용해서 똑같이 출력하면
```
console.log(age);
age = 4;
console.log(age);
var age;

name = 4;
let name;
```

![0827 11](https://user-images.githubusercontent.com/68580600/131060834-3b599701-fa02-4a5c-aaf3-eb1587b57981.jpg)

let을 선언하기도 전에 값을 넣었다는 오류가 발생(정상적인 현상)

2. block scope이 없음

```
{
    age = 4;
    var age;
}
console.log(age);
```

![0827 12](https://user-images.githubusercontent.com/68580600/131061279-437f2198-a7cc-43ff-a0b4-4e0437c395fb.jpg)

age를 블럭 안에 선언했음에도 불구하고 밖에서 출력하면 정상적으로 출력됨
아무리 깊은 곳에 블럭을 넣어 선언해도 아무데서나 보임
초기에는 이런 유연성을 이용했지만 규모 있는 프로젝트를 하다보면 선언하지도 않은 값들이 할당되는 문제 발생

***

### Constant
한 번 할당하면 값이 절대 바뀌지 않는 것
값이 계속 변경될 수 있는 것 : Mutable data type (let 키워드를 이용한 변수)
constant 이용하면 immutable data type

장점
1. security

- 한 번 작성한 값을 해커들이 이상한 값을 삽입해서 값을 계속 변경해나가는 것이 가능한데 constant는 이를 방지해줌
2. thread safety
- 어플리케이션이 실행되면 한 가지 프로세스가 할당이 되고 그 프로세스 안에서는 다양한 thread가 동시에 돌아가면서 어플리케이션을 효율적으로 빠르게

돌아갈 수 있도록 도와줌

다양한 thread들이 동시에 이 변수에 접근해서 값을 변경할 수 있는데 동시에 값을 변경하는 것은 위험한 것이므로 가능하면 값이 변하지 않는 것을

사용하는 게 좋음

3. reduce human mistakes

변경되야할 이유가 없다면 웬만해선 const를 이용해 프로그램을 작성해야 좋음
- 이렇게 해야 코드를 변경하거나 다른 개발자가 코드를 바꿀 때도 실수를 방지해줄 수 있음

***

### Variable types

자바스크립트 데이터 타입에는 어떤 것이 있을까?

primitive type(single item) : 더이상 작은 단위로 나눠질 수 있는 한 가지 아이템
- number, string, boolean, null, undefined symbol
- 
object type : 위 싱글 아이템들을 묶어서 한 박스로 관리할 수 있는 것

function(자바에만 있는 데이터 타입)
- first-class function : function도 다른 데이터처럼 변수에 할당이 가능하고 함수의 인자로도 전달이 되고 함수의 return 타입으로도 사용 가능한 것

***

### Number

C data types for number

```
int main() {
    short a = 12 // 2 bytes
    int a = 12; // 4 bytes
    long b= 1234; // 8 bytes
    float d = 1.2f; // 4 bytes
    double e = 8.2; // 16 bytes
    return 0;
}
```
C언어는 낮은 레벨의 언어로 불리우는데 개발자들이 프로그램을 짜면서 조금 더 세세하게 메모리를 관리할 수 있기 때문이다.

(short, int, long은 정수를 할당할 때 쓰고 float, double은 실수를 할당할 때 많이 씀 얼마나 큰 사이즈의 데이터를 담느냐에 따라 short를 쓸 건지
int를 쓸 건지 사전에 생각하고 변수를 할당해야 함)

Jave data types for number

```
class Main {
    public static void main(String[ ] args) {
        byte a= 12;
        short b = 12;
        long c = 12;
        int d = 12;
        float e = 1.2f;
        double f = 1.2;
       }
}
```
숫자에만 관련된 데이터타입이 굉장히 많아 작성하기 전에 얼마나 큰 양의 데이터를 저장해야하는지 생각하고 선언해야 함

Javascript data types for number

```
let a = 12;
let b = 1.2;
```

number type만 있어 얼마나 큰 사이즈를 할당할 건지 생각하지 않아도 되고, number라고 데이터 타입을 선언하지도 않아도 됨

Typescript data types for number
```
let a: number = 12;
let b: number = 1.2;
```

Typescript에서는 number라고 정확히 명시해서 작성해야 함

***

### infinity

number에서도 특별한 값이 미리 정해져 있는데 대부분의 프로그래밍 언어에서도 적용됨

![0827 13](https://user-images.githubusercontent.com/68580600/131064794-4419bb16-337e-4f5c-bf19-24551f36eaae.jpg)


숫자를 0으로 나누게 되면 그래프에서 무한대의 숫자 값이 생기는 것을 infinity라고 함
not a number(숫자가 아닌 경우), 숫자가 아닌 string을 숫자로 나누게 되면 nAn이라고 출력됨

```
const infinity = 1/ 0; // positive한 값을 0으로 나누면 Infinity가 됨
const nefativeInfinity = -1 / 0; // -와 같은 negative한 값을 0으로 나누면 negativeInfinity가 됨
const nAn = `not a number' / 2; // 숫자가 아닌 string을 숫자로 나누게 되면 nAn값이 출력됨
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
```

위 3가지 값은 특별한 숫자의 값이고 중요함

나중에 dom 요소를 자바스크립트를 이용해서 포지션을 바꾼다던지 다양한 계산을 해야할 때 나누고싶은 값이 0인지 아닌지, 숫자인지 아닌지 확인하지 않고

연산을 한다면 위 세가지 값을 받을 수 있게 되므로 사용자에게 에러가 발생하게 됨

연산할 때 그 값이 유효한 값인지 확인하고 연산을 하는 것이 중요

***

### String

한가지 글자든, 여러가지의 글자든 string으로 할당이 되며 +를 이용해 문자를 붙일 수도 있음

template literals(string) : `를 이용해 원하는 string을 적고 $과 {}를 이용하면 변수의 값이 자동적으로 붙여져서 나옴

```
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; // +를 이용해 문자를 합침
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 위 template literals보다 더 불편함
```

![0830 1](https://user-images.githubusercontent.com/68580600/131275781-d678c8f9-e197-44d4-802a-bcbe4685fb89.jpg)

hello 와 Brendan이 합쳐지고, type도 string으로 잘 나오는 걸 확인할 수 있다.

***
### Boolean

참과 거짓

false : 0, null, undefined, NaN, ''
true : any other value

```
const canRead = true; //true라고 바로 값을 할당할 수 있음
const test = 3 < 1; //3이 1보다 작다는 것은 false이므로 false로 할당됨
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
```

![0830 2](https://user-images.githubusercontent.com/68580600/131276449-ad5687cc-45ba-4fda-9550-1069ee7ae09d.jpg)

***

### null과 undefined

null이라고 할당하는 경우 내가 명확하게 너는 텅텅 빈 값, 아무것도 아니라고 지정해주는 것

undefined는 선언은 되었지만 아무것도 값이 지정되어져 않다는 것

![0830 3](https://user-images.githubusercontent.com/68580600/131277378-d53d710a-3cf7-4b31-807c-93bf516c6d5b.jpg)

***

### symbol

나중에 맵이나 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을 때 쓰여짐

간혹 식별자를 string을 이용해서 사용하는 경우가 있는데 다른 모듈이나 파일에서 동일한 string을 썼을 때 동일한 식별자로 인식함

하지만 symbol은 동일한 것을 이용해 symbol을 만들어도 다른 경우로 인식

```
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
```

![0830 4](https://user-images.githubusercontent.com/68580600/131278455-501a7c29-e1b2-4380-9543-f9e7cecf61fc.jpg)

-> 둘이 다른 symbol로 인식하여 false 출력됨

Symbol은 동일한 string을 작성해도 다른 symbol로 만들어지므로 주어지는 string에 상관없이 고유한 식별자를 만들 때 사용되어짐

string이 똑같다면 동일한 symbol을 만들고 싶을 때 symbol.for을 사용해주면 됨

```
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
```

![0830 5](https://user-images.githubusercontent.com/68580600/131278763-80162005-0ca1-4cbc-83cf-be551782d0ed.jpg)

-> 둘이 같은 symbol로 인식하여 true 출력됨

symbol은 바로 출력하면 error가 발생하므로 .description을 이용해 string으로 변환하여 출력해야함

```
console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
```

![0830 6](https://user-images.githubusercontent.com/68580600/131279033-59cb36b3-e9c3-4015-8763-e0c00063c431.jpg)

-> 바로 출력하여 error가 발생

```
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
```

![0830 7](https://user-images.githubusercontent.com/68580600/131279064-d0bb83cb-d585-4346-bc4d-d61d865f8312.jpg)


-> .description을 이용해 변환하여 출력해서 정상적으로 출력되어짐

***

### 🔴 (자바의 하이라이트) Dynamic typing

dynamically typed language라는 뜻으로 C나 자바언어는 statically tyoed language로 변수를 선언할 때 어떤 타입인지 결정하여 타입을 같이 설명했어야 함

하지만 자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있음

하지만 다수의 엔지니어, 규모가 큰 프로젝트를 만들 때 이런 dynamic typing 때문에 피해를 볼 수도 있음

```
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
```

![0830 8](https://user-images.githubusercontent.com/68580600/131279705-65b7502f-678a-44f3-8af3-998c888b641c.jpg)


hello라는 string을 할당하게 되면 text는 string이라는 변수가 됨

![0830 9](https://user-images.githubusercontent.com/68580600/131279755-e1596608-a0ce-4048-affd-34c5a56fb328.jpg)


하지만 text에 다시 숫자 1을 할당하게 되면 type이 number로 변경이 됨

![0830 10](https://user-images.githubusercontent.com/68580600/131279763-7c7070d3-67b0-4aef-ab82-cf3027ab5d00.jpg)


text에 string과 number를 합치면 number를 string으로 인식해 type이 string으로 변경이 됨

![0830 11](https://user-images.githubusercontent.com/68580600/131279768-53cd80b5-9c9d-49f9-a0ec-509a434941ac.jpg)


string과 string을 나누면 type이 number로 변경이 되고 나누기가 연산됨

## 자바스크립트 4. 코딩의 기본 operator, if, for loop 


### Variable

Variable은 메모리에 값을 읽고 쓰는 게 가능함

name이라는 변수에 ellie라는 값을 할당한 다음에 hello라고 변경이 가능한 것

Const는 읽기만 가능해 const를 선언함과 값을 할당한 뒤에는 읽기만 가능하고 다시 다른 값으로 쓰는 것이 불가능

자바스크립트에서는 변수가 바뀔 좋은 이유가 없다면 웬만해선 const로 작성하는 것이 좋음

메모리의 값이 저장되는 방법은 primitive타입인지, object타입인지에 따라 메모리에 값이 다른 방식으로 저장됨

primitive 타입은 값 자체가 메모리에 저장됨

object 타입은 너무 커서 메모리에 한 번에 들어갈 수 없어 const를 선언하고 object를 할당하면 reference(실제로 object를 가리키고 있는 곳)

reference를 통해 실제로 object가 담긴 메모리를 가리키게 되는 것임

***

### Immutable type, Mutable type

primitive 파일은 value로 값이 저장되고 object 타입은 object를 가리키는 reference가 메모리에 저장되는 것

데이터 타입에는 Immutable type, Mutable type이 있다.

Immutable type은 데이터 값을 절대 변경할 수 없는 것, primitive type은 값을 통째로 메모리에 올렸다가 다른 string으로 변경이 가능하지 원래 있던 값 자체를 변경하는 것을 불가능

object중에서도 forzen object 들은 값이 변경 불가능하기 때문에 이것들은 Immutable type임

변경이 가능한 type은 object

object는 스스로 계속 변경이 가능하므로 Mutable data type임

자바스크립트에서는 기본적으로 모든 object는 변경이 가능함

### Operator

1. String concatenation

```
console.log('my' + ' cat'); // +를 이용해 문자열과 문자열을 합할 수 있음
console.log('1' + 2); // 문자열에 숫자를 더하게 되면 숫자가 문자로 변환돼 합해질 수 있음
console.log(`string literals: 1 + 2 = ${1 + 2}`); // `를 활용해 string literals를 만들 수 있음
```

![0830 12](https://user-images.githubusercontent.com/68580600/131300122-33868b5b-5d90-4de8-89f2-b4e7352a7521.jpg)

![0830 13](https://user-images.githubusercontent.com/68580600/131300339-c63104f7-432c-45b7-9f53-fd087328f551.jpg)

string literals는 줄바꿈을 하거나 중간에 특수기호 ''를 이용해도 그대로 문자열로 변환되어서 나옴

```
console.log('ellie's book');
```

![0830 15](https://user-images.githubusercontent.com/68580600/131300772-6ea4bbc2-9c1c-49fa-8f03-58fe0cb76b6c.jpg)

위처럼 ''로 문자열을 만들게 되면 중간에 ''나 특수기호가 인식이 되지 않으므로

```
console.log('ellie\'s book');
```

![0830 14](https://user-images.githubusercontent.com/68580600/131300758-9d51bccd-df16-4dcc-b479-5d080d508c95.jpg)

' 뒤에 \를 작성해주어야 함

```
console.log('ellie\'s \n\tbook');
```

![0830 16](https://user-images.githubusercontent.com/68580600/131301017-ddaa031a-fd17-4238-9063-9331393d52ed.jpg)

줄바꿈을 사용하려면 \n을 작성해주어야 하고 \t를 통해 들여쓰기도 가능함

2. Numeric operators

```
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);
```

![0830 17](https://user-images.githubusercontent.com/68580600/131301315-9ba5d956-b977-4999-9a06-000f21f5e7db.jpg)


숫자들을 더하고 빼고 곱하고 나누고 나머지값, 2의 제곱과 같은 숫자를 연산할 수 있음

3. Increment and decrement operators

```
let counter = 2;
const preIncrement = ++counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
```

![0830 18](https://user-images.githubusercontent.com/68580600/131301756-29fe1e4d-c9ee-40b1-ab18-25e843cad6b8.jpg)

Increment : ++counter는 counter = counter + 1;과 동일해 preIncrement에 3이라는 숫자가 저장됨

원래 값인 2에 1이 더해져 3이라는 값이 출력됨


```
const postIncrement = counter++;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
```

![0830 19](https://user-images.githubusercontent.com/68580600/131306103-cbcfc2ab-59bd-4787-9a0c-3fc405c3f726.jpg)

postIncrement : 변수 뒤에 ++를 붙이면 먼저 변수의 값을 counter라는 값을 할당한 뒤에 1을 증가시키는 것

decrement(--a), postdecrement(a--)도 마찬가지

4. Assignment operators

```
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
```

반복되는 x를 생략해 x += y;와 같은 식으로 쓸 수 있음

5. Comparison operators

```
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```
![0830 20](https://user-images.githubusercontent.com/68580600/131306814-afda43dc-17e9-47af-94fe-588099b61123.jpg)

비교하는 연산자

6. Logical operators: || (or), && (and), ! (not)

- ||(or) : 

```
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`); // 세가지 중에서 하나라도 True라면 True로 계산됨

function check() {
    for (let i = 0; i < 10; i++) {
            console.log('T_T');
    }
    return true;
}
```

![0901 2](https://user-images.githubusercontent.com/68580600/131599825-19c94901-9d01-442d-8a56-139b7b737184.jpg)

value1이 false로 이미 할당이 되어있고 value2는 4가 2보다 작다는 false이므로 false 할당되고 
check라는 함수는 쓸데없이 시간을 낭비하다가 결국엔 true를 return하는 함수이므로 결국 
false || false || true이므로 true로 return 됨

or연산자는 처음으로 true가 나오면 연산을 멈춤
    - 위 코드에서 value1이 true라면 check 함수를 실행하지 않음
    ![0901 1](https://user-images.githubusercontent.com/68580600/131599847-f0cfed7d-1a88-470a-a6e2-c986921ca5cf.jpg)
    - 연산을 많이 하는 함수를 호출하려면 간단한 value를 앞에 두고 함수는 뒤에 호출하는 것이 좋음
    
- &&(and) :

```
const value1 = true;
const value2 = 4 < 2;

console.log(`or: %{value1 && value2 && check()}`); // 세가지 모두가 true 여야 true를 return

function check() {
    for (let i = 0; i < 10; i++) {
            console.log('T_T');
    }
    return true;
}

```

![0901 3](https://user-images.githubusercontent.com/68580600/131602322-912bac9a-6879-494a-8578-b9f999e8ad58.jpg)

and연산자는 처음으로 false가 나오면 연산을 멈춤

간단하게 null체크할 때도 자주 쓰이는 연산자임
    - object가 null이면 false가 되므로 뒤에가 실행이 안되므로 null인 object가 null이 아닐 때만 이 object에 something이라는 value를 받아오게 됨
    - ```
    if (nullableObject != null) {
        nullableObject.something;
    }
      ```
      
- !(not) : 값을 반대로 바꿔줌

```
const value1 = true;

console.log(!value1);
```

![0901 4](https://user-images.githubusercontent.com/68580600/131604516-66663541-772e-496a-80ba-66c881600238.jpg)


7. Equality operators

```
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); // == : loose equality : type을 변경해서 검사함
console.log(stringFive != numberFive); // 문자열5와 숫자5를 같다고 인식해 !을 붙여 false 출력

console.log(stringFive === numberFive); // === : strict equality : type이 다르면 다르다고 인식
console.log(stringFIve !== numberFive); // 문자열5와 숫자5를 다르다고 인식해 !을 붙여 true 출력
```

![화면 캡처 2021-09-01 120608](https://user-images.githubusercontent.com/68580600/131605227-e5f76461-312f-4b3e-a0c8-df87ece0c204.jpg)

- object는 memory에 탑재될 때 reference 형태로 탑재됨

```
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
```

![화면 캡처 2021-09-01 121246](https://user-images.githubusercontent.com/68580600/131605729-765c8f71-4b59-4c99-bba8-648418cc00b2.jpg)

ellie1과 ellie2는 똑같은 데이터가 들어있는 object지만 실제로 메모리엔 각각 다른 reference를 가져 서로 다른 object를 가진다고 볼 수 있고
ellie3은 ellie1의 reference가 할당되어있으므로 같다고 볼 수 있음

따라서 첫번째 console은 각각 다른 reference라고 인식해 false를 출력

두번째 console은 똑같은 타입이든 아니든 값이 다르므로 false 출력

세번째 console은 ellie1의 reference value를 ellie3으로 할당했으므로 둘이 똑같은 reference를 갖고 있다고 볼 수 있어 true 출력

```
console.log(0 == false); // 0은 false로 간주되므로 true
console.log(0 === false); // 0은 boolean 타입이 아니므로 타입이 달라 false
console.log('' == false); // ''은 false로 간주되므로 true 
console.log('' === false); // ''은 boolean 타입이 아니므로 타입이 달라 false
console.log(null == undefined); // true
console.log(null === undefined); // 타입이 다르므로 false
```

![화면 캡처 2021-09-01 122213](https://user-images.githubusercontent.com/68580600/131606572-7b6a4964-b466-4fc6-8fea-0e3a4766b12b.jpg)

8. If operators

```
const name = 'df';
if (name === 'ellie') { // statement가 true면 그 안에 있는 block을 실행함
    console.log('Welcome, Ellie!); // true면 출력
}   else if (name === 'coder') { // ellie가 아닌 coder면
    console.log('You are amazing coder'); // 출력
}   else { // 위 두가지 둘 다 false면
    console.log('unknown'); // 출력
}
```

![화면 캡처 2021-09-01 174413](https://user-images.githubusercontent.com/68580600/131640955-22f54235-7c61-4cb8-8061-46423ac4bc97.jpg)

name이 ellie도, coder도 아니므로 unknown 출력

9. ? operators

```
console.log(name === 'ellie' ? 'yes' : 'no'); // true면 왼쪽에 있는 것을 실행하고 아니면 다음에 나오는 것을 실행하는 것
```

![화면 캡처 2021-09-01 174630](https://user-images.githubusercontent.com/68580600/131641305-79a66cbb-6217-4ee4-9305-de6af642362d.jpg)

name이 ellie가 아니므로 no 출력


10. switch operators

```
const browser = 'IE';
switch (browser) { // browse 값이
    case 'IE': // IE면
        console.log('go away!'); // 출력
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
    }
```

Chrome과 Firefox는 같은 메세지를 출력하므로 반복할 필요없이 

```
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
```

연달아서 작성 가능

![화면 캡처 2021-09-01 175110](https://user-images.githubusercontent.com/68580600/131641952-76ebd659-7613-4459-bd24-7656fb1f1040.jpg)

browser 값이 IE이므로 go away! 출력

10. while loop

```
let i = 3;
while (i > 0) { // statement가 false로 나오기 전까진 계속 반복해서 돔
    console.log(`while: ${i}`);
    i--;
}
```

![화면 캡처 2021-09-01 175520](https://user-images.githubusercontent.com/68580600/131642536-49cba136-25e4-4ef2-9bbc-8cbc90383200.jpg)

i를 점점 감소시켜 i가 0이 될 때까지 계속 반복하므로 3, 2, 1까지 반복문을 실행하고 출력함

11. do-while loop

```
let i = 3;
while (i > 0) { // statement가 false로 나오기 전까진 계속 반복해서 돔
    console.log(`while: ${i}`);
    i--;
} // while 문을 다 실행하면 i가 0이 됨
do { // 먼저 블럭을 실행한 뒤
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // 조건이 맞는지 검사
```

![화면 캡처 2021-09-01 180209](https://user-images.githubusercontent.com/68580600/131643563-36e43ce5-0dd7-407b-99ea-75244e11c9c0.jpg)

위 while 문을 실행하고 i가 0임에도 불구하고 do 블럭을 실행한 뒤 while (i > 0)으로 넘어가므로 do while: 0 이 출력됨

블럭을 먼저 실행하고 싶다면 do-while, 조건문이 맞을 때만 실행하고 싶다면 while문을 사용해야 함

12. for loop

```
let i = 3;
while (i > 0) { // statement가 false로 나오기 전까진 계속 반복해서 돔
    console.log(`while: ${i}`);
    i--;
} // while 문을 다 실행하면 i가 0이 됨
do { // 먼저 블럭을 실행한 뒤
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // 조건이 맞는지 검사

for (i = 3; i > 0; i--) { // for(begin; condition; step) begin을 처음에 한 번만 호출하고 블럭 실행 전 condition으로 맞는지 검사한 다음 블럭이 실행되면 step이 실행되게 됨
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { // for 안에서 지역변수를 선언할 수도 있음
    console.log(`inline variable for: ${i}`);
}
```

![화면 캡처 2021-09-01 180811](https://user-images.githubusercontent.com/68580600/131644505-e692c150-2a39-4b24-9f8a-f07167bd84d6.jpg)


13. nested loop

```
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) { // for 문 안에 for 문을 작성해 i가 0일 때 j를 0부터 9까지 반복문을 실행하게 한 다음 위 반복문을 다시 실행
        console.log(`i: ${i}, j:${j}`);
    }
}
```

![화면 캡처 2021-09-01 181138](https://user-images.githubusercontent.com/68580600/131645018-1e4f5313-7bbb-40d6-a571-3599e91f007b.jpg)

이 방법은 CPU에 좋지 않으므로 지양하는 게 좋음

14. break, continue

break : 루프를 완전히 끝내는 거 
continue : 지금 것만 스킵하고 다음 스텝으로 넘어가는 것

```
for (let i = 0; i < 11; i++) { // i를 0으로 할당시키고 하나씩 증가시키면서 11보다 작을 때까지 반복
    if (i % 2 !== 0) { // 만약 i가 2로 나눈 나머지가 0이 아니라면(홀수인 경우)
        continue; // 다음 스텝으로 넘어감 (console이 출력되지 않도록)
    }
    console.log(`q1. ${i}`); // 
}
```


