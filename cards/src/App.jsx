import Card from "./card"
import Button from "./Button/Button";
import Student from "./students/Student";

function App() {

  return (
    <>
        <Card/>
        <Button/>
        <Student name = "bob" age = {30}/>
        <Student name = "samin" age = {27}/>
        <Student name = "mike" age = {50}/>
        <Student />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </>

  );

}

export default App
