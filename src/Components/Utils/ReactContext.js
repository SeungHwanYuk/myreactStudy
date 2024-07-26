import { createContext, useContext, useState } from "react";

// 감싼 모든 자식을 useContext의 상태저장 영향권으로 할당함
const UserContext = createContext();

export function ReactContext() {
  const [user, setUser] = useState("Tom");
  return (
    <>
      {/* .Provider value양식으로 상태값 및 함수를 저장 */}
      <UserContext.Provider value={{ user, setUser }}>
        <Component1 />
      </UserContext.Provider>
    </>
  );
}

function Component1() {
  return (
    <>
      <h1>Component1</h1>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  // UserContext.Provider value에서 받아야하는 타입을 잘 명시해야함
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Component4</h1>
      <p>Hello {user}</p>
    </>
  );
}
