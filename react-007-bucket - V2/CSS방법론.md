# CSS 방법론(CSS 도구를 사용한 최적화, 개발 방법론)

- 전통적인 HTML 에서는 **stylesheet** 라고 하는 \*.css 파일에 style 설정을 저장하고,
  HTML 에서 Link를 사용하여 연결하는 구조로 화면 디자인을 구현한다

- 전통적인 css 에서 부족한 부분을 보완하기 위하여 여러가지 도구와 방법론 들이 탄생을 한다.
  단 표준 HTML 에서는 적용하기가 다소 어려움이 있지만,
  `nodejs`기반의 `front-end`개발 도구 환경(React,Angula,Vue,Svelt)에서
  다양한 방법과 도구를 활용하여 전통적인 css 를 확장하고 있다

## React에서 사용하는 css 방법론

- 표준 css를 사용하는 전통적인 방법: `import `
- `css module`를 사용하는 방법 : `import css from `
  이 방법은 private 방식으로 css의 class를 생성하는 방법, `className={css.main}`과 같은 방식으로
  지정하고 컴파일 과정에 클래스 이름을 hash(알아보기 어려운 이름)처리하여 css class와 이름이 충돌하는 발생을 방지
- `styled-componets`를 사용하는 방법 : `npm install styled-componets`를 설치하고,
  js(jsx)파일에서 직접 JS 코드로 html tag와 합성한 새로운 Component를 만들어 적용하는 방법
  이 방법은 js(jsx)파일에 css 코드가 포함되어 있기 때문에 컴포넌트를 재사용하고, 한개의 파일만 관리하면 된다
  하지만, 단점이 있는데 아직까지 editor(또는 IDE)에서 완전한 자동완성을 지원하지 않아 다소 불편하다
- `scss, sass`를 사용하는 방법 : 전통적 css 에서 지원하지 않는 계층구조를 지원하고, 확장된 여러가지 문법을 지원하여
  css 를 쉽게 재 활용할수 있도록 하는 도구

### `scss,sass`를 사용하는 css 확장 방법론

- 설치 : `npm install sass`
- css 파일을 만들때 확장자를 `*.scss` 로 작성을 하면 nodeJS Front-end 컴파일러가 자동으로 build, 실행단계애서 css 파일로 변환(transfiler) 한다
- `sass`와 `scss`중에서 `scss`가 `styled-component`와 문법 체계가 매우 유사하여 많이 사용한다.
