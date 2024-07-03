import SideBar from "../adminComponents/SideBar";



const layout = ({ children }) => {
  return (
        <div>
          <SideBar />
          {children}
        </div>
  );
};

export default layout;
