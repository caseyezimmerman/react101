function Application(props){
	return(
		<div className="scoreboard">
			<div className ="header">
				<h1>{props.title}</h1>
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
	//pass our title as an attribute. it will come throuhg to the component. as props
	<Application title="MLS Semi-Final Scoreboard"/>,
	document.getElementById('root')
);


// YOU MUST USER CLASSNAME INSTEAD OF CLASS IN JSX OR ELSE IT WON'T WORK 