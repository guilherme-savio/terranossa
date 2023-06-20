export function StatsCard(props) {
    return (
        <div className="stat">
          <div className="stat-figure text-secondary">
            <img className="inline-block w-10 h-10 stroke-current fill-primary" src={props.img}></img>
          </div>
          <div className="stat-title">{props.title}</div>
          <div className="stat-value">{props.value}</div>
        </div>
    )
}