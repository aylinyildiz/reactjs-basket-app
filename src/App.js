import { useState } from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import Card from "./components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Bottle",
    src: "bottle",
    price: 150,
  },
  {
    name: "Camera",
    src: "camera",
    price: 200,
  },
  {
    name: "Flower",
    src: "flower",
    price: 250,
  },
  {
    name: "Headphone",
    src: "headphone",
    price: 250,
  },
  {
    name: "Glasses",
    src: "glasses",
    price: 250,
  },
  {
    name: "Watch",
    src: "watch",
    price: 250,
  },
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  return (
    <Container>

      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>
      <Input.Wrapper label="Search">
        <Input onChange={(e)=>setSearchValue(e.target.value)} />
      </Input.Wrapper>
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
        {filteredItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
