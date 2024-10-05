import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        className="rounded-circle shadow-4"
        style={{ width: "150px" }}
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default App;