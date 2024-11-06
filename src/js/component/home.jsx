import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [color, setColor] = userState(null);

	return (
		<div className="traffic-signal"> 
		<div className={`light red ${color == "0" ? "glow":""}`} onClick={()=>setColor(0)}>

			</div>	
		<div className={`light yellow ${color == "1" ? "glow":""}`} onClick={()=>setColor(1)}>
			</div>	
		<div className={`light green ${color == "2" ? "glow":""}`} onClick={()=>setColor(2)}>
			</div> 
	</div>
	);
};

export default Home;
