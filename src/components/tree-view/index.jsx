import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return(
  <div   style={{
        width: "100vw",
        height: "100vh",
      }}>
  <div className="tree-view-container">

{

    <MenuList list={menus}/>
}

  </div>
  </div>
  )

}
