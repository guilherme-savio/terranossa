import TeamService from "../../../services/TeamService";
import { useState, useEffect } from "react";

function useForm(props) {
  const [values, setValues] = useState(props.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const permissionEnum = {
  1: "Edição",
  2: "Visualização",
};

export function TableEditor(props) {
  useEffect(() => {
    props.save && saveForm()
    props.setSave(false)
  }, [props.save]);

  const initialValues = {
    id: props.id,
    name: props.name,
    email: props.email,
    number: props.number,
    city: props.city,
    permission: props.permission,
  }

  const personForm = useForm({initialValues});

  async function deletePerson(id) {
    const team = await TeamService.deletePerson(id);
    props.setTeam(team);
  }

  async function saveForm() {
    if(JSON.stringify(personForm.values) !== JSON.stringify(initialValues)) {
      TeamService.updateForm(personForm.values)
    }
  }

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
            <div className="border-b">
              <input
                className="input input-sm font-bold pl-0"
                type="text"
                name="name"
                value={personForm.values.name}
                onChange={personForm.handleChange}
              ></input>
            </div>
            <div className="opacity-50 border-b">
              <input
                className="input input-sm pl-0"
                type="text"
                name="city"
                value={personForm.values.city}
                onChange={personForm.handleChange}
              ></input>
            </div>
          </div>
        </div>
      </td>
      <td>
        <input
          className="input input-sm pl-0"
          type="text"
          name="number"
          value={personForm.values.number}
          onChange={personForm.handleChange}
        ></input>
        <br />
        <input
          className="input input-xs pl-2 badge badge-ghost badge-sm"
          type="text"
          name="email"
          value={personForm.values.email}
          onChange={personForm.handleChange}
        ></input>
      </td>
      <td>
        <select
          className="select select-sm font-normal"
          name="permission"
          value={personForm.values.permission}
          onChange={personForm.handleChange}
        >
          {Object.keys(permissionEnum).map((key) => {
            return (
              <option value={key} key={key}>
                {permissionEnum[key]}
              </option>
            );
          })}
        </select>
      </td>
      <td className="text-right">
        <button
          onClick={() => deletePerson(props.id)}
          className="btn btn-ghost btn-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </td>
    </>
  );
}
