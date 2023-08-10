# props Drilling

- react는 컴포넌트 간에 state를 서로 공유할수 없다
- react는 부모 컴포넌트에서 state를 만들고 자손 컴포넌트에게 전달하는데 자손 컴포넌트는 이를 props를 통하여 전달받는다
- state 생성(useState)한 컴포넌트에서는 setState()함수를 통하여 state를 변경할수 있다
- state를 props로 전달받은 자손 컴포넌트에서는 값을 변경할수 없다
- state를 props로 전달받은 자손 컴포넌트에서 값을 변경하고자 하면, 부모 컴포넌트가 state를 변경할 수 있도록 함수를 전달해 주어야 한다
- 자손은 전달받은 함수를 통하여 부모 컴포넌트에게 state를 변경해달라고 요청한다
- 만약 부모가 자손의 자손 컴포넌트에게 state를 전달한다면 자손 컴포넌트에게 먼저 전달하고, 자손이 그 자손에게 또다시 전달하는 체인이 만들어져야한다
- 이러한 연속적인 state -> props 전달 체인을 props Drilling이라고 한다
- 초기 react에서는 이러한구조가 프로젝트를 매우 어려운모양으로 만드는 원인이되었다
- 중간에 이러한 Drilling을 해결하기 위하여 `redux`,`reducer`와 같은 3rd party LIB를 사용하여 해결해 왔다.
- `redux`는 이러한 문제를 대부분 해결해 주었지만, 중소규모 프로젝트에서는 너무 큰 규모의 LIB였다. 또한 어렵다...
- 최근버전에 react에서는 `ContextProvder` 를 도입하고, 중소규모 프로젝트에서 state를 효율적으로 관리 할수 있도록 하였다.

## Contextprovder, state Store

- state의 Drilling 현상은 각 컴포넌트간에 state를 공유할수 없는 문제 때문에 발생
- react에서는 Store라는 개념을 도입하여 state와 setState()를 컴포넌트를 감싸는(Bound)는 Store를 하나 만들고 그곳에 보관한다
- 부모,자손,또는 그 자손 중에서 State가 필요하면 Store로 부터 State를 전달받아 사용한다.
