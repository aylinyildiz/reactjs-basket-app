import { useState } from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input, Drawer, Group, Button,Indicator } from "@mantine/core";
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
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  return (
    <Container>
      <Group align="end">
      <Input.Wrapper label="Search">
        <Input onChange={(e)=>setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <Button onClick={()=>setSearchValue("")}>Clean</Button>
      <Indicator color="red" label={basketItems.length} size={22}>
      <Button onClick={()=>setOpened(true)}>Basket</Button>

      </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, src }) => {
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

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="My Basket"
        padding="xl"
        size="xl"
      >
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
        {basketItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
      </Drawer>
     
     
    </Container>
  );
}

export default App;
