import SectionHeading from "../components/SectionHeading";

function Enviroment() {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.DEV);
  console.log(import.meta.env.PROD);
  console.log(import.meta.env.BASE_URL);
  
  const appName = import.meta.env.VITE_APP_NAME;



  return (<div className="text-center">
    <SectionHeading name="Environment" />
    <p>AppName: {appName}</p>

  </div>);
}

export default Enviroment;
