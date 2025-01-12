# 나만의 유튜브 사이트 만들기

React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트 React의 기본 개념, 컴포넌트를 구조화, 상태 관리와
YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 배운 프로젝트

## 완성작 보기
미리보기 : 

## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 타이틀`
- react-router-dom을 설치합니다.( 라우팅 및 페이지 네비게이션을 처리하기 위한 라이브러리) `npm install react-router-dom`
- axios를 설치합니다.(웹 API와의 통신, 서버로 데이터 요청, RESTful API 호출 등에 사용) `npm install axios`
- react-icons을 설치합니다.( FontAwesome, Material Icons, Ionicons 등과 같은 아이콘 라이브러리) `npm install react-icons`
- react-player를 설치합니다.(React 애플리케이션에서 다양한 비디오 및 오디오 소스를 재생하기 위한 라이브러리) `npm install react-player`
- sass를 설치합니다. `npm install sass`
- react-helmet-async를 설치합니다.(서버 사이드 렌더링(SSR) 및 클라이언트 측 렌더링을 지원하여 웹 페이지의 제목, 메타 태그, 스타일, 스크립트 등을 동적으로 설정하고 업데이트) `npm install react-helmet-async`
- swiper를 설치합니다. `npm install swiper`



# for문

- `{
    const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    // 100 200 300 400 500 600 700 800 900
}`

# map() 메서드

- `{
    const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    arr.map((element) => {
        console.log(element);
    });

    // [100, 200, 300, 400, 500, 600, 700, 800, 900];
}`

for문과 map() 메서드는 데이터 값을 출력하지만 map() 메서드는 출력한 값을 배열로 반환해주는 것에 차이점이 있습니다.
리액트에서 map() 메서드를 사용하는 이유는 출력한 데이터를 다시 배열 형태로 반환 받아서 화면에 편하게 출력하기 위함입니다. 
map() 메서는 인자 값으로 3가지 값을 출력할 수 있습니다.

# props
React에서 "props"는 "properties"의 줄임말로, 컴포넌트 간에 데이터를 전달하고 컴포넌트를 구성하는 데 사용되는 매개변수와 같은 역할을 합니다. 
Props는 React 컴포넌트 간에 데이터를 전달하거나 컴포넌트의 동작을 제어하기 위해 사용됩니다.
props.children을 사용하면 부모 컴포넌트가 자식 요소를 포함한 컴포넌트를 작성할 때 렌더링 구조를 더 유연하게 만들 수 있습니다. 이를 통해 동적으로 자식 요소를 추가하거나 조작할 수 있으며, 컴포넌트 간에 재사용 가능한 레이아웃 및 컨테이너 컴포넌트를 작성할 때 유용합니다.

# Suspense
React.Suspense는 React에서 비동기적으로 데이터나 컴포넌트를 불러오는 과정에서 대기 상태를 처리하기 위한 컴포넌트입니다. 이 컴포넌트를 사용하면 데이터나 컴포넌트가 로딩되기를 기다릴 수 있으며, 로딩 중에는 대체 컨텐츠(로딩 스피너 또는 로딩 메시지)를 표시할 수 있습니다. React.Suspense를 사용하면 코드 스플리팅, 데이터 로딩, 서버 사이드 렌더링과 같은 시나리오에서 사용자 경험을 향상시키는 데 도움이 됩니다.


- BrowserRouter : React Router에서 사용되는 브라우저 라우터 컴포넌트입니다. 브라우저 히스토리 API를 사용하여 라우팅을 처리합니다.
- Suspense : Suspense 컴포넌트는 비동기적으로 로드되는 컴포넌트의 로딩 상태를 관리하는 데 사용됩니다. 여기서는 fallback 속성을 사용하여 로딩 중에 <Main /> 컴포넌트를 표시합니다.
- Routes : Routes 컴포넌트는 각 경로에 대한 라우트를 정의하고, 해당 경로에 접근할 때 렌더링될 컴포넌트를 결정합니다.
- Route : Route 컴포넌트는 특정 경로에 대한 라우팅 규칙을 설정하며, element 속성을 통해 해당 경로에 접근할 때 렌더링될 컴포넌트를 지정합니다.
- lazy() : lazy() 함수는 코드 스플리팅을 위해 사용되며, 비동기적으로 컴포넌트를 로드합니다. 컴포넌트가 필요할 때 비동기적으로 불러와서 번들 크기를 줄일 수 있습니다.
- fallback : fallback 속성은 Suspense 컴포넌트에서 로딩 중에 표시할 컴포넌트를 지정합니다. 여기서는 <Main /> 컴포넌트가 로딩 중에 보여집니다.








- node_modules : 이 폴더는 프로젝트에서 사용하는 외부 라이브러리와 패키지들이 저장되는 곳입니다. 개발에 필요한 도구와 코드를 더 쉽게 관리할 수 있게 도와줍니다.
- public : 이 폴더는 프로젝트의 공용 파일들이 저장되는 곳입니다. 주로 HTML 파일과 이미지 같은 정적인 파일들이 이곳에 위치하며, 이 파일들은 웹 브라우저에서 직접 접근할 수 있습니다.
- favicon.svg : 웹 사이트의 아이콘을 나타내는 이미지 파일입니다. 웹 브라우저 탭에 표시되는 작은 아이콘을 설정할 수 있습니다.
- index.html : React 애플리케이션의 진입점인 HTML 파일입니다. 브라우저에서 앱을 로드할 때 사용됩니다.
robots.txt : 이 파일은 웹 사이트의 검색 엔진 크롤러에게 어떤 페이지를 검색할 수 있고 어떤 페이지를 검색하지 말아야 하는지에 대한 지침을 제공하는 텍스트 파일입니다
src : 이 폴더는 실제로 프로젝트의 소스 코드가 저장되는 곳입니다. 여기서 작성한 코드가 애플리케이션의 동작을 정의합니다.
assets : 이미지나 폰트 등의 정적인 자원 파일들을 저장하는 폴더입니다.
App.js : React 애플리케이션의 주요 컴포넌트인 App 컴포넌트의 코드가 들어있는 파일입니다. 이 파일에서 애플리케이션의 구조와 기능을 정의할 수 있습니다.
index.js : React 애플리케이션의 진입점인 JavaScript 파일입니다. 이 파일에서 React 앱을 DOM에 렌더링하는 역할을 합니다.
.gitignore : Git 버전 관리에서 제외할 파일이나 폴더를 설정하는 파일입니다. node_modules와 같이 불필요한 파일들을 Git에 올리지 않도록 할 때 유용합니다.
package-lock.json : 패키지 의존성을 관리하기 위한 자동 생성된 파일입니다. 이 파일은 패키지들의 버전 및 의존 관계를 정확하게 유지하기 위해 사용됩니다.
package.json : 프로젝트 설정과 의존성 정보를 담고 있는 파일입니다. 프로젝트의 이름, 버전, 필요한 라이브러리 등을 정의할 수 있습니다.
README.md : 프로젝트에 대한 설명과 사용 방법을 기술하는 마크다운 파일입니다. 다른 개발자들이 프로젝트를 이해하고 사용하는데 도움이 되는 정보를 작성할 수 있습니다.





















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
