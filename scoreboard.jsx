function Application(){
	return(
		<div className="scoreboard">
			<div className ="header">
				<h1>MLS Semi-Final Scoreboard</h1>
			</div>		
			<div className = "teams">
				<div className = "team">
					<div className="team-name">Columbus</div>				
					<div className="counter">
						<button className="minus">-</button>
						<button className="team-score">0</button>
						<button className="plus">+</button>
					</div>
				</div>
				<div className = "team">
					<div className="team-name">Toronto</div>				
					<div className="counter">
						<button className="minus">-</button>
						<button className="team-score">0</button>
						<button className="plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}


// ReactDOM.render puts a component into the ReactDOMtakes 2 args
// 	1.what
// 	2.where

ReactDOM.render(
	<Application />,
	document.getElementById('root')
);


// YOU MUST USER CLASSNAME INSTEAD OF CLASS IN JSX OR ELSE IT WON'T WORK 