import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import style from "../styles/dropdownNav.module.scss";
import navbarStyle from "../styles/navbar.module.scss"
import { Link } from "react-router-dom";

function DropdownNav(){
	if(!window.matchMedia("(max-width: 1365px)").matches){
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
							<Link className={style.navItem} to='about'>Sobre</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Separator className={style.separator}/>
						<DropdownMenu.Item>
							<a className={style.navItem} href="/blog">Blog</a>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		);
	}else{
		return(
			<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<div className={navbarStyle.navItem} aria-label="Outras páginas">
					Outros
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className={style.content} sideOffset={0}>
					<DropdownMenu.Item>
						<Link className={style.navItem} to='message'>Mensagem</Link>
					</DropdownMenu.Item>
					<DropdownMenu.Separator className={style.separator}/>
					<DropdownMenu.Item>
						<Link className={style.navItem} to='chat'>Chat</Link> 
					</DropdownMenu.Item>
					<DropdownMenu.Separator className={style.separator}/>
					<DropdownMenu.Item>
						<Link className={style.navItem} to='about'>Sobre</Link> 
					</DropdownMenu.Item>
					<DropdownMenu.Separator className={style.separator}/>
					<DropdownMenu.Item>
						<a className={style.navItem} href='/calculator'>Calculadora↗</a>
					</DropdownMenu.Item>
					<DropdownMenu.Separator className={style.separator}/>
					<DropdownMenu.Item>
							<a className={style.navItem} href="/blog">Blog</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
		)
	}
};

export default DropdownNav;