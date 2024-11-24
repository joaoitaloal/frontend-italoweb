import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import style from "../styles/dropdownNav.module.scss";
import navbarStyle from "../styles/navbar.module.scss"
import { Link } from "react-router-dom";
import { NavLink } from "../lib/interfaces";

interface DropdownNavProps{
	itens: Array<NavLink>
}

function DropdownNav(props: DropdownNavProps){
	
	/*function TriggerDiv(){
		if(window.matchMedia("(max-width: 1365px)").matches){
			return(
				<div className={navbarStyle.navItem} aria-label="Outras páginas">
					Outros
				</div>
			)
		}
		return(
			<div className={navbarStyle.navItem} aria-label="Outras páginas">
				<DotsVerticalIcon className={navbarStyle.icon}/>Outros
			</div>
		)
	}*/

	return(
		<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild>
			<div className={navbarStyle.navItem} aria-label="Outras páginas">
				Outros
			</div>
		</DropdownMenu.Trigger>

		<DropdownMenu.Portal>
			<DropdownMenu.Content className={style.content} sideOffset={0}>
				{props.itens.map((item: NavLink) => {
					return(
						<span key={item.name}>
						<DropdownMenu.Item>
							<Link className={style.navItem} to={item.link}>{item.name}</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Separator className={style.separator}/>
						</span>
					)
				})}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
};

export default DropdownNav;