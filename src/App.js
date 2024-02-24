
function App() {

  const name = "mazhar";

  const dob = "17/03/2004";


  const myfriend = ["arfat","sadik","sohaib"];










  return (
    <div >
      <h1 style={{margin: 10}}>Resume</h1>

      <h3>My Name : {name}</h3>

      <p>My dob : {dob}</p>

      {
          myfriend.map((ele)=>{
            return <p>My friends are : {ele}</p>

          })

      }


    </div>
  );
}

export default App;
