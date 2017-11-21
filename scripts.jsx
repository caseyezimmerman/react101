//My first react component
//a componnet in react should be upper case
function Application(){
	// here we can write js
	console.log("blah blah blah")
	// A REACT COMPONENT MUST RETURN ONE AND ONLY ONE DOM ELEMENT
	var JamiesSeat = 5
	// A COMPONENT CAN PASS PROPS TO ANOHER COMPONENT INSIDE OF IT
	// PROPS ARE PASSED AS HTML ATTRIBUTES AND WILL BE AVAILABLE IN THE CHILD COMPONENT
	return(
		//<h1>Hello, World</h1>
		<div id="parent">
			<div class="sibling">
				<Student name ="Jennifer" seat="3"/>
				<Student name="Casey" seat={2}/>
				<Student name="Jamie" seat={5-2}/>
			</div>
		</div>
	)
};

function Student(props){
	// this is a component, which returns a single DOM element
	return (
		<li>{props.name} is in seat {props.seat}</li>
	)
}







ReactDOM.render(
	<Application />,
	document.getElementById('container')
);