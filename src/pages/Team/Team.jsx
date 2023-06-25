import { TableRow } from "./TableRow/TableRow";
import { TableEditor } from "./TableEditor/TableEditor";
import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import TeamService from "../../services/TeamService";

export function Team() {
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setSave(false);
    TeamService.getTeam(team).then((team) => setTeam(team));
  }, [edit]);

  return (
    <div style={{ minHeight: "71vh" }}>
      <PageTitle
        subTitle="Trabalhe em equipe"
        title="Equipe"
        desc="Gerencie a equipe de pessoas que podem visualizar os status da horta."
        img="src\assets/img/team.png"
        color="text-primary"
      />
      <div className="overflow-x-auto w-full mb-60 mt-7">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Contato</th>
              <th>Permissão</th>
              <th className="text-right">
                {!edit && (
                  <button
                    onClick={() => setEdit(!edit)}
                    className="btn btn-ghost btn-xs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </button>
                )}
                {edit && (
                  <>
                    <button
                      onClick={() => {
                        TeamService.addPerson();
                        setSave(true);
                      }}
                      className="btn btn-ghost btn-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#323230"
                        viewBox="0 0 256 256"
                      >
                        <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => setSave(true)}
                      className="btn btn-ghost btn-xs fill-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => setEdit(false)}
                      className="btn btn-ghost btn-xs fill-warning"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 256 256"
                      >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                      </svg>
                    </button>
                  </>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {team.map((person) => {
              if (!edit) {
                return (
                  <tr key={person.id}>
                    <TableRow
                      name={person.name}
                      city={person.city}
                      number={person.number}
                      email={person.email}
                      permission={person.permission}
                    />
                    <th />
                  </tr>
                );
              } else {
                return (
                  <tr key={person.id}>
                    <TableEditor
                      setTeam={setTeam}
                      setSave={setSave}
                      setEdit={setEdit}
                      save={save}
                      id={person.id}
                      name={person.name}
                      city={person.city}
                      number={person.number}
                      email={person.email}
                      permission={person.permission}
                    />
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
