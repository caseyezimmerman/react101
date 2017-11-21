// LETS BREAK IT UP INTO PIECES. I.E COMPONENTS
// Application
// --header
// --team
// 	--counter
// --team
// 	--counter

function Header(props){
	return(
		<div className ="header">
			<h1>{props.title}</h1>
		</div>	
	)
}

function Team(props){
	return(
		<div className = "team">
			<div className="team-name">Columbus</div>				
			<div className="counter">
				<button className="minus">-</button>
				<div className="team-score">0</div>
				<button className="plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title}/>	
			<div className = "teams">
				<Team />				
				<div className = "team">
					<div className="team-name">Toronto</div>				
					<div className="counter">
						<button className="minus">-</button>
						<div className="team-score">0</div>
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