import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import style from "../styles/dropdownNav.module.scss";
import navbarStyle from "../styles/navbar.module.scss"
import { Link } from "react-router-dom";

function DropdownNav(){

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className={navbarStyle.navItem} aria-label="Outras páginas">
                    <DotsVerticalIcon className={navbarStyle.icon}/>Outros
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={style.content} sideOffset={0}>
					<DropdownMenu.Item>
                        <Link className={style.navItem} to='chat'>Blog</Link>
					</DropdownMenu.Item>
                    <DropdownMenu.Separator className={style.separator}/>
					<DropdownMenu.Item>
                        <Link className={style.navItem} to='test'>Teste</Link> 
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownNav;