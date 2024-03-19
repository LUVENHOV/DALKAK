'use client';

export default function CustomCocktailDeleteButton() {
  const DeleteClick = () => {
    alert('삭제 버튼을 눌렀습니다.');
  };

  return (
    <div>
      <button onClick={DeleteClick}>🖍&nbsp;삭제</button>
    </div>
  );
}
