import { useState } from "react";

export function ItemList() {
  // useState의 기본값은 타입의 디폴드값이 좋다 0, false, "", [], {} 등등
  const [items, setItems] = useState([]);
  const [newInputItem, setNewInputItem] = useState("");
  function addItem() {
    // spread operator
    // [ 배열, ...값 ]
    // 배열 끼리 붙이고 싶을 때 [] 을 삭제하고 붙여준다
    // 혹은 배열뒤에 새로운 값을 추가하고 싶을때도 사용함
    const temp = [...items, newInputItem];
    setItems(temp);

    // onChange 이후에 다시 호출되는 특징을 이용하여
    // input을 받고 ""를 value={newInputItem}로 등록하여 초기화한다
    // placeholder 상태로 초기화됨
    setNewInputItem("");
  }

  return (
    <>
      {/* 리액트는 화면에 변경사항을 보여주려면 렌더링을 해야하므로
    바닐라 JS와 input 구조가 다르다.
    유저가 입력을 할시 매번 키보드 입력마다 입력된 결과를 보여줘야하므로
    매번 onChange가 실행된다. */}
      <input
        placeholder="물품 이름을 입력하세요"
        onChange={(e) => setNewInputItem(e.target.value)}
        value={newInputItem}
      />
      <button onClick={addItem}>물품추가</button>
      <h3>물품목록</h3>
      <ul>
        {/* items를 맵으로 반복
        맵은 태그와 {item}을 리턴한다 */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
          // key? 리액트가 리스트를 관리함에 있어서 key속성을 필요로 함
          // items가 DB의 table정보라면 해당 테이블의 id컬럼을 대신 입력하는 것이 좋음
          // 예) <li key={item.id}>{item}</li>
        ))}
      </ul>
    </>
  );
}
