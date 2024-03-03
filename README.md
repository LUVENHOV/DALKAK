# 🍹홈텐딩🍹

> **홈텐딩(홈 + 바텐딩)**
> 집에서 직접 바텐딩을 하는 사람들을 위한 칵테일 추천 서비스

# 기능
![Alt text](image.png)
[Notion Link](https://maroon-swim-d29.notion.site/0179f45e9a844854b9fa20da241dc366?pvs=4)

# 페르소나
[User Persona Notion Link](https://maroon-swim-d29.notion.site/ba1aeba26ef54638953975d86ba435b4?pvs=4)

# 코드 컨벤션

### BE

- [Google Style Guide](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)

### FE

- [Airbnb Eslint](https://www.npmjs.com/package/eslint-config-airbnb)

# _Branch_

**_main_**

- 제출, 배포

  **_develop_**

- 기능 통합

  - devBE
  - devFE

  **_feature_**

- 기능 개발

# Feature 브랜치 네이밍 컨벤션

약어는 대문자, 이외에는 `kebab-case`로 작성

<aside>
📌 `FE | BE`/`기능`/`Jira 티켓 넘버`

</aside>

ex) BE/custom-cocktail/S10P21A407-5

# Commit 컨벤션

<aside>
📌 `커밋 유형`: `커밋 내용`

</aside>

ex) `feat: Add 기능 for 대상`

- `:`뒤에 공백 한칸 띄우기
- 커밋 유형 첫 단어: 소문자 시작
- 커밋 내용 첫 단어: 대문자 시작

| 커밋 유형 | 의미                                                         |
| --------- | ------------------------------------------------------------ |
| feat      | 새로운 기능 추가                                             |
| fix       | 버그 수정                                                    |
| docs      | 문서 수정                                                    |
| style     | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| design    | CSS 등 사용자 UI 디자인 변경                                 |
| ref       | 코드 리팩토링                                                |
| chore     | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| comment   | 필요한 주석 추가 및 변경                                     |
| rename    | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| remove    | 파일을 삭제하는 작업만 수행한 경우                           |
| test      | 테스트 코드, 리팩토링 테스트 코드 추가                       |

| 커밋 내용 | 의미      |
| --------- | --------- |
| Add       | 추가      |
| Modify    | 수정      |
| Delete    | 삭제      |
| Fix       | 에러 수정 |
