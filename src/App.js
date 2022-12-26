import{useState} from "react"
import { Container, SimpleGrid, List, ThemeIcon } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';
import Card from "./components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Ball",
    price: 150,
  },
  {
    name: "Chocolate",
    price: 200,
  },
  {
    name: "Shampoo",
    price: 250,
  },
];


function App() {
  let [basketItems, setBasketItems] = useState([]);
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {
          storeItems.map(({name})=>{
            return <Card key={name} name={name} onAdd={()=> setBasketItems([...basketItems,{name}])}/>
          })
        }
      </SimpleGrid>
      <List
      className="list"
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {basketItems.map(({name}, index)=>(
        <List.Item key={index}>{name}</List.Item>
      ))}
      
     
    </List>
    </Container>
  );
}

export default App;
