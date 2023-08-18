# React와 react-router-dom-6

- react는 기본적으로 SPA(single Page Application)을 추구하는 도구이다
- 하지만 실제 Project에서 모든 것을 Single Page로 구현하는 것은 매우 어려운 상황이다
- 현재 React에서 Multipage를 구현하기 위하여 'NextJS' ,'RemixJS'와 같은 별도의
  Framework를 사용하는 프로젝트들이 많이 만들어지고 있다. 하지만
  이러한 Framework는 기존의 'create-react-app' 으로 만든 프로젝트 구조와는 많이 다른 모습이어서
  새로운 학습요건이 발생한다
- 그에 반해 'react-router-dom'은'create-react-app'으로 만든 프로젝트를 트게 벗어나지 않으면서  
  Mutipage Application을 구현할수 있도록만든 3rd party lib 개념이다'
- react가 시작할 무렵부터 가장 많이 사용하는 Navigation을 구현하는 도구이다
- react-router-dom 은 5.x버전과 6.x버전의 사용법이 거의 다른 LIB처럼 구조가 다른다
- 6.x 환경에서 일부러 5.x버전의 프로젝트를 구현할수 있지만, 6.x 버전에서는 LIB구조가 단순해지고,
  5.x에서 발생한 여러문제를 해결한 상황이다
- 완전 5.x에서 만들어진 프로젝트는 약 절반덩도의 기능이 무력화 되어 6.x에서 원활하게 작동되지 않는다
- react, react-router-dom에서는 6.x 사용할 것을 적극 권장한다

# react-router-dom 설치방법

- 새로운 프로젝트에서 : `npm install react-router-dom`으로 설치하고
- 기존 프로젝트에서 Migration : `npm install react-router-dom@letest`로 업그레드 가능하다
- 단 기존 프로젝트를 6.x로 업그레이드하면, 프로젝트의 상당부분을 변경해야 한다
- 그럼에도 불구하고 6.x로 업그레이드 하는 것은 매우 생산적이다

# styled-components 적용

- react 는 여러 css를 적용하여 프로젝트를 구현할수 있다.`*.module.css`를 사용하면
  private css를 구현하여 다른 css 와 충돌없는 캡슐화된 Componet를 구현할 수 있다.
- react에서 `*.module.css`와 더불어 많이 사용하는 또 다른 style 지정하기 도구
- 설치 : `npm install styled-components`
