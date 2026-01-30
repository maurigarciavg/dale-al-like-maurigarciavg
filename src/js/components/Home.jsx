import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [likes, setLikes] = useState(0);
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<h1>Dale al like</h1>
				<p>{likes}</p>
				<button className="btn btn-success" onClick ={
					() => {
						setLikes(likes + 1)
					}
				}>👍</button>
				
				<button className="btn btn-success" onClick={
					() => {
						setLikes(likes - 1)
					}
				}>👎</button>
				<button className="btn btn-success" onClick={
					() => {
						setLikes(0)
					}
				}>Reiniciar</button>

			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;