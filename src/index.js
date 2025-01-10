import React from "react"; //React 라이브러리에서 React 객체를 가져옵니다. React는 UI를 만들고 관리하는 JavaScript 라이브러리
import ReactDOM from "react-dom/client"; //React의 DOM 조작 메서드를 가져오기 위해 react-dom 라이브러리에서 ReactDOM을 가져옵니다. 특히, "react-dom/client"로부터 가져오는 것은 React 18 이상의 Concurrent Mode와 같이 사용되는 새로운 렌더링 API 
import App from "./App"; //현재 디렉토리에서 "App"이라는 컴포넌트(또는 모듈)를 가져옵니다. 이것은 원하는 웹 애플리케이션의 주요 컴포넌트

import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// createRoot 메서드를 사용하여 root 변수를 생성합니다. 이것은 React Concurrent Mode에서 사용되는 루트 레벨 리액트 루트입니다. 
// document.getElementById("root")는 HTML에서 id가 "root"인 엘리먼트를 찾아서 이 루트를 생성하는데 사용
// React.StrictMode는 앱 내의 컴포넌트들을 엄격한 모드로 실행하도록 돕는 React 구성 요소입니다. 이는 앱을 개발할 때 경고 및 잠재적인 문제를 식별하기 위한 도구로 사용