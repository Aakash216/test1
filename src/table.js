import React from "react";

const table = (state) => {
  return (
    <>
      {console.log(state.state)}
      <table className="table" style={{border:"1px solid black", marginTop:"10px"}}>
        <thead className="thead-dark">
          <tr style={{ fontSize: "14px" }}>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">sex</th>
            <th scope="col">Mobile</th>
            <th scope="col">GovtId</th>
            <th scope="col">GDetails</th>
            <th scope="col">Email</th>
            <th scope="col">Emergency CNo.</th>
            <th scope="col">address</th>
            <th scope="col">state</th>
            <th scope="col">city</th>
            <th scope="col">Country</th>
            <th scope="col">Pincode</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        {state.state &&
          state.state.length > 0 &&
          state.state.map((user) => (
            <tbody>
              {console.log(user)}
              <tr style={{ fontSize: "13px" }}>
                <th scope="row">{user.name}</th>
                <th scope="row">{user.age}</th>
                <th scope="row">{user.gender}</th>
                <th scope="row">{user.mobile}</th>
                <th scope="row">{user.govtId}</th>
                <th scope="row">{user.guardian}</th>
                <th scope="row">{user.email}</th>
                <th scope="row">{user.emergencyNumber}</th>
                <th scope="row">{user.address}</th>
                <th scope="row">{user.state}</th>
                <th scope="row">{user.city}</th>
                <th scope="row">{user.country}</th>
                <th scope="row">{user.country}</th>
                <th scope="row">{user.pincode}</th>
                <td></td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};
export default table;
