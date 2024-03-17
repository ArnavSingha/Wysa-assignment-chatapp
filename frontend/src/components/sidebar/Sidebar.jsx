import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { BiMessageDots } from "react-icons/bi";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />

			<div className="avatar">
				<div className="w-8 h-8 my-3 rounded-full">
					<a href="https://wysa-chatbot.netlify.app/">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEVHcExImqZRoaxDlaNPoKpfprBXprBRoqxNnqlImqdClaNClKJElqRXpa9AlKJaqLK909ft8PH29fXd5uitzNKawcfM2t1vqrX////7+/qCtL0tjZyKh4g1MTNwbG1RTk+inqD77Nf1zZDvqAbmpjDi6+7P3uPg6+3h6u3g6uzvJ7ECAAAAKnRSTlMAN1uIqAvV////5MP////9//n//v//////////////////////dkO81rJWZn4sAAABk0lEQVR4AW2TBYKDQBAEcWcVv7jn/x+8np0jAtfxVNHYrPcRPwgjJAx875/EQZJmSI4UZRAvOWMWkKr4bomjlMIG8byqws+SpCacMnYcKd/bJ7UTOM6giGjuiIjjleXMBVGBV8g8AJNKG2Obmv7O2s5a1YtKVD7xWNZ1bwcX07WtMgNlnIQQpSuQdarGYRWDOkEVCQTNwnfUj6vwpawnA0HpmdhN5yog4HoFUqYthG67m43Ndu8+BRJ40Z9w2O8t83GzYaGGEJJQfwvDYbtznzmEyEvQMBkzmN2Btj6O2PmB1Z9ZqFNjwAbkdD4OczoWIgiZMoRJuLyFScwC9qEN/4mqOUpQQjpN3IvmTb64CNyFgqG+DY3+SrgLFScQYLT6bYx8Wyu+WwELWTU1uM3a2q4FYy4CCDELKc0LxibLUE4hpYx5YFhIP4Y65wZ/HjkW2GBOEeH30DKvhAvxMv4ee6J5PzVKNW0PpVwsnCyVbfe6orYP48XSa+zXlbquFu/1PZijvsbeSvDi2/X+0PbxvN4+8C8KtzTpX/yrBQAAAABJRU5ErkJggg== " />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
