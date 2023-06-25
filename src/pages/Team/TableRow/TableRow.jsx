export function TableRow(props) {
  const permissionEnum = {
    1: "Edição",
    2: "Visualização",
  };

  return (
    <>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="src/assets/img/avatar.jpg" />
            </div>
          </div>
          <div>
            <div className="font-bold">{props.name}</div>
            <div className="text-sm opacity-50">{props.city}</div>
          </div>
        </div>
      </td>
      <td>
        {props.number}
        <br />
        <span className="badge badge-ghost badge-sm">{props.email}</span>
      </td>
      <td>{permissionEnum[props.permission]}</td>
    </>
  );
}
