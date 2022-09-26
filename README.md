# 🎉 원티드 프리온보딩 프론트엔드 코스 5차 과제

## 과제 소개
- 목표 : API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
- 작업기간 : 2022.09.16 ~ 2022.09.19

<br/>

## 구현 영상
https://user-images.githubusercontent.com/103626175/190916370-117346ec-f236-4bf7-915c-06d6e7347b95.mp4

<br/>

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-3-2-team-6
```
dependencies를 설치합니다
```markdown
$ npm install
```
env를 설정합니다
```markdown
$ 내려받은 프로젝트의 최상위 폴더 안에 .env 파일을 생성합니다.
REACT_APP_API_URL=http://localhost:4000/comments
```
api 서버를 실행합니다
```markdown
$ npm run api
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

## 폴더 구조

```
root
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── containers
    ├── components
    ├── pages
    ├── routes
    ├── redux
    ├── styles
    ├── App.jsx
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|containers|컴포넌트들에 대한 부모 Container모음|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|redux|redux를 활용한 폴더|
|styles|전역으로 사용하는 style 관리 폴더|

<br/>

## 과제범위

1. 예시 이미지와 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
    - 예시
        
        ![https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif](https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif)
        
2. 페이지네이션
3. 댓글 작성, 수정, 삭제 후 동작
    - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
    - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
    - 삭제하고 난 뒤: 1페이지로 이동

## 요구사항

- Redux 환경설정은 자유롭게 진행
    - Redux-saga or Redux-thunk 자유롭게 선택 가능
    - 미들웨어 사용안하는 것도 가능
- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수
    
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) 


<br />


